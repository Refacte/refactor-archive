/* Exact finite walk/cycle explorer. No network requests or numeric approximation. */
(() => {
  'use strict';
  const canonicalCycle = cycle => {
    const i = cycle.indexOf(Math.min(...cycle));
    return cycle.slice(i).concat(cycle.slice(0, i));
  };
  const orderCycles = cycles => cycles.map(canonicalCycle).sort((a, b) => a[0] - b[0]);
  const key = object => JSON.stringify([object.path, object.cycles]);
  function permutations(values) {
    if (!values.length) return [[]];
    return values.flatMap((value, i) => permutations(values.filter((_, j) => i !== j)).map(tail => [value, ...tail]));
  }
  function reserves(n) {
    const result = [];
    for (let mask = 0; mask < 2 ** n; mask++) {
      const vertices = Array.from({length: n}, (_, i) => i).filter(i => mask & (1 << i));
      for (const image of permutations(vertices)) {
        const next = new Map(vertices.map((v, i) => [v, image[i]]));
        const unused = new Set(vertices);
        const cycles = [];
        while (unused.size) {
          const start = Math.min(...unused), cycle = [];
          let v = start;
          do { cycle.push(v); unused.delete(v); v = next.get(v); } while (v !== start);
          cycles.push(cycle);
        }
        result.push({size: vertices.length, cycles: orderCycles(cycles)});
      }
    }
    return result.sort((a, b) => a.size - b.size);
  }
  function terms(n, start, end, total = n) {
    const result = [];
    for (const reserve of reserves(n)) {
      const length = total - reserve.size;
      if (length < 0) continue;
      function extend(path, remaining) {
        if (!remaining) {
          if (path[path.length - 1] === end) result.push({path, cycles: reserve.cycles});
          return;
        }
        for (let v = 0; v < n; v++) extend([...path, v], remaining - 1);
      }
      extend([start], length);
    }
    return result;
  }
  function toggle(object) {
    const {path, cycles} = object;
    const owner = new Map(cycles.flatMap(cycle => cycle.map(v => [v, cycle])));
    const seen = new Map();
    for (let r = 0; r < path.length; r++) {
      const v = path[r];
      if (owner.has(v)) {
        const cycle = owner.get(v), s = cycle.indexOf(v);
        const rotated = cycle.slice(s).concat(cycle.slice(0, s));
        return {path: [...path.slice(0, r + 1), ...rotated.slice(1), v, ...path.slice(r + 1)],
          cycles: cycles.filter(c => c !== cycle)};
      }
      if (seen.has(v)) {
        const s = seen.get(v);
        return {path: [...path.slice(0, s + 1), ...path.slice(r + 1)],
          cycles: orderCycles([...cycles, path.slice(s, r)])};
      }
      seen.set(v, r);
    }
    return null;
  }
  function edges(object) {
    const result = object.path.slice(1).map((v, i) => [object.path[i], v]);
    for (const cycle of object.cycles) for (let i = 0; i < cycle.length; i++) result.push([cycle[i], cycle[(i + 1) % cycle.length]]);
    return result.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  }
  const sign = object => object.cycles.length % 2 ? -1 : 1;
  const api = {terms, toggle, edges, sign, key};
  if (typeof document === 'undefined') { globalThis.RefacteCayleyHamilton = api; return; }

  const subDigits = value => String(value).replace(/\d/g, d => '₀₁₂₃₄₅₆₇₈₉'[Number(d)]);
  const superDigits = value => String(value).replace(/\d/g, d => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)]);
  const pathText = object => object.path.map(v => v + 1).join(' → ');
  const reserveText = object => object.cycles.length ? object.cycles.map(c => '(' + c.map(v => v + 1).join(' ') + ')').join('') : 'empty';
  function monomial(object) {
    const counts = new Map();
    for (const edge of edges(object)) { const id = edge.join(','); counts.set(id, (counts.get(id) || 0) + 1); }
    return [...counts].map(([id, count]) => {
      const [i, j] = id.split(',').map(Number);
      return 'a' + subDigits(i + 1) + subDigits(j + 1) + (count > 1 ? superDigits(count) : '');
    }).join(' · ') || '1';
  }
  function graph(object, n, id) {
    const positions = n === 2 ? [[130, 100], [370, 100]] : [[80, 150], [250, 45], [420, 150]];
    const layers = [];
    const pathEdges = object.path.slice(1).map((v, i) => [object.path[i], v]);
    const cycleEdges = object.cycles.flatMap(c => c.map((v, i) => [v, c[(i + 1) % c.length]]));
    for (const [kind, values] of [['walk', pathEdges], ['reserve', cycleEdges]]) {
      const counts = new Map();
      for (const [u, v] of values) { const id = `${u},${v}`; counts.set(id, (counts.get(id) || 0) + 1); }
      for (const [edge, count] of counts) {
        const [u, v] = edge.split(',').map(Number), [x, y] = positions[u], [X, Y] = positions[v];
        let d, tx, ty;
        if (u === v) {
          const direction = kind === 'walk' ? -1 : 1;
          d = `M${x-12},${y+15*direction} C${x-60},${y+90*direction} ${x+60},${y+90*direction} ${x+12},${y+15*direction}`;
          tx = x; ty = y + 67*direction;
        } else {
          const dx = X-x, dy = Y-y, length = Math.hypot(dx, dy), ux = dx/length, uy = dy/length;
          const bend = kind === 'walk' ? 28 : -60;
          const cx = (x+X)/2-uy*bend, cy = (y+Y)/2+ux*bend;
          d = `M${x+ux*23},${y+uy*23} Q${cx},${cy} ${X-ux*24},${Y-uy*24}`;
          tx = (x+X)/2-uy*bend/2; ty = (y+Y)/2+ux*bend/2-6;
        }
        layers.push(`<path class="ch-edge ch-edge-${kind}" d="${d}" marker-end="url(#${id}-${kind})"/><text class="ch-edge-label ch-edge-label-${kind}" x="${tx}" y="${ty}">${kind === 'walk' ? 'W' : 'C'}${count > 1 ? ' ×'+count : ''}</text>`);
      }
    }
    return `<svg class="ch-graph" viewBox="0 -45 500 320" role="img" aria-label="Walk ${pathText(object)}; reserve ${reserveText(object)}"><defs>${['walk', 'reserve'].map(kind => `<marker id="${id}-${kind}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="ch-arrow-${kind}" d="M0,0 L8,4 L0,8 Z"/></marker>`).join('')}</defs>${layers.join('')}${positions.map(([x,y],v) => `<circle class="ch-vertex" cx="${x}" cy="${y}" r="20"/><text class="ch-vertex-label" x="${x}" y="${y+6}">${v+1}</text>`).join('')}</svg>`;
  }
  function initialize(root, instance) {
    const size = root.querySelector('[data-ch-size]'), start = root.querySelector('[data-ch-start]'), end = root.querySelector('[data-ch-end]');
    const choice = root.querySelector('[data-ch-term]'), view = root.querySelector('[data-ch-pair-view]');
    const status = root.querySelector('[data-ch-status]'), list = root.querySelector('[data-ch-pair-list]');
    let all = [], byKey = new Map();
    function panel(object, title, side) {
      return `<div class="ch-object"><h4>${title}</h4><p><strong>Walk:</strong> ${pathText(object)}<br><strong>Reserve:</strong> ${reserveText(object)}</p>${graph(object, Number(size.value), `ch-${instance}-${side}`)}<p class="ch-weight">${sign(object) === 1 ? '+' : '−'} ${monomial(object)}</p></div>`;
    }
    function show() {
      const object = all[Number(choice.value)];
      const partner = toggle(object), partnerIndex = byKey.get(key(partner));
      view.innerHTML = panel(object, 'Selected term', 'left') + panel(partner, 'Its partner', 'right');
      status.textContent = `${all.length} terms form ${all.length/2} cancelling pairs for entry (${Number(start.value)+1},${Number(end.value)+1}). Term ${Number(choice.value)+1} matches term ${partnerIndex+1}: the edge product ${monomial(object)} is unchanged, and the number of reserved cycles changes from ${object.cycles.length} to ${partner.cycles.length}. W marks walk edges; C marks reserved edges.`;
    }
    function rebuild() {
      const n = Number(size.value);
      for (const control of [start, end]) {
        const value = Math.min(Number(control.value), n-1);
        control.replaceChildren(...Array.from({length:n}, (_, i) => new Option(String(i+1), String(i))));
        control.value = String(value);
      }
      all = terms(n, Number(start.value), Number(end.value));
      byKey = new Map(all.map((object, i) => [key(object), i]));
      choice.replaceChildren(...all.map((object, i) => new Option(`${i+1}. ${sign(object) === 1 ? '+' : '−'} [${pathText(object)}; ${reserveText(object)}]`, String(i))));
      const rows = [];
      all.forEach((object, i) => {
        const j = byKey.get(key(toggle(object)));
        if (i < j) rows.push(`<tr><td><button type="button" data-ch-select="${i}">${i+1} ↔ ${j+1}</button></td><td>${pathText(object)}; ${reserveText(object)}</td><td>${pathText(all[j])}; ${reserveText(all[j])}</td><td>${sign(object) === 1 ? '+' : '−'} ${monomial(object)}<br>${sign(all[j]) === 1 ? '+' : '−'} ${monomial(all[j])}</td></tr>`);
      });
      list.innerHTML = `<p class="ch-scroll-hint">Scroll sideways to see both records and their weights.</p><div class="ch-table-scroll" tabindex="0" role="region" aria-label="Cancelling pairs table"><table><caption>All pairs for entry (${Number(start.value)+1},${Number(end.value)+1})</caption><thead><tr><th scope="col">Terms</th><th scope="col">One record</th><th scope="col">Its partner</th><th scope="col">Cancelling weights</th></tr></thead><tbody>${rows.join('')}</tbody></table></div>`;
      show();
    }
    for (const control of [size, start, end]) control.addEventListener('change', rebuild);
    choice.addEventListener('change', show);
    root.querySelector('[data-ch-partner]').addEventListener('click', () => {
      choice.value = String(byKey.get(key(toggle(all[Number(choice.value)])))); show();
    });
    list.addEventListener('click', event => {
      const button = event.target.closest('[data-ch-select]');
      if (button) { choice.value = button.dataset.chSelect; show(); }
    });
    rebuild();
  }
  document.querySelectorAll('[data-cayley-hamilton-demo]').forEach(initialize);
})();
