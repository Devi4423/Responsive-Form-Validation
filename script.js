const form = document.querySelector('#form');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const passowrd = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
let success = true;

form.addEventListener('submit', (e)=>{
    if(!validateInputs()){
        e.preventDefault();
    }    
})

function validateInputs () {
    const usernameVal = userName.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = passowrd.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if (usernameVal === ''){
        success = false;
        setErrors(userName,'User Name must be required!');
    }
    else{
        setSuccess(userName);
    }

    if(emailVal === ''){
        success = false;
        setErrors(email,'Email must be required!');
    }
    else if(!validEmail(emailVal)){
        success = false;
        setErrors(email,'Email does not Valid!');
    }
    else{
        setSuccess(email);
    }

    if (passwordVal === ''){
        success = false;
        setErrors(passowrd,'Password must be required!');
    }
    else if(passwordVal.length<6){
        success = false;
        setErrors(passowrd,'Password must be loang as 6 character');
    }
    else{
        setSuccess(passowrd);
    }

    if(cpasswordVal === ''){
        success = false;
        setErrors(cpassword,'Confirm Password must be required!');
    }
    else if(cpasswordVal !== passwordVal){
        success = false;
        setErrors(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword);
    }
    return success;
}

function setErrors (element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess (element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validEmail = (emailVal) =>{
    return String(emailVal).
    toLowerCase().
    match(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/);
}