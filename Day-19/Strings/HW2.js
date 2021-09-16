function extractCurrencyValue(source){
    if(typeof source[0]!== 'string')throw new Error("!!!!! First character should be string !!!!!");
    var b=0;
    for(let a=1;a<source.length;a++){
        b=10*b+(source[a].charCodeAt()-48);}
    return b;}
//=============
console.log(extractCurrencyValue("$123512"),typeof extractCurrencyValue("$123512"));