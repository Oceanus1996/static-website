    //memory page
    const imgContainer = document.querySelector('.image-container');
    const videoPlayer = document.querySelector('#video-player');

    imgContainer.addEventListener('click', (event) => {
      if (event.target.tagName === 'IMG') {
        const videoSrc = event.target.getAttribute('data-video');
        videoPlayer.src = videoSrc;
      }
    });