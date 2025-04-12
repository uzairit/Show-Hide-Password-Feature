let btn = document.querySelector('button');
let input = document.querySelector('input');
btn.addEventListener('click', () => {
    if (btn.innerText === 'Show Password') {
        input.type = 'text';
        btn.classList.add('hide')
        btn.innerText = 'Hide Password';
    }
    else {
        input.type = 'password';
        btn.classList.remove('hide');
        btn.innerText = 'Show Password';
    }
})