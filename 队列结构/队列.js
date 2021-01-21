function Queue () {
    //属性
    this.items = [];
    //方法
    Queue.prototype.enqueue = function (element) {
        this.items.push(element);
    }
    Queue.prototype.dequeue = function () {
        this.items.shift();
    }
    Queue.prototype.front = function () {
        return this.items[0];
    }
    Queue.prototype.isEmpty = function () {
        return this.items.length == 0;
    }
    Queue.prototype.size = function () {
        return this.items.length;
    }
    Queue.prototype.toString = function () {
        var l = '';
        this.items.forEach(element => {
            l += element;
        });
        return l;
    }
}
var q = new Queue();
q.enqueue(1);
var s = q.toString();
console.log(typeof (s));