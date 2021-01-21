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

function pass(num, list) {
    var queue = new Queue();
    list.forEach(element => {
       queue.enqueue(element); 
    });
    while(queue.size() > 1) {
        for(var i = 0; i < num - 1; i++) {
            let j = queue.front();
            queue.dequeue();
            queue.enqueue(j);
        }
        console.log(...queue.items);
        queue.dequeue();
    }
    console.log(queue.size());
    return list.indexOf(queue.front());
}
var a = ['tom', 'fuck', 'ab', 'ba', 'sss?'];
console.log(pass(3, a));