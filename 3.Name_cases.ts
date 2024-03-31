let personName :string = '';

personName = prompt('What is your name?') ||'';
let lowercase :string = personName.toLocaleLowerCase();
let uppercase :string = personName.toLocaleUpperCase();

let titlecase :string = personName.split(' ').map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(personName !== null && personName !== ''){
    alert(`hello ${personName}, Here are your name in:
    LowerCase: ${lowercase}
    uppercase: ${uppercase}
    TitleCase: ${titlecase}`)
}
else{
    alert('please fill your name !')
}