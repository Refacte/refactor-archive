(() => {
    const root = document.getElementById("refactor-signed-splicing");
    const vertices = [1, 2, 3, 4, 5, 6, 7];
    const x = [0, 2, 1, 5, -4, 3, 6, 7];
    const z = [0, -1, 2, 4, 3, 6, 5, 7];
    const initialY = [0, 4, 3, 5, 1, 6, 2, 7];
    const pairs = {"12": [1, 2], "67": [6, 7]};
    const spliceButtons = Array.from(root.querySelectorAll("[data-splice]"));
    const undoButton = root.querySelector("[data-undo]");
    const flipButton = root.querySelector("[data-flip-sign]");
    const cyclesOutput = root.querySelector("[data-cycles]");
    const typeOutput = root.querySelector("[data-type]");
    const windowOutput = root.querySelector("[data-window]");
    const conjugacy = root.querySelector("[data-conjugacy]");
    const conjugateOutput = root.querySelector("[data-conjugate]");
    const commutatorOutput = root.querySelector("[data-commutator]");
    let y = [...initialY];
    let splices = [];

    function apply(permutation, point) {
      return Math.sign(point) * permutation[Math.abs(point)];
    }

    function compose(left, right) {
      return [0, ...vertices.map((vertex) => apply(left, right[vertex]))];
    }

    function inverse(permutation) {
      const result = [0];
      for (const vertex of vertices) {
        const image = permutation[vertex];
        result[Math.abs(image)] = Math.sign(image) * vertex;
      }
      return result;
    }

    function equal(left, right) {
      return vertices.every((vertex) => left[vertex] === right[vertex]);
    }

    function windowText(permutation) {
      return "[" + vertices.map((vertex) => String(permutation[vertex]).replace("-", "−")).join(", ") + "]";
    }

    function underlyingCycles(permutation) {
      const seen = new Set();
      const result = [];
      for (const vertex of vertices) {
        if (seen.has(vertex)) {
          continue;
        }
        const cycle = [];
        let next = vertex;
        while (!seen.has(next)) {
          cycle.push(next);
          seen.add(next);
          next = Math.abs(permutation[next]);
        }
        result.push(cycle);
      }
      return result;
    }

    function cycleSign(cycle) {
      return cycle.reduce((sign, vertex) => sign * Math.sign(y[vertex]), 1);
    }

    function cycleMark(cycle) {
      const group = document.createElement("span");
      group.className = "signed-splicing-cycle";
      group.dataset.cycle = cycle.join(" ");
      group.dataset.sign = cycleSign(cycle) > 0 ? "positive" : "negative";
      group.setAttribute("aria-hidden", "true");
      const sign = document.createElement("span");
      sign.className = "signed-splicing-cycle-sign";
      sign.textContent = group.dataset.sign === "positive" ? "+" : "−";
      group.append(sign);
      cycle.forEach((vertex, index) => {
        const step = document.createElement("span");
        const chip = document.createElement("span");
        const arrow = document.createElement("span");
        step.className = "signed-splicing-step";
        chip.dataset.vertex = String(vertex);
        chip.textContent = vertex;
        if (pairs["12"].includes(vertex)) {
          chip.dataset.pairMark = "red";
        } else if (pairs["67"].includes(vertex)) {
          chip.dataset.pairMark = "fixed";
        }
        arrow.className = "signed-splicing-arrow";
        const negative = y[vertex] < 0;
        if (negative) {
          arrow.setAttribute("data-negative-edge", "");
        }
        arrow.textContent = (negative ? "−" : "") + (index === cycle.length - 1 ? "↻" : "→");
        step.append(chip, arrow);
        group.append(step);
      });
      return group;
    }

    function canSplice(cycles, [first, second]) {
      const firstCycle = cycles.find((cycle) => cycle.includes(first));
      return !firstCycle.includes(second);
    }

    function swapImages(permutation, [first, second]) {
      const image = permutation[first];
      permutation[first] = permutation[second];
      permutation[second] = image;
    }

    function render() {
      const cycles = underlyingCycles(y);
      const notation = cycles.map((cycle) => "(" + cycle.join(" ") + ")").join("");
      cyclesOutput.dataset.notation = notation;
      const descriptions = cycles.map((cycle) => (cycleSign(cycle) > 0 ? "positive" : "negative") + " (" + cycle.join(" ") + ")");
      const signLocations = vertices.filter((vertex) => y[vertex] < 0);
      const signedArrows = signLocations.length ? ". Negative images at inputs " + signLocations.join(", ") : "";
      cyclesOutput.setAttribute("aria-label", "Cycles " + descriptions.join(", ") + signedArrows + ".");
      cyclesOutput.replaceChildren(...cycles.map(cycleMark));

      if (cycles.length === 1) {
        typeOutput.textContent = cycleSign(cycles[0]) > 0 ? "Positive 7-cycle · order 7" : "Negative 7-cycle · order 14";
      } else {
        typeOutput.textContent = cycles.length + " underlying cycles";
      }
      for (const button of spliceButtons) {
        button.disabled = !canSplice(cycles, pairs[button.dataset.splice]);
      }
      undoButton.disabled = splices.length === 0;

      const yInverse = inverse(y);
      const blue = compose(y, compose(x, yInverse));
      const commutator = compose(x, compose(y, compose(inverse(x), yInverse)));
      windowOutput.textContent = windowText(y);
      conjugacy.textContent = equal(blue, z) ? "Y X Y⁻¹ = Z" : "Y X Y⁻¹";
      conjugateOutput.textContent = windowText(blue);
      commutatorOutput.textContent = windowText(commutator);
    }

    function commitChange(button) {
      const wasFocused = document.activeElement === button;
      render();
      if (wasFocused && button.disabled) {
        const next = spliceButtons.find((item) => !item.disabled) || flipButton;
        next.focus();
      }
    }

    for (const button of spliceButtons) {
      button.addEventListener("click", () => {
        if (!button.disabled) {
          swapImages(y, pairs[button.dataset.splice]);
          splices.push(button.dataset.splice);
          commitChange(button);
        }
      });
    }
    undoButton.addEventListener("click", () => {
      if (splices.length > 0) {
        swapImages(y, pairs[splices.pop()]);
        commitChange(undoButton);
      }
    });
    flipButton.addEventListener("click", () => {
      y[7] *= -1;
      commitChange(flipButton);
    });
    render();
  })();
