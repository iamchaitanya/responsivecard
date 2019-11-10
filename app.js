  var swiper = new Swiper('.swiperjs', {
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

var swiper = new Swiper('.swipertwo' , {
  effect: 'coverflow',
  loop: true,
  autoplay: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
});


// db.collection('tournament').get().then((snapshot) => {
//   snapshot.docs.forEach(doc =>{
//     console.log(doc.data());
//   });
  
// });


 function add() {
  // db.collection('tournament').get().then((snapshot) => {
  //   snapshot.docs.forEach(doc =>{
  //     console.log(doc.data());
  //   });
  
  // });
  console.log("object");
  console.log("jai");
 };

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 


// var test = document.getElementsByTagName("a");

// for(i = 0; i < test.length; i++ ){
//     test[i].addEventListener("click", function(e) {
//         e.preventDefault();
//     });
// };


const cafeList = document.querySelector('#cafe-list');

// function renderCafe(doc){

// }  

