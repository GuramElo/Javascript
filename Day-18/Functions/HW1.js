function mix(...CBs){
    var par1;
    var ab=[];
    if(typeof CBs[0]!=='function')throw new TypeError('every parameter should be a function');


    try{par1=CBs[0]();}catch(wrong){
        let b={
            name:wrong.name,
            message:wrong.message,
            stack:wrong.stack,
            level:1}
ab.push(b);
}
    for(let a=1;a<CBs.length;a++){
        if(typeof CBs[a]!=='function')throw new TypeError('every parameter should be a function');
        try{par1=CBs[a](par1);}catch(wrong){
            let b={
                name:wrong.name,
                message:wrong.message,
                stack:wrong.stack,
                level:(a+1)}
    ab.push(b);
    }
    }

    return {
        errors:ab,
        value:par1
    };
}

console.log(mix(
    ()=>{
        return " ";
    },
    (pro) => {
        throw new RangeError('Range is wrong');},
    (pro)=>{
        return pro+'dasavluri';
    }
));

