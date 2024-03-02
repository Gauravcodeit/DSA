export default class Stack {
  constructor() {
    this.items = [];
  }

  addElement(value) {
    this.items.push(value);
  }
  removeElement() {
    this.items.pop();
  }

  getItems() {
    console.log(this.items);
  }
  getPeek() {
    console.log(this.items[this.items.length - 1]);
  }
}
const stack = new Stack();
stack.addElement(2);
stack.addElement(3);
stack.addElement(4);
stack.addElement(5);
stack.getItems();
stack.removeElement();
stack.getItems();
stack.addElement(6);
stack.getPeek();
stack.getItems();
