window.addEventListener('DOMContentLoaded', () => {
    // const name = 'John';
    // $('h2').eq(0).html(`Это предложение именно для вас, ${name}!`);

    $('.carousel-ball').createCarousel({
        id: 'carousel-test', // имя id-атрибута который будет добавлен слайдеру
        autoplay: true, // автопереключение слайдов
        autoplaySpeed: 2000, // скорость переключения в м/сек
        slides: [
            'https://static.insales-cdn.com/images/products/1/2706/471026322/A56E5549-90DB-40A6-A8A5-43DF2948A50F.jpeg',
            'https://fcmaximus.by/wp-content/uploads/2023/03/EucOlQuWgAQ23BB.jpg',
            'https://culture.futbol/wp-content/uploads/2021/04/Adidas-Uniforia.jpg',
            'https://naked-science.ru/wp-content/uploads/2016/04/article_adidas-brazuca-38982-cutout-final.jpg'
        ]
    });
});