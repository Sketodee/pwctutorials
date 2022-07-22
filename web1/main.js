const darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", toggleDarkMode)
console.log(a.length)



function toggleDarkMode() {
    if (darkMode.innerHTML === '<img src="moon.png">') {
      darkMode.innerHTML = '<img src="sunshine.png">';
     document.querySelector("header").classList.add("darkMode")
     document.querySelector("body").classList.add("darkMode")
     document.querySelector("footer").classList.add("darkMode")
     document.querySelector("#myForm").style.background = "black"

    } else {
      darkMode.innerHTML = '<img src="moon.png">';
      document.querySelector("header").classList.remove("darkMode")
      document.querySelector("body").classList.remove("darkMode")
      document.querySelector("footer").classList.remove("darkMode")
      document.querySelector("#myForm").style.background = "#f4f4f4"
    }
  }


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
