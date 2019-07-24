//  create a function that takes number of rows as an argument, and then prints out Pascal's triangle up to the number of rows specified.


// use strict 

function pascalTriangle(row){
  let arr = [[1],[1,1]]; //base case, the first two row are need for calc mid points
  let rowNum = row - 2;// reset rows to 0 while iteration
  for (let i = 1; i <= rowNum; i++){
  	let curRow = i;
    arr.push([1]);
    for (let x = 0; x< arr[curRow].length - 1; x++){ //usind 2D array, calc the mid point per row
      let calcMid = arr[curRow][x] + arr[curRow][x + 1];// length -1 is needed to create flow of the triangle 
      arr[curRow+1].push(calcMid); 
    }
    arr[curRow+1].push(1);
  }
  console.log(arr); //test solution 
  // return arr;
 
}

pascalTriangle(4)

