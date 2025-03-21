console.log("first line")
for(var i=1;i<=5;i++){
   console.log(i)
}
setTimeout(function(){
console.log("timeout log")
},0)
console.log("last line")