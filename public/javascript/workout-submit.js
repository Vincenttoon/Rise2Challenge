


function workoutSaveBar () {

    const headerCont = document.querySelector('.result-head');

    const workoutNameCont = document.createElement('div')
    const workoutNameInput = document.createElement('input')
    workoutNameInput.setAttribute('type', 'text')
    workoutNameInput.setAttribute('id', 'workoutName')
    const workoutSaveBtn = document.createElement('btn')
    workoutSaveBtn.classList.add('btn', 'btn-lg', 'submit-btn')
    workoutSaveBtn.setAttribute('id', 'saveBtn')


    headerCont.appendChild(workoutNameCont);
    workoutNameCont.appendChild(workoutNameInput);
    headerCont.appendChild(workoutSaveBtn);

};

function workoutSubmit () {
   //locate selected exercises
   Arr = [];
   wArr = [];
   let selectedEx = (document.querySelectorAll(".select"))
   selectedEx.forEach((selected) => {
    Arr.push(selected)
   })
   for (let i = 0; i < Arr.length; i++){
   let wType = Arr[i].childNodes[1].innerText
   let wInt = Arr[i].childNodes[3].innerText
   let wName = Arr[i].childNodes[2].innerText
   let id = Arr[i].childNodes[0].innerText
   let newWorkoutObject = new Object();
   newWorkoutObject = {
    "id" : id,
    "name" : wName,
    "ex_type": wType,
    "intensity" : wInt
   };


   console.log(Arr)
   wArr.push(newWorkoutObject)

}

console.log(wArr)

let exIds = wArr.map(s=>s.id)
console.log(exIds)
let workout = document.getElementById('workoutName').value;


const post = {
    name: workout,
    exArr: exIds
}

fetch('/api/workout', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body:post})
    .then(function(response){
        return response.json()
    })


}




const handleSubmit = (event) => {
    

const focusCheckboxes = document.querySelectorAll('.workout-checkbox');
    const selectedFocus = [];
//push to array
    focusCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedFocus.push(checkbox.name);
        }
    });

    const exerciseNameCheckboxes = document.querySelectorAll('.exercise-checkbox');
    const selectedExerciseName = [];

    exerciseNameCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedExerciseName.push(checkbox.name)
        }
    });
    //for results into a JSON obj
    const pump = {


        //workoutName: document.querySelector('.return-text').value,
        ex_type: selectedFocus,

        //exerciseName: document.querySelector('.return-text').value,
        intensity: selectedExerciseName,
    };

     const pumpType = pump.ex_type.toString();
     const pumpInt = pump.intensity.toString();

    
console.log(pump);

//send request to GET match results from backend 
fetch('/api/exercise', {
    method: 'GET',
    headers:{
        'Content-type': 'application/json',
    },
})
.then((response) => { return response.json()})
.then((allEx) => {
    console.log(allEx)
    const exList = allEx.filter((exercise) => 
    {
        // for (let i = 0; i < allEx.length; i++){
        return exercise.ex_type === pumpType && exercise.intensity === pumpInt
        // return exercise.ex_type === pump.ex_type[i] && exercise.intensity === pump.intensity[i]
        // }
    })
    function displayEx() {
    console.log(allEx)
    workoutSaveBar()
    //Display all exercises
    
    for (let i = 0; i < allEx.length; i++){
    
    // console.log(exList)
    // console.log(exList[i].id)
    let Container = document.getElementById('exCont');
    const exCard = document.createElement('div');
    exCard.classList.add('d-flex', 'flex-wrap' ,'justify-content-around', 'result-return','hover');
    // exCard.setAttribute('id',exList[i].id);
    exCard.onclick = function(){
        if(exCard.classList.contains('select')){
        exCard.classList.remove('select')
        }
        else{
        exCard.classList.add('select');
    }}
    const exId = document.createElement('p');
    exId.classList.add('return-text');
    exId.innerText = allEx[i].id;

    const exType = document.createElement('h3');
    exType.classList.add('return-text');
    exType.innerText = allEx[i].ex_type;//put array obj data here
            
    const exInt = document.createElement('h3');
    exInt.classList.add('return-text');
    exInt.innerText = allEx[i].intensity;//put array obj data here

    const exName= document.createElement('h3');
    exName.classList.add('return-text');
    exName.innerText = allEx[i].ex_name;//put array obj data here

    Container.appendChild(exCard);
    exCard.appendChild(exId);
    exCard.appendChild(exType);
    exCard.appendChild(exName);
    exCard.appendChild(exInt);
}
    }
displayEx();

document
.querySelector("#saveBtn")
.addEventListener("click", workoutSubmit)

})
}

    
document
.querySelector(".submit-btn")
.addEventListener("click", handleSubmit);

