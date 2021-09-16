function rmHtmlTags(a){
    if(typeof a !=='string')throw new TypeError("We expected string");
while(true){
    a=a.replace(a.substring(a.indexOf("<"),a.indexOf(">")+1),"");
     if(a.indexOf("<")===-1 && a.indexOf(">")===-1)break;}
a=a.trim();
return a;}
//===================================
var b=" <p><strong><em>Content</em></strong></p>";

console.log(rmHtmlTags(b));