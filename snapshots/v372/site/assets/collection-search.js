(() => {
  const root = document.querySelector('[data-polemics-collection]');
  if (!root) return;
  const controls = root.querySelector('[data-collection-controls]');
  const search = root.querySelector('[data-collection-search]');
  const topic = root.querySelector('[data-collection-topic]');
  const access = root.querySelector('[data-collection-access]');
  const count = root.querySelector('[data-collection-count]');
  const empty = root.querySelector('[data-collection-empty]');
  if (!controls || !search || !topic || !access || !count || !empty) return;

  const searchable = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();
  const records = [...root.querySelectorAll('[data-collection-source]')].map(element => ({
    element,
    text: searchable(element.textContent),
    topic: element.dataset.topic,
    access: element.dataset.access,
  }));
  const groups = [...root.querySelectorAll('[data-collection-theme]')].map(element => ({
    element,
    count: element.querySelector('[data-group-count]'),
    records: records.filter(record => element.contains(record.element)),
  }));

  function applyFilters() {
    const words = searchable(search.value).trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const record of records) {
      const matches = words.every(word => record.text.includes(word)) &&
        (!topic.value || topic.value === record.topic) &&
        (!access.value || access.value === record.access);
      record.element.hidden = !matches;
      if (matches) visible += 1;
    }
    for (const group of groups) {
      const shown = group.records.filter(record => !record.element.hidden).length;
      group.element.hidden = shown === 0;
      group.count.textContent = shown === group.records.length
        ? `${shown} ${shown === 1 ? 'record' : 'records'}`
        : `${shown} of ${group.records.length} records`;
    }
    count.textContent = `${visible} of ${records.length} ${records.length === 1 ? 'record' : 'records'}`;
    empty.hidden = visible !== 0;
  }

  function revealHashTarget(hash = window.location.hash) {
    let id;
    try {
      id = decodeURIComponent(hash.slice(1));
    } catch {
      return;
    }
    if (!id) return;
    const target = document.getElementById(id);
    if (!target || !root.contains(target)) return;
    const record = target.closest('[data-collection-source]');
    const group = target.closest('[data-collection-theme]');
    if (!record?.hidden && !group?.hidden) return;
    controls.reset();
    applyFilters();
    target.scrollIntoView({ block: 'start' });
  }

  controls.addEventListener('submit', event => event.preventDefault());
  controls.addEventListener('reset', () => {
    window.requestAnimationFrame(applyFilters);
  });
  search.addEventListener('input', applyFilters);
  topic.addEventListener('change', applyFilters);
  access.addEventListener('change', applyFilters);
  window.addEventListener('hashchange', () => revealHashTarget());
  root.addEventListener('click', event => {
    const anchor = event.target.closest('a[href^="#"]');
    if (anchor) revealHashTarget(anchor.hash);
  });
  controls.hidden = false;
  applyFilters();
  revealHashTarget();
})();
