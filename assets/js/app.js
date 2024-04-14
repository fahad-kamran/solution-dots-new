console.log("APP");
function goBack() {
    window.history.back();
}

$('.logo__slider').slick({
    dots: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 552,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ]
});