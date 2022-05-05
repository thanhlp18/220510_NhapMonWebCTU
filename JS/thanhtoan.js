var DivHoaDon = document.querySelector('.hoadon');

const formThongtinTT = document.querySelector('.formThongtinTT');
const container = document.querySelector('.container');

inputName.addEventListener('blur', checkName);
inputMessage.addEventListener('blur', checkMessage);
inputPhone.addEventListener('blur', checkPhone);
inputAddress.addEventListener('blur', checkAddress);

// xử lí form điền thông tin nhận hàng trước khi hoàn thành thanh toán
formThongtinTT.addEventListener('submit', (event) => {
    event.preventDefault();
    checkName()
    checkPhone()
    checkAddress()
    checkMessage()
    var isValid = true;
    var formRows = Array.from(formThongtinTT.querySelectorAll('.form-row'));
    formRows.forEach(Element => {
        if (Element.classList.contains('error'))
            isValid = false;
    });
    if (isValid) {
        container.classList.add('complete');
        alert("Thông tin giao hàng của bạn đã hợp lệ, bạn hãy nhất nút thanh toán để chúng tôi giao hàng sớm nhất");

    } else {
        container.classList.remove('complete');
    }

})
//onclick=thanhtoan(this)
function thanhtoan(btnThanhToan) {
    if (btnThanhToan.value == 0) {
        alert('Giỏ hàng của bạn đang rỗng, hãy chọn món ăn để thanh toán!')
    }
    else {
        alert(`Tổng số tiền bạn cần thanh toán là: ${btnThanhToan.value} VND`);
    }
}

// trang thanh toán sẽ được cập nhật liên tục mỗi khi thêm hoặc xóa món ăn
window.onload = function () {
    var tongtien = 0;
    var itemList = JSON.parse(localStorage.getItem('Names'));
    //thêm từng món vào trong trang từ localStorage
    if (itemList != null) {
        var ul = document.createElement('ul');

        for (var i = 0; i < itemList.length; i++) {
            var item = JSON.parse(localStorage.getItem(itemList[i]));
            var li = document.createElement('li');
            li.innerHTML = `<div class="item-box">
                            <img src='${item.image}' class="item-image">
                            <div class="item-detail">
                                <p class="item-title">${item.name}</p>
                                <p class="item-sl">Số lượng: ${item.quantity}</p>
                                <div class="manager-btn">
                                    <button class="btn-tt" onclick="truItem('${item.name}')">-</button>
                                    <button class="btn-tt" onclick="congItem('${item.name}')">+</button>
                                    <button class="btn-tt" onclick="xoaItem('${item.name}')">Xóa món</button>
                                </div>
                                <p class="item-money">${Number(item.price).toLocaleString("vi")} VNĐ</p>
                            </div>
                        </div> `
            ul.appendChild(li);
            tongtien += parseFloat(item.quantity) * parseFloat(item.price);

        }
        //cuối cùng là tổng số tiền và gắn nút thanh toán
        var btnThanhToan = document.getElementById('btn-thanhtoan')
        btnThanhToan.setAttribute('value', Number(tongtien).toLocaleString("vi"))
        var h2 = document.createElement('h2');
        h2.innerHTML = `Tổng số tiền: ${Number(tongtien).toLocaleString("vi")} VNĐ`;
        h2.className = 'total-money';
        DivHoaDon.appendChild(ul)
        DivHoaDon.appendChild(h2)

    }




};

