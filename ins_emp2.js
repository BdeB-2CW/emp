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
  })
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
}
