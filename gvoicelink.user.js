function run() {
    setTimeout(function() {
        if(window.location.href.match(/www.google.com\/voice/)) {
            var spans = document.getElementsByClassName("gc-message-sms-text");
            for (x in spans)
            {
                if( typeof spans[x].innerText !== 'undefined') {
                    if(spans[x].innerText.match(/https?:/)) {
                        var link = document.createElement('a');
                        link.setAttribute('href', spans[x].innerText.match(/(https?:\/\/[^ ]*)/)[0]);
                        link.setAttribute('target', "_blank");
                        link.innerHTML = "Link";

                        spans[x].parentNode.appendChild(link);
                    }
                    else if(spans[x].innerText.match(/www[.]/)) {
                        var link = document.createElement('a');
                        link.setAttribute('href', "http://" + spans[x].innerText.match(/(www[.][^ ]*)/)[0]);
                        link.setAttribute('target', "_blank");
                        link.innerHTML = "Link";

                        spans[x].parentNode.appendChild(link);
                    }
                }
            }
        }
    }, 1250);
}

setTimeout(function() {
    var inputs = document.getElementsByClassName("inboxSection");

    for (x in inputs) {
        inputs[x].onclick = function() { run(); }
    }

    run();
}, 1250);