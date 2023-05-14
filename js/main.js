// function load() {
//     const randomNumber = Math.ceil(Math.random() * 3); //numbers 1 - 3
//     console.log(randomNumber);

//     for (let i = 1; i <= 3; i++) {
//         const id = "q" + i;
//         if (randomNumber === i) {
//             document.getElementById(id).style.display = "inline";
//         } else {
//             document.getElementById(id).style.display = "none";
//         }
//     }
// }
    // Hide content till the page loads

    window.addEventListener('load', function() {
        var content = document.getElementById('content');
        content.style.display = 'block';
        this.alert('Hide and Seek ... Search for the quote of day <3')
      });
 // Get the button element
 var button = document.getElementById("myButton");

 // Get the width and height of the window
 var width = window.innerWidth;
 var height = window.innerHeight;
 // Generate a random X and Y position for the button
 var randomX = Math.floor(Math.random() * (width - 100));
 var randomY = Math.floor(Math.random() * (height - 50));

 // Set the position of the button
 button.style.left = randomX + "px";
 button.style.top = randomY + "px";

//  Hide the div on page load
jQuery(document).ready(function($){
   $('#myButton').css('opacity', '0')
//    $('#myButton').on('hover', function() {
//     $('.test').css('opacity','1');
//    })
$("#myButton, .test").hover(function(e) { 
    $(this).css("opacity",e.type === "mouseenter"?"1":"0"); 
}),function() {
    $(this).css("opacity", e.type==="mouseleave"?"1":"0");
}
});


// const showModalEffect1=(openButton, modalContent)=>{const openBtn = document.getElementById(openButton),modalContainer = document.getElementById(modalContent);if (openBtn && modalContainer){openBtn.addEventListener('click',()=>{modalContainer.classList.add('show-modal1')})}};showModalEffect1('open-modal1', 'modal-container');const closeBtn=document.querySelectorAll('.close-modal');function closeModal(){const modalContainer = document.getElementById('modal-container');modalContainer.classList.remove('show-modal1');}closeBtn.forEach(c => c.addEventListener('click', closeModal))



/* ------------- SHOW MODAL EFFECT 1 ------------- */

const showModalEffect1 = (openButton, modalContent) => {
    const openBtn = document.getElementById(openButton),
        modalContainer = document.getElementById(modalContent)

    if (openBtn && modalContainer) {
        openBtn.addEventListener('click', () => {
            modalContainer.classList.add('show-modal1')
        })
    }
}

showModalEffect1('myButton', 'modal-container')


/* ------------- CLOSE MODAL ------------- */

const closeBtn = document.querySelectorAll('.close-modal')

function closeModal() {
    const modalContainer = document.getElementById('modal-container')
    modalContainer.classList.remove('show-modal1');

}

closeBtn.forEach(c => c.addEventListener('click', closeModal))


// let tts = document.getElementsByClassName('.modal__button-width');
$(document).ready(function() {
    $(".modal__button-width").click(function() {
        // alert('Hello');
    });
});

(function () {
    var count = 0;
  
    $('.modal__button-width').click(function () {
      count += 1;
  
      if (count >= 1) {
        // come code
        // console.log(count);
        // $('test').append = count;
        $('.test').html(count);
      }
    });
    
  })();

//   Load paragraph

function displayRandomParagraph() {
    var paragraphs = [
      "This is the first paragraph.",
     "وَمَا هُوَ بِقَوْلِ شَيْطَانٍ رَّجِيمٍ",
     "فَأَيْنَ تَذْهَبُونَ",
     "إِنْ هُوَ إِلَّا ذِكْرٌ لِّلْعَالَمِينَ",
     "أَأُلْقِيَ الذِّكْرُ عَلَيْهِ مِن بَيْنِنَا بَلْ هُوَ كَذَّابٌ أَشِرٌ",
     "أَأُنزِلَ عَلَيْهِ الذِّكْرُ مِن بَيْنِنَا ۚ بَلْ هُمْ فِي شَكٍّ مِّن ذِكْرِي ۖ بَل لَّمَّا يَذُوقُوا عَذَابِ",
     "إِنْ هُوَ إِلَّا ذِكْرٌ لِّلْعَالَمِينَ",
    ];
    var randomParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    var element = document.createElement('p');
    element.textContent = randomParagraph;
    var testParagraph = document.querySelector('.quote_day');
    testParagraph.appendChild(element);
  }
  
  window.addEventListener('load', displayRandomParagraph);