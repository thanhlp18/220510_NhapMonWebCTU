var formDangKi = document.querySelector('.formDangKi');
var container = document.querySelector('.container');
var inputPassWord2 = document.getElementById('txt-password2');


//Đây chỉ là demo đăng kí, vì vốn dĩ quá trình đăng kí cần dc xử lí ở phía backend để lưu vào cơ sở dữ liệu
//kiểm tra xác thực, mã hóa, giải mã, ...Việc sử dụng localStorage để lưu mật khẩu không qua mã hóa là sai về nguyên tắc bảo mật
//ở đây chỉ lưu duy nhất người đăng kí gần nhất nhưng cũng đã có chức năng kiểm tra DB tài khoản người dùng đã đăng kí
//nhắc lại đây chỉ là demo đăng kí và đăng nhập


//kiểm tra mật khẩu nhập lại
function checkPassWord2() {
    if (inputPassWord2.value === '') {
        errorMessage(inputPassWord2, 'Mật khẩu không được bỏ trống!')
    }
    if (inputPassWord2.value === inputPassWord.value) {
        successMessage(inputPassWord2)
    }
    else {
        errorMessage(inputPassWord2, 'Mật khẩu không đúng!')
    }
}
inputName.addEventListener('blur', checkName)
inputPassWord.addEventListener('blur', checkPassWord)
inputPhone.addEventListener('blur', checkPhone);
inputEmail.addEventListener('blur', checkEmail);
inputPassWord2.addEventListener('blur', checkPassWord2)

formDangKi.addEventListener('submit', (event) => {
    event.preventDefault();
    checkName();
    checkPhone();
    checkEmail();
    checkPassWord();
    checkPassWord2();

    var formRows = Array.from(formDangKi.querySelectorAll('.form-row'));
    var isValid = true;
    formRows.forEach(Element => {
        if (Element.classList.contains('error'))
            isValid = false;
    })
    if (isValid) {
        if (JSON.parse(localStorage.getItem('UserDB')) == null) {
            var UserInfo = { "phone": inputPhone.value, "password": inputPassWord.value, "email": inputEmail.value, "name": inputName.value }
            localStorage.setItem('UserDB', JSON.stringify(UserInfo))
            container.classList.add('complete');

            alert('Đăng kí tài khoản thành công')
            location.href = './dangnhap.html';
        }
        //chưa có người dùng nào đăng kí
        else {
            var UserDB = JSON.parse(localStorage.getItem('UserDB'));
            var duplicate = false;
            //kiểm tra số điện thoại đã được đăng kí hay chưa
            for (var i = 0; i < UserDB.length; i++) {
                if (UserDB[i].phone === inputPhone.value) {
                    duplicate = true;
                }
            }
            if (duplicate) {
                alert('Số điện thoại này đã được đăng kí!')
                container.classList.remove('complete');
            }
            else {
                var UserInfo = { "phone": inputPhone.value, "password": inputPassWord.value, "email": inputEmail.value, "name": inputName.value }
                localStorage.setItem('UserDB', JSON.stringify(UserInfo))
                alert('Đăng kí tài khoản thành công')
                location.href = './dangnhap.html';
            }
        }
    }
    else {
        container.classList.remove('complete');
    }
})