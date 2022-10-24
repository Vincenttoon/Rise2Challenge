// toggles workouts dropdown
document.querySelector('.select-field').addEventListener('click',()=>{
    document.querySelector('.list').classList.toggle('show');
    document.querySelector('.down-arrow').classList.toggle('rotate180');

});

// toggles exercise dropdown
document.querySelector('.select-field-2').addEventListener('click',()=>{
    document.querySelector('.list-2').classList.toggle('show');
    document.querySelector('.down-arrow-2').classList.toggle('rotate180');

});

// toggles create exercise field
document.querySelector('.create-exercise-btn').addEventListener('click', ()=>{
    document.querySelector('.hide-exercise').classList.toggle('show');
});

// toggles create workout field
document.querySelector('.create-workout-btn').addEventListener('click', ()=>{
    document.querySelector('.hide-workout').classList.toggle('show');
});

// should submit data to workout database and toggle create workout visibility
document.querySelector('.create-workout-submit').addEventListener('click', ()=> {
    document.querySelector('.hide-workout').classList.toggle('show');

    // Push new workout to Workout data workout.name
});

// should submit data to exercise database and toggle create exercise visibility
document.querySelector('.create-exercise-submit').addEventListener('click', ()=> {
        // Push new workout to Workout data workout.name

    document.querySelector('.hide-exercise').classList.toggle('show');
});