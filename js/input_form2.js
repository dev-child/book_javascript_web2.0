if (window.addEventListener) {
    window.addEventListener("load", setupEvents, false);
} else {
    window.onload = setupEvents;
}

function setupEvents(event) {
    document.someForm.selectOpts.onchange = checkSelect;
}

function checkSelect(event) {

    let opts = document.someForm.selectOpts.options;
    for (let i = 0; i < opts.length; i++) {
        if (opts[i].selected) {
            switch (opts[i].value) {
                case "Opt1" :
                    opts[i + 1].selected = true;
                    break;
                case "Opt3":
                    opts[i + 1].selected = true;
                    break;
                case "Opt4" :
                    opts[i + 1].selected = true;
                    break;
            }
        }
    }
    return false;
}

