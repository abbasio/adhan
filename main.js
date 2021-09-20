
async function getTimes(){
    const today = new Date();
    let date = today.getDate() - 1;
    const apiURL = 'http://api.aladhan.com/v1/calendarByCity?city=New York&country=United States&method=2&month=09&year=2021';
    const response = await fetch(apiURL, {mode: 'cors'});
    const timeData = await response.json();
    console.log(timeData.data[date].timings);
    console.log(date);
}

getTimes();