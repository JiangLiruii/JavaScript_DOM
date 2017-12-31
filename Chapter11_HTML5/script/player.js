function addControl(vid) {
  vid.removeAttribute('control');
  vid.height = vid.videoHeight;
  vid.width = vid.videoWidth;
  vid.parent.style.height = `${vid.height}px`;
  vid.parent.style.width = `${vid.width}px`;
  
  const control = document.createElement('div');
  control.setAttribute('class', 'controls');

  const play = document.createElement('button');
  play.setAttribute('title', 'play');
  play.innerHTML = '&#x25BA';

  control.appendChild(play);
  vid.parentNode.insertBefore(control, vid);

  play.onclick = () => {
    if (vid.ended) {
      vid.currentTime = 0;
    }
    if (vid.paused) {
      vid.play();
    } else vid.pause();
  };
  vid.addEventListener('play', () => {
    play.innerHTML = '&#x2590;&#x2590';
    play.setAttribute('paused', true);
  }, false);

  vid.addEventListener('pause', () => {
    play.setAttribute('paused', false);
    play.innerHTML('&#x25BA');
  }, false);

  vid.addEventListener('end', () => {
    vid.pause();
  }, false);
}

function createVideoControls() {
  const vids = document.getElementsByClassName('video');
  for (let i = 0; i < vids.length; i++) {
    addControl(vids[i]);
  }
}

window.onload = () => {
  createVideoControls();
};
