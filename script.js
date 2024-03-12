


const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const address = document.getElementById('address')
const mail = document.getElementById('email')
const num = document.getElementById('number')

function validation (){
    
    if(firstName.value == ''){
 return false;
    } else if (lastName.value =''){
      return  false
const address = document.getElementById('address')
    }else if (address.value == ''){
 return false;

    } else if (mail.value == ''){
        return false;
    }else if (number.value == ''){
        return false;
    }
    else{
        return true;
    }

}
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click',(e)=>{
   if(! validation){
    e.preventDefault()
    console.log('fill all the details')
   } else{
    console.log("form submitted")
}
 

})