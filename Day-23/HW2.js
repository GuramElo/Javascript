function DB(){
    //======
    this.create=(a)=>{
                  if(typeof a !== 'object' || (typeof a.name !="string" && a.name!=undefined) || (typeof a.country !="string" && a.country!=undefined) || (typeof a.age !="number" && a.age!=undefined) || (typeof a.salary !="number" && a.salary!=undefined))throw new TypeError("it is not a valid object");
                  //ახალ აიდიებს ვაგენერირებ აქედან
                  let c=Math.trunc(Math.random()*10000)%7+3;
                  let id="";
                  while(true){
                  for(let o=0;o<c;o++){
                  id=id+String.fromCharCode(Math.trunc(Math.random()*100000)%80+33);}
                  if(this.map.has(id)){id="";continue;}//აქ შემთხვევითად დაგენერირებული აიდი უკვე არსებობს, თუ არა მაგას ვამოწმებთ და დადებითი პასუხის შემთხვევაში ახალს ვაგენერირებთ
                  else break;
                                   }
                                          //აქამდე
                  this.map.set(id,a);
                  return id;
    }
    //=====
    this.map= new Map();
    //====
    this.read=(z)=>{
            if(z === undefined)throw new Error("parameter expected");
            if(typeof z !='string')throw new TypeError(z+" should be string");
            if(this.map.has(z)){
                return {...this.map.get(z),...{id:z}};
            }
            else return null;
    }
    //==========
    this.readAll=(...w)=>{
            if(w[0]!==undefined)throw new Error("parameter was not expected");
            return [...this.map.values()];
    
    
    }
    //=====
    this.update=(par1,par2)=>{
                if(typeof par2 !== 'object' || (typeof par2.name !="string" && par2.name!=undefined) || (typeof par2.country !="string" && par2.country!=undefined) || (typeof par2.age !="number" && par2.age!=undefined) || (typeof par2.salary !="number" && par2.salary!=undefined))throw new TypeError("it is not a valid object");
                //validation ^^^^^^^^
                if(typeof par1 !="string")throw new TypeError("id expected as string");
                if(!this.map.has(par1))throw new Error("there is no elemenr in map with such key !!!!");
                if(par1==undefined || par2==undefined || typeof par2 !="object")throw new Error("parameters are not passed properly, or proper parameters are not passed");
                
                this.map.set(par1,{...this.map.get(par1),...par2});
                return true;
    }
    //=====
    this.delete=(idd)=>{
                 if(typeof idd !="string" || !this.map.has(idd))throw new Error("incorrect or inappropriate id was inserted!!!");
                 this.map.delete(idd);
                 return true;
    }
 
    //======
this.find=(ob1)=>{
//validation
let tr=Boolean(typeof ob1.country=="string");
let tr1=Boolean(typeof ob1.name=="string");
let tr2=Boolean(ob1.hasOwnProperty("salary") && ob1.hasOwnProperty("age") && typeof ob1.salary=="object" && typeof ob1.age=="object" && (ob1.age.hasOwnProperty("min") || ob1.age.hasOwnProperty("max")) && (ob1.salary.hasOwnProperty("min") || ob1.salary.hasOwnProperty("max")));
let uar=Boolean(!tr || !tr1 || !tr2);
if(uar)throw new Error("wrong object syntax!!!");

//validation
let qro=this.readAll(),rcxlo=[];

for(let i=0;i<qro.length;i++){
let a=Boolean(qro[i].name===ob1.name || qro[i].country===ob1.country);
//=======
let b=Boolean(ob1.age.hasOwnProperty("min") && ob1.age.hasOwnProperty("max"));
let b1=Boolean(!ob1.age.hasOwnProperty("min") && ob1.age.hasOwnProperty("max"));
let b2=Boolean(ob1.age.hasOwnProperty("min") && !ob1.age.hasOwnProperty("max"));
let b_final=Boolean(qro[i].age>=ob1.age.min && qro[i].age<=ob1.age.max && b);
let b_final_1=Boolean(qro[i].age<=ob1.age.max && b1);
let b_final_2=Boolean(qro[i].age>=ob1.age.min && b2);
//========
let c=Boolean(ob1.salary.hasOwnProperty("min") && ob1.salary.hasOwnProperty("max"));
let c1=Boolean(!ob1.salary.hasOwnProperty("min") && ob1.salary.hasOwnProperty("max"));
let c2=Boolean(ob1.salary.hasOwnProperty("min") && !ob1.salary.hasOwnProperty("max"));
let c_final=Boolean(qro[i].salary>=ob1.salary.min && qro[i].salary<=ob1.salary.max && c);
let c_final_1=Boolean(qro[i].salary<=ob1.salary.max && c1);
let c_final_2=Boolean(qro[i].salary>=ob1.salary.min && c2);
//========
if(a && (b_final || b_final_1 || b_final_2) && (c_final || c_final_1 || c_final_2))rcxlo.push(qro[i]);
}
return rcxlo;




}
    //======
    }
    var db=new DB();
    
    let u=db.create({
        name: 'Pitter', // required field with type string
        age: 21, // required field with type number
        country: 'usa', // required field with type string
        salary: 500 // required field with type number
    });
    
    let ub=db.create({
        name: 'Pitter1', // required field with type string
        age: 12, // required field with type number
        country: 'geos', // required field with type string
        salary: 5000 // required field with type number
    });

    let uk=db.create({
        name: 'shota', // required field with type string
        age: 25, // required field with type number
        country: 'ge', // required field with type string
        salary: 320 // required field with type number
    });

let query={
name:"Pitter",
country: "ge",
age: {min:20},
salary: {min: 300,
         max: 600}  };

console.log(db.find(query));
/*
ხო, მე როგორც გავიგე, ქვეყანას და სახელს რაც შეეხება ან
ერთი უნდა დაემთხვეს და ან მეორე, მაგრამ ხელფასის და ასაკის პირობები
ორივე აუცილებლად უნდა დაკმაყოფილდეს და მგონია, რომ არ ვცდები 
(min max -ს არ ვგულისხმობ რა თქმა უნდა ამაზე გასაგებია რომ ან
ერთი უნდა იყოს, ან - მეორე, ან - ორივე)

*/
    /*console.log(db.read(u),"\n\n\n\n");
    console.log(db.readAll(),"\n\n\n\n");
    db.update(u,{valiko:123,svaniko:12333});
    db.delete(ub);
    console.log(db.read(u),"\n\n\n\n");
    console.log(db.readAll());*/