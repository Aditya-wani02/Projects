function fetchRandomMeme() {
    fetch('http://meme-api.com/gimme')
      .then(response => response.json())
      .then(data => {
        const memeImage = document.getElementById('memeImage');
        memeImage.src = data.url;
      });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchRandomMeme();
  });
  