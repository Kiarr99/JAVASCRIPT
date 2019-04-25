class Node {
  constructor(data = null) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class Heap {
  constructor() {
    this.root = null;
  }
  
  insert(data) {
    if (this.root === null) {
      this.root = new Node(data);
      return null;
      
    }
    if (this.root.left === null) {
      this.root.left  = new Node(data);
    }
    
  }
  
}

const test = new Heap(10);
console.log(test.insert);

