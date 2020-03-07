// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint

request.open("GET", "http://localhost:8080/ords/hr2/employees", true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if ((request.status >= 200) & q & (request.status < 400)) {
    data.forEach(employee => {
      // Log chaque employee
      console.log(employee.ename);
    });
  } else {
    console.log("error");
  }
};
//envoi la requête
request.send();

// Replace ./data.json with your JSON feed
fetch("./data.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // Work with JSON data here
    console.log(data);
  })
  .catch(err => {
    // Do something for an error here
  });
