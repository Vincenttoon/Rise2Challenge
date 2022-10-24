document.querySelector('.select-field').addEventListener('click',()=>{
    document.querySelector('.list').classList.toggle('show');
    document.querySelector('.down-arrow').classList.toggle('rotate180');

});

document.querySelector('.select-field-2').addEventListener('click',()=>{
    document.querySelector('.list-2').classList.toggle('show');
    document.querySelector('.down-arrow-2').classList.toggle('rotate180');

});


document.querySelector('.create-exercise-btn').addEventListener('click', ()=>{
    document.querySelector('.hide-exercise').classList.toggle('show');
});

document.querySelector('.create-workout-btn').addEventListener('click', ()=>{
    document.querySelector('.hide-workout').classList.toggle('show');
});

document.querySelector('.create-workout-submit').addEventListener('click', ()=> {
    document.querySelector('.hide-workout').classList.toggle('hide');

    // Push new workout to Workout data workout.name
});

document.querySelector('.create-exercise-submit').addEventListener('click', ()=> {
        // Push new workout to Workout data workout.name
        
    document.querySelector('.hide-exercise').classList.toggle('hide');
});