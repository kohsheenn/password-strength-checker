console.log("JS CONNECTED");

const passwordInput = document.getElementById("password");

const ruleLength  = document.getElementById("length");
const ruleUpper   = document.getElementById("upper");
const ruleLower   = document.getElementById("lower");
const ruleNumber  = document.getElementById("number");
const ruleSpecial = document.getElementById("special");

const Rules = document.querySelectorAll(".rules li");
const bars = document.querySelectorAll(".bar");
const strengthText = document.querySelector(".strength-text");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;

    toggleRule(ruleLength, password.length >= 8);
    toggleRule(ruleUpper, /[A-Z]/.test(password));
    toggleRule(ruleLower, /[a-z]/.test(password));
    toggleRule(ruleNumber, /\d/.test(password));
    toggleRule(ruleSpecial, /[^A-Za-z0-9]/.test(password));

    updateStrength();
});

function toggleRule(element, condition) {
    if (!element) return;

    if (condition) {
        element.classList.add("valid");
        element.classList.remove("invalid");
    } else {
        element.classList.add("invalid");
        element.classList.remove("valid");
    }
}

function updateStrength() {
    let validCount = 0;

    Rules.forEach(rule => {
        if (rule.classList.contains("valid")) {
            validCount++;
        }
    });
    strengthText.className = "strength-text";

    // reset bars
    bars.forEach(bar => {
        bar.classList.remove("active", "red", "yellow", "green");
    });

    // WEAK: 1–2 rules
    if (validCount >= 1) {
        bars[0].classList.add("active", "red");
        strengthText.textContent = "Weak password";
        strengthText.classList.add("weak");
    }

    // MEDIUM: 3–4 rules
    if (validCount >= 3) {
        bars[1].classList.add("active", "yellow");
        strengthText.textContent = "Medium password";
        strengthText.classList.remove("weak");
        strengthText.classList.add("medium");
    }

    // STRONG: all rules
    if (validCount === Rules.length) {
        bars[2].classList.add("active", "green");
        strengthText.textContent = "Strong password";
        strengthText.classList.remove("medium");
        strengthText.classList.add("strong");
    }

    // EMPTY password
    if (validCount === 0) {
        strengthText.textContent = "";
    }
}


const passwordShow = document.getElementById("toggle");

passwordShow.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordShow.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        passwordShow.textContent = "👁️";
    }
});
