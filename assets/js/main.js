$(document).ready(function(){
    let url = window.location.pathname
    let ancor = $('.header-nav ul li a')
    ancor.each(function(){
        let href = $(this).attr('href')
        if(href == url) {
            $(this).addClass('active')
        }
    })
})


$('.active-dialog__btn').click(function() {
    let elem = $(this).find('img')
    let dataSource = $(this).attr('data-item')
    if(elem.attr('src') !== '/themes/golden-ratio/assets/images/footer/cross.svg') {
        dataSource = '/themes/golden-ratio/assets/images/footer/cross.svg'
    } 
    elem.attr('src', dataSource)
    
})


$('.whatsapp-btn').click(function() {
    let elem = $(this).find('img')
    let whatsapp = $('.whatsapp')
    if(elem.attr('src') == '/themes/golden-ratio/assets/images/footer/cross.svg') {
        whatsapp.fadeIn(300)
    } else {
        whatsapp.fadeOut(300)
    }
})

$('.contact-btn').click(function() {
    let elem = $(this).find('img')
    let form = $('.contact-form_small')
    if(elem.attr('src') == '/themes/golden-ratio/assets/images/footer/cross.svg') {
        form.fadeIn(300)
    } else {
        form.fadeOut(300)
    }
})

$('.menu-btn').click(function() {
    let elem = $(this).find('img')
    if(elem.attr('src') == '/themes/golden-ratio/assets/images/footer/cross.svg') {
        elem.attr('src', '/themes/golden-ratio/assets/images/menu.svg')
    } else {
        elem.attr('src', '/themes/golden-ratio/assets/images/footer/cross.svg')
    } 

    $('.mobile-menu').slideToggle()
})

