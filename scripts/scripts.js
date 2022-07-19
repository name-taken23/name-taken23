//Form validation.


$('.contact-btn').on('click',(e)=> {
    e.preventDefault();
    let contactForm = {
        fname: document.forms["contact-form"]["fname"].value,
        lname: document.forms["contact-form"]["lname"].value,
        emailAdd: document.forms["contact-form"]["email"].value,
        emailSubject: document.forms["contact-form"]["emailsubject"].value
    
    }   
       for(let x in contactForm){
        if(contactForm[x] === ""){
           
           console.log(x);
            switch(x){
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
            alert('You are missing the field: ' + x);
            
        }
    }
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    
    if(regex.test(contactForm.emailAdd) == false){
        alert("Please enter a valid email");
    }else{
        alert("Form submitted!");
    }
});