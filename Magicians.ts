
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller" ,"Album dumbledore"];

function show_magicians(magicians: string[]) {

    magicians.forEach(element =>{
        console.log(element);
    });
}

show_magicians(magicians);
