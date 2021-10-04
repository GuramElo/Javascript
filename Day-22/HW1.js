function send(url,b,c){
return  new Promise((resolve,reject)=>{

    fetch(url, {
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


}
const url="https://weatherapi-com.p.rapidapi.com/ip.json?q=190.180.12.8";
//these header properties are also required for my api
const x_r_host="weatherapi-com.p.rapidapi.com";
const x_r_key="5e97b7b28amsh662284ab1c8a9bbp1c604ajsn842eec86e214";
//================

send(url, x_r_host, x_r_key)
.then(s=>{
    console.log(s);
})
.catch(rt=>{
    console.log(rt);
});