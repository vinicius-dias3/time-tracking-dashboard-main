const btnDaily = document.getElementById('btn-daily');
const btnWeekly = document.getElementById('btn-weekly');
const btnMonthly = document.getElementById('btn-monthly');

const hoursDaily = document.querySelectorAll('.h-daily');
const hoursWeekly = document.querySelectorAll('.h-weekly');
const hoursMonthly = document.querySelectorAll('.h-monthly');

const previousDaily = document.querySelectorAll('.p-daily');
const previousWeekly = document.querySelectorAll('.p-weekly');
const previousMonthly = document.querySelectorAll('.p-monthly');

btnDaily.addEventListener('click', function () {
    
    showHoursDaily ();       
    showPreviousDaily ();
    
    hoursDaily.forEach(item => {
        if(item.classList.contains('mostrar')){
            hideHoursWeeklyMonthly ();
        }    
    })
    
    previousDaily.forEach(item => {
        if(item.classList.contains('mostrar')){
            hidePreviousWeeklyMonthly ();
        }
    })    
})

function showHoursDaily (){
    hoursDaily.forEach(item => {
        item.classList.remove('esconder')
        item.classList.add('mostrar')
    });   
}

function showPreviousDaily () {
    previousDaily.forEach(item => {
        item.classList.remove('esconder')
        item.classList.add('mostrar')
    });
}

function hideHoursWeeklyMonthly (){
    hoursWeekly.forEach(item => {
        item.classList.remove('mostrar')
        item.classList.add('esconder')
    });
    hoursMonthly.forEach(item => {
        item.classList.remove('mostrar')
        item.classList.add('esconder')    
    });
}
    
function hidePreviousWeeklyMonthly() {
    previousWeekly.forEach(item => {
        item.classList.remove('mostrar');
        item.classList.add('esconder');  
    });
    previousMonthly.forEach(item => {
        item.classList.remove('mostrar');
        item.classList.add('esconder');
    });
}