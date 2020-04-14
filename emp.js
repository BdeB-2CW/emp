function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById("employees");
const url = "http://localhost:8080/ords/hr2/employees";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let employees = data.items; //.results;
    return employees.map(function (employee) {
      let li = createNode("li"),
        span = createNode("span");
      span.innerHTML = `${employee.ename} ${employee.job}`;
      append(li, span);
      append(ul, li);
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
