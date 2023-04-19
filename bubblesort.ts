function bubbleSort(arr:number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1 ; j < arr.length-1 ; j++) {
            if (arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
                console.log('swap ' + arr[i] + ' to ' + arr[j] )
            }
        }
    }return arr
}
let arr=[7,3,6,1,76,1,62,9]
console.log(bubbleSort(arr))