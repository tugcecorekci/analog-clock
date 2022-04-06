let date = new Date()
const handSecond = document.querySelector('.handSecond')
const handMinute = document.querySelector('.handMinute')
const handHour = document.querySelector('.handHour')

currentTime()
setInterval(currentTime, 1000)

function currentTime() {
    date = new Date()
    let second = date.getSeconds()
    let secondDegree = (second / 60) * 360
    let minute = date.getMinutes()
    let minuteDegree = Math.floor(((minute / 60) * 360) + secondDegree / 60)
    let hour = parseInt(date.toLocaleString('en-US', { hour: 'numeric', hour12: true }))
    let hourDegree = Math.floor(((hour / 12) * 360) + minuteDegree / 60)
    handSecond.style.transform = `rotate(${secondDegree}deg)`
    handMinute.style.transform = `rotate(${minuteDegree}deg)`
    handHour.style.transform = `rotate(${hourDegree}deg)`
}