const doc = document.documentElement

const documentHeight = () => {
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
 }
 window.addEventListener('resize', documentHeight)
 documentHeight()


 const documentWidth = () => {
  doc.style.setProperty('--doc-width', `${window.innerWidth}px`)
 }
 window.addEventListener('resize', documentWidth)
 documentWidth()

// Scroll Animation

const blocks = document.querySelectorAll('.block');

function scrollAnimation() {
  const triggerBottom = window.innerHeight / 5 * 4;
  blocks.forEach(block => {
    const blockTop = block.getBoundingClientRect().top;
    if(blockTop < triggerBottom) {
      block.classList.add('show');
    } else {
      block.classList.remove('show');
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


