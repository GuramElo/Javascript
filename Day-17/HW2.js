function print_f1(){
    try{
        throw new Error("parameter can't be an empty");
    }catch(err){
        console.log(err.message);
    }
    return;
}
function print_f2(){
    try{
        throw new Error("parameter type should be an array");
    }catch(err){
        console.log(err.message);
    }
    return;
}
//=================================================

function f(k, FirstIterationMarker){
if(!Array.isArray(k)){print_f2();return;}
else{
if(Boolean(FirstIterationMarker) && !k.length){print_f1();return;}
}


if(Boolean(k.length)){b=b+k.shift()+" ";f(k,0);}
else{console.log(b);return;}
}


var a=[1, 2, 3,4,5,23,234,23,423423,234,5123,4123,134],b="";
f(a,1);