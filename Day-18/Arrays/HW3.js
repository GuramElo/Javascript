function rotate (... a){//sheidzleboa defaultadac ra, anu: (a1,a2,a3='right') magram asec mushaobs
    if(!Array.isArray(a[0]) || typeof a[1] !== 'number' || (a[2]!==undefined && a[2]!=='right' && a[2]!=='left'))throw new TypeError('nope, smth wrong');
    
    if(a[2]===undefined || a[2]==='right')for (let k=0;k<a[1];k++)a[0].unshift(a[0].pop());
    else {
    for (let k=0;k<a[1];k++)a[0].push(a[0].shift());
    
    
    }
    console.log(a[0]);
    return;
    }
    rotate ([1,2,3],1,'left');