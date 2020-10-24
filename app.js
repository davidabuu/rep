// Getting the UI Elements
const food = document.querySelector('.foods');
const snack = document.querySelector('.snack');
const both = document.querySelector('.both');
const btn = document.querySelector('.submit');
// Adding an event listener
btn.addEventListener('submit', (e) => {
    // Validaiton
   if(food.value === '' & snack.value === '' & both.value === ''){
    document.querySelector('.errorFood').innerHTML = 'Please fill in at least one of the input box';
    // SET TIMEOUT
    setTimeout(() => {
        document.querySelector('.errorFood').remove();  
    }, 5000);
   }else {
    document.querySelector('.success').innerHTML = 'Your request has been sent and we will email your shortly for confirmation';
    // SET TIMEOUT
    setTimeout(() => {
        document.querySelector('.success').remove();
    }, 10000);
    // CLEAR FIELDS
    clearFields();
   }
    e.preventDefault();
})

    // CLEAR FIELDS
function clearFields(){
   document.querySelector('.foods').value = '';
   document.querySelector('.snack').value = '';
   document.querySelector('.both').value = '';
    
}