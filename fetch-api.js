const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#para");
const btn = document.querySelector("#btn");
//async-await for API call

// const getFacts = async () => {
//   console.log("getting data..");
//   let response = await fetch(URL);
//   console.log(response); //JSON format
//   let data = await response.json();
//   console.log(data); //usable data
//   //   console.log(data[0].text);
//   //printing this para in our HTML page
//   factPara.innerHTML = data[0].text;
// };
//Even though we send request to API, it is fetched at runtime
//page is not reloaded anyway

//doing above work by promise chaining
function getFacts() {
  fetch(URL)
    .then((response) => {
      //response in json format-- to be parsed to js object format
      return response.json(); //returned for chaining
    })
    .then((data) => {
      console.log(data);
      factPara.innerHTML = data[2].text;
    });
}

btn.addEventListener("click", getFacts);
