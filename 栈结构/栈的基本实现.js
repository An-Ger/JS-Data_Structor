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
var s = new Stack();
s.push(20);
s.pop();
s.push(200);
console.log(typeof s.toString());

