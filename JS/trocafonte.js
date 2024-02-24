document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('trocafonte');
  const body = document.body;
  let isDislexiaFont = false;

  button.addEventListener('click', function() {
    isDislexiaFont = !isDislexiaFont; // Inverte o estado da variável
    if (isDislexiaFont) {
      body.style.fontFamily = 'dislexia, sans-serif';
    } else {
      body.style.fontFamily = 'Arial, sans-serif';
    }
  });
});
