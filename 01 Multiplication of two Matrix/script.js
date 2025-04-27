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


function multiplyMatrices(matA, matB) {
    
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


    // console.log(matA);
    // console.log(matB);


    let result = [] //Creating a new array to store the result of the multiplication of two matrices

    for (let i = 0; i < matARows; i++) { //Iterating through the rows of the resultant matrix
        result[i] = [] //Creating a new array to store the resultant matrix
        for (let j = 0; j < matBCols; j++) { //Trerating through the columns of the resultant matrix
            result[i][j] = 0 //initialize the resultant matrix with 0
            for (let k = 0; k < matACols; k++) { //Iterating through the columns of matrix A (=rows of matrix B) 
                result[i][j] += matA[i][k] * matB[k][j] //Multiplying the elements of matrix A and B and adding them to the resultant matrix
            }
                result[i][j] = result[i][j] + (matA[1][k] * matB[k][j]); //Multiplying the elements of the two matrices and adding them to the resultant matrix
        }
    }
    return result; //Returning the resultant matrix
}
    //Check Condition for multiplication of two matrices
    if(matACols != matBRows){
        console.log("Multiplication is not possible.") //If the number of columns in matrix A is not equal to the number of rows in matrix B, multiplication is not possible
    } else{
        let result = multiplyMatrices(matA, matB) //Calling the function to multiply the two matrices
        console.log(result) //Printing the resultant matrix
    }