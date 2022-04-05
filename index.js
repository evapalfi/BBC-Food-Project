const signInButton = document.getElementById("signInButton");

function signIn(event) {
    event.preventDefault();
    const x = document.getElementById("signinModalOverlay");
    x.classList.toggle("show-modal");

}

signInButton.addEventListener('click', signIn);


const modalCloseX = document.getElementById("modalCloseX");

function signInCloseX(event) {
    const x = document.getElementById("signinModalOverlay");
    x.classList.toggle("show-modal");

}

modalCloseX.addEventListener('click', signInCloseX);


const searchBarButton = document.getElementById("search-button");

function myFunction() {
    const x = document.getElementById("hiddenSearchBar");
    x.classList.toggle("show-searchbar");

}

searchBarButton.addEventListener('click', myFunction);



const closeButton = document.getElementById("closeButton");

function xClose() {
    const x = document.getElementById("hiddenSearchBar");
    x.classList.toggle("show-searchbar");

}

closeButton.addEventListener('click', xClose);



const moreButton = document.getElementById("more-button");

function openMore() {
    const x = document.getElementById("hiddenMore");
    x.classList.toggle("show-more");
}

moreButton.addEventListener('click', openMore);


const bellButton = document.getElementById("moreBell");

function openBell() {
    const x = document.getElementById("hiddenBell");
    x.classList.toggle("show-bell");
}

bellButton.addEventListener('click', openBell);



const recipesForDropDown = document.getElementById("recipesForDropDown");

function dropDown() {
    const x = document.getElementById("recipes-dropdown");
    x.classList.toggle("show-recipes-dropdown");

}

recipesForDropDown.addEventListener('click', dropDown);
