var a=[[[[[[[[1]]],123,[12]]]]]],sum=0;
function f(b,bool){
    for(let k=0;k<b.length;k++){
        if(Array.isArray(b[k]))f(b[k],0);
        else {
            if(typeof b[k] ==='number')sum=sum+b[k];
            else throw new TypeError("every element should be number or string");
        }
    }
if(bool===1)console.log(sum);

return;
}
m(a,1);
