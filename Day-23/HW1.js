function DB(){
//======
this.create=(a)=>{
              if(typeof a !== 'object' || (typeof a.name !="string" && a.name!=undefined) || (typeof a.country !="string" && a.country!=undefined) || (typeof a.age !="number" && a.age!=undefined) || (typeof a.salary !="number" && a.salary!=undefined))throw new TypeError("it is not a valid object");
              //ახალ აიდიებს ვაგენერირებთ აქედან
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


}
var db=new DB();

let u=db.create({
    name: 'Pitter', // required field with type string
    //age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
});

let ub=db.create({
    name: 'Pitter1', // required field with type string
    age: 212, // required field with type number
    country: 'geos', // required field with type string
    salary: 5000 // required field with type number
});


console.log(db.read(u),"\n\n\n\n");
console.log(db.readAll(),"\n\n\n\n");
db.update(u,{valiko:123,svaniko:12333});
db.delete(ub);
console.log(db.read(u),"\n\n\n\n");
console.log(db.readAll());
