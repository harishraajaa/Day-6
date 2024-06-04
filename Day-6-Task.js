
//1.Get all the countries from Asia continent /region using Filter method

// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all','true');
// request.send();
// request.onload=function (){
//     var data=JSON.parse(this.response);
// let countries= data.filter((e)=>{
//     if(e.continents=="Asia"){
//         return true
//     }
//     else
//         return false
// }).map((e)=>e.name.official)
// console.log(countries)}

//2.Get all the countries with a population of less than 2 lakhs using Filter method

// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all','true');
// request.send();
// request.onload=function (){
//     var data=JSON.parse(this.response);
//     let popcountry= data.filter((e)=>{
//             if(e.population<200000){
//                 return true
//             }
//             else
//                 return false
//         }).map((e)=>e.name.official)
//         console.log(popcountry)}

//3.Print the following details name, capital, flag, using forEach method

// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all','true');
// request.send();
// request.onload=function (){
//     var data=JSON.parse(this.response);
//     data.forEach((e)=>{
//         console.log(`Name:${e.name.official} Capital:${e.capital} Flag:${e.flag}`)
//     })}

//4.Print the total population of countries using reduce method

// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all','true');
// request.send();
// request.onload=function (){
//     var data=JSON.parse(this.response);
// let total=data.reduce((acc,i)=>{return acc+i.population},0)
// console.log(`Total Population: ${total}`)}

//5.Print the country that uses US dollars as currency.

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