
const formLienHe = document.querySelector('.formLienHe');
const container = document.querySelector('.container');


inputName.addEventListener('blur', checkName);
inputEmail.addEventListener('blur', checkEmail);
inputMessage.addEventListener('blur', checkMessage);
inputPhone.addEventListener('blur', checkPhone);
//kiểm tra từng trường khi bấm submit
formLienHe.addEventListener('submit', (event) => {
    event.preventDefault();
    checkName()
    checkPhone()
    checkEmail()
    checkMessage()

    var isValid = true;
    var formRows = Array.from(formLienHe.querySelectorAll('.form-row'));
    //kiểm tra có trường nào sai thì báo lỗi
    formRows.forEach(Element => {
        if (Element.classList.contains('error'))
            isValid = false;
    });
    if (isValid) {
        container.classList.add('complete');
        alert("Tin nhắn của bạn đã được gửi thành công hãy đợi phản hồi sớm nhất từ chúng tôi, chân thành cảm ơn nhưng đóng góp quí báu từ bạn. Trân trọng");
        //trả lại form mới
        setTimeout(() => {
            container.classList.remove('complete');
            inputName.value = "";
            inputEmail.value = "";
            inputPhone.value = "";
            inputMessage.value = "";
            formRows.forEach(Element => {
                Element.classList.remove('success')
            });
        }, 1500);


    } else {
        container.classList.remove('complete');
    }

})

