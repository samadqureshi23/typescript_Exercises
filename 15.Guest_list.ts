let Guest_list: string[] = ["imran khan", "Nawaz shareif", "Asif ali zardari"];

// for(let i=0; i<Guest_list.length; i++)

//      console.log('Dear mr.' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party./n/nthank you!\n\n')
//  }

let absent_Guest: string = "Imran khan";

let new_Guest: string = "babar azam";

Guest_list[0] = new_Guest;

for (let i = 0; i < Guest_list.length; i++) {
  console.log(
    "Dear mr." +
      Guest_list[i] +
      ",\n\nit is our pleasure to invite you in our party.\n\nthank you!\n\n"
  );
}
console.log(`Mr.${absent_Guest} is not coming to the party.`);

console.log("Good news ! we find big table so we are inviting 3 more guest.");

Guest_list.unshift("Sir Zia Khan");
Guest_list.splice(2, 0, "Maryam Nawaz");
Guest_list.push("Bilwal Bhutto zardari");

for (let i = 0; i < Guest_list.length; i++) {
  console.log(
    "Dear mr." +
      Guest_list[i] +
      ",\n\nit is our pleasure to invite you in our party.\n\nthank you!\n\n"
  );
}
