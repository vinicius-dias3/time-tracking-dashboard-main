const btnDaily = document.getElementById('btn-daily');
const btnWeekly = document.getElementById('btn-weekly');
const btnMonthly = document.getElementById('btn-monthly');

const hoursDaily = document.querySelector('.h-daily');
const hoursWeekly = document.querySelector('.h-weekly');
const hoursMonthly = document.querySelector('.h-monthly');

const previousDaily = document.querySelector('.p-daily');
const previousWeekly = document.querySelector('.p-weekly');
const previousMonthly = document.querySelector('.p-monthly');

btnDaily.addEventListener('click', function () {
    // console.log(btnDaily, btnWeekly, btnMonthly);
    
    showHoursDaily ();
       
    showPreviousDaily ();
    
    
    if(hoursDaily.classList.contains('mostrar')){
        hideHoursWeeklyMonthly ();
    } //MELHORAR O IF COM O OPERADOR LOGICO E ||

    if(previousDaily.classList.contains('mostrar')){
        hidePreviousWeeklyMonthly();
    }
    // FAZER O IF COM O SPAN (PREVIOUS DAILY, WEEKLY E MONTHLY)
})


function showHoursDaily (){
    hoursDaily.classList.remove('esconder')
    hoursDaily.classList.add('mostrar')
}

function showPreviousDaily () {
    previousDaily.classList.remove('esconder')
    previousDaily.classList.add('mostrar')
}

function hideHoursWeeklyMonthly (){
    hoursWeekly.classList.remove('mostrar')
    hoursWeekly.classList.add('esconder')
    hoursMonthly.classList.remove('mostrar')
    hoursMonthly.classList.add('esconder')
}
    
function hidePreviousWeeklyMonthly() {
    previousWeekly.classList.remove('mostrar');
    previousWeekly.classList.add('esconder');
    previousMonthly.classList.remove('mostrar');
    previousMonthly.classList.add('esconder');
}