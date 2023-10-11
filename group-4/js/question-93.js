//#Source https://bit.ly/2neWfJ2 
const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);
const fn = () => console.log('!');
document.body.addEventListener('click', fn);
console.log(off(document.body, 'click', fn)); 
