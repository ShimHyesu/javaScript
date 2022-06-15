import "./styles.css";

let user = new Object();

user.name = "John";
user.surname = "Smith";

user.name = "Pete";

delete user.name;

for (let key in user) {
  alert(key);
  alert(user[key]);
}
