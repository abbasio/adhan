//---------GET DATE
const today = new Date();
const date = today.getDate() - 1;
const month = today.getMonth() + 1;
const year = today.getFullYear();
const dateText = document.querySelector('#date');
const timingsText = document.querySelector('#timings');


navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    async function getTimes() {
        const apiURL = `http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=2&month${month}&year=${year}`;
        const response = await fetch(apiURL, { mode: 'cors' });
        const timeData = await response.json();
        const timeObject = timeData.data[date].timings;
        dateText.textContent = timeData.data[date].date.readable;
        for (let key in timeObject) {
            const newDiv = document.createElement('div');
            newDiv.id = "time"
            newDiv.textContent = `${key} : ${(timeObject[key]).replace(/\s*\(.*?\)\s*/g, '')}`
            timingsText.appendChild(newDiv);
            console.log(key)
            console.log(timeObject[key])
        }

    }
    getTimes();
});



