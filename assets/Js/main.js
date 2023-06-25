// Add click event listener to "Back to Top" button
var backToTopBtn = document.getElementById('backToTopBtn');
backToTopBtn.addEventListener('click', function() {
  scrollToTop();
});

function scrollToTop() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
// Top bar
var slider = document.getElementById('slider');
var slideIndex = 0;
carousel();

function carousel() {
  var slides = slider.getElementsByClassName('topbar-text');
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(carousel, 3000);
}

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

function submitForm(event) {
  event.preventDefault();
  event.stopPropagation();

  if (event.target.checkValidity()) {
    console.log('Form submitted!');
  } else {
    event.target.classList.add('was-validated');
  }
}

var form = document.querySelector('.needs-validation');
form.addEventListener('submit', submitForm);

// Add click event listener to "Back to Top" button
var backToTopBtn = document.getElementById('backToTopBtn');
backToTopBtn.addEventListener('click', scrollToTop);

