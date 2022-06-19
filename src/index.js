import "./styles.css";

function shuffle(arr) {
  let newArr = [];
  let rand = [];
  //인덱스를 랜덤으로
  for (let i = 0; i < arr.length; i++) {
    rand[i] = Math.round(Math.random() * 10) % arr.length;
    for (let j = 0; j < i; j++) {
      if (rand[i] === rand[j]) i--;
    }
    newArr[i] = arr[rand[i]];
  }

  return newArr;
}

// 1, 2, 3으로 만들 수 있는 모든 순열의 빈도를 세줍니다.
let count = {
  "123": 0,
  "132": 0,
  "213": 0,
  "231": 0,
  "321": 0,
  "312": 0
};

for (let i = 0; i < 10000; i++) {
  let array = [1, 2, 3];
  let newArr = shuffle(array);
  count[newArr.join("")]++;
}

// 만들 수 있는 모든 순열의 생성 빈도를 세서 출력해줍니다.
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}
