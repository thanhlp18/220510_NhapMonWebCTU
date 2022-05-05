const inputName = document.getElementById('txt-name');
const inputPhone = document.getElementById('txt-phone');
const inputAddress = document.getElementById('txt-address')
const inputMessage = document.getElementById('txt-message');
const inputEmail = document.getElementById('txt-email');
const inputSex = document.getElementById('txt-sex');
const inputBirthday = document.getElementById('txt-birthday');
const inputFacebook = document.getElementById('txt-facebook');
const inputWorkShift = document.getElementById('txt-work');
const inputStick = document.getElementById('txt-stick');
const inputPassWord = document.getElementById('txt-password');

const inputEXP = document.getElementById('exp');
const inputStudy = document.getElementById('study');


function checkBirthday() {
    if (inputBirthday.value === '') {
        errorMessage(inputBirthday, 'Nhập ngày sinh!');
    }
    else {
        successMessage(inputBirthday)
    }
}
function checkSex() {
    if (inputSex.value === 'gt') {
        errorMessage(inputSex, 'Chọn giới tính của bạn!')
    }
    else {
        successMessage(inputSex)
    }
}

function checkName() {
    if (inputName.value === '') {
        errorMessage(inputName, 'Họ tên không thể để trống!')
    }
    else {
        successMessage(inputName)
    }
}
function checkAddress() {
    if (inputAddress.value === '') {
        errorMessage(inputAddress, 'Nhập địa chỉ của bạn!')
    }
    else {
        successMessage(inputAddress);
    }
}

function checkMessage() {
    if (inputMessage.value === '') {
        errorMessage(inputMessage, 'Nội dung tin nhắn không thể để trống!')
    }
    else if (inputMessage.value.toLowerCase().trim().length < 4) {
        errorMessage(inputMessage, 'Nội dung tin nhắn không hợp lệ!')
    }
    else {
        successMessage(inputMessage);
    }
}

function validatePhone(phone) {
    return String(phone).toLowerCase().match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
}

function checkPhone() {
    if (inputPhone.value === '') {
        errorMessage(inputPhone, 'Số điện thoại không được bỏ trống!')
    }
    else if (!validatePhone(inputPhone.value)) {
        errorMessage(inputPhone, 'Số điện thoại không hợp lệ!')
    }
    else {
        successMessage(inputPhone)
    }
}


function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function checkEmail() {
    if (inputEmail.value === '') {
        errorMessage(inputEmail, 'Email không được bỏ trống')
    }
    else if (!validateEmail(inputEmail.value)) {
        errorMessage(inputEmail, 'Email không hợp lệ')
    }
    else {
        successMessage(inputEmail);
    }
}

function checkFacebook() {
    if (inputFacebook.value === '') {
        errorMessage(inputFacebook, 'Link facebook không thể để trống!')
    }
    else {
        successMessage(inputFacebook)
    }
}

function checkWorkShift() {
    if (inputWorkShift.value === 'work') {
        errorMessage(inputWorkShift, 'Chọn ca làm bạn mong muốn!')
    }
    else {
        successMessage(inputWorkShift)
    }
}

function checkEXP() {
    if (inputEXP.value === '') {
        errorMessage(inputEXP, 'Nhập kinh nghiệm của bạn / vị trí bạn mong muốn')
    }
    else {
        successMessage(inputEXP)
    }
}

function checkStick() {
    if (inputStick.value === 'stick') {
        errorMessage(inputStick, 'Chọn thời gian bạn có thể gắn bó với chúng tôi!')
    }
    else {
        successMessage(inputStick)
    }
}
function checkStudy() {
    if (inputStudy.value === 'study') {
        errorMessage(inputStudy, 'Chọn trình độ học vấn!')
    }
    else {
        successMessage(inputStudy)
    }
}
function validPassWord(password) {
    return String(password).toLowerCase().match(/^[0-9a-zA-Z]{8,}$/);
}
function checkPassWord() {
    if (inputPassWord.value === '') {
        errorMessage(inputPassWord, 'Mật khẩu không được bỏ trống!')
    }
    else if (!validPassWord(inputPassWord.value)) {
        errorMessage(inputPassWord, 'Mật khẩu không hợp lệ')
    }
    else {
        successMessage(inputPassWord)
    }

}
function isDuplicatedUser(phoneNumber) {
    var userList = JSON.parse(localStorage.getItem('UserDB'));
    var isDuplicate = false
    for (var i = 0; i < userList.length; i++) {
        if (phoneNumber === userList[i].phone) {
            isDuplicate = true;
        }
    }
    return isDuplicate;
}

function errorMessage(pElement, message) {
    const formRow = pElement.parentElement;
    if (formRow.classList.contains('success')) {
        formRow.classList.remove('success');
        formRow.classList.add('error');
    } else {
        formRow.classList.add('error');


    }
    formRow.querySelector('.message').textContent = message;
}

function successMessage(pElement) {
    const formRow = pElement.parentElement;
    if (formRow.classList.contains('error')) {
        formRow.classList.remove('error');
        formRow.classList.add('success');

    } else {
        formRow.classList.add('success');
    }
}
