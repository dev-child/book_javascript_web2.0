if (window.addEventListener) {
    window.addEventListener("load", setupEvents, false);
}

function setupEvents(event) {
    if (document.someForm.addEventListener) {
        document.someForm.addEventListener("submit", validateForm, false);
    } else {
        document.someForm.onsubmit = validateForm;
    }
}

function validateForm(event) {
    let strResults = "";
    for (let i = 0; i < document.someForm.elements.length - 1; i++) {
        strResults += document.someForm.elements[i].value;
    }
    document.someForm.elements[3].value = strResults;
}