
$(document).ready(function(){
    // $(".register").click(function(){
    //     var regi="register.html";
    //     window.open(regi,"_blank");
    // });
    $(".toggle-menu").click(function(){
        $('#menuBars').toggleClass('fa-bars fa-close');
        document.querySelector('.navList').classList.toggle("menuOpen");
    });

});
