
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller", "Album dumbledore"];

function make_great (magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}


function show_magicians(magicians: string[]) {

    magicians.forEach(element =>{
        console.log(element);
    });
}

make_great(magicians);
show_magicians(magicians);



