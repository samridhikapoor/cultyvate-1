// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


// display current year

function displayYear() {
    var d = new Date();
    var currentYear = d.getFullYear();

    document.querySelector("#displayDate").innerHTML = currentYear;
}
displayYear();

// client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    navText: [],
    center: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: ['<span class="fa fa-arrow-left "></span>', '<span class="fa fa-arrow-right"></span>'],
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
// popup-form
document.getElementById('popp').addEventListener('click',function(){
    document.querySelector('.popup-bg').style.display='flex';
});
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.popup-bg').style.display='none';
});