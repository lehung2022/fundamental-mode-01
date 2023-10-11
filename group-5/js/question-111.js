//#Source https://bit.ly/2neWfJ2 
const unfold = (fn, seed) => {
    let result = [],
      val = [null, seed];
    while ((val = fn(val[1]))) result.push(val[0]);
    return result;
  };
  var f = n => (n > 50 ? false : [-n, n + 10]);
  console.log(unfold(f, 10));
  