function searchWord(a,b){
if(typeof a !== 'string' || typeof b !== 'string')throw new TypeError("Both parameters should be string");
var c=0;
while(a.indexOf(b)!==-1){
c++;
a=a.replace(b,"");}
return c;}
    
console.log(searchWord('aa, bb, cc, dd, aa', 'aa'));