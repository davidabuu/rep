//Link all messages to index4.html
const images = document.querySelectorAll('.grid-items');
images.forEach(img =>{
    img.addEventListener('click', (e)=>{
        e.preventDefault();
        location.href = 'index4.html';
    })
})