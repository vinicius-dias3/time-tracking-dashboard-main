const btnDaily = document.getElementById('btn-daily');
const btnWeekly = document.getElementById('btn-weekly');
const btnMonthly = document.getElementById('btn-monthly');

const hoursDaily = document.querySelector('.h-daily');

btnDaily.addEventListener('click', function () {
    // console.log(btnDaily, btnWeekly, btnMonthly);
    
    showHoursDaily ();
       
    showPreviousDaily ();
    
    const hoursWeekly = document.querySelector('.h-weekly');
    const hoursMonthly = document.querySelector('.h-monthly');
    
    if(hoursDaily.classList.contains('mostrar')){
        hoursWeekly.classList.remove('mostrar')
        hoursWeekly.classList.add('esconder')
        hoursMonthly.classList.remove('mostrar')
        hoursMonthly.classList.add('esconder')
    }
    // FAZER O IF COM O SPAN (PREVIOUS DAILY, WEEKLY E MONTHLY)
})

function showHoursDaily (){
    hoursDaily.classList.remove('esconder')
    hoursDaily.classList.add('mostrar')
}
function showPreviousDaily () {
    const previousDaily = document.querySelector('.p-daily');
    previousDaily.classList.remove('esconder')
    previousDaily.classList.add('mostrar')
}