function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const emp_ul = document.getElementById("employees");
//const URL = "http://localhost:8080/ords/hr2/employees"; si la bd est locale
const URL =
  "https://uv0ncfhhdwwjeyx-db202001241215.adb.ca-toronto-1.oraclecloudapps.com/ords/hr2/employees";
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let employees = data.items; //.results;
    return employees.map(function (employee) {
      if (employee.job==='CLERK') {
                                    let li = createNode("li"),
                                      span = createNode("span");
                                    span.innerHTML = `${employee.empno} ${employee.ename}`;
                                    append(li, span);
                                    append(emp_ul, li);
                                  }
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
