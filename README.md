# Password Strength Checker:

A clean and interactive **Password Strength Checker** built using **HTML, CSS, and JavaScript**.  
It evaluates password strength in real time based on common security rules and provides visual feedback.

---

## Live Demo:
https://kohsheenn.github.io/password-strength-checker/

---

## Features:

- Live password strength detection while typing
- Strength levels: **Weak, Medium, Strong**
- Color-coded strength bars
- Rule-based validation:
  - Minimum 8 characters
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters
- Tick/cross indicators for each rule
- Show / hide password toggle
- Clean, aesthetic UI
- Fully responsive design

---

## How It Works:

- JavaScript listens to the password input event
- Each rule is checked using length conditions
- Rules toggle between `valid` and `invalid` states
- Strength is calculated based on how many rules are satisfied
- Strength bars and text update dynamically
- UI feedback is handled using CSS classes

---

## Tech Stack:

- **HTML** – Structure
- **CSS** – Styling & animations
- **JavaScript** – Logic & DOM manipulation

---

## Run Locally:

Clone the repository
   ```bash
   git clone https://github.com/kohsheenn/password-strength-checker.git
