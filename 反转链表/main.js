/*
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL */

var reverseList = function(head) {
   
   if (head == null) {
       return null
   }
   
   let pre = head
   let cur = head.next
   let temp
   
   while (cur != null) {
       temp = cur.next
       cur.next = pre
       pre = cur
       cur = temp
   }
   
   head.next = null
   return pre
};