chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {

    let msg = {
        text: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}



if (document.readyState === 'complete') {
    console.log("QA Image control");

    if ((document.querySelector('#imageList')) !== null) {

        /* Check if there is some error message */
        if (document.querySelector('.error') !== null) {
            document.body.style.backgroundColor = "#f0f0f0";
            console.log("The file type of this image is unknown, please check the extension");
        }

        /* Check if you need to publish images */
        if ((document.querySelector('.info_em') !== null) && (document.getElementsByClassName('info_em')[0].textContent = "Publish Images required")) {
            document.body.style.backgroundColor = "indianred";
            console.log("Need to publish images");
        }

        /* Check if you need to upload images */
        if ((document.querySelector('.info') !== null) && (document.getElementsByClassName('info')[0].textContent = "Upload Images required")) {
            document.body.style.backgroundColor = "indianred";
            console.log("Need to upload images");
        }

        /* Check if there is some info message about upload or publish images */
        if ((document.querySelector('.info_em') === null) && (document.querySelector('.info') === null)) {
            document.body.style.backgroundColor = "lightgreen";
            console.log("All images are good");
        }

    }
}