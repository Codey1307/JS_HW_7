function filterBy(arr, type) {
if (type == "null") {
    return arr.filter( e => e !== null)
} 
return arr.filter((e => typeof(e) !== type))
}

console.log(filterBy(['hello', 'world', 23, '23', null], 'string'))
