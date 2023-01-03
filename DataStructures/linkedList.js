class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
   constructor(value) {
      let newNode = new Node(value)
      this.head = newNode
      this.tail = newNode
      this.length = 1
   }

   // add push method
   push(value) {
      let newNode = new Node(value)
      if(!this.head) {
         this.head = newNode
         this.tail = newNode
      }
      else {
         this.tail.next = newNode
         this.tail = newNode
      }
      this.length++
      return this
   }

   // add pop method 
   pop() {
      if(this.head === null) return undefined;
      let temp = this.head;
      let pre;
      if(this.length === 1){
         this.head = null;
         this.tail = this.head;
      } else {
         while(temp.next){
            pre = temp;
            temp = temp.next;
         }
         this.tail = pre;
         this.tail.next = null;
      }
      this.length--
      return temp;
   }

   //add new value at the beginnig of the linked list
   unshift(value) {
      let newNode = new Node(value)

      if(!this.head){
         this.head = newNode
         this.tail = newNode
      }
      else {
         newNode.next = this.head
         this.head = newNode
      }
      this.length++
      return this
   }

   // removes the first item of a linkedlist
   shift() {
      if(!this.head) return "it's empty!!"
      let temp = this.head
      this.head = this.head.next
      this.length--
      if(this.length === 0) {
         this.head = null 
         this.tail = null
      }
      temp.next = null
      return temp
   }

   // add get method 
   get(index) {
      if(index < 0 || index >= this.length) return `out of range`;
      let temp = this.head;
      for(let i = 0; i < index; i++){
         temp = temp.next;
      }
      return temp;
   }

   // add set method
   set(index, value){
      let temp;
      temp = this.get(index);
      if(temp){
         temp.value = value;
         return true;
      }
      return false;
   }

   // insert items using insert method
   insert(index, value) {
      if(index === 0) return this.unshift(value);
      if(index === this.length) return this.push(value);
      if(index < 0 || index > this.length) return false;

      let newNode = new Node(value);
      let pre = this.get(index - 1);
      let temp = pre.next;

      newNode.next = temp;
      pre.next = newNode;

      this.length++;
      return this; 
   }

   //add remove method
   remove(index) {
      if(index === 0) return this.shift()
      if(index === this.get(length - 1)) return this.pop()
      if(index < 0 || index >= this.length) return `error`

      let pre = this.get(index)
      let temp = pre.next;

      pre.next = temp.next
      temp.next = null
      this.length--
      return temp
   }

   // add reverse method 
   reverse() {

      let cur = this.head;
      this.head = this.tail;
      this.tail = cur;

      let next;
      let pre = null

      while(cur){
         next = cur.next;
         cur.next = pre;
         pre = cur;
         cur = next; 
      }
      return this;

   }
}

let newLinkedList = new LinkedList(1)
newLinkedList.push(2)
newLinkedList.push(3)
newLinkedList.push(4)

console.log(newLinkedList);
console.log(newLinkedList.set(1, 1995));
console.log(newLinkedList.insert(2, 2023));








