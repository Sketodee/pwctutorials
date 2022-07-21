//Array of numbers
const studentScores = [80, 90, 70, 60, 50]

//Array of strings
const studentNames = ["oluwa", "tolu", "james", "ayoola", "seun"]

//Array of objects 
const  studentActivities = [
    {
        id: 1,
        description: 'Having induction session', 
        isDone: true
    },
    {
        id: 2,
        description: 'Starting the Javascript, HTML, CSS and React Class', 
        isDone: false
    }, 
    {
        id: 3, 
        description: 'Staring the C# and .NET class', 
        isDone: false
    }
]

// converting array of objects to JSON format 
const studentActivitiesJSON = JSON.stringify(studentActivities); 
// console.log(studentActivitiesJSON)

// Higher order array functions 
//map()
const studentActivitiesDescription = studentActivities.map((activity)=> activity.description)
// console.log(studentActivitiesDescription)

const  customerAccountInfo = [
    {
        id: 1,
        accountNumber: '12345678', 
        fullName: " Oluwakemi Adeboye",
        address: "26 Awolowo Road", 
        canDebit: true
    },
    {
        id: 2,
        accountNumber: '0215644556', 
        fullName: " Sket Von Stradonitz",
        address: "Somewhere in Mars",
        canDebit: false
    }, 
    {
        id: 3, 
        accountNumber: '056457676', 
        fullName: "Dean R Koontz",
        address: "Guantanamo Bay Detention Camp", 
        canDebit: true
    }
]

const customerAccountNumber = customerAccountInfo.map(function(customer) {
    return customer.accountNumber
})
const customerFullName = customerAccountInfo.map(function(customer) {
    return customer.fullName
})
const customerAddress = customerAccountInfo.map(function(customer) {
    return customer.address
})
const customerDebitStatus = customerAccountInfo.map(function(customer) {
    return customer.canDebit
})

const doubleScore = studentScores.map(score => score*2)
for (let i = 0; i < studentScores.length; i++) {
//    console.log(`${studentScores[i]} multiplied by 2 is ${doubleScore[i]}`) 
}

//filter 
const studentActivitiesDone = studentActivities.filter(activity => activity.id === 3)
console.log(studentActivitiesDone)