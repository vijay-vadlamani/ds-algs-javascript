import Node from "./Node";

export default class QueueLinkedList {
  constructor() {
    this.front = null; // define front and back of linked list with null value
    this.back = null;
  }

  isEmpty() {
    return !this.front; // if the front has no value returns false
  }

  enqueue(_value) {
    console.log("ENQUEUE", _value);
    // declare a new node and pass the value
    let newNode = new Node(_value);

    if (this.isEmpty()) {
      // if list is empty set the new variable as the value and point both front and back pointers to the only value in the list.
      this.front = this.back = newNode;
    } else {
      // if the value is not empty then set the back.next value to the new node
      this.back.next = newNode;
      // move the back pointer to point to the new node
      this.back = newNode;
    }
    // print the list as an array
    this.print();
  }

  print() {
    // check if the list is empty
    if (this.isEmpty()) {
      console.log("This Queue is empty");
    } else {
      // declare a temp array to store the values that need to be displayed
      let tempArr = [];
      let temp = this.front;

      // while the temp variable has values loop through
      while (temp) {
        // push the value of the first element into the array
        tempArr.push(temp.value);
        // Move the temp pointer to the next element in the list
        temp = temp.next;
      }
      console.log(tempArr.join(","));
    }
  }

  dequeue() {
    let node = this.front;
    console.log("Dequeue", node ? node.value : "");
    // if the list is not empty loop through
    if (!this.isEmpty()) {
      //set the pointer to the next element so the reference to first element is removed
      this.front = this.front.next;
    }

    // if the list is empty or if the front is null
    if (!this.front) {
      // set the back of the list to empty
      this.back = null;
    }

    this.print();
    // return the node
    return node;
  }
}
