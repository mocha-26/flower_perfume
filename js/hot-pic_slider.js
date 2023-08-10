
$(document).ready(function() {
    $('.item').each(function(index) {
        $(this).prepend('<span class="item-number">' + (index + 1) + '</span>');
    });
        const prevIcon = ' <img src="../RWD_pic/left_arrow_icon.png" alt="">';
        const nextIcon = ' <img src="../RWD_pic/right_arrow_icon.png" alt="">';
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            prevIcon,
            nextIcon
        ],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});
