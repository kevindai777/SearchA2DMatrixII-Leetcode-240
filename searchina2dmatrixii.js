//Objective is same as 'Search in a 2-D Matrix' except the matrix has these properties:
//Integers in each row are sorted in ascending from left to right.
//Integers in each column are sorted in ascending from top to bottom.

let matrix =
[[1,   4,  7, 11, 15],
 [2,   5,  8, 12, 19],
 [3,   6,  9, 16, 22],
 [10, 13, 14, 17, 24],
 [18, 21, 23, 26, 30]]


//O(n * m) solution that starts at the bottom left corner.

let row = matrix.length 
let column = 0

while (row >= 0 && column < matrix[0].length) {
    if (matrix[row][column] == target) {
        return true
    //If we need a higher value, go right
    } else if (matrix[row][column] < target) {
        column++
    //If we need a lower value, go up
    } else {
        row--
    }
}

return false