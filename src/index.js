module.exports = function towelSort(matrix) {
	let resultArr = [];
   if (!Array.isArray(matrix) || !matrix.length) {
	   return [];
   }
    matrix.forEach((element, index) => {
       if (index % 2) {
           resultArr.push(...element.reverse());
       }
	   else resultArr.push(...element);
   });
    return resultArr;
}
