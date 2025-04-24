let matA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 7]
]

let matB = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let matARows = matA.length  //Calculating the number of rows in matrix A
let matBRows = matB.length  //Calculating the number of rows in matrix B

let matACols = matA[0].length  //Calculating the number of columns in matrix A
let matBCols = matB[0].length  //Calculating the number of columns in matrix B

//if the input array does not have the same number of collumns
for(let i = 0; i < matARows; i++){
    if(matA[i].length > matACols){
        matACols = matA[i].length; //Calculating the highest number of columns in matrix A
    }
}

for(let i = 0; i < matARows; i++){
    for(let j = 0; j < matACols; j++){
        if(matA[i][j] == undefined){
            matA[i][j] = 0; //If the matrix is not a square matrix, fill the empty spaces with 0
        }
    }
}

for(let i = 0; i < matBRows; i++){
    if(matA[i].length > matBCols){
        matBCols = matB[i].length; //Calculating the highest number of columns in matrix A
    }
}

for(let i = 0; i < matBRows; i++){
    for(let j = 0; j < matBCols; j++){
        if(matB[i][j] == undefined){
            matB[i][j] = 0; //If the matrix is not a square matrix, fill the empty spaces with 0
        }
    }
}

console.log(matACols);