class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(data) {
    this.items.push(data);
  }
  dequeue() {
    console.log("removed element", this.items.shift());
  }
  getItems() {
    console.log(this.items);
  }
  getPeek() {
    console.log(this.items[0]);
  }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.getItems();
queue.dequeue();
queue.getItems();
queue.getPeek();
