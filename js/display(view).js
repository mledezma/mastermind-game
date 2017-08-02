var btnInstruction = document.getElementById('btnInstruction');
var modalInstruction = document.getElementById('modalInstruction');
var opacity = document.getElementById('opacity');

btnInstruction.addEventListener('click', function () {
  modalInstruction.style.display = 'block';
  opacity.style.display = 'block';
  console.log("jojola")
});

opacity.addEventListener('click', function () {
  modalInstruction.style.display = 'none';
  opacity.style.display = 'none';
});