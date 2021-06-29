
const cityName= document.getElementById("cityName");
const serachBtn = document.getElementById("searchBtn");

const city_name = document.getElementById("city_name");
const temp = document.getElementById("apitemp");
const min_temp = document.getElementById("api_mintemp");
const max_temp = document.getElementById("api_maxtemp");
const datahide = document.querySelector(".hide_data");
const datahide2 = document.querySelector(".hide_data2");

// date and time by js

var dayName =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var   monthName =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var d = new Date();
var day = dayName[d.getDay()]
var date = d.getDate();
var month =monthName[d.getMonth()]


document.getElementById("date").innerHTML=date+" "+month;
document.getElementById("day").innerHTML=day;

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
       city_name.innerHTML="enter city name";
       datahide.classList.add("hide_data")
       datahide2.classList.add("hide_data2")
    }
    else{
        try{
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=97d65377f14619109e07c30aae657128&units=metric`
                const response = await fetch(url);
                const Data = await response.json();
                const arrData = [Data];

                city_name.innerHTML=arrData[0].name+","+arrData[0].sys.country;
                temp.innerHTML=arrData[0].main.temp;
                min_temp.innerHTML=arrData[0].main.temp_min;
                max_temp.innerHTML=arrData[0].main.temp_max;

               

               
                

                datahide.classList.remove("hide_data") 
                datahide2.classList.remove("hide_data2")                          

                
     }catch{
        city_name.innerHTML="enter city name prpoperly";
        datahide.classList.add("hide_data")
        datahide2.classList.add("hide_data2")
     }
   }
}


serachBtn.addEventListener("click",getInfo);


