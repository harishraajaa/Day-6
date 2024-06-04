var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var data=JSON.parse(this.response);
    outarr=[]
    for(i=0;i<data.length;i++){

        for(j in data[i].currencies){
            if(j=="USD"){
                outarr.push(data[i].name.official)
            }
        }
     }
     console.log(outarr)}


// data.forEach((e)=>{
//     console.log(`Name:${e.name.official} Capital:${e.capital} Flag:${e.flag}`)
// })