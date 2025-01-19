let captchaChecked = false;

function beforesubmit(event) {
    // Email validation
    const emailField = document.getElementById("email");
    const emailValue = emailField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Stop form submission if the email is invalid
        return;
    }

    if (captchaChecked) {
        let outputdate = document.querySelector(".outputdate");
        let inputdate = document.querySelector(".inputdate");

        console.log("inputdate.value", inputdate.value); // Log input date value

        let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
        outputdate.value = formattedDate; // Set formatted date
    } else {
        alert("Please check the reCAPTCHA box to submit the form.");
        event.preventDefault(); // Stop form submission if captcha isn't checked
    }
}

function timestamp() {
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(
            document.getElementsByName("captcha_settings")[0].value
        );
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value =
            JSON.stringify(elems);
    }
}
setInterval(timestamp, 500);

function captchasuccess() {
    captchaChecked = true;
}
