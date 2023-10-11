//#Source https://bit.ly/2neWfJ2 
const unescapeHTML = str =>
  str.replace(
    /&|<|>|'|"/g,
    tag =>
      ({
        '&': '&',
        '<': '<',
        '>': '>',
        '"': '"',
        "'": "'"
      }[tag] || tag)
  );
console.log(unescapeHTML('<a href="#">Me & you</a>'));
