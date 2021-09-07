function print_f1(){
    try{
        throw new Error("parameter type is not a Number");
    }catch(errs){
        console.log(errs.message);
    }
    return;
}
// =====================================
function print_f2(){
    try{
        throw new Error("parameter can't be a 0");
    }catch(errs){
        console.log(errs.message);
    }
    return;}
//==========================================
function print_f3(){
    try{
        throw new Error("parameter can't be less than 0");
    }catch(errs){
        console.log(errs.message);
    }
    return;}
// =========================================
function getDivisors(d){
if(typeof d !='number'){print_f1();return;}
if(d===0){print_f2();return;}
if(d<0){print_f3();return;}
var e=[];
for(let a=1;a<d+1;a++){
if(d%a===0)e.push(a);
}
console.log(e);}

//===========================
getDivisors(12);