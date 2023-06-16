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

btnWeekly.addEventListener('click', function () {
    showHoursWeekly ();
    showPreviousWeekly ();

    hoursWeekly.forEach(item => {
        if(item.classList.contains('mostrar')){
            hideHoursDailyMonthly ();
        }
    });

    previousWeekly.forEach(item => {
        if(item.classList.contains('mostrar')){
            hidePreviousDailyMonthly ();
        }
    });
});

btnMonthly.addEventListener('click', function () {
    showHoursMonthly();
    showPreviousMonthly();

    hoursMonthly.forEach(item => {
        if(item.classList.contains('mostrar')){
            hideHoursDailyWeekly();
        }
    });

    previousMonthly.forEach(item => {
        if(item.classList.contains('mostrar')){
            hidePreviousDailyWeekly();
        }
    });
});

function showHoursDaily (){
    hoursDaily.forEach(item => {
        item.classList.remove('esconder')
        item.classList.add('mostrar')
    });   
};

function showPreviousDaily () {
    previousDaily.forEach(item => {
        item.classList.remove('esconder')
        item.classList.add('mostrar')
    });
};

function hideHoursWeeklyMonthly (){
    hoursWeekly.forEach(item => {
        item.classList.remove('mostrar')
        item.classList.add('esconder')
    });
    hoursMonthly.forEach(item => {
        item.classList.remove('mostrar')
        item.classList.add('esconder')    
    });
};
    
function hidePreviousWeeklyMonthly() {
    previousWeekly.forEach(item => {
        item.classList.remove('mostrar');
        item.classList.add('esconder');  
    });
    previousMonthly.forEach(item => {
        item.classList.remove('mostrar');
        item.classList.add('esconder');
    });
};

function showHoursWeekly (){
    hoursWeekly.forEach(item => {
        item.classList.remove('esconder')
        item.classList.add('mostrar')
    });
};

function showPreviousWeekly (){
    previousWeekly.forEach(item => {
        item.classList.remove('esconder')
        item.classList.add('mostrar')
    });
};

function hideHoursDailyMonthly (){
    hoursDaily.forEach(item => {
        item.classList.remove('mostrar')
        item.classList.add('esconder')
    });
    hoursMonthly.forEach(item => {
        item.classList.remove('mostrar')
        item.classList.add('esconder')
    });
};

function hidePreviousDailyMonthly (){
    previousDaily.forEach(item => {
        item.classList.remove('mostrar')
        item.classList.add('esconder')
    });
    previousMonthly.forEach(item => {
        item.classList.remove('mostrar')
        item.classList.add('esconder')
    });
};

function showHoursMonthly(){
    hoursMonthly.forEach(item => {
        item.classList.remove('esconder')
        item.classList.add('mostrar')
    });
};

function showPreviousMonthly(){
    previousMonthly.forEach(item => {
        item.classList.remove('esconder')
        item.classList.add('mostrar')
    });
};

function hideHoursDailyWeekly(){
    hoursDaily.forEach(item => {
        item.classList.remove('mostrar')
        item.classList.add('esconder')
    });

    hoursWeekly.forEach(item => {
        item.classList.remove('mostrar')
        item.classList.add('esconder')
    });
};

function hidePreviousDailyWeekly(){
    previousDaily.forEach(item => {
        item.classList.remove('mostrar')
        item.classList.add('esconder')
    });
    previousWeekly.forEach(item => {
        item.classList.remove('mostrar')
        item.classList.add('esconder')
    });
};