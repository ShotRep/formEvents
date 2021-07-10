// const form = document.querySelector("#signup-form")
// const creditCard = document.querySelector("#cc")
// const agreement = document.querySelector("#terms")
// const cards = document.querySelector("#creditCards")

// form.addEventListener("submit", function (event) {
//   event.preventDefault() //prevents teh sending on of your data to another page or site.
//   alert("Your form has been submitted!")
//   console.log(event)
//   console.log(creditCard.value)
//   console.log(agreement.checked)
//   console.log(cards.value)
// })

///////////*  THE BASICS *////////////
const form = document.querySelector("#signup-form")

form.addEventListener("submit", function (event) {
  alert("Form Submitted")
  console.log(event)
  event.preventDefault()
})

/*
Takeaways
1.) We can stop the default behavior of form submission by using preventDefault()
2.) We have access to the form data
3.) We can use this data for whatever
a.) send form data to database
b.) append form data to page 
*/

//////////////////////////////////////* INPUT & CHANGE EVENTS */
