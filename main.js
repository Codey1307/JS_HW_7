const arr = ['hello', 'world', 23, '23', null];
let type = 'string';
function filterBy(arr, type) {
if (type == "null") {
    return arr.filter( e => e !== null)
} 
return arr.filter((e => typeof(e) !== type))
}

console.log(filterBy(arr, type))
