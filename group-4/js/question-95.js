//#Source https://bit.ly/2neWfJ2 
const on = (el, evt, fn, opts = {}) => {
    const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);
    el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);
    if (opts.target) return delegatorFn;
  };
  
  const fn = () => console.log('!');
  console.log(on(document.body, 'click', fn));  
  console.log(on(document.body, 'click', fn, { target: 'p' }));  
  console.log(on(document.body, 'click', fn, { options: true }));
  