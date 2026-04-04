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

const moodboards = {
    bill: `
        <div class="mb-root">
            <div class="mb-header">
            <div class="mb-title">BILLboard<span class="mb-cursor"></span></div>
            <div class="mb-subtitle"># inspirations in computer science — tools · concepts · figures</div>
          </div>
          <div class="mb-grid">
            <!-- Linus Torvalds -->
            <div class="mb-card">
              <span class="mb-card-tag tag-figure">figure</span>
              <div class="mb-ascii">  ,----,
 /  o o \
|  (___) |
 \  ---  /</div>
              <div class="mb-card-title">Linus Torvalds</div>
              <div class="mb-card-desc">Creator of Linux & Git. Proof that a side project can run the world.</div>
              <div class="mb-quote">"Talk is cheap. Show me the code."</div>
            </div>
            <!-- Unix Philosophy -->
            <div class="mb-card span2">
              <span class="mb-card-tag tag-concept">concept</span>
              <div class="mb-card-title">Unix Philosophy</div>
              <div class="mb-card-desc">The original microservices manifesto, written in 1978.</div>
              <div class="mb-code-block">$ cat philosophy.txt
> Do one thing and do it well.
> Write programs that work together.
> Write programs to handle text streams,
  because that is a universal interface.</div>
              <div class="mb-pill-row">
                <span class="mb-pill">pipes</span>
                <span class="mb-pill">stdin/stdout</span>
                <span class="mb-pill">composability</span>
                <span class="mb-pill">simplicity</span>
              </div>
            </div>
            <!-- Vim -->
            <div class="mb-card">
              <span class="mb-card-tag tag-tool">tool</span>
              <span class="mb-icon">⌨</span>
              <div class="mb-card-title">Vim</div>
              <div class="mb-card-desc">Modal editor. Once you stop trying to exit, everything changes.</div>
              <div class="mb-code-block">:wq<span class="blink">_</span></div>
              <a class="mb-card-link" href="https://www.vim.org" target="_blank">vim.org →</a>
            </div>
            <!-- Git -->
            <div class="mb-card">
              <span class="mb-card-tag tag-tool">tool</span>
              <span class="mb-icon">⎇</span>
              <div class="mb-card-title">Git</div>
              <div class="mb-card-desc">Distributed version control. The backbone of collaborative software.</div>
              <a class="mb-card-link" href="https://git-scm.com/doc" target="_blank">git-scm.com/doc →</a>
              <div class="mb-pill-row">
                <span class="mb-pill">commit</span>
                <span class="mb-pill">branch</span>
                <span class="mb-pill">merge</span>
                <span class="mb-pill">rebase</span>
              </div>
            </div>
            <!-- Donald Knuth -->
            <div class="mb-card">
              <span class="mb-card-tag tag-figure">figure</span>
              <div class="mb-card-title">Donald Knuth</div>
              <div class="mb-card-desc">The Art of Computer Programming. TeX. The father of algorithm analysis.</div>
              <div class="mb-quote">"Beware of bugs in the above code; I have only proved it correct, not tried it."</div>
            </div>
          </div>
        </div>
    </div>
  `,

    henri: `<div class="mb-root"><div class="mb-header"><div class="mb-title">Henri Moodboard</div></div><div class="mb-grid"><div class="mb-card"><div class="mb-card-title">React</div></div></div></div>`,
    leo: `<div class="mb-root"><div class="mb-header"><div class="mb-title">Leo Moodboard</div></div><div class="mb-grid"><div class="mb-card"><div class="mb-card-title">APIs</div></div></div></div>`,
    kaitlyn: `<div class="mb-root"><div class="mb-header"><div class="mb-title">Kaitlyn Moodboard</div></div><div class="mb-grid"><div class="mb-card"><div class="mb-card-title">SQL</div></div></div></div>`
};


function openMoodboard(person) {
    const modal = document.getElementById("moodboardModal");
    const content = document.getElementById("moodboardContent");

    content.innerHTML = moodboards[person] || "<p>No moodboard yet.</p>";
    modal.style.display = "flex";
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