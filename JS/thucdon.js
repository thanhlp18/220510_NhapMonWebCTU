
function renderMenu(phanloai) {
    var riceChickenMenu = document.querySelector('.rice-chicken');
    riceChickenMenu.innerHTML = "";
    let count = 0;
    data.forEach(element => {
        if (element.phanloai == phanloai) {
            count++;
            let price = Number(element.price).toLocaleString("vi");
            let chitiet = '<ul class="rice-ingredient">';
            element.note.forEach(txt => {
                chitiet += '<li>' + txt + '</li>';
            });

            chitiet += '</ul>';

            riceChickenMenu.innerHTML +=
                `<div class="rice-chicken__infor-${count}"> 
                <img style="background-image: url(${element.image}); background-size: contain; background-repeat: no-repeat;   background-position-x: center; background-size: contain;" class="rice-img">
                <div class = "rice-detail">
                    <h2 class = "rice-name">${element.name}</h2>
                   
                    ${chitiet}
                  
                    <div class="rice-pay">
                        <span class="rice-price">${price} VND</span>
                        <button class="btn btn--size" onclick="addCart('${element.name}','${element.price}','${element.image}')" >MUA LIỀN</button>
                    </div>
            
            </div>`

        }
    });
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
if (btn1 && btn2 && btn3 != null) {
    btn1.addEventListener('click', () => renderMenu(btn1.value));

    btn2.addEventListener('click', () => renderMenu(btn2.value));

    btn3.addEventListener('click', () => renderMenu(btn3.value));
}


