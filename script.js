let nameInputEle=document.querySelector(".name-input");
let usernameInputEle=document.querySelector(".username-input");
let emailInputEle=document.querySelector(".email-input");
let passwordInputEle=document.querySelector(".password-input");
let phoneInputEle=document.querySelector(".phone-input");
let locationInputEle=document.querySelector(".location-input");
let websiteInputEle=document.querySelector(".website-input");
let successMessage=document.getElementById("success");
let failureMessage=document.getElementById("failure");

successMessage.style.display = "none";
failureMessage.style.display = "none";

let submitBtnEle=document.querySelector(".submit-button");

let nameValidation=false;
let usernameValidation=false;
let emailValidation=false;
let passwordValidation=false;
let phoneValidation=false;
let locationValidation=false;
let websiteValidation=false;

nameInputEle.addEventListener("keyup", e=>{
    let nameStr=nameInputEle.value
    let regex=/^(?![_|0-9|\s])[a-zA-Z]{3,20}/gi
    
    if(regex.test(nameStr)){
        nameInputEle.classList.add("is-valid");
        nameInputEle.classList.remove("is-invalid")
        nameValidation=true;
    }
    else{
        nameInputEle.classList.remove("is-valid");
        nameInputEle.classList.add("is-invalid")
        nameValidation=false;
    }

    if(nameStr===""){
        nameInputEle.classList.remove("is-valid");
        nameInputEle.classList.remove("is-invalid")
    }
})

usernameInputEle.addEventListener("keyup", e=>{
    let nameStr=usernameInputEle.value
    let regex=/^(?![_|0-9|\s])[a-zA-Z0-9\S]{6,20}/gi
    
    if(regex.test(nameStr)){
        usernameInputEle.classList.add("is-valid");
        usernameInputEle.classList.remove("is-invalid")
        usernameValidation=true;
    }
    else{
        usernameInputEle.classList.remove("is-valid");
        usernameInputEle.classList.add("is-invalid")
        usernameValidation=false;
    }

    if(nameStr===""){
        usernameInputEle.classList.remove("is-valid");
        usernameInputEle.classList.remove("is-invalid")
    }
})

emailInputEle.addEventListener("keyup", e=>{
    let nameStr=emailInputEle.value
    let regex=/^(?![_|0-9|\s|A-Z])\w{3,15}@[a-z0-9]{3,15}\.[a-z0-9]{3,5}/gm
    
    if(regex.test(nameStr)){
        emailInputEle.classList.add("is-valid");
        emailInputEle.classList.remove("is-invalid")
        emailValidation=true;
    }
    else{
        emailInputEle.classList.remove("is-valid");
        emailInputEle.classList.add("is-invalid")
        emailValidation=false;
    }

    if(nameStr===""){
        emailInputEle.classList.remove("is-valid");
        emailInputEle.classList.remove("is-invalid")
    }
})

passwordInputEle.addEventListener("keyup", e=>{
    let nameStr=passwordInputEle.value
    let regex=/^(?=.*[A-Z]).(?=.*[a-z]).(?=.*\d).(?:.*).{6,16}$/gm
    
    if(regex.test(nameStr)){
        passwordInputEle.classList.add("is-valid");
        passwordInputEle.classList.remove("is-invalid")
        passwordValidation=true;
    }
    else{
        passwordInputEle.classList.remove("is-valid");
        passwordInputEle.classList.add("is-invalid")
        passwordValidation=false;
    }

    if(nameStr===""){
        passwordInputEle.classList.remove("is-valid");
        passwordInputEle.classList.remove("is-invalid")
    }
})

phoneInputEle.addEventListener("keyup", e=>{
    let nameStr=phoneInputEle.value
    let regex=/^01([1-9])\d{8}/gm
    
    if(regex.test(nameStr)){
        phoneInputEle.classList.add("is-valid");
        phoneInputEle.classList.remove("is-invalid")
        phoneValidation=true;
    }
    else{
        phoneInputEle.classList.remove("is-valid");
        phoneInputEle.classList.add("is-invalid")
        phoneValidation=false;
    }

    if(nameStr===""){
        phoneInputEle.classList.remove("is-valid");
        phoneInputEle.classList.remove("is-invalid")
    }
})

locationInputEle.addEventListener("keyup", e=>{
    let nameStr=locationInputEle.value
    let regex=/^(?![_|0-9|\s])[a-zA-Z]{3,20}/gi
    
    if(regex.test(nameStr)){
        locationInputEle.classList.add("is-valid");
        locationInputEle.classList.remove("is-invalid")
        locationValidation=true;
    }
    else{
        locationInputEle.classList.remove("is-valid");
        locationInputEle.classList.add("is-invalid")
        locationValidation=false;
    }

    if(nameStr===""){
        locationInputEle.classList.remove("is-valid");
        locationInputEle.classList.remove("is-invalid")
    }
})

websiteInputEle.addEventListener("keyup", e=>{
    let nameStr=websiteInputEle.value
    let regex=/^(www)\.\w{2,15}\.\w{2,7}/i
    
    if(regex.test(nameStr)){
        websiteInputEle.classList.add("is-valid");
        websiteInputEle.classList.remove("is-invalid")
        websiteValidation=true;
    }
    else{
        websiteInputEle.classList.remove("is-valid");
        websiteInputEle.classList.add("is-invalid")
        websiteValidation=false;
    }

    if(nameStr===""){
        websiteInputEle.classList.remove("is-valid");
        websiteInputEle.classList.remove("is-invalid")
    }
})

submitBtnEle.addEventListener("click", e => { 
    e.preventDefault();

    if (nameValidation && usernameValidation && emailValidation && passwordValidation && phoneValidation && locationValidation && websiteValidation == true){
        successMessage.style.display = "block"
        failureMessage.style.display = "none";
        
    }
    else{
        failureMessage.style.display = "block";
        successMessage.style.display = "none"
    }
})