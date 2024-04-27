var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var res = JSON.parse(request.response)
    var casia = res.filter((ele)=>ele.region == "Asia");
    var cpop = casia.reduce((acc,cv)=>acc+cv.population,0);
    console.log(cpop)
}