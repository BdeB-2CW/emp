function ins_empl() {
  let emp_rec = {
    empno: 7388,
    ename: "JIF",
    job: "CLERK",
    mgr: 7902,
    hiredate: "1980-12-17T00:00:00Z",
    sal: 800,
    comm: null,
    deptno: 20,
  };
  emp_rec.empno = document.getElementById("empno").value;
  emp_rec.ename = document.getElementById("ename").value;

  const URL =
      "https://uv0ncfhhdwwjeyx-db202001241215.adb.ca-toronto-1.oraclecloudapps.com/ords/hr2/employees/";
    
fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emp_rec),
  });
  .then((resp) => resp.json()
    
 /* let response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emp_rec),
  });
  let result = await response.json();
  alert(result.message);*/
}



fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let employees = data.items; //.results;
    return employees.map(function (employee) {
      if (employee.job === "CLERK") {
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