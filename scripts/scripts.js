//Form validation.
$('.contact-btn').on('click', (e) => {
    e.preventDefault();
    let contactForm = {
        fname: document.forms["contact-form"]["fname"].value,
        lname: document.forms["contact-form"]["lname"].value,
        emailAdd: document.forms["contact-form"]["email"].value,
        emailSubject: document.forms["contact-form"]["emailsubject"].value

    }
    for (let x in contactForm) {
        if (contactForm[x] === "") {


            switch (x) {
                case "fname":
                    x = "First Name.";
                    break;
                case "lname":
                    x = "Last Name.";
                    break;
                case "emailAdd":
                    x = "Email Address.";
                    break;
                case "emailSubject":
                    x = "Email Subject.";

            }
            console.log(x);
            alert('You are missing the field: ' + x);

        }
    }
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (regex.test(contactForm.emailAdd) == false) {
        alert("Please enter a valid email.");
    } else {
        alert("Form submitted.");
    }
});


//navbar scroll
$(window).on('scroll', () => {
    let winWidth = window.innerWidth;
    if (document.documentElement.scrollTop && winWidth > 998) {
        document.getElementById("custom-navbar").style.top = "0";
    } else {
        document.getElementById("custom-navbar").style.top = "-400px";
    }
});

//mobile navbar scroll
$(window).on('scroll', () => {
    if (document.documentElement.scrollTop) {
        document.getElementById("custom-mobile-navbar").style.bottom = "0";
    } else {
        document.getElementById("custom-mobile-navbar").style.bottom = "-100px";
    }


});

//navbar hide on window resize.
$(window).resize(() => {
    if ($(this).width() >= 981) {
        $('.custom-navbar').show();
    }
    else {
        $('.custom-navbar').hide();
    }
});



//collapsible

//small function to control resizing of collapsibles, needs work to encapusulate and make it resuable between the elements. 
// $(window).resize(() => {
//     if(parseInt($('.example-content').css('max-height'), 10) > 1){
//        var currentHeight = $(window).scrollHeight + "px";
//        $('.example-content').css('max-height', currentHeight);
       
        
//     }
// });

function collapsibleContent() {
    let thisclass = $(this).attr('class').split(" ");
    let coll = document.getElementsByClassName(thisclass[0]);
   
    let i;
    for (i = 0; i < coll.length; i++) {
        // coll.item(0).classList.toggle("active");
        var content = coll.item(0).nextElementSibling;
      
        if (content.style.maxHeight == "100%") {
            content.style.maxHeight = "0px";

        } else {
            content.style.display = "flex";
            content.style.maxHeight = 100 + "%";
            

        }
    }
};

$('.collapsible3').on('click', collapsibleContent);
$('.collapsible2').on('click', collapsibleContent);
$('.collapsible1').on('click', collapsibleContent);




