import "./styles.css";

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

styles[Math.round(styles.length - 1 / 2)] = "Classics";

alert(styles.shift());

styles.unshift("Rap", "Reggae");
