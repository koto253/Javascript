function insertNodeAtTail(head, data) {
   let newNode = new insertNodeAtTail(data, null);
   if (!head) {
      head = newNode;
      return head;
   }

   let temp = head;
   while (temp.next) {
      temp = temp.next;
   }
   temp.next = newNode;
   return head;
}

