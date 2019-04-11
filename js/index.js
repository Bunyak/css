let buttonArray = document.querySelectorAll('.button');

buttonArray.forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Ваше замовлення додане до корзини');
    });
});


const linkFacebook = document.querySelector('.link-facebook');
const linkInstagram = document.querySelector('.link-instagram');
const linkTelegram = document.querySelector('.link-telegram');

linkFacebook.href = 'https://www.facebook.com';
linkInstagram.href = 'https://www.instagram.com';
linkTelegram.href = 'https://web.telegram.org';

