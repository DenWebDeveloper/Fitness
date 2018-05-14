$(() => {
    new Swiper('.reviews-slider-container', {
        autoHeight: true, //enable auto height
        spaceBetween: 20,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is <= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

$(() => {
    let open = false;
    $('.header-nav__toggle').on('click', () => {
        console.log(open);
        $('.header-nav__toggle').toggleClass('active');
        $('.nav').toggleClass('active');
        if (open) {
            open = false;
            $('.header-nav__toggle i').removeClass().addClass('fas fa-bars');
        } else {
            open = true;
            $('.header-nav__toggle i').removeClass().addClass('fas fa-window-close');
        }
    });
});

$(() => {
    let status = 'pause';
    $('.about__video').click(function () {
        if (status === 'pause') {
            status = 'play';
            $('.about__video').get(0).play();
        } else {
            status = 'pause';
            $('.about__video').get(0).pause();
        }
    });
});

$(() => {
    let  firstOpen = true;

    $('.banner__button, .jumbotron__button,.modal-close').on('click', () => {
        $('.modal').toggleClass('active');
        if (firstOpen) {
            firstOpen = false;
        } else {
            $('.sign-up').html('Записаться еще')
        }
    });

    $(".modal-form > input").on('input', () => {
        if ($("input[name='name']").val() &&
            $("input[name='age']").val() &&
            $("input[name='weight']").val() &&
            $("input[name='sex']").val()) {

            $('.programs').addClass('active');
            $('.programs > label').removeClass('active');
            $('.programs > .program-' + randomInteger(1, 4)).addClass('active');
            $('.programs > .program-' + randomInteger(1, 4)).addClass('active');

            let activeCheckBox = 0;
            $('.checkbox').change(function () {
                if ($(this).prop("checked")) {
                    activeCheckBox += 1;
                    $('.sign-up').addClass('active');
                } else {
                    activeCheckBox -= 1;
                    activeCheckBox === 0 ? $('.sign-up').removeClass('active') : null;
                }
            });
        } else {
            $('.programs').removeClass('active');
        }
    });

    if(localStorage.getItem('form')) {
        const {sex,weight,name,age} =  JSON.parse(localStorage.getItem('form'));
        $("input[name='sex']").val(sex);
        $("input[name='weight']").val(weight);
        $("input[name='name']").val(name);
        $("input[name='age']").val(age);
        $('.programs').addClass('active');
        $('.programs > .program-' + randomInteger(1, 4)).addClass('active').find('.checkbox').prop('checked', true);
        $('.programs > .program-' + randomInteger(1, 4)).addClass('active').find('.checkbox').prop('checked', true);
        $('.sign-up').addClass('active').html('Записаться еще');
    }

    $('.sign-up').on('click', (event) => {
        event.preventDefault();
        alert('Отправлено');
        $('.sign-up').html('Записаться еще');
        const dataForm = {
            sex: $("input[name='sex']").val(),
            weight: $("input[name='weight']").val(),
            name: $("input[name='name']").val(),
            age: $("input[name='age']").val()
        };
        localStorage.setItem("form",JSON.stringify(dataForm));
    })
});

