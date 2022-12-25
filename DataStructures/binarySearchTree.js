// add BST object
class BST {
   constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
   }
} 

class BinarySearchTree {
   constructor() {
      this.root = null;
   }

   // insert a new node 
   insert(value){
      let newNode = new BST(value);
      if(!this.root){
         this.root = newNode;
         return this;
      }

      let temp = this.root;
      
      while(true){
         if(newNode.value === temp.value) return undefined;
         if(newNode.value < temp.value){
            if(temp.left === null){
               temp.left = newNode;
               return this;
            }
            temp = temp.left;
         } else {
            if(temp.right === null){
               temp.right = newNode
               return this;
            }
            temp = temp.right;
         }
         
      }
   }
}

let myBST = new BinarySearchTree(47);

myBST.insert(21);
myBST.insert(76);
myBST.insert(18);
myBST.insert(27);
myBST.insert(52);
myBST.insert(82);











