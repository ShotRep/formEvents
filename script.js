const form = document.querySelector('#signup-form')

form.addEventListener('submit', function (event) {
  alert('Your form has been submitted!')
  event.preventDefault() //prevents teh sending on of your data to another page or site.
})