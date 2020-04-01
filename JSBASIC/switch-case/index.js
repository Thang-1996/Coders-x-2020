function transform(arr) {
return arr.map(function (a) {
    switch (a) {
        case 'A' :
            a = 1;
            break;
        case 'a' :
            a = 1;
            break;
        case 'B':
            a = 2;
            break;
        case 'b' :
            a = 2;
        default :
            a = 0;
            break;
    }
    return a;
});
}
console.log(transform(['A', 'b', 'a', 'B', 'd']));