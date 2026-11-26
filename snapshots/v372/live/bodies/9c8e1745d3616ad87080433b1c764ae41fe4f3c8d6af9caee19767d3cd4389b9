(() => {
    const root = document.getElementById("refactor-s6-outer");
    const vertices = [1, 2, 3, 4, 5, 6];
    const labels = ["A", "B", "C", "D", "E", "F"];
    const input = root.querySelector("[data-swap]");
    const points = root.querySelector("[data-points]");
    const vertexMarks = Array.from(root.querySelectorAll("[data-vertex]"));
    const image = root.querySelector("[data-image]");
    const pairButtons = Array.from(root.querySelectorAll("[data-pair]"));
    const pairMatchings = Array.from(root.querySelectorAll("[data-common-for]"));
    const fromHeading = root.querySelector("[data-from]");
    const toHeading = root.querySelector("[data-to]");
    const mapping = root.querySelector("[data-mapping]");
    const announcement = root.querySelector("[data-announcement]");
    let inspectedPair = "AB";

    function enumerateMatchings(remaining) {
      if (remaining.length === 0) {
        return [[]];
      }
      const [first, ...others] = remaining;
      return others.flatMap((partner) => {
        const rest = others.filter((vertex) => vertex !== partner);
        return enumerateMatchings(rest).map((matching) => [[first, partner], ...matching]);
      });
    }

    const matchings = enumerateMatchings(vertices);
    const edgeName = (edge) => edge.join("");
    const matchingKey = (matching) => matching.map(edgeName).join(",");
    const matchingName = (index) => matchings[index].map(edgeName).join(" | ");
    const matchingLookup = new Map(matchings.map((matching, index) => [matchingKey(matching), index]));
    const factorizations = [];

    function addFactorizations(rows, usedEdges, start) {
      if (rows.length === 5) {
        factorizations.push(rows);
        return;
      }
      for (let index = start; index < matchings.length; index += 1) {
        const edges = matchings[index].map(edgeName);
        if (edges.every((edge) => !usedEdges.has(edge))) {
          addFactorizations([...rows, index], new Set([...usedEdges, ...edges]), index + 1);
        }
      }
    }

    addFactorizations([], new Set(), 0);
    const factorizationLookup = new Map(factorizations.map((rows, index) => [rows.join(","), index]));

    function render() {
      const [first, second] = Array.from(input.value, Number);
      const relabel = (vertex) => {
        if (vertex === first) return second;
        if (vertex === second) return first;
        return vertex;
      };
      const matchingImage = matchings.map((matching) => {
        const edges = matching.map((edge) => edge.map(relabel).sort((a, b) => a - b));
        edges.sort(([a], [b]) => a - b);
        return matchingLookup.get(matchingKey(edges));
      });
      const exchangePairs = [];
      for (const [index, rows] of factorizations.entries()) {
        const imageKey = rows.map((row) => matchingImage[row]).sort((a, b) => a - b).join(",");
        const partner = factorizationLookup.get(imageKey);
        if (index < partner) {
          const shared = rows.find((row) => matchingImage[row] === row);
          exchangePairs.push({from: index, to: partner, shared, name: labels[index] + labels[partner]});
        }
      }

      points.setAttribute("aria-label", "Six original points. Swap " + first + " and " + second + ".");
      points.style.setProperty("--link-start", ((first - .5) / vertices.length * 100) + "%");
      points.style.setProperty("--link-end", ((second - .5) / vertices.length * 100) + "%");
      vertexMarks.forEach((mark) => {
        const vertex = Number(mark.dataset.vertex);
        mark.toggleAttribute("data-moving", vertex === first || vertex === second);
      });

      const selected = exchangePairs.find((pair) => pair.name === inspectedPair) || exchangePairs[0];
      inspectedPair = selected.name;
      image.textContent = exchangePairs.map(({from, to}) => "(" + labels[from] + " " + labels[to] + ")").join("");
      exchangePairs.forEach(({from, to, shared, name}, index) => {
        const button = pairButtons[index];
        const pairMatching = pairMatchings[index];
        const fromLabel = labels[from];
        const toLabel = labels[to];
        const sharedName = matchingName(shared);
        button.dataset.pair = name;
        button.textContent = fromLabel + " ↔ " + toLabel;
        button.setAttribute("aria-label", fromLabel + " and " + toLabel + " exchange. Shared matching " + sharedName.replaceAll(" | ", ", ") + ".");
        button.setAttribute("aria-pressed", name === inspectedPair);
        pairMatching.dataset.commonFor = name;
        pairMatching.textContent = sharedName;
      });

      fromHeading.textContent = "In " + labels[selected.from];
      toHeading.textContent = "Image in " + labels[selected.to];
      announcement.textContent = "Relabeling " + labels[selected.from] + " to " + labels[selected.to] + ". The shared matching is " + matchingName(selected.shared).replaceAll(" | ", ", ") + ".";
      const rows = factorizations[selected.from].map((index) => {
        const row = document.createElement("tr");
        const source = document.createElement("td");
        const target = document.createElement("td");
        const status = document.createElement("td");
        const fixed = index === matchingImage[index];
        row.toggleAttribute("data-fixed", fixed);
        source.setAttribute("data-source", "");
        target.setAttribute("data-target", "");
        source.textContent = matchingName(index);
        target.textContent = matchingName(matchingImage[index]);
        status.textContent = fixed ? "Shared" : "";
        row.append(source, target, status);
        return row;
      });
      mapping.replaceChildren(...rows);
    }

    input.addEventListener("change", () => {
      inspectedPair = "";
      render();
    });
    pairButtons.forEach((button) => {
      button.addEventListener("click", () => {
        inspectedPair = button.dataset.pair;
        render();
      });
    });
    render();
  })();
