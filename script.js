/**
 * Opens the modal and injects the specific bio text
 */
function openBio(bioText) {
    const modal = document.getElementById("bioModal");
    const modalText = document.getElementById("modalText");

    modalText.innerText = bioText;
    modal.style.display = "flex";
}

/**
 * Closes the modal popup
 */
function closeBio() {
    document.getElementById("bioModal").style.display = "none";
}

/**
 * Switches sections and re-triggers the fade-in animation
 */
function showSection(sectionId) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");
    const body = document.body;

    // Reset animation by removing and re-adding the class
    body.classList.remove("fade-in");
    void body.offsetWidth; // Trigger reflow to restart animation
    body.classList.add("fade-in");

    if (sectionId === "bios") {
        biosSection.style.display = "grid"; // Keep the 2x2 grid display
        visionSection.style.display = "none";
    } else {
        biosSection.style.display = "none";
        visionSection.style.display = "block";
    }
}

function openMoodboard() {
    document.getElementById("moodboardModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeMoodboard() {
    document.getElementById("moodboardModal").style.display = "none";
    document.body.style.overflow = "";
}

// Close modal if user clicks outside the content box
window.onclick = function(event) {
    const bioModal = document.getElementById("bioModal");
    const moodboardModal = document.getElementById("moodboardModal");
    if (event.target == bioModal) {
        closeBio();
    } else if (event.target == moodboardModal) {
        closeMoodboard();
    }
}