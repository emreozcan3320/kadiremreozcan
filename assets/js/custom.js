$(window).on('load', function() {
    $('.tlt').textillate({
        loop: true,
        minDisplayTime: 200,
        in: {
            effect: 'tada'
        },
        out: {
            effect: 'tada'
        }
    });
    /* https://github.com/daneden/animate.css */
    const element = document.querySelectorAll('.envelop_href, .github_href, .linkedin_href');

    element[0].addEventListener('mouseenter', function(e) {
        element[0].classList.add('animated', 'bounce');
    });
    element[0].addEventListener('mouseleave', function() {
        element[0].classList.remove('animated', 'bounce');
    })

    element[1].addEventListener('mouseenter', function(e) {
        element[1].classList.add('animated', 'bounce');
    });
    element[1].addEventListener('mouseleave', function() {
        element[1].classList.remove('animated', 'bounce');
    })

    element[2].addEventListener('mouseenter', function(e) {
        element[2].classList.add('animated', 'bounce');
    });
    element[2].addEventListener('mouseleave', function() {
        element[2].classList.remove('animated', 'bounce');
    })


    /*https://sweetalert2.github.io/#examples*/
    showMailBox = function() {
        Swal.fire({
            title: '<h1 class="mail_text_style">Mail Send</h1>',
            animation: false,
            customClass: {
                popup: 'animated tada'
            },
            showCancelButton: false,
            showConfirmButton: false,
            //showCancelButton: true,
            //confirmButtonColor: '#3085d6',
            //cancelButtonColor: '#d33',
            //confirmButtonText: '<button type="submit">Send Test</button>',
            //cancelButtonText: 'Cancel',
            width: 600,
            padding: '3em',
            backdrop: `
            rgba(0,0,123,0.4)
            url("assets/img/nyan-cat.gif")
            center left
            no-repeat
        `,
            html: '<form onsubmit="onSumbitHandler()" target="_blank" method="POST" action="https://formspree.io/emreozcan3320@gmail.com">' +
                '<input type="email" name="email" placeholder="Your email" class="swal2-input" id="email" required>' +
                '<textarea  maxlength="300" minlength="30" type="text" name="message"  id="message" required aria-label="Type your message here" class="swal2-textarea" placeholder="Type your message here... (max-lenght : 300)" style="display: flex;"></textarea>' +
                '<button class="swal2-confirm swal2-styled send_mail_style" aria-label="" style="display: inline-block; background-color: rgb(48, 133, 214); border-left-color: rgb(48, 133, 214); border-right-color: rgb(48, 133, 214);"type="submit">Send</button>' +
                '</form>',
            focusConfirm: false,
        })


    }

})



/*onsubmit="onSumbitHandler()"*/
onSumbitHandler = function() {

    setTimeout(function() {
        Swal.fire({
            title: 'Redirected!',
            type: 'success'
        });
    }, 100);


}
