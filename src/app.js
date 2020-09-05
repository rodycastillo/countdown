const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const FINISH = "01-01-2021";
const getMoment = () => {
    const endDate = new Date(FINISH).getTime();
    const currentDate = new Date().getTime();
    const diff = endDate - currentDate;
    const totalSeconds = diff / 1000;
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    daysElement.innerHTML = days;
    hoursElement.innerHTML = printTwoDigits(hours);
    minutesElement.innerHTML = printTwoDigits(minutes);
    secondsElement.innerHTML = printTwoDigits(seconds);
};

setInterval(getMoment, 1000);

const printTwoDigits = (number) => {
    if (number < 10) {
        return "0" + number;
    } else {
        return number;
    }
};