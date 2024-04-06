import { Console } from "console";
import { reverse } from "dns";

// store the locationns in a array . make sure the array is not in alphabetical order.
let Places :string[] = ['italy','londone','america','dubaie','times sguare'];

//print your array in its orignal order.
console.log ('original' + Places);

//print your array in alphabetical order witout modifying the actual list.
console.log('copy ' + [...Places].sort());

//show that your array is still in its original order by printing it.
console.log( 'original ' + Places);

//print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + [...Places].sort().reverse());

//show that your array is still in its oringinal order by orinting it again.
console.log('originnal ' +Places);

//Reverse the order or your list. print the array to show that its order has changed.
console.log('original ' + Places.reverse());

//Reverse the order of your list again.print the list to show it,s back to its original order.
console.log('original ' + Places.reverse());

//sort your array so it,s stored in alphabetical order. print the array to show that its order has been changed.
console.log('orginal ' + Places.sort());

//sort to change your array so it,s stored in reverse alphabetical order. print the list to show that its order has changed.
console.log('original ' + Places.sort().reverse());