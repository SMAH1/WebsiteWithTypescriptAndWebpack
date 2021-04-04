
// Run begin of script
const output1 = document.getElementById('output1');
if (output1) {
  output1.innerText = 'Now is ' +  new Date().toISOString();
}

// Run after page loaded
window.addEventListener("load", () => {
  const span = document.createElement('span')
  span.innerHTML = 'Click below button or show message:';
  span.style.color = 'red'

  const output2 = document.getElementById("output2");
  output2?.appendChild(span);
});

function showMessage(): void {
  alert('WOW!');
}

window['showMessage'] = showMessage;
