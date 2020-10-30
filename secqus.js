var tweets=[
    "sachin teweet1",
    "sehwag tweet1",
    "kholi tweet1",
    "sachin teweet2",
    "kholi tweet1"]
var obj=[]
for(data of tweets){
    if(data in obj){
        obj[data]+=1;

    }else{
        obj[data]=1;

    }
}
console.log(obj);
var array=[]
for(element in obj){
    var num=([obj[element],[element]])
    array.push(num);

}
var array=array.sort((a,b)=>b-a)
console.log("sorted array is "+array)
var a=array[0]

console.log("maximum number of tweets"+a)