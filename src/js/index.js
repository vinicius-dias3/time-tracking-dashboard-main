const btnDaily = document.getElementById('btn-daily');
const btnWeekly = document.getElementById('btn-weekly');
const btnMonthly = document.getElementById('btn-monthly');


btnDaily.addEventListener('click', function () {
    // console.log(btnDaily, btnWeekly, btnMonthly);
    function mostrarDaily (){
        const hoursDaily = document.getElementsByClassName('h-daily');
        hoursDaily.classList.remove('esconder')
        hoursDaily.classList.add('mostrar')
    }
    
})