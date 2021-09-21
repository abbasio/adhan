const today = new Date();
const date = today.getDate() - 1;
const month = today.getMonth() + 1;
const dateText = document.querySelector('#date');
const timingsText = document.querySelector('#timings');


async function getTimes(){
    const apiURL = `http://api.aladhan.com/v1/calendarByCity?city=New York&country=United States&method=2&month=${month}&year=2021`;
    const response = await fetch(apiURL, {mode: 'cors'});
    const timeData = await response.json();
    timingsText.textContent = JSON.stringify(timeData.data[date].timings);
    dateText.textContent = timeData.data[date].date.readable;
}

getTimes();