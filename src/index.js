import "./styles.css";

function copySorted(arr) {
  /*
  let cloneArr = [];

  for (let i = 0; i < arr.length; i++) {
    cloneArr[i] = arr[i];
  }
  cloneArr.sort();

  return cloneArr;
  */
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)
