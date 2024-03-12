const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const address = document.getElementById('address');
const mail = document.getElementById('email');
const num = document.getElementById('number');

function validation (){
    
    if(firstName.value == ''){
        firstName.classList.add('error');
        return 'Please Enter Your First Name';
    } else {
        firstName.classList.remove('error');
    }

    if (lastName.value == ''){
        lastName.classList.add('error');
        return 'Please Enter Your Last Name';
    } else {
        lastName.classList.remove('error');
    }

    if (address.value == ''){
        address.classList.add('error');
        return 'Input The Address to Continue';
    } else {
        address.classList.remove('error');
    }

    if (mail.value == ''){
        mail.classList.add('error');
        return 'Enter Mail Id';
    } else {
        mail.classList.remove('error');
    }

    if (num.value == ''){
        num.classList.add('error');
        return 'Please Provide Your Number';
    } else {
        num.classList.remove('error');
    }

    return true;
}

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click',(e)=>{
   const validationResult = validation();
   if(validationResult !== true){
        e.preventDefault();
        console.log(validationResult);
   } else {
        console.log("form submitted");
   }
});
