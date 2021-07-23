// YOUR CODE BELOW
function mySplice(arr,startIndex,numberOfElements,...input){
    var removed=[];
    var temp=[];
    for(var i=0;i<startIndex;i++){
        if(i<startIndex){
            temp.push(arr[i]);
        }
    }
    for(var i=startIndex;i<startIndex+numberOfElements;i++){
        removed.push(arr[i]);
    }
    for(var i=0;i<input.length;i++){
        temp.push(input[i]);
    }
    for(var i=startIndex+numberOfElements;i<arr.length;i++){
        temp.push(arr[i]);
    }
    for(var i=0;i<temp.length;i++){
            arr[i]=temp[i];
    }
    while (arr.length>temp.length){
        arr.pop();
    }
    return removed;
}
startArray=[1,2,5,"blarg"];
mySplice(startArray,1,2,"beep");
console.log(startArray);
