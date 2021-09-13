function f(a){
    if(!Array.isArray(a[0]))throw new Error ('first parameter should be an array');
    a=a.flat(Infinity);
    var sum=0;
    for (let b=0;b<a.length;b++){
    if(typeof a[b]!=='number'){throw new Error('it can\'t contain anything, but number and array');}
    sum+=a[b];}
    console.log(sum);
    return;}
    
    f([[1],2,[[[[[[[[89]]]]]]]]]);