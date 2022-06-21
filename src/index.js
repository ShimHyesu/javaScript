import "./styles.css";

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
  James: 600
};
let salaries_null = {};

function topSalary(obj) {
  let max = 0;
  let maxName = null;

  if (Object.keys(obj).length === 0) return null;

  for (let [name, value] of Object.entries(obj)) {
    if (max < value) {
      max = value;
      maxName = name;
    }
  }
  return maxName;
}

alert(topSalary(salaries_null));
alert(topSalary(salaries));
