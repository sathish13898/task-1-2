var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    for(i in data)
    console.log(data[i].name);
    var sum=0;
    for(i in data)
    sum=sum+data[i].population;
    console.log(sum);
}
