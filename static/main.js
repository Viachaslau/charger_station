// Get the modal
const wifiModal = document.getElementById("wifiModal");
const chargingModeModal = document.getElementById("charging-mode-modal");
const activationModeModal = document.getElementById("activation-mode-modal");
const currentSetupModeModal = document.getElementById("current-setup-mode-modal");
const fingerprintSettingsModal = document.getElementById("fingerprint-settings-modal");

// Get the button that opens the modal
const wifiBtn = document.getElementById("wifiBtn");
const chargingModeBtn = document.getElementById("chargingModeBtn");
const activationModeBtn = document.getElementById("activationModeBtn");
const currentSetupModeBtn = document.getElementById("currentSetupModeBtn");
const fingerprintSettingsBtn = document.getElementById("fingerprintSettingsBtn");


// Get the <span> element that closes the modal
const submitBtn = document.querySelector(".submit-btn");
const cancelBtns = document.querySelectorAll(".cancel-btn");

// Charging mode choose
const chargingDropIcon = document.querySelectorAll('.hidden-block');
chargingDropIcon.forEach((option) => {
    option.classList.add('hidden-charging-option');
});

const chargingModeOptions = document.querySelectorAll('#charging-mode-modal input[type="radio"]');
chargingModeOptions.forEach((option) => {
    if(option.checked) {
        displayActiveChargingMode(option.value);
    }
});

function displayActiveChargingMode(value) {
    let textDisplayed;
    let textPlace = document.getElementById('chosen-charging-mode');
    chargingDropIcon.forEach((icon) => {
        if(icon.id === `${value}-mode`) {
            icon.classList.remove('hidden-charging-option');
        } else {
            icon.classList.add('hidden-charging-option');
        }
    });
    if(value === 'constant-power') {
        textDisplayed = 'Constant power';
    }
    if(value === 'balance-charging') {
        textDisplayed = 'Balance charge';
    }
    if(value === 'solar-charge') {
        textDisplayed = 'Solar charge';
    }
    textPlace.innerHTML = textDisplayed;
}

// Max current mode choose
const maxCurrentModeOptions = document.querySelectorAll('#current-setup-mode-modal input[type="radio"]');
maxCurrentModeOptions.forEach((option) => {
    if(option.checked) {
        displayMaxCurrentMode(option.value);
    }
});

function displayMaxCurrentMode(value) {
    let textPlace = document.getElementById('chosen-max-current-mode');
    textPlace.innerHTML = value;
}

// Activation mode choose
const activationDropIcon = document.querySelectorAll('.hidden-block-fingerprint');
activationDropIcon.forEach((option) => {
    option.classList.add('hidden-charging-option');
});

const activationModeOptions = document.querySelectorAll('#activation-mode-modal input[type="radio"]');
activationModeOptions.forEach((option) => {
    if(option.checked) {
        displayActiveActivationMode(option.value);
    }
});

function displayActiveActivationMode(value) {
    let textDisplayed;
    let textPlace = document.getElementById('chosen-activation-mode');
    activationDropIcon.forEach((icon) => {
        if(icon.id === `${value}-mode`) {
            icon.classList.remove('hidden-charging-option');
        } else {
            icon.classList.add('hidden-charging-option');
        }
    });
    if(value === 'plug-and-charge') {
        textDisplayed = 'Plug and charge';
    }
    if(value === 'app-only') {
        textDisplayed = 'App only';
    }
    if(value === 'fingerprint-sensor') {
        textDisplayed = 'Fingerprint sensor';
    }
    textPlace.innerHTML = textDisplayed;
}


// When the user clicks the button, open the modal 
wifiBtn.onclick = function() {
    wifiModal.classList.add('modal-displayed');
}

chargingModeBtn.onclick = function() {
    chargingModeModal.classList.add('modal-displayed');
}

currentSetupModeBtn.onclick = function() {
    currentSetupModeModal.classList.add('modal-displayed');
}

activationModeBtn.onclick = function() {
    activationModeModal.classList.add('modal-displayed');
}

fingerprintSettingsBtn.onclick = function() {
    fingerprintSettingsModal.classList.add('modal-displayed');
}

// When the user clicks on <botton> (close), close the modal
cancelBtns.forEach((cancelBtn) => {
    cancelBtn.onclick = function() {
        wifiModal.classList.remove('modal-displayed');
        chargingModeModal.classList.remove('modal-displayed');
        currentSetupModeModal.classList.remove('modal-displayed');
        activationModeModal.classList.remove('modal-displayed');
        fingerprintSettingsModal.classList.remove('modal-displayed');
    }});


// When the user clicks on <botton> (save and restart) in wifi modal - save, restart controller and close the wifi model 
submitBtn.onclick = function() {
    wifiModal.classList.remove('modal-displayed');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == wifiModal) {
        wifiModal.classList.remove('modal-displayed');
    }
    if (event.target == chargingModeModal) {
        chargingModeModal.classList.remove('modal-displayed');
    }
    if (event.target == currentSetupModeModal) {
        currentSetupModeModal.classList.remove('modal-displayed');
    }
    if (event.target == activationModeModal) {
        activationModeModal.classList.remove('modal-displayed');
    }
    if (event.target == fingerprintSettingsModal) {
        fingerprintSettingsModal.classList.remove('modal-displayed');
    }
}
