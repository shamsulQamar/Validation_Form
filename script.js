let inputs = document.querySelectorAll(".inpt");

let random_pass = () => {
    pass1.value = generatePass();
};


let isPassValid = (e) => {
    console.log();
    if (pass1.value !== pass2.value) {
        e.target.nextElementSibling.textContent = "password not match";
        return;
    }
    e.target.nextElementSibling.textContent = "";
    return;
}


let submit_form = (e) => {
    e.preventDefault();
    para.textContent = ""

    if (fname.value === "" || lname.value === "" || num.value === "" || email.value === "" || pass1.value === "" || pass2.value === "") {
        inputs.forEach(inp => {
            if (inp.value === "") {
                inp.nextElementSibling.textContent = "Please Enter Right value";
            }
            else {
                inp.nextElementSibling.textContent = "";
            }
        });
        if (pass2.value === "") {
            pass2.nextElementSibling.textContent = "Please Enter Right password";
        }
        return;
    } else {

        if (pass1.value === pass2.value && pass1.value !== "" && pass2.value !== "") {
            para.textContent = "form is submited";
            console.log("submitted");
            return;
        }


    }



}

















var buccket = "ABCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~@#$%!*&";
var userLength = 8
var pass = "";

function generatePass() {
    let random;
    pass = "";

    for (let i = 0; i < userLength; i++) {
        random = Math.floor(Math.random() * buccket.length);
        pass += buccket.charAt(random);
    }

    if (!isValid(pass)) {
        generatePass();
    }
    return pass;
};

function isValid(password) {
    let spChar = "@#$!*&";
    let num = "0123456789";
    let letter = "abcdefghijklmnopqrstuvwxyz";

    let charCount = 0;
    let numCount = 0;
    let Caplett = 0;
    let smCount = 0;

    for (let i = 0; i < password.length; i++) {
        if (spChar.split("").includes(password[i])) {
            charCount++;
        }
        if (num.split("").includes(password[i])) {
            numCount++;
        }
        if (letter.toLocaleUpperCase().split("").includes(password[i])) {
            Caplett++;
        }
        if (letter.split("").includes(password[i])) {
            smCount++;
        }
    }

    if (charCount >= 2 && numCount >= 1 && Caplett >= 1 && smCount >= 1) {
        return true
    }
    return false;

}

console.log(generatePass());