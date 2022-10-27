

function onLoad() {
    
fetch('http://localhost:3000/api/workout', {
    mode: 'no-cors',
    method: 'GET',
    headers:{
        'Content-type': 'application/json',
    },
})
.then((workouts) => {console.log(workouts);})
//Handle data formatting

//Handle data formatting
//Create Cards
//Append Cards
//Hook up delete btn
//
}

window.addEventListener('load', onLoad())