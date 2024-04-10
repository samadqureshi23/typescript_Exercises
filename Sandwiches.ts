

// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each ti


function makeSandwich(...items: string[]) {
    console.log('\nmaking your sandwich with:')

    items.forEach(Element => console.log("- " + Element));

    console.log('Enjoy your sandwich!\n')
        
    }

makeSandwich('bacon', 'lettuce', 'tomato');

makeSandwich('bacon', 'lettuce');

makeSandwich('bacon', "Butter", "Jelly",);

