// Get the Telegram WebApp object
const tg = window.Telegram.WebApp;

// Initialize the Telegram Mini App
tg.ready();

// Expand the Mini App
tg.expand();


// Get HTML elements
const welcomeElement = document.getElementById("welcome");
const firstNameElement = document.getElementById("first-name");
const lastNameElement = document.getElementById("last-name");
const usernameElement = document.getElementById("username");
const userIdElement = document.getElementById("user-id");
const mainButton = document.getElementById("main-button");


// Get Telegram user data
// برای احراز هویت امن مناسب نیست.
const user = tg.initDataUnsafe?.user;


// Check if the user exists
if (user) {

    welcomeElement.textContent =
        `Hello ${user.first_name || "User"} 👋`;

    firstNameElement.textContent =
        user.first_name || "---";

    lastNameElement.textContent =
        user.last_name || "---";

    usernameElement.textContent =
        user.username
            ? `@${user.username}`
            : "---";

    userIdElement.textContent =
        user.id || "---";

} else {

    welcomeElement.textContent =
        "User information is not available.";

    firstNameElement.textContent = "---";
    lastNameElement.textContent = "---";
    usernameElement.textContent = "---";
    userIdElement.textContent = "---";
}


// Handle button click
mainButton.addEventListener("click", () => {

    tg.showAlert(
        "Mini App is working successfully 🚀"
    );

});

