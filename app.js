//Getting the image elements
const images = document.querySelectorAll('.grid-items');
images.forEach(img =>{
    img.addEventListener('click', (e)=>{
        e.preventDefault();
        location.href = 'index4.html';
    });
});

document.querySelector('.submit').addEventListener('click', (e)=>{
    e.preventDefault();
    const div = document.createElement('div');
    div.innerHTML = '<h3>YOUR REQUEST HAS BEEN PROCESSED</h3>';
    const head = document.querySelector('.container');
    div.style.marginTop = '30px';
    div.style.background = 'lightgreen';
    div.style.width = '400px';
    div.style.display = 'inline-block';
    div.style.textAlign = 'center';
    div.style.color = 'white';
    const down = document.querySelector('.cont');
    head.insertBefore(div, down);
});
