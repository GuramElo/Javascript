function compose(... argh){
    var r;
    r=argh[argh.length-1]("");
for(let a=argh.length-1;a--;a>=0){
if(typeof argh[a] !=='function')throw new TypeError('Every parameter must bu function');
r=argh[a](r);
}
return function(str){
    return str+r;
};}

//summoning
console.log(compose(
    (str) => {
    return str + 'c';
    }, 
    (str) => {
        return str + 'b';
    },
    (str) => {
        return str + 'b';
    },
        (str) => {
            return str + 'u';
    
    }
    )('a'));
