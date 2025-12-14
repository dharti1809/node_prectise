
function add(a, b) {
  return a + b;
}


function subs(a, b) {
  return a - b;
}

// export function multi(a, b) {
//   return a * b;
// }

// export const multi = (a,b) => {
//     return a * b;
// }

const multi = (a,b) => {
    return a * b;
}
function div(a, b) {
  return a / b;
}

// export default multi;

export { subs, multi, div };