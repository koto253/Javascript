/*
   There are two elements in the linked list. They are represented as 16 -> 13 -> NULL. So, the printLinkedList function should print 16 and 13 each on a new line.
*/

function printLinkedList(head) {
   let temp = head;
   while(temp !== null) {
       console.log(temp.data);
       temp = temp.next;
   }
}
