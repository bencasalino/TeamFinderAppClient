
  document.querySelector("#submittedForm").addEventListener("submit", event => {
  event.preventDefault();
  postData();
});

function getFormData() {
  var data = new FormData(document.querySelector("#submittedForm"));

  return {
        name: data.get("nameInput"),
        city: data.get("cityInput"),
        state: data.get("stateInput"),
        country: data.get("countryInput"),
        division: data.get("divisionInput"),
  };
}

function postData() {
  fetch("https://infinite-plateau-10584.herokuapp.com/", {
    method: "post",
    body: JSON.stringify(getFormData()),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })

    .then(response => response.json())
    .then(response => {
    });
}
