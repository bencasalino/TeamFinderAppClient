// capture data from the submit button of form and prevent the default
  document.querySelector("#submittedForm").addEventListener("submit", event => {
  event.preventDefault();
  // part of the fetch function???
  console.log("buttton has been clicked ");
  postData();
});


// this collects all the form data
function getFormData() {
  // this selects all form inputs by query selector
  var data = new FormData(document.querySelector("#submittedForm"));
// returns the data from the form itself?

// for this return the "name:" is the data that it is getting and "nameInput" is the "name" that is on the actuall form feild itself.

  return {
        name: data.get("nameInput"),
        city: data.get("cityInput"),
        state: data.get("stateInput"),
        country: data.get("countryInput"),
        division: data.get("divisionInput"),
  };
}



// this is the post data and i believe it takes the object and strings it because it needs to be in the json format.

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

      // log 
      console.log(response);
    }).catch(console.error);
}
