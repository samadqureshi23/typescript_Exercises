

let Guest_list :string[] = ['imran khan','Nawaz shareif','Asif ali zardari'];

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear mr.' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party./n/nthank you!\n\n') 
}


let absent_Guest :string = 'Imran khan' ;

let new_Guest :string = 'babar azam' ;

Guest_list[0] = new_Guest ;


for(let i=0; i<Guest_list.length; i++){

    console.log('Dear mr.' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nthank you!\n\n')

}
console.log(`Mr.${absent_Guest} is not coming to the party.`)