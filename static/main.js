// Get the modal
const wifiModal = document.getElementById("wifiModal");

// Get the button that opens the modal
const wifiBtn = document.getElementById("wifiBtn");

// Get the <span> element that closes the modal
const submitBtn = document.querySelector(".submit-btn");
const cancelBtn = document.querySelector(".cancel-btn");



// When the user clicks the button, open the modal 
wifiBtn.onclick = function() {
    wifiModal.classList.add('modal-displayed');
}

// When the user clicks on <botton> (cancel), close the modal
cancelBtn.onclick = function() {
    wifiModal.classList.remove('modal-displayed');
}

// When the user clicks on <botton> (save and restart) - save, restart controller and close the wifi model 
submitBtn.onclick = function() {
    wifiModal.classList.remove('modal-displayed');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == wifiModal) {
        wifiModal.classList.remove('modal-displayed');
    }
}