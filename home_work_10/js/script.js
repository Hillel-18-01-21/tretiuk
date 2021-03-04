function calc (closedNum) {
  return  {
    add: function (nextNum) {
      closedNum += nextNum;
    },
    sub:function (nextNum) {
      closedNum -= nextNum;
    },
    div:function (nextNum){
      closedNum /= nextNum;
    },
    mult:function (nextNum) {
      closedNum *= nextNum;
    },
    getResult:function () {
      return closedNum;
    },
  }
}
  
const first = calc(10);

console.log(first.add(10))
console.log(first.sub(5))
console.log(first.div(10))
console.log(first.mult(100))
console.log(first.getResult())
console.dir(first)



