// alert("hi");

if (window.addEventListener) {
    window.addEventListener("load", setupEvents, false);
}else if (window.addEventListener) {
    window.addEventListener("load", setupEvents,false);
} else {
    window.onload = setupEvents;
}

function setupEvents(evnt) {
    document.someForm.onsubmit = checkForm;
}

function checkForm(evnt) {
    let opts = document.someForm.selectOpts.options;

    for (let i = 0; i < opts.length; i++) {
        if (opts[i].selected) {
            alert(opts[i].text + " " + opts[i].value);
        }
    }
    return false;
}