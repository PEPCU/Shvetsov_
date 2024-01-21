const boxes = document.querySelectorAll('.tabtab');
if (boxes.length) {
   boxes.forEach(box => box.addEventListener('click', myBoxClickHandler));
} else {
  console.log('These aren\'t the boxes you\'re looking for.');
   // на самом деле вся ветка 'else' не нужна
}
