// console.log(document.getElementById("my-form"));

// let container =  document.querySelector(".container")
// let inputName =  document.querySelector("#name")
// let hiTag =  document.querySelector("h1")

// document.querySelectorAll(".item")
// document.querySelectorAll("li")
// document.querySelectorAll("div")
// document.getElementsByClassName("item")


// let ulElements =  document.querySelector(".items");

// ulElements.firstElementChild.textContent = "Javascript"
// ulElements.children[1].innerText = "C# .NET";
// ulElements.lastElementChild.innerHTML= "<h1>Agile</h1>"

// const btn =  document.querySelector(".btn")

// btn.addEventListener("click", e =>  {
//     e.preventDefault()
//     console.log(e.target.className)
//     document.getElementById("my-form").style.background = "purple"
//     document.querySelector("header").style.background = "green"
// })

// inputName.addEventListener("input", (e) => {
//     document.querySelector(".container").append(inputName.value)
// })

const myForm = document.querySelector("#my-form")
const inputName =  document.querySelector("#name")
const emailInput = document.querySelector("#email")
const msg = document.querySelector(".msg")
const userList = document.querySelector("#users")

const onSubmit = (e) => {
    e.preventDefault()
    if (inputName.value === ""  && emailInput.value === "") {
        msg.classList.add("error")
        msg.innerText= "please fill the form"
        setTimeout(() => {
            msg.remove
        }, 3000);
    }else {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${inputName.value} : ${emailInput.value} `));
        userList.appendChild(li); 
        inputName.value = ""
        emailInput.value = ""
    }
}

myForm.addEventListener("submit", onSubmit)

