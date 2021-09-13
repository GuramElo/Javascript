function reverse_guri(a){
    if (Boolean(!a.length))throw new Error( 'it should not be empty');
    if(!Array.isArray(a[0]))throw new Error ('first parameter should be an array');
    for (let b=0;b<a.length/2;b++){
    c=a[b];
    a[b]=a[a.length-1-b];
    a[a.length-1-b]=c;}
    return a;}
    console.log(reverse_guri([[123],12]));