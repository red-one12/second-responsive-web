let crossIcon = document.querySelector('.crossIcon')
let menuIcon = document.querySelector('.menuIcon')
let navSignUpInBox = document.querySelector('.navSignUpInBox')


menuIcon.addEventListener("click", function(){
    menuIcon.style.display = "None"
    crossIcon.style.display = "Block"
    navSignUpInBox.style.display = "Flex"
})


crossIcon.addEventListener("click", function(){
    menuIcon.style.display = "Block"
    crossIcon.style.display = "None"
    navSignUpInBox.style.display = "None"
})