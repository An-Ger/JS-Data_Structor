function LinkedList () {
    //属性
    this.head = null;
    function node (data) {
        this.data = data;
        this.next = null;
    }
    this.length = 0;
    LinkedList.prototype.append = function (data) {
        if(this.length == 0) {
            let newNode = new node(data);
            this.head = newNode;
        }
        else {
            let newNode = new node(data);
            let current = this.head;
            //最后一个节点的next为空
            while(current.next) {
                current = current.next;
            }
            //最后节点指向新节点
            current.next = newNode;
        }
        this.length += 1;
    }
    LinkedList.prototype.toString = function () {
        let current = this.head;
        let res = ""
        while(current) {
            res += current.data+ " ";
            current = current.next;
        }
        return res;
    }
    LinkedList.prototype.insert = function (position, data) {
        //越界判断
        if(position < 0 || position > this.length) return false;
        let newNode = new node(data);
        if(position == 0) {
            newNode.next = this.head.next;
            this.head = newNode;
        }
        else{
            let index = 0;
            let current = this.head;
            let previous = null;
            while(index++ < position) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.length += 1;
    }
    LinkedList.prototype.get = function (position) {
        if(position < 0 || position >= this.length) return null;
        let current = this.head;
        let index = 0;
        while(index++ < position) {
            current = current.next;
        }
        return current.data;
    }
    LinkedList.prototype.indexOf = function (data) {
        let current = this.head;
        let index = 0;
        while(current) {
            if(current.data == data) {
                return index;
            }
            current = current.next;
            index += 1;
        }
        return -1;
    }
    LinkedList.prototype.upDate = function (position, data) {
        if(position < 0 || position >= this.length) return false;
        let current = this.head;
        let index = 0;
        while(index++ < position) {
            current = current.next;
        }
        current.data = data;
        return true;
    }
    LinkedList.prototype.removeAt = function (position) {
        let current = this.head;
        if(position < 0 || position >= this.length) return false;
        if(position == 0) this.head = this.head.next;
        else {
            let index = 0;
            let previous = null;
            while(index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length -= 1;
        return current.data;
    }
    LinkedList.prototype.remove = function (data) {
        let position = this.indexOf(data);
        return this.removeAt(position);
    }
    LinkedList.prototype.isEmpty = function () {
        return this.length == 0;
    }
    LinkedList.prototype.size = function () {
        return this.length;
    }
}
let list = new LinkedList();
list.append("abc")
list.append("aaa")
list.append("bbb")
list.append("ccc")
list.insert(2, "ddd")
console.log(list);
console.log(list.toString());
console.log(list.get(3));
console.log(list.indexOf("ddd"));
console.log(list.upDate(2, "ppp"));
console.log(list.toString());
list.removeAt(2);
console.log(list.toString());
list.remove("bbb")
console.log(list.toString());
console.log(list.length);
console.log(list.isEmpty());
console.log(list.size());