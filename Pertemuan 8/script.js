// Validasi form kontak – Calvin
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (!form) return;

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const successMessage = document.getElementById("successMessage");

    function clearErrors() {
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => {
        msg.textContent = "";
        msg.classList.add("hidden");
    });

    [nameInput, emailInput, messageInput].forEach((input) => {
        input.classList.remove("border-red-500", "border-2");
    });
    }

    function setError(input, message) {
    const small = input.parentElement.querySelector(".error-message");
    if (!small) return;
    small.textContent = message;
    small.classList.remove("hidden");
    input.classList.add("border-red-500", "border-2");
    }

    form.addEventListener("submit", function (e) {
    e.preventDefault();

    clearErrors();
    let isValid = true;

    if (nameInput.value.trim() === "") {
        setError(nameInput, "Nama wajib diisi.");
        isValid = false;
    }

    if (emailInput.value.trim() === "") {
        setError(emailInput, "Email wajib diisi.");
        isValid = false;
    }

    if (messageInput.value.trim() === "") {
        setError(messageInput, "Pesan wajib diisi.");
        isValid = false;
    }

    if (isValid) {
        clearErrors();
        successMessage.classList.remove("hidden");
        successMessage.textContent = "Pesan berhasil dikirim!";

        form.reset();
    } else {
        successMessage.classList.add("hidden");
    }
    });
});
