window.onload = ()=>{
  const boxes = document.querySelectorAll('.tabtab');
  if (boxes.length) {
     boxes.forEach(box => box.addEventListener('click', myBoxClickHandler));
  } else {
    console.log('These aren\'t the boxes you\'re looking for.');
     // на самом деле вся ветка 'else' не нужна
  }
  let modal = document.getElementById("modal");
}

  const openModal = () => {
      console.log(modal)
      console.log(modal.style)
      console.log(modal.style.display)
      modal.style.display = "block";
  }

  const closeModal = () => {
      modal.style.display = "none";
  }