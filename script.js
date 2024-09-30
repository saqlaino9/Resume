 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');

 const form = document.querySelector("form");
 const fullName = document.getElementById("name");
 const email = document.getElementById("email");
 const phone = document.getElementById("phone");
 const subject = document.getElementById("sub");
 const message = document.getElementById("message");

 window.onscroll = () => {
     sections.forEach(sec => {
         let top = window.scrollY;
         let offset = sec.offsetTop - 150;
         let height = sec.offsetHeight;
         let id = sec.getAttribute('id');

         if(top >= offset && top < offset + height){
             navLinks.forEach(link => {
                 link.classList.remove('active');
                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
             });
         }
     });

     //Remove NavBar

    const navLink = document.querySelectorAll('.active')

    function linkAction(){
        const navMenu = document.querySelector('.navbar')
            navMenu.classList.remove('show-nav')
    }

 };

 menuIcon.onclick = () => {
     menuIcon.classList.toggle('bx-x');
     navbar.classList.toggle('active');
 };



 function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;
 
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "saqlainahmed.1774@gmail.com",
        Password : "F7584FF844DB3E856DA304464406928A36DB",
        To : 'saqlainahmed.1774@gmail.com',
        From : "sufyanwarrior93@gmail.com",
        Subject : subject.value,
        Body: bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
 }

 function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
    }
 }
 


 form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
 });





