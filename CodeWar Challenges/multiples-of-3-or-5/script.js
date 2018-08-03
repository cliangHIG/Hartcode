var number = document.querySelector(".number");
var submit = document.querySelector(".submit");
var text = document.querySelector(".text");
var sum = [];

submit.addEventListener("click", show);

function show(evt) {
  evt.preventDefault();
  var num = number.value;
  text.innerHTML = num;
}

var multipleButton = document.querySelector(".multiples");
multipleButton.addEventListener("click", multiples);

function multiples(evt) {
  evt.preventDefault();
  var num = number.value;
  for (var i = 1; i < num, i++; ) {
    if (num[i] % 3 === 0 || num[i] % 5 === 0) {
      sum.push(num);
    }
  }
}

var sums = document.querySelector(".sum");
sums.addEventListener("click", sums);

function sums(evt) {
  evt.preventDefault();
  for (var i = 1; i < sum.length, i++; ) {
    return Math.sum(sum[i]);
  }
}

// Solution
function solution(number){
  let toSum = [];
  for (let i = 0; i < number; i++) {
    if (i % 15 === 0 || i % 5 === 0 || i % 3 === 0) toSum.push(i)
  }
  return toSum.reduce((i, next) => i + next, 0)
}
