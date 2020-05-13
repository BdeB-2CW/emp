function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById("employees");
//const url = "http://localhost:8080/ords/hr2/employees";
const url =
  "https://uv0ncfhhdwwjeyx-db202001241215.adb.ca-toronto-1.oraclecloudapps.com/ords/hr2/employees";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let employees = data.items; //.results;
    return employees.map(function (employee) {
      let li = createNode("li"),
        span = createNode("span");
      span.innerHTML = `${employee.empno} ${employee.ename}`;
      append(li, span);
      append(ul, li);
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });

  