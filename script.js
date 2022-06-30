let nameInputEle=document.querySelector(".name-input");

let submitBtnEle=document.querySelector(".submit-input");



nameInputEle.addEventListener("keyup", e=>{
    let nameStr=nameInputEle.value
    let regex=/[a-zA-Z]{3,20}/gi
    
    if(regex.test(nameStr)){
        nameInputEle.classList.add("is-valid");
        nameInputEle.classList.remove("is-invalid")
        nameValidation=true;
    }
    else{
        nameInputEle.classList.remove("is-valid");
        nameInputEle.classList.add("is-invalid")
    }


    // if(nameStr===""){
    //     nameInputEle.classList.remove("is-valid");
    //     nameInputEle.classList.remove("is-invalid")
    // }

})