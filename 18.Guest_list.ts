let Guest_list: string[] = ["imran khan", "Nawaz shareif", "Asif ali zardari"];

// for(let i=0; i<Guest_list.length; i++)

//      console.log('Dear mr.' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party./n/nthank you!\n\n')
//  }

let absent_Guest: string = "Imran khan";

let new_Guest: string = "babar azam";

Guest_list[0] = new_Guest;

// for (let i = 0; i < Guest_list.length; i++){
//   console.log('Dear Mr. ' + Guest_list[i] + ',\n\nit is our pleasure to invite in our party. \n\nthank you!\n\n')
// }


// console.log(`Mr.${absent_Guest} is not coming to the party.`);

// console.log("Good news ! we find big table so we are inviting 3 more guest.");

Guest_list.unshift("Sir Zia Khan");
Guest_list.splice(2, 0, "Maryam Nawaz");
Guest_list.push("Bilwal Bhutto zardari");

// for(let i=0; i<Guest_list.length; i++){
//   console.log('Dear mr. ' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party. \n\nthank you!\n\n')
// }


// console.log('\nsorry we can not arrange big table, only two peoples will be invited.');

while(Guest_list.length > 2){
let remove_Guest =  Guest_list.pop();
console.log(`sorry Mr. ${remove_Guest}, you are not invited for dinner.`);
}

// for(let i=0; i<Guest_list.length; i++){
//   console.log('Dear Mr. ' + Guest_list[i] + ', \n\nyou are still invited.\n\nthank you\n\n')
// }

Guest_list.splice(0, 2);

console.log(Guest_list);


// Exsercise 19

//print a message indicating the number of peaople you are inviting to dinner.

console.log(`total number of guest are: ${guest_list.length}`);