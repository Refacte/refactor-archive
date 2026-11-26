(() => {
    const root = document.getElementById("refactor-bochert-overlap");
    const vertices = [1, 2, 3, 4, 5, 6, 7, 8];
    const redEdges = [[1, 2], [4, 6]];
    const shiftInput = root.querySelector("[data-shift]");
    const startInput = root.querySelector("[data-start]");
    const graph = root.querySelector("[data-graph]");
    const blueArcs = Array.from(root.querySelectorAll('[data-edge="blue"]'));
    const points = Array.from(root.querySelectorAll("[data-vertex]"));
    const blueOutput = root.querySelector("[data-blue-permutation]");
    const overlapOutput = root.querySelector("[data-overlap]");
    const countOutput = root.querySelector("[data-overlap-count]");
    const commutatorOutput = root.querySelector("[data-commutator]");
    const visits = Array.from(root.querySelectorAll("[data-visit]"));

    function swaps(edges) {
      const permutation = [0, ...vertices];
      for (const [left, right] of edges) {
        permutation[left] = right;
        permutation[right] = left;
      }
      return permutation;
    }

    function inverse(permutation) {
      const result = [0];
      for (const vertex of vertices) {
        result[permutation[vertex]] = vertex;
      }
      return result;
    }

    function formatCycles(permutation) {
      const visited = new Set();
      const cycles = [];
      for (const vertex of vertices) {
        if (visited.has(vertex)) {
          continue;
        }
        const cycle = [];
        let next = vertex;
        while (!visited.has(next)) {
          cycle.push(next);
          visited.add(next);
          next = permutation[next];
        }
        if (cycle.length > 1) {
          cycles.push("(" + cycle.join(" ") + ")");
        }
      }
      return cycles.join("") || "identity";
    }

    function formatEdges(edges) {
      return edges.map((edge) => edge.join("–")).join(" and ");
    }

    function placeArc(arc, left, right) {
      const count = vertices.length;
      arc.dataset.endpoints = left + " " + right;
      arc.style.setProperty("--arc-start", ((left - .5) / count * 100) + "%");
      arc.style.setProperty("--arc-end", ((right - .5) / count * 100) + "%");
      arc.style.setProperty("--arc-height", (.67 + .16 * (right - left)) + "rem");
    }

    function walk(start, operations) {
      const positions = [start];
      let current = start;
      for (const operation of operations) {
        current = operation[current];
        positions.push(current);
      }
      return positions;
    }

    const u = swaps(redEdges);
    const uInverse = inverse(u);

    function render() {
      const shift = Number(shiftInput.value);
      const start = Number(startInput.value);
      const rotate = (vertex) => (vertex - 1 + shift) % vertices.length + 1;
      const blueEdges = redEdges.map((edge) => edge.map(rotate).sort((a, b) => a - b));
      const v = swaps(blueEdges);
      const operations = [inverse(v), uInverse, v, u];
      const commutator = [0, ...vertices.map((vertex) => walk(vertex, operations).at(-1))];
      const overlap = vertices.filter((vertex) => u[vertex] !== vertex && v[vertex] !== vertex);

      blueEdges.forEach(([left, right], index) => placeArc(blueArcs[index], left, right));
      points.forEach((point) => {
        const vertex = Number(point.dataset.vertex);
        const inRed = u[vertex] !== vertex;
        const inBlue = v[vertex] !== vertex;
        if (inRed && inBlue) {
          point.dataset.membership = "both";
        } else if (inRed) {
          point.dataset.membership = "red";
        } else {
          point.dataset.membership = inBlue ? "blue" : "neither";
        }
      });
      graph.setAttribute("aria-label", "Red edges " + formatEdges(redEdges) + ". Blue edges " + formatEdges(blueEdges)
        + ". Shared vertices " + (overlap.join(", ") || "none") + ".");
      blueOutput.textContent = formatCycles(v);
      overlapOutput.textContent = "{" + overlap.join(", ") + "}";
      overlapOutput.dataset.size = String(overlap.length);
      countOutput.textContent = "(" + overlap.length + (overlap.length === 1 ? " point)" : " points)");
      commutatorOutput.textContent = formatCycles(commutator);
      walk(start, operations).forEach((vertex, index) => {
        visits[index].textContent = vertex;
      });
    }

    [shiftInput, startInput].forEach((input) => input.addEventListener("change", render));
    render();
  })();
