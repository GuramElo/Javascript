function Validator(){
this.numnum={};
this.charchar={};
for(let a=0;a<10;a++){
    this.numnum[a+""]=true;
};
for(let a=65;a<123;a++){
if(a>90 && a<97)continue;
this.charchar[String.fromCharCode(a)]=true;
};
var A="!#$%&'*+-/=?^_`{|}.~";
for (let a=0;a<A.length;a++){
    this.charchar[A[a]]=true;
}
//0000000000000000000000000000
this.isEmail=(str)=>{

if(str.indexOf("@")===-1){return false;}
if(str.indexOf("@",str.indexOf("@")+1)!==-1){return false;}
let firstpart,secondpart;

firstpart=str.substring(0,str.indexOf("@"));

secondpart=str.substring(str.indexOf("@")+1,str.length);

let ino=0,on=0;
for(let a=0;a<firstpart.length;a++){
if(Boolean(this.charchar[firstpart[a]]) || Boolean(this.numnum[firstpart[a]]))ino++;
}

for(let a=0;a<secondpart.length;a++){
if(Boolean(this.charchar[firstpart[a]]) || Boolean(this.numnum[firstpart[a]]))on++;
}

if(firstpart.length===ino && secondpart.length===on && firstpart[0]!=='.' && 
firstpart[firstpart.length-1]!=='.' && secondpart[0]!=='.' && secondpart[secondpart.length-1]!=='.' && 
str.indexOf("..")===-1 && secondpart.indexOf(".")!==-1 && secondpart.indexOf("_")===-1 && str[0]!=='-' && str[str.length-1]!=='-' && str.indexOf('-.')===-1 && str.indexOf('.-')===-1 && str.indexOf('--')===-1)return true;

else return false;
};
//11111111111111111111111111
this.isDomain=(str1)=>{
let ino=0;
for(let a=0;a<str1.length;a++){
    if(Boolean(this.charchar[str1[a]]) || Boolean(this.numnum[str1[a]]))ino++;
}
if(ino===str1.length && str1.indexOf("_")===-1 && str1.indexOf("..")===-1 && str1[0]!=='-' && str1[str1.length-1]!=='-' && str1.indexOf('-.')===-1 && str1.indexOf('.-')===-1 && str1.indexOf('--')===-1)return true;//aq qveda tireze imitom vazghvev rom im zogad obieqtshi, romlis mixedvitac vamowmeb yvelafers "_"-caa, radgan email-is ert nawilshi egec sheidzleba
else return false;

};
//22222222222222222222222222222222222
this.isPhone=(str2)=>{
let PhoneObj=this.numnum;

for(let a=0;a<5;a++)PhoneObj["+- ()"[a]]=true;

let ino=0;
for(let a=0;a<str2.length;a++)if(PhoneObj[str2[a]] && (str2[a]!=="+" || a===0))ino++;


//ფრჩხილების მიმდევრობის სისწორეს ვამოწმებთ აქ
let ParenthesisisCorrect=((sss)=>{
        let indi=[];
        for(let a=0;a<sss.length;a++){
        if(sss[a]==="("){indi.push("(");continue;}
        if(sss[a]===")" && indi.length>0){indi.pop();continue;}
        if(sss[a]===")" && indi.length===0)return false;}
        if(indi.length===0)return true;
        else return false;})(str2);
//ამ ცვლადში ვინახავთ შედეგს და მერე if-ში ვიყენებთ

if(ino===str2.length && str2[0]!=="-" && str2[str2.length-1]!=="-" && Boolean(ParenthesisisCorrect))return true;
else return false;

}

//33333333333333333333333333333333333
this.isDate=(str3)=>{
                                                             // in this example, formats of dates are: DD/MM/YY or DD.MM.YY
                                                             //let dd,mm,yy,inde,minde,ginde;
                                                             //inde=str3.indexOf(".");
                                                             //minde=str3.indexOf(".",inde+1);
                                                             //dd=Number(str3.substring(0,inde));
                                                             //mm=Number(str3.substring(inde+1,minde));
                                                             //yy=Number(str3.substring(minde+1));
                                                             //if(String(dd)=='NaN' || String(mm)=='NaN' || String(yy)=='NaN')console.log("nope nope nope");
                                                             //else console.log("yes yes yes");
                                                             //console.log(dd,"  ",mm,"  ",yy," ",2.112%);
let dateobj=this.numnum,ino=0,iko=0,piko=0;
dateobj["."]=true;
dateobj["/"]=true;
for(let a=0;a<str3.length;a++){
    if(dateobj[str3[a]])ino++;
    if(str3[a]===".")iko++;
    if(str3[a]==="/")piko++;}
    let dd,mm,inde,minde,ginde;
if(Boolean(iko))ginde=".";
else if(Boolean(piko))ginde="/";
inde=str3.indexOf(ginde);
minde=str3.indexOf(ginde,inde+1);
dd=Number(str3.substring(0,inde));
mm=Number(str3.substring(inde+1,minde));
if(dd>31 || mm>12)return false;


if(ino===str3.length && ((iko===2 && piko===0) || (iko===0 && piko===2)) && str3[0]!=="." && str3[0]!=="/" && str3[str3.length-1]!=="." && str3[str3.length-1]!=="/")return true;
else return false;
}

//4444444444444444444444444444444444
}

/*
ვიკიპედიას ინფორმაციას დავეყრდენი!!!!


*/
var validator= new Validator();


console.log(validator.isDomain("gelizbara#$$#shv12312ilicuedu.ge"));//true
console.log(validator.isDomain("gelizbarashvil_icuedu.ge"),"\n");//false, "_" is not allowed in domain .....


console.log(validator.isEmail("g_elizbarash.vili@cu.edu.ge"));//true
console.log(validator.isEmail("g_elizbarash.vili@cu_edu@ge"),"\n");//false .....


console.log(validator.isPhone("+995 (32) 2-68-68-77"));//true
console.log(validator.isPhone("+995 (32) asdsad=[*+2-68-68-77"),"\n");//false .....


console.log(validator.isDate("31/5/2020"));//true
console.log(validator.isDate("32/13/2020"),"\n");//false .....

//P.S ბოდიში ამხელა კოდისთვის, ცოტა გავერთე, ამოვიჩემე REGEX ის არგამოყენება ☺. ისე ოპტიმიზაციის მხრივ, საკმაოდ კარგადაა მოფიქრებული, მაგრამ შეიძლება კიდევ რაღაცების ჩამატება და ამოღება ☺.