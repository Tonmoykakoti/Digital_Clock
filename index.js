const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const date = document.querySelector('.date')




const clock = function(){
    setInterval( () => {      
        hours.innerHTML = `${new Date().getHours()%12} <br><h6 style="font-size: 30px;color:#effb06;">Hours</h6>` 
        minutes.innerHTML = `${new Date().getMinutes()} <br><h6 style="font-size: 30px;color:#effb06;">Minutes</h6>`
        seconds.innerHTML = `${new Date().getSeconds()} <br><h6 style="font-size: 30px;color:#effb06;">Seconds</h6>`
    },1000)
}
window.addEventListener('DOMContentLoaded', clock)



date.innerHTML = new Date().toDateString()





