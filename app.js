
//Getting the UI elements
const food = document.querySelector('.food'),
      email = document.querySelector('.email'),
      name = document.querySelector('.name');


//Get the button and add event listeners
const btn = document.querySelector('.submit');
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(food.value === ''|| email.value === '' || name.value === ''){
        //ShowError
        showError('Please Input All Fields', 'error');
    }else{
        //Show Success
        showSuccess('Your Order was succesful', 'success');
         //Clear All Fields
         food.value = '';
         email.value = '';
         name.value = '';
        document.querySelector('.error').remove();
    }
    //Create a new Element for the validaiton
    function showError(msg, className){
        //Clear any error left
        clearAlert();
        const div = document.createElement('div');
        div.className = `${className}`
        div.appendChild(document.createTextNode(msg));
        const form = document.querySelector('.form');
        const message = document.querySelector('.msg');
        form.insertBefore(div, message);
    }
    function showSuccess(msg, className){
        //Clear any remaining success alert
        clearAlert();
        const div = document.createElement('div');
        div.className = `${className}`
        div.appendChild(document.createTextNode(msg));
        const form = document.querySelector('.form');
        const message = document.querySelector('.msg');
        form.insertBefore(div, message);
    }
    function clearAlert(){
        const clearMsg = document.querySelector('.error');
        if(clearMsg){
            clearMsg.remove();
        } 
        const clearSuccess = document.querySelector('.success');
        if(clearSuccess){
            clearSuccess.remove();
        } 
    }
})