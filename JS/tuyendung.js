
var formRecruit = document.querySelector('.form-recruit');
var container = document.querySelector('.container');
//đổi chỗ nhập ngày sinh là kiểu date để chọn ngày, bình thường thì cho thấy dc placeholder
inputBirthday.onfocus = function (event) {
    inputBirthday.type = 'date';
}
inputAddress.addEventListener('blur', checkAddress);
inputFacebook.addEventListener('blur', checkFacebook);
inputSex.addEventListener('blur', checkSex);
inputName.addEventListener('blur', checkName);
inputBirthday.addEventListener('blur', checkBirthday);
inputPhone.addEventListener('blur', checkPhone);
inputWorkShift.addEventListener('blur', checkWorkShift);
inputEXP.addEventListener('blur', checkEXP);
inputStick.addEventListener('blur', checkStick)
inputStudy.addEventListener('blur', checkStudy)

formRecruit.addEventListener('submit', (event) => {
    event.preventDefault();
    //check từng trường khi bấm submit để có sai thì gắn class error vào 
    checkName();
    checkSex();
    checkBirthday();
    checkPhone();
    checkAddress();
    checkStudy();
    checkWorkShift();
    checkStick();
    checkFacebook();
    checkEXP();

    const formRows = Array.from(document.querySelectorAll('.form-row'));
    formRows.pop();
    let isValid = true;
    //kiểm tra xem có trường nài sai không
    formRows.forEach(Element => {
        if (Element.classList.contains('error'))
            isValid = false;
    });
    if (isValid) {
        container.classList.add('complete');
        alert("Đơn tuyển dụng của bạn đã được gửi thành công hãy đợi phản hồi sớm nhất từ chúng tôi. Trân trọng");
        //trả lại form mới
        setTimeout(() => {
            container.classList.remove('complete');
            inputName.value = "";
            inputSex.value = "gt";
            inputBirthday.value = "";
            inputAddress.value = "";
            inputStudy.value = "study";
            inputStick.value = "stick";
            inputEXP.value = "";
            inputFacebook.value = "";
            inputWorkShift.value = "work"
            inputPhone.value = "";
            formRows.forEach(Element => {
                Element.classList.remove('success')
            });
        }, 1500);

    } else {
        container.classList.remove('complete');
    }
});

