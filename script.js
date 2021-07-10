// const form = document.querySelector("#signup-form")
// const creditCard = document.querySelector("#cc")
// const agreement = document.querySelector("#terms")
// const cards = document.querySelector("#creditCards")

// form.addEventListener("submit", function (event) {
//   event.preventDefault() //prevents teh sending on of your data to another page or site.
//   alert("Your form has been submitted!")
//   console.log(event)
//   console.log(creditCard.value)    //grabbing values
//   console.log(agreement.checked)   //grabbing values or checked property in this case.
//   console.log(cards.value)         //grabbing values
// })

///////////*  THE BASICS *////////////
// const form = document.querySelector("#signup-form")

// form.addEventListener("submit", function (event) {
//   alert("Form Submitted")
//   console.log(event)
//   event.preventDefault()
// })

/*
Takeaways
1.) We can stop the default behavior of form submission by using preventDefault()
2.) We have access to the form data
3.) We can use this data for whatever
a.) send form data to database
b.) append form data to page 
*/

//////////////////////////////////////* INPUT & CHANGE EVENTS */
/*
Input and Change properties.
Allow the constant update of changes to happen without having to use a submit button.  Not having to wait on an submission event is the purpose.
*/

// const form = document.querySelector("#signup-form")

// const creditCard = document.querySelector("#cc")
// const agreement = document.querySelector("#terms")
// const cards = document.querySelector("#creditCards")

// const formData = {}
// creditCard.addEventListener("input", function (event) {
//   console.log("CC CHANGED", event) //<=console logs any change to form.
//   formData["cc#"] = event.target.value
// })

// agreement.addEventListener("input", function (event) {
//   console.log("Checkbox CHANGED", event) //<=console logs any change to form.
//   formData["terms"] = event.target.checked
// })

// cards.addEventListener("input", function (event) {
//   console.log("Credit Card CHANGED", event) //<=console logs any change to form.
//   formData["creditCards"] = event.target.value
// })

/* Another way to do the same thing - this shows names vs classes */

const creditCard = document.querySelector("#cc")
const agreement = document.querySelector("#terms")
const cards = document.querySelector("#creditCards")

// const formData = {}
// for (let input of [creditCard, agreement, cards]) {
//   input.addEventListener('input', function (event) {
//     console.log(event.target.type)
//     formData[event.target.name] = event.target.value
//   })
// }

 //destructure above and add type functionality for the checkbox
const formData = {}
for (let input of [creditCard, agreement, cards]) {
  input.addEventListener("input", function ({ target }) {    
    const { name, type, value, checked } = target
    console.log(type)
    formData[name] = type === 'checkbox' ? checked : value
    console.log(formData)
  })
}


//CHANGE EVENT does the exact same thing except for type:text form inputs.  you have to hit enter or lose focus of the input, so maybe not so useful as INPUT EVENT 