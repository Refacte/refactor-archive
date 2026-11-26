(() => {
    const root = document.getElementById("refactor-s6-matching");
    const cycleLabels = [[1, 2], [3, 4, 5, 6]];
    const vertices = cycleLabels.flat();
    const surplusInputs = Array.from(root.querySelectorAll("[data-surplus]"));
    const paths = Array.from(root.querySelectorAll("[data-path]"));
    const startInput = root.querySelector("[data-start]");
    const redTotal = root.querySelector('[data-total="red"]');
    const blueTotal = root.querySelector('[data-total="blue"]');
    const productOutput = root.querySelector("[data-product]");
    const walkOutput = root.querySelector("[data-walk]");
    const statusOutput = root.querySelector("[data-status]");
    const certificate = root.querySelector("[data-certificate]");
    const edgePairsOutput = root.querySelector("[data-edge-pairs]");
    const fixedPairsOutput = root.querySelector("[data-fixed-pairs]");
    const relabelingOutput = root.querySelector("[data-relabeling]");
    const conjugacyOutput = root.querySelector("[data-conjugacy]");
    const commutatorOutput = root.querySelector("[data-commutator]");

    function reflection(cycle, axis, permutation) {
      const length = cycle.length;
      cycle.forEach((vertex, index) => {
        permutation[vertex] = cycle[(axis - index + length) % length];
      });
    }

    function compose(left, right) {
      return [0, ...vertices.map((vertex) => left[right[vertex]])];
    }

    function invert(permutation) {
      const inverse = [0];
      for (const vertex of vertices) {
        inverse[permutation[vertex]] = vertex;
      }
      return inverse;
    }

    function cycleNotation(permutation) {
      const visited = new Set();
      const cycles = [];
      for (const vertex of vertices) {
        if (visited.has(vertex)) {
          continue;
        }
        const cycle = [];
        let next = vertex;
        while (!visited.has(next)) {
          visited.add(next);
          cycle.push(next);
          next = permutation[next];
        }
        if (cycle.length > 1) {
          cycles.push("(" + cycle.join(" ") + ")");
        }
      }
      return cycles.join("") || "identity";
    }

    function drawPath(container, cycle, red, blue, start, afterBlue, result) {
      let current = cycle.find((vertex) => red[vertex] === vertex || blue[vertex] === vertex);
      const parts = ["Path " + current];
      const marks = [];
      let previous = 0;
      for (let index = 0; index < cycle.length; index += 1) {
        const node = document.createElement("span");
        node.className = "matching-node";
        node.textContent = current;
        if (current === start) {
          node.dataset.trace = "start";
        } else if (current === result) {
          node.dataset.trace = "result";
        } else if (current === afterBlue) {
          node.dataset.trace = "via";
        }
        marks.push(node);
        if (index === cycle.length - 1) {
          break;
        }

        const redNext = red[current];
        const useRed = redNext !== previous && redNext !== current;
        const color = useRed ? "red" : "blue";
        const next = useRed ? redNext : blue[current];
        const edge = document.createElement("span");
        const edgeLabel = document.createElement("span");
        edge.className = "matching-edge";
        edge.dataset.color = color;
        edgeLabel.textContent = useRed ? "R" : "B";
        edge.append(edgeLabel);
        marks.push(edge);
        parts.push(color + " edge", String(next));
        previous = current;
        current = next;
      }
      container.replaceChildren(...marks);
      container.setAttribute("aria-label", parts.join(", "));
    }

    function render() {
      const red = [0];
      const blue = [0];
      cycleLabels.forEach((cycle, index) => {
        const phase = surplusInputs[index].value === "red" ? 0 : 1;
        reflection(cycle, phase, blue);
        reflection(cycle, phase + 1, red);
      });
      const product = compose(red, blue);
      const redEdges = vertices.filter((vertex) => red[vertex] > vertex);
      const blueEdges = vertices.filter((vertex) => blue[vertex] > vertex);
      const start = Number(startInput.value);
      const afterBlue = blue[start];
      const result = red[afterBlue];
      cycleLabels.forEach((cycle, index) => drawPath(paths[index], cycle, red, blue, start, afterBlue, result));
      redTotal.textContent = redEdges.length;
      blueTotal.textContent = blueEdges.length;
      productOutput.textContent = cycleNotation(product);
      const blueStep = afterBlue === start ? "blue, stay" : "blue";
      const redStep = result === afterBlue ? "red, stay" : "red";
      walkOutput.textContent = start + " → " + afterBlue + " (" + blueStep + ") → " + result + " (" + redStep + ")";

      if (redEdges.length !== blueEdges.length) {
        statusOutput.textContent = "The counts differ. Give one cycle the other surplus to make them agree.";
        certificate.hidden = true;
        return;
      }

      const relabeling = [0];
      redEdges.forEach((vertex, index) => {
        const image = blueEdges[index];
        relabeling[vertex] = image;
        relabeling[red[vertex]] = blue[image];
      });
      const redFixed = vertices.filter((vertex) => red[vertex] === vertex);
      const blueFixed = vertices.filter((vertex) => blue[vertex] === vertex);
      redFixed.forEach((vertex, index) => {
        relabeling[vertex] = blueFixed[index];
      });
      const conjugate = compose(relabeling, compose(invert(red), invert(relabeling)));
      const commutator = compose(red, conjugate);
      const verified = vertices.every((vertex) => conjugate[vertex] === blue[vertex]);
      statusOutput.textContent = "The edge counts agree. Match red to blue in label order.";
      const edgePairs = redEdges.map((vertex) =>
        "{" + vertex + ",\u00a0" + red[vertex] + "}\u00a0→\u00a0{" +
          relabeling[vertex] + ",\u00a0" + relabeling[red[vertex]] + "}"
      );
      const fixedPairs = redFixed.map((vertex) => vertex + " → " + relabeling[vertex]);
      edgePairsOutput.textContent = "Edges  " + edgePairs.join(" · ");
      fixedPairsOutput.textContent = "Fixed vertices  " + fixedPairs.join(" · ");
      relabelingOutput.textContent = "τ = " + cycleNotation(relabeling);
      conjugacyOutput.textContent = verified ? "τ α τ⁻¹ = β" : "Relabeling check failed";
      commutatorOutput.textContent = "[α, τ] = " + cycleNotation(commutator);
      certificate.hidden = false;
    }

    [...surplusInputs, startInput].forEach((input) => input.addEventListener("change", render));
    render();
  })();
