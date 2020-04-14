/*const url = "http://localhost:8080/ords/hr2/employees";
let response = await fetch(url);

if (response.ok) {
  // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
  console.log(json);
} else {
  alert("HTTP-Error: " + response.status);
}*/
function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById("employees");
const url = "https://randomuser.me/api/?results=10";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let employees = data.results;
    return employees.map(function (employee) {
      let li = createNode("li"),
        //  img = createNode("img"),
        span = createNode("span");
      //img.src = employee.picture.medium;
      span.innerHTML = `${employee.name.first} ${employee.name.last}`;
      //append(li, img);
      append(li, span);
      append(ul, li);
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
