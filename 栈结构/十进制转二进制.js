function Stack() {
  this.items = [];
  // this.push = function () {

  // }
  Stack.prototype.push = function (element) {
    this.items.push(element);
  };
  Stack.prototype.pop = function () {
    this.items.pop();
  };
  Stack.prototype.seek = function () {
    return this.items[this.items.length - 1];
  };
  Stack.prototype.isEmpty = function () {
    return this.items.length == 0;
  };
  Stack.prototype.size = function () {
    return this.items.length;
  };
  Stack.prototype.toString = function () {
    var res = " ";
    for (var i = 0; i < this.items.length; i++) {
      res += this.items[i] + " ";
    }
    return res;
  };
}
function decToBin (num) {
    var s = new Stack();
    while(num > 0) {
        s.push(num % 2);
        num = Math.floor(num / 2);
    }
    var res = '';
    while(!s.isEmpty())  
        res += s.pop();
    return res;
}
console.log(decToBin(100));