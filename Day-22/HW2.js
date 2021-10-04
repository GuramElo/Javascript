function Countries(url,b,c){
    this.send=(num)=>{
if(typeof url !="string")throw new TypeError("`url` isn't string type");
if(typeof num !="number")throw new TypeError("`num` isn't number type");
        return new Promise((resolve,reject)=>{

            fetch(url+num, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": b,
                    "x-rapidapi-key": c
                }
        }).then(st=>{
            if(st.status===200)resolve(st.json());
           return st.status;
           }).catch(io=>{
               reject(`We have error, status code: ${io}`);
           });
        
        
        
        
        });



    };
}
//these header properties are also required for my api
const x_r_host="weatherapi-com.p.rapidapi.com";
const x_r_key="5e97b7b28amsh662284ab1c8a9bbp1c604ajsn842eec86e214";
const url="https://weatherapi-com.p.rapidapi.com/ip.json?q=190.180.12.";
var countries=new Countries(url, x_r_host, x_r_key);

//================
/*
ok !!!!
in this instance I'm using api which 
takes ip address as property,
so instead of size that number will be concatenated
with 190.180.12.x,
in x's stead.

*/

try{countries.send(100/*num*/)
.then(s=>{
    console.log(s);
})
.catch(rt=>{
    console.log(rt);
});
} catch(error){
    console.log(error);
}