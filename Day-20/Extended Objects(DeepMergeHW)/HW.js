Object.defineProperty(Object.prototype,'mergeDeepRight', {
value:function (a){
var temp=this;
function sergo(obj1,obj2){
    for(let i in obj1){
        if(typeof obj1[i]=== 'object' && typeof obj2[i]=== 'object')obj2[i]=sergo(obj1[i],obj2[i]);
    }
    if(Array.isArray(obj1) && Array.isArray(obj2))return obj1.concat(obj2);
    else return Object.assign(obj1,obj2);
    }
Object.this=sergo(temp,a);

return;


},
enumerable:false
});

var aso={ase:{asaw:123,r:[1,2,3]}};
aso.mergeDeepRight({susa:12312,ase:{asak:234,r:[4,5,6]}});
console.log(aso);
