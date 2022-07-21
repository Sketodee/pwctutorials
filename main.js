// Data types
// let name = "Fantasma" // string
// let age = 28 //number
// let z = null // null
// let y = undefined // undefined
// let isMarried = false //boolean
// let favColor = ["red", "orange", "sky blue"] //array (for collection of data)

//string
// let x = "Hello World"

// console.log(age)
// console.log(name)
// console.log(typeof y)
// console.log(typeof isMarried)
// console.log(x.toUpperCase())
// console.log(x.toLowerCase())
// console.log(x.length)

//concatenation
// let m = " I am"
// let n = "I go to PwC Bootcamp"
// let p =  " I love to learn Javascript"

// console.log(`${m} ${age}`)

// let fruits = ["apple", "banana", "oranges"]
// fruits.push('grape')
// fruits.push('strawberry') // add to the last item
// fruits.pop() // remove the last item
// fruits.shift() // remove the first item
// fruits.unshift("kiwi") // adds to the first item
// fruits[4] = "blueberrries"

// console.log(fruits)

// const person = {
//     name: "fantasma",
//     age : 20,
//     height: 5.5,
//     hobbies : ["music", "football"],
//     weight: 180,
//     isMarried: false,
//     greeting: function() {
//         console.log("hello world")
//     }
// }

// person.greeting()

// var radios = document.getElementsByName('genderS');

// for (var i = 0, length = radios.length; i < length; i++) {
//   if (radios[i].checked) {
//     // do whatever you want with the checked radio
//     console.log(radios[i].value);

//     // only one radio can be logically checked, don't check the rest
//     break;
//   }
// }

const btn = document.querySelector('.btn')
const userList = document.querySelector("#users")
const msg = document.querySelector(".msg")

const onSubmit = (e) => {
    e.preventDefault()
    const myForm = document.getElementById('myForm')
    const firstName = document.querySelector('#firstName')
    const lastName = document.querySelector('#lastName')
    const age = document.querySelector('#age')
    const gender = myForm.querySelector('input[name=gender]:checked')
    const state = document.getElementById('state')
    const selectedState = state.options[state.selectedIndex]
    const tracks = document.querySelectorAll('input[name="track"]:checked')
    const trackSelected = []

    tracks.forEach((track) => trackSelected.push(track.value))

    if (firstName.value === "" && lastName.value === "" && age.value === "") {
        msg.innerText = "please fill the form completely "
        setTimeout(() => {
            msg.remove
        }, 3000);
    } else {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${firstName.value} ${lastName.value} is a ${age.value} years old ${gender.value} from ${selectedState.value}. ${firstName.value} is studying ${trackSelected.join(" and ")}`));
        userList.appendChild(li);
        firstName.value = ""
        lastName.value = ""
        age.value = ""
    }
}

btn.addEventListener('click', onSubmit)




