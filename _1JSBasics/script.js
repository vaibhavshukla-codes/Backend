let arr = [1, 2,2, 3, 4];
let newarr = arr.map((ele) => {
    return ele * ele;
});
// console.log(newarr);

let newarr2 = arr.filter((ele) => {
    return ele == 2;
});

console.log(newarr2);
