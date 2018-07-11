var RegExpression = /^[a-zA-Z\s]*$/;
var container = document.querySelector('.neymar__show');
var input = document.querySelector('.neymar__input');

input.addEventListener('keyup', function (e) {
  var inp = String.fromCharCode(e.keyCode);

  if (RegExpression.test(inp)) {
    var letter = document.createElement('div');
    inp = inp == ' ' ? 'space' : inp;

    letter.classList.add('neymar');
    letter.classList.add('neymar__letter-'.concat(inp));
    container.appendChild(letter);
  } else if (e.keyCode == 8) {
    if (input.value.length == 0) {
      container.innerHTML = '';
    } else {
      var lastLetter = container.lastChild;
      container.removeChild(lastLetter);
    }
  }
}, false);