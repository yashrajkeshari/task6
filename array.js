let Array1 = [13,23,2,2,1,5,4,6,3,43];
let Array2 = [13,9,7,8,6,7,6,6,5,3];
let result = [];
function mergeArray(Array1,Array2){
    let merge = Array1.concat(Array2);
    
    for(let i=0;i<Array1.length;i++){
        if(result.indexOf(Array1[i]) == -1)
           result.push(Array1[i])
    }
    for(let i=0;i<Array2.length;i++){
        if(result.indexOf(Array2[i]) == -1)
        result.push(Array2[i])
    }
    console.log(result);
}
mergeArray(Array1,Array2)