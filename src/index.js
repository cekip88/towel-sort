
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let resultArray = [];
    if(!Array.isArray(matrix) || !matrix) return [];
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if(i === 0 || i % 2 === 0){
                resultArray.push(matrix[i][j]);
            } else {
                resultArray.push(matrix[i][matrix[i].length - 1 - j])
            }
        }
    }
    return resultArray
};
