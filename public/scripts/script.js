$('.navlink button').on('click', ()=>{
    $('.container').css('transform', 'scale(100%)');
});

$('.login-form .viii a').on('click', (event) => {
    event.preventDefault();
    // $('.container').addClass('active');
    $('.login-form').removeClass('center');
    $('.login-form').addClass('left');
    $('.register-form').addClass('center');
});

$('.register-form .viii a').on('click', (event) => {
    event.preventDefault();
    // $('.container').removeClass('active');
    $('.register-form').removeClass('center');
    $('.register-form').addClass('right');
    $('.login-form').addClass('center');
});

$('.bx-x').on('click', ()=>{
    $('.container').css('transform', 'scale(0%)');
});
