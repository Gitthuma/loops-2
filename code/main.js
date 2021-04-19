let name = 'Mustafa';
let i = 0;
let para = document.createElement('p');

let phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
]

    // Add your code here

    /*In this next task, we want you to write a simple program that, given a name, searches an array of objects containing names and phone numbers (phonebook) and, if it finds the name, outputs the name and phone number into the paragraph (para) and then exits the loop before it has run its course.*/

    /*Create a while loop*/

    while (i < phonebook.length) {

        /*Create condition that checks: If true - print name and contact; if not - print Contact Not Found!*/

        if (phonebook[i].name === name) {
            para.textContent = phonebook[i].name + ' : ' + phonebook[i].number;
            break
        } else if (i === phonebook.length -1) {
            para.textContent = 'Contact Not Found!';
        } /*Changed else to if else so that loop runs once*/

        i++
    }

    // Don't edit the code below here!
    let section = document.querySelector('section');
    section.appendChild(para);