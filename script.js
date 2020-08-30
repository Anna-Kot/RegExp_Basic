let form = document.forms.f1;
let nameRegExp = /^[a-zA-Z]{3,20}$/;
let surnameRegExp = /^[a-zA-Z]{3,20}$/;
let emailRegExp = /^[a-zA-Z0-9]{4,20}@[a-z]{3,9}\.[a-z]{2,6}$/i;
let passRegExp = /^\w{8,15}$/;
let getID = id => document.getElementById(id);
getID('first').onchange = function() {
    let testName = nameRegExp.test(getID('first').value);
    if(testName) {
        this.style.border ='2px solid green'
    }
    else {
        this.style.border = '2px solid red'
    }
}
getID('first').oninput = function() {
    let testName = nameRegExp.test(this.value);
    if(testName) {
        document.querySelector('.a1').innerHTML='&#10004;';
        document.querySelector('.a1').style.color = 'green';
    }
    else {
        document.querySelector('.a1').innerHTML='&#10008;';
        document.querySelector('.a1').style.color = 'red';
    }
}
getID('second').onchange = function() {
    let testName = surnameRegExp.test(getID('second').value);
    if(testName) {
        this.style.border ='2px solid green'
    }
    else {
        this.style.border = '2px solid red'
    }
}
getID('second').oninput = function() {
    let testName = surnameRegExp.test(this.value);
    if(testName) {
        document.querySelector('.a2').innerHTML='&#10004;';
        document.querySelector('.a2').style.color = 'green';
    }
    else {
        document.querySelector('.a2').innerHTML='&#10008;';
        document.querySelector('.a2').style.color = 'red';
    }
}
getID('email').onchange = function() {
    let testName = emailRegExp.test(getID('email').value);
    if(testName) {
        this.style.border ='2px solid green'
    }
    else {
        this.style.border = '2px solid red'
    }
}
getID('email').oninput = function() {
    let testName = emailRegExp.test(this.value);
    if(testName) {
        document.querySelector('.a3').innerHTML='&#10004;';
        document.querySelector('.a3').style.color = 'green';
    }
    else {
        document.querySelector('.a3').innerHTML='&#10008;';
        document.querySelector('.a3').style.color = 'red';
    }
}
getID('password').onchange = function() {
    let testName = passRegExp.test(getID('password').value);
    if(testName) {
        this.style.border ='2px solid green'
    }
    else {
        this.style.border = '2px solid red'
    }
}
getID('password').oninput = function() {
    let testName = passRegExp.test(this.value);
    if(testName) {
        document.querySelector('.a4').innerHTML='&#10004;';
        document.querySelector('.a4').style.color = 'green';
    }
    else {
        document.querySelector('.a4').innerHTML='&#10008;';
        document.querySelector('.a4').style.color = 'red';
    }
}
getID('check').onclick = function() {
    if(getID('check').checked==true){
    if(nameRegExp.test(getID('first').value) && passRegExp.test(getID('password').value) && surnameRegExp.test(getID('second').value) && emailRegExp.test(getID('email').value)) {
        getID('first_button').disabled = false;
        getID('first_button').style.backgroundColor = 'rgb(16, 61, 128)';
        getID('first_button').addEventListener('mouseover', function() {
            getID('first_button').style.backgroundColor = 'rgb(21, 89, 190)';
        })
        getID('first_button').addEventListener('mouseout', function() {
            getID('first_button').style.backgroundColor = 'rgb(16, 61, 128)';
        })
    }
    }
    else {
        getID('first_button').disabled = true;
        getID('first_button').style.backgroundColor ='rgb(30, 117, 247)';
    }
}
getID('first_button').onclick = function() {
    document.querySelector('.new_window').style.display = 'flex'
}
getID('second_button').onclick = function() {
    document.querySelector('.new_window').style.display = 'none'
    location.reload();
}


