const btnEl = document.querySelector('.btn');


function getTask(){
  fetch("http://www.boredapi.com/api/activity/")
    .then((response) => {
      if(response.ok){
        return response.json()
      } else {
        throw new Error("Error");
      }
    })
    .then(data => {
      document.getElementById("task").innerHTML = data.activity;
    })
    .catch(error => console.error("Fetch error: ", error));
}


btnEl.addEventListener('click', getTask);



