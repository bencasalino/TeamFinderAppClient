const baseURL = "https://infinite-plateau-10584.herokuapp.com/";
var globalResponse = [];

// const newBaseURL = "";

fetch(baseURL)
  .then(response => response.json())
  .then(response => {
    globalResponse.push(response);
    var cityButtons = document.querySelector(".displayAllCityNames");

    for (var i = 0; i < response.length; i++) {
      var displayAllCityNames = document.createElement("li");
      displayAllCityNames.textContent = response[i].name;
      cityButtons.appendChild(displayAllCityNames);

      displayAllCityNames.addEventListener("click", (event) => {
        for (var j = 0; j < globalResponse[0].length; j++) {
          if (globalResponse[0][j].name === event.target.textContent) {

            document.querySelector(".showCityName").textContent = globalResponse[0][j].name;

            document.querySelector(".showTeamName").textContent = globalResponse[0][j].team;

            document.querySelector(".showTeamCountry").textContent = globalResponse[0][j].country;

            document.querySelector(".showTeamState").textContent = globalResponse[0][j].state;

            document.querySelector(".showTeamDiv").src = globalResponse[0][j].division;

            document.querySelector(".showTeamWebsite").href = globalResponse[0][j].website;

            document.querySelector(".showTeamLogo").src = globalResponse[0][j].image;
          }
        }
      })
    }
  })

  .catch(err => console.log(err));
