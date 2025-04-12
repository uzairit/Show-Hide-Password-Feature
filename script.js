let btn = document.querySelector('button');
let input = document.querySelector('input');
btn.addEventListener('click', () => {
    if (btn.innerText === 'Show Password') {
        input.type = 'text';
        btn.innerText = 'Hide Password';
        btn.style.backgroundColor = '#dadada';
        btn.style.color = '#000';
    }
    else {
        input.type = 'password';
        btn.style.backgroundColor = '#007bff';
        btn.style.color = '#fff';
        btn.innerText = 'Show Password';
    }
})