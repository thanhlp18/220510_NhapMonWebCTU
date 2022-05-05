function renderMenuKhuyenMai() {
    var khuyenMaiMenu = document.querySelector('.chicken-sale');
    khuyenMaiMenu.innerHTML = "";

    dataKM.forEach(element => {
        let discountPrice = parseFloat(element.price) * (1 - (parseFloat(element.discount) / 100));
        khuyenMaiMenu.innerHTML +=
            `<div class="chicken-discount">
                    <img src=${element.image} class="discount-img">
                
                    <h2 class = "discount-title">${element.name}</h2>
                  
                    <p class="discount-money">
                        ${Number(element.price).toLocaleString('vi')} <sup> VND </sup> 
                    </p>
                     <button class="btn" onclick="addCart('${element.name}','${discountPrice}','${element.image}')" >MUA LIỀN</button>
                    <div class="discount-percent">- ${element.discount}%</div>

                </div>`
    });
}
renderMenuKhuyenMai();