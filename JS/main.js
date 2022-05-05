var callNode = document.querySelector('.call-icon');
callNode.onclick = function(){
    alert('Hãy liên hệ với chúng tôi qua số máy: 0342040063 hoặc 0942046001 ! Love');
}
var number = JSON.parse(localStorage.getItem('Names'));
if(number != null) document.getElementById('cart-number').textContent = number.length;
else document.getElementById('cart-number').textContent = 0
        