var formDangNhap = document.querySelector('.formDangNhap');
var container = document.querySelector('.container');

inputPhone.addEventListener('blur', checkPhone);
inputPassWord.addEventListener('blur', checkPassWord);

formDangNhap.addEventListener('submit', (event) => {
    event.preventDefault();
    checkPhone();
    checkPassWord();
    //kiểm tra từng trường đê báo lỗi(add class error)
    var formRows = Array.from(formDangNhap.querySelectorAll('.form-row'));
    var isValid = true;
    //kiểm tra lỗi
    formRows.forEach(Element => {
        if (Element.classList.contains('error'))
            isValid = false;
    })
    if (isValid) {
        //kiểm tra sđt và mật khẩu có trùng khớp với trường UserDB trong localStorage hay không?
        var UserDB = JSON.parse(localStorage.getItem('UserDB'));
        if (UserDB == null) {
            container.classList.remove('complete');
            alert('Người dùng không tồn tại');
        }
        else if (inputPassWord.value === UserDB.password && inputPhone.value === UserDB.phone) {
            container.classList.add('complete');
            alert("Đăng nhập thành công");
            location.href = './index.html';
        }
        else {
            alert('Số điện thoại hoặc mật khẩu không đúng!');
            inputPhone.value = "";
            inputPassWord.value = "";
            container.classList.remove('complete');
        }
    }
    else {
        container.classList.remove('complete');
    }
})