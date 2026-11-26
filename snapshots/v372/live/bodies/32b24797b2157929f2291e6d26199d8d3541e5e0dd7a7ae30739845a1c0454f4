/* Local catalogue filter. No network requests, storage, or visitor events. */
(() => {
  const form=document.querySelector('[data-archive-search]');
  if(!form)return;
  const query=form.querySelector('[name="q"]');
  const kind=form.querySelector('[name="kind"]');
  const count=document.querySelector('[data-archive-count]');
  const empty=document.querySelector('[data-archive-empty]');
  const normalize=value=>String(value).normalize('NFKD').replace(/\p{M}/gu,'').toLocaleLowerCase().replace(/\s+/g,' ').trim();
  const records=Array.from(document.querySelectorAll('[data-archive-item]'),node=>({node,kind:node.dataset.archiveKind,text:normalize(node.textContent)}));
  const allowed=new Set(Array.from(kind.options,option=>option.value));
  const initial=new URL(window.location.href);
  query.value=initial.searchParams.get('q')||'';
  const requestedKind=initial.searchParams.get('kind')||'all';
  kind.value=allowed.has(requestedKind)?requestedKind:'all';
  function apply(updateAddress){
    const terms=normalize(query.value).split(' ').filter(Boolean);
    let shown=0;
    for(const record of records){
      const matches=(kind.value==='all'||record.kind===kind.value)&&terms.every(term=>record.text.includes(term));
      record.node.hidden=!matches;
      if(matches)shown++;
    }
    count.textContent=`${shown} of ${records.length} ${records.length===1?'record':'records'}${terms.length||kind.value!=='all'?' match':' shown'}`;
    empty.hidden=shown!==0;
    if(updateAddress){
      const url=new URL(window.location.href);
      const text=query.value.trim();
      if(text)url.searchParams.set('q',text);else url.searchParams.delete('q');
      if(kind.value!=='all')url.searchParams.set('kind',kind.value);else url.searchParams.delete('kind');
      window.history.replaceState(null,'',url.pathname+url.search+url.hash);
    }
  }
  form.hidden=false;
  form.addEventListener('submit',event=>{event.preventDefault();apply(true);});
  query.addEventListener('input',()=>apply(true));
  kind.addEventListener('change',()=>apply(true));
  form.addEventListener('reset',event=>{event.preventDefault();query.value='';kind.value='all';apply(true);query.focus();});
  apply(false);
})();
