let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let mobile = document.getElementById("exampleInputPhoneno");
let conpas = document.getElementById("exampleInputConPassword1");
// regexp for email validation
let emailFormat = new RegExp(/^([\w\.-]+)@([\w\-]+).([a-z]{2,3})$/) 
// regexp for atleast one lowercase character
let passwordLc = new RegExp('(?=.*[a-z])')
// regexp for atleast one uppercase character
let passwordUc = new RegExp('(?=.*[A-Z])')
// regexp for atleast one number
let passwordNo = new RegExp('(?=.*[0-9])')
//regexp for atleast one special character
let passwordSc = new RegExp('(?=.*[!@#\$%\^&\*])')
//regexp for mobile number
let mobileNo = new RegExp('(?=.*[0-9\-.]{10})')


//script for login page validation 

function validatelogin1(){

    //email should not be empty
    if(email.value.trim()==""){
        email.style.border="2px solid red";
        alert("Email cannot be empty");
        return false;
    }
    
    //email should match regexp
    else if (!emailFormat.test(email.value)){
        email.style.border ="2px solid red"
        alert("email invalid")
        return false;
    }

    //password should not be empty
    else if(password.value.trim()==""){
    password.style.border="2px solid red";
    alert("Password cannot be empty");
    return false;
    }
    
   // Password should contain minimum 8 charaters
    else if(password.value.length<8){
        alert("Password must contain minimum 8 characters");
        return false;
    }

    //password should contain atleast one lowercase character
    else if(!passwordLc.test(password.value)){
        alert("Password must contain atleast one lowercase character")
        return false;
    }

    //password should contain atleast one uppercase character
    else if(!passwordUc.test(password.value)){
        alert("Password must contain atleast one uppercase character")
        return false;
    }

    //password should contain atleast one number
    else if(!passwordNo.test(password.value)){
        alert("Password must contain atleast one number")
        return false;
    }

    //password should contain atleast one special character
    else if(!passwordSc.test(password.value)){
        alert("Password must contain atleast one special character")
        return false;
    }

    else {
        return true;
    } 
}



// Script for SignUp page validation

function validatesignup1(){

    //email should not be empty
    if(email.value.trim()==""){
        email.style.border="2px solid red";
        alert("Email cannot be empty");
        return false;
    }

    //email format should match the regexp
    else if (!emailFormat.test(email.value)){
        email.style.border ="2px solid red"
        alert("email invalid")
        return false;
    }

    //phone number should not be empty
    else if(mobile.value.trim()==""){
        mobile.style.border="2px solid red";
        alert("Mobile number cannot be empty");
        return false;
    }

    //phone no format validation
    else if(!mobileNo.test(mobile.value.trim())){
        mobile.style.border="2px solid red"
        alert("Mobile number not valid")
        return false;
    }

    //password should not be empty
    else if(password.value.trim()==""){
        password.style.border="2px solid red";
        alert("Password cannot be empty");
        return false;
    }

    //password should contain minimum 8 characters
    else if(password.value.length<8){
        alert("Password must contain minimum 8 characters");
        return false;
    }

    //password should contain atleast one lowercase character
    else if(!passwordLc.test(password.value)){
        alert("Password must contain atleast one lowercase character")
        return false;
    }

    //password should contain atleast one uppercase character
    else if(!passwordUc.test(password.value)){
        alert("Password must contain atleast one uppercase character")
        return false;
    }

    //password should contain atleast one number
    else if(!passwordNo.test(password.value)){
        alert("Password must contain atleast one number")
        return false;
    }

    //password should contain atleast one special character
    else if(!passwordSc.test(password.value)){
        alert("Password must contain atleast one special character")
        return false;
    }

    //confirm password should not be empty
    else if(conpas.value.trim()==""){
        conpas.style.border="2px solid red";
        alert("Please confirm password");
        return false;
    }

    //confirm password should match password
    else if(password.value.trim()!=conpas.value.trim()){
        alert("Passwords are not matching");
        return false;
    }

    else {
        return true;
    }
}


