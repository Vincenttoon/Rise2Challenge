// Post's data selected from workout and exercise dropdowns
// card is displayed in results-conts

const handleSubmit = (event) => {
    event.preventDefault();
    const workoutCheckboxes = document.querySelectorAll('.workout-checkbox');
    const selectedWorkouts = [];

    workoutCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedWorkouts.push(checkbox.id);
        }
    });

    const exerciseCheckboxes = document.querySelectorAll('.exercise-checkbox');
    const selectedExercises = [];

    exerciseCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedExercises.push(checkbox)
        }
    });

    const pump = {
        workoutName: document.querySelector('.return-text').value,
        workout: selectedWorkouts,

        exerciseName: document.querySelector('.return-text').value,
        exercise: selectedExercises,
    };
    console.log(pump);


    fetch('/api/...', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(pump),
    })
}

document.querySelector('.')