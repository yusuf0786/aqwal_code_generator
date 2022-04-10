// targetting the elements
let aqwal = document.querySelector("#aqwal")
let copy_btn = document.querySelector("input[type='submit']")

/* in the function below, 
targetting the values of the targetted elements 
and putting the code text in the value of textarea
*/
function myfunction() {

  let aqwal_value = aqwal.value

  let generate_code = `
  <li><span>&#8226;</span><span><q>${aqwal_value}</q></span></li>`

let mycode = document.querySelector("#mycode")
mycode.value = generate_code
}
myfunction()

// running the function while inputing in the input
aqwal.addEventListener('input', myfunction)

/* copieng the value inside the textarea using the
copy_btn */
copy_btn.addEventListener('click', function(e){
  e.preventDefault()
  myFunction()
})

/* below is the function which can, when run copy
the value of targetted element */
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("mycode");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
}
