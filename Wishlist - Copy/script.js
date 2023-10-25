// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('x');
//     navbar.classList.toggle('active');
// };



// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top <offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });

//     let header = document.querySelector('header');

//     header.classList.toggle('sticky', window.screenY > 100);

//     menuIcon.classList.remove('x');
//     navbar.classList.remove('active');
// };









// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "jodicksonjoshua@gmail.com",
//         Password : "josh2funny",
//         To : 'jodicksonjoshua@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "Client from Bi-Tech",
//         Body : "Name: " + document.getElementById("name").value
//             + "<br> Email: " + document.getElementById("email").value
//             + "<br> Phone number: " + document.getElementById("number").value
//             + "<br> Message: " + document.getElementById("message").value
//     }).then(
//     message => alert("Message Sent Succesfully")
//     );
// };





let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) + 460)
        });
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.remove('fade');
                }, (idx + 1) + 50)
            },2000);
            setTimeout(()=>{
                intro.style.top = '-140vh';
            }, 3300)
        })
    })
})















