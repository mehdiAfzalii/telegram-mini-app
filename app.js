// Get the Telegram WebApp object
const tg = window.Telegram.WebApp;


// Initialize the Mini App
tg.ready();


// Expand the Mini App
tg.expand();


// Get HTML elements
const welcomeElement =
    document.getElementById("welcome");

const profilePhoto =
    document.getElementById("profile-photo");

const profilePlaceholder =
    document.getElementById("profile-placeholder");

const fullNameElement =
    document.getElementById("full-name");

const usernameElement =
    document.getElementById("username");

const userIdElement =
    document.getElementById("user-id");

const mainButton =
    document.getElementById("main-button");


// Get Telegram user data
const user =
    tg.initDataUnsafe?.user;


// Check if user data exists
if (user) {

    // First name
    const firstName =
        user.first_name || "";

    // Last name
    const lastName =
        user.last_name || "";


    // Full name
    const fullName =
        `${firstName} ${lastName}`.trim();


    // Display welcome message
    welcomeElement.textContent =
        `Hello ${firstName || "User"} 👋`;


    // Display full name
    fullNameElement.textContent =
        fullName || "User";


    // Display username
    if (user.username) {

        usernameElement.textContent =
            `@${user.username}`;

    } else {

        usernameElement.textContent =
            "No username";

    }


    // Display User ID
    userIdElement.textContent =
        user.id || "---";


    // Display profile photo
    if (user.photo_url) {

        profilePhoto.src =
            user.photo_url;

        profilePhoto.style.display =
            "block";

        profilePlaceholder.style.display =
            "none";

    } else {

        // Use first letter as placeholder
        const firstLetter =
            firstName.charAt(0).toUpperCase();

        profilePlaceholder.textContent =
            firstLetter || "?";

    }

} else {

    // User data is not available
    welcomeElement.textContent =
        "User information is not available.";

    fullNameElement.textContent =
        "Unknown User";

    usernameElement.textContent =
        "No username";

    userIdElement.textContent =
        "---";

}


// Test button
mainButton.addEventListener("click", () => {

    tg.showAlert(
        "Mini App is working successfully 🚀"
    );

});
