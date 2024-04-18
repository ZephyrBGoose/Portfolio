const documentHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
 }
 window.addEventListener('resize', documentHeight)
 documentHeight()

// Scroll Animation

const sections = document.querySelectorAll('article');

function scrollAnimation() {
  const triggerBottom = window.innerHeight / 5 * 3;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  })
}

window.addEventListener('scroll', scrollAnimation);


//Projects section autoplay video controls

const videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});


