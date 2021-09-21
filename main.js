const today = new Date();
const date = today.getDate() - 1;
const month = today.getMonth() + 1;
const dateText = document.querySelector('#date');
const timingsText = document.querySelector('#timings');

function ifLocation(position){
    const coordinates = position.coords;
    console.log(coordinates.latitude);
    console.log(coordinates.longitude);
}
function noLocation(error){
    console.log(`ERROR(${error.code}): ${error.message}`);
}
navigator.geolocation.getCurrentPosition(ifLocation, noLocation);

async function getTimes(){
    const apiURL = `http://api.aladhan.com/v1/calendarByCity?city=New York&country=United States&method=2&month=${month}&year=2021`;
    const response = await fetch(apiURL, {mode: 'cors'});
    const timeData = await response.json();
    const timeObject = timeData.data[date].timings;
    dateText.textContent = timeData.data[date].date.readable;
    for (let key in timeObject){
        const newDiv = document.createElement('div');
        newDiv.id = "time"
        newDiv.textContent = `${key} : ${(timeObject[key]).replace('(EDT)', '')}`
        timingsText.appendChild(newDiv);
        console.log(key)
        console.log(timeObject[key])
    }

}

getTimes();