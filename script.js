let button = document.querySelector('button[type=submit]')
button.addEventListener('click', function() {
    let str = document.querySelector('form input[name=word]').value;
    let arrRev = [];
    let result;

    for (let i = 0; i <= str.length - 1; i++) {
        arrRev[i] = str[str.length - 1 - i]; 
    }
    
    result = arrRev.join('');
    alert(result);
})
