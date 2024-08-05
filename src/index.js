
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == null) {
    return [];
  }

    // длинная запись
  // let newmatrix = matrix.map(function (element,index) {
  //   if (index %2 === 0) {
  //     return element
  //   }
  //   return element.reverse()
  // })

//короткая запись
  let newmatrix = matrix.map((element,index) => (index %2 === 0) ? element : element.reverse())



  return newmatrix.flat();
}
