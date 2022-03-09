let main = document.getElementsByClassName("main")
let input = document.getElementById('input')
let error = document.getElementById('error')
let all = document.getElementById('all')

let audio;


// fetch api function
function fetchApi(word) {
  fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
      "x-rapidapi-key": "f536deaa77msh95b373ba47d8dd0p1c7bd1jsn70cb9e9aa300"
    }
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      if(TypeError == true){
        error.textContent = "not found"
      } else {
        all.innerHTML = `<div class="border-bottom border-5">
        <h4> First Definition</h4>
        <div class="bg-white mt-1">
      <h6 class="fw-bold border-start border-warning border-5 px-1"> Meaning <span class="phonetics"
          id="phonetics"> <i class="fa-solid fa-volume-high"></i> </span></h6>
      <p> ${data.list[0].definition} </p>
      <h6 class="fw-bold border-start border-warning border-5 px-1"> Example </h6>
      <p class="mb-0"> ${data.list[0].example}</p>
      </div>
    </div>
   
    <h4> Second Definition</h4>
    <div class="border-bottom border-5">
    <div class="bg-white mt-1">
  <h6 class="fw-bold border-start border-warning border-5 px-1"> Meaning <span class="phonetics"
      id="phonetics"> <i class="fa-solid fa-volume-high"></i> </span></h6>
  <p> ${data.list[1].definition} </p>
  <h6 class="fw-bold border-start border-warning border-5 px-1"> Example </h6>
  <p class="mb-0"> ${data.list[1].example}</p>
  </div>
  </div>
  
    `
      }
      
    })
    .catch(err => {
      console.error(err);
    });

}

input.addEventListener("keyup", e => {
  if (e.key === "Enter" && e.target.value) {
    fetchApi(e.target.value);
  }

})

btn.addEventListener("click", e => {
  fetchApi(input.value);
})

// phone.addEventListener('click', () => {
//   audio.play()
// })