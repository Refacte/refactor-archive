/* A direct calculation, enhanced from a fully readable static example. */
(() => {
  const phi=(1+Math.sqrt(5))/2, psi=1-phi;
  const format=x=>Math.abs(x)<1e-10?'0':Number(x.toFixed(4)).toString();
  for(const demo of document.querySelectorAll('[data-refactor-demo]')) {
    const slider=demo.querySelector('[data-weight]');
    const output=demo.querySelector('[data-weight-value]');
    const status=demo.querySelector('[data-demo-status]');
    const path=demo.querySelector('[data-residual-path]');
    const term=demo.querySelector('[data-residual-term]');
    const buttons=[...demo.querySelectorAll('[data-weight-preset]')];
    const rows=demo.querySelector('[data-sequence-values]');
    if(!slider||!output||!status||!path||!term)return;
    function update(c,preset='') {
      slider.value=String(c);const symbol=preset==='phi'?'φ':preset==='psi'?'ψ':null;
      output.value=symbol||format(c);output.textContent=symbol||format(c);
      slider.setAttribute('aria-valuetext',symbol?symbol+' approximately '+format(c):format(c));
      const residual=1+c-c*c, separated=Math.abs(residual)<1e-10;
      demo.classList.toggle('is-separated',separated);
      path.style.opacity=separated?'0.16':'1';
      term.textContent=separated?' + 0':' + ('+format(residual)+')sₙ₋₁';
      status.textContent=separated?(preset==='phi'?'At c = φ, the extra input is exactly zero. The update is uₙ₊₁ = ψuₙ, with ψ = 1 − φ ≈ −0.618.':preset==='psi'?'At c = ψ = 1 − φ, the extra input is exactly zero. The update is uₙ₊₁ = φuₙ, with φ ≈ 1.618.':'The extra input is zero: the new quantity moves on its own.'):'Remaining input: approximately '+format(residual)+'sₙ₋₁. This weight has not separated the recurrence.';
      for(const button of buttons)button.setAttribute('aria-pressed',String(button.dataset.weightPreset===preset));
      if(rows){let previous=0,current=1,html='';for(let n=1;n<=7;n++){const u=current-c*previous,prediction=Math.pow(1-c,n-1);html+='<tr><th scope="row">'+n+'</th><td>'+current+'</td><td>'+format(u)+'</td><td>'+format(prediction)+'</td></tr>';[previous,current]=[current,previous+current];}rows.innerHTML=html;}
    }
    slider.addEventListener('input',()=>update(Number(slider.value)));
    for(const button of buttons)button.addEventListener('click',()=>{const choice=button.dataset.weightPreset;update(choice==='phi'?phi:choice==='psi'?psi:Number(choice),choice);});
    update(1,'1');
  }
})();
