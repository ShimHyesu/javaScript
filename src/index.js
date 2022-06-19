import "./styles.css";

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--; //범위 밖의 요소가 연속으로 나왔을 시, 제거
    }
  }
}

let arr = [5, 3, 8, 1, 10, 11, 12];

filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

alert(arr); // [3, 1]
