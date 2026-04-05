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

    henri: 
    `<div class="mb-root">
            <div class="mb-header">
            <div class="mb-title">Henri's Moodboard<span class="mb-cursor"></span></div>
            <div class="mb-subtitle"># inspirations in computer science — tools · concepts · figures</div>
          </div>
        </div>
        <div class="mb-grid">
            <div class="mb-card">
                <div class="mb-card-title">John Carmack</div>
                <span class="mb-card-tag tag-figure">figure</span>
                <div class="mb-card-desc">CTO of Oculus VR and creator of id Tech. Pushed the limits of real-time 3D graphics.</div>
                <div class="mb-quote">"Focus is a matter of deciding what things you're not going to do."</div>
                <div class="mb-pill-row">
                    <span class="mb-pill">Quake engine</span>
                    <span class="mb-pill">Doom engine</span>
                    <span class="mb-pill">Fast inverse square root</span>
                </div>
            </div>
            <div class="mb-card">
                <div class="mb-card-title">Machine Learning</div>
                <span class="mb-card-tag tag-concept">concept</span>
                <div class="mb-card-desc">The field of teaching machines to learn patterns from data. Revolutionizing AI.</div>
                    <div class="mb-code-block">
                        model.fit(X_train, y_train)
                        predictions = model.predict(X_test)
                    </div>
                <div class="mb-pill-row">
                    <span class="mb-pill">Supervised Learning</span>
                    <span class="mb-pill">Unsupervised Learning</span>
                    <span class="mb-pill">Neural Networks</span>
                </div>
            </div>
            <div class="mb-card">
                <div class="mb-card-title">pandas</div>
                <span class="mb-card-tag tag-tool">tool</span>
                <div class="mb-card-desc">A powerful data manipulation library for Python.</div>
                <a class="mb-card-link" href="https://pandas.pydata.org/" target="_blank">pandas.pydata.org →</a>
                <div class="mb-pill-row">
                    <span class="mb-pill">DataFrames</span>
                    <span class="mb-pill">Series</span>
                    <span class="mb-pill">groupby</span>
                    <span class="mb-pill">merge</span>
                </div>
            </div>
            <div class="mb-card span2">   
                <div class="mb-card-title">Graph Theory</div>
                <span class="mb-card-tag tag-concept">concept</span>
                <div class="mb-card-desc">The study of graphs and networks. Fundamental to algorithms and data structures.</div>
                <div class="mb-code-block">
                    class Graph:
                        def __init__(self):
                            self.adjacency_list = {}
                        def add_edge(self, u, v):
                            if u not in self.adjacency_list:
                                self.adjacency_list[u] = []
                            if v not in self.adjacency_list:
                                self.adjacency_list[v] = []
                            self.adjacency_list[u].append(v)
                            self.adjacency_list[v].append(u)
                </div>
                <div class="mb-pill-row">
                    <span class="mb-pill">DFS</span>
                    <span class="mb-pill">BFS</span>
                    <span class="mb-pill">Dijkstra's Algorithm</span>
                    <span class="mb-pill">A* Search</span>
                </div> 
            </div>
            <div class="mb-card">
                <div class="mb-card-title">Hadoop HDFS</div>
                <span class="mb-card-tag tag-tool">tool</span>
                <div class="mb-card-desc">A distributed file system for big data storage and processing.</div>
                <a class="mb-card-link" href="https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html" target="_blank">hadoop.apache.org/docs →</a>
                <div class="mb-pill-row">
                    <span class="mb-pill">Distributed Storage</span>
                    <span class="mb-pill">Fault Tolerance</span>
                    <span class="mb-pill">MapReduce</span>
                </div>
            </div>
        </div>
    </div>
    `,
    
    leo: `
    <div class="mb-root leo-board">

        <div class="mb-header">
            <div class="mb-title">Leo Moodboard</div>
            <div class="mb-subtitle">Clean • Technical • Backend Energy</div>
        </div>

        <div class="mb-grid">

            <div class="mb-card">
                <img src="img/leo1.jpg" class="mb-photo">
                <div class="mb-card-title">APIs & Architecture</div>
                <div class="mb-card-desc">
                    Structured systems, clean endpoints, and efficient backend logic.
                </div>
            </div>

            <div class="mb-card">
                <img src="img/leo2.jpg" class="mb-photo">
                <div class="mb-card-title">Dark Tech Aesthetic</div>
                <div class="mb-card-desc">
                    Deep blues, neon accents, and a futuristic developer vibe.
                </div>
            </div>

            <div class="mb-card">
                <img src="img/leo3.jpg" class="mb-photo">
                <div class="mb-card-title">Focus Mode</div>
                <div class="mb-card-desc">
                    Minimal clutter, maximum clarity — the ideal coding environment.
                </div>
            </div>

            <div class="mb-card span2">
                <div class="mb-card-title">Quote</div>
                <div class="mb-quote">
                    “Backend is the invisible engine — if it runs smoothly, nobody notices.”
                </div>
            </div>

            <div class="mb-card">
                <div class="mb-card-title">Tech Stack</div>
                <div class="mb-pill-row">
                    <div class="mb-pill">Node.js</div>
                    <div class="mb-pill">Express</div>
                    <div class="mb-pill">FastAPI</div>
                    <div class="mb-pill">SQL</div>
                    <div class="mb-pill">Prisma</div>
                </div>
            </div>

        </div>
    </div>
    `,
    
    kaitlyn: 
    `<div class="mb-root kaitlyn-board">
    <div class="mb-header">
      <div class="mb-title">Kaitlyn Moodboard<span class="mb-cursor"></span></div>
      <div class="mb-subtitle"># inspirations in computer science — people · ideas · visuals</div>
    </div>
    <div class="mb-grid">
      <div class="mb-card">
        <span class="mb-card-tag tag-figure">figure</span>
        <img src="img/ada.jpg" alt="Ada Lovelace" class="mb-photo">
        <div class="mb-card-title">Ada Lovelace</div>
        <div class="mb-card-desc">
          A pioneer of computing and the first person to recognize that machines could do more than just calculations. One of my inspirations for her great intelligence, and her vision to change the world all while also being a baddie.
        </div>
        <div class="mb-quote">"The Analytical Engine weaves algebraic patterns."</div>
      </div>
      <div class="mb-card">
        <span class="mb-card-tag tag-figure">figure</span>
        <img src="img/vector2.jpg" alt="Vector" class="mb-photo">
        <div class="mb-card-title">Vector</div>
        <div class="mb-card-desc">
          Vector reminds me to keep moving forward and never give up with both direction and magnitude and reminds me of the importance that vectors have in AI and machine learning and how they are used to represent data and make predictions.
        </div>
        <div class="mb-quote">
          "VECTOR!! That's me. 'Cause I'm committing crimes with both direction and magnitude. OH YEAH!!!!!!!!!!!"
        </div>
      </div>
      <div class="mb-card">
        <span class="mb-card-tag tag-tool">tool</span>
        <div class="mb-card-title">Open MPI</div>
        <div class="mb-card-desc">
          A parallel computing tool that lets multiple processes communicate and work together across multiple processers. I like it because it connects to my interest in optimisation and it shows how powerfull parallel computing can be for optimising large scale computations.
        </div>
        <a class="mb-card-link" href="https://www.open-mpi.org/" target="_blank">Open MPI →</a>
        <div class="mb-pill-row">
          <span class="mb-pill">parallel computing</span>
          <span class="mb-pill">distributed systems</span>
          <span class="mb-pill">message passing</span>
        </div>
      </div>
      <div class="mb-card span2">
        <span class="mb-card-tag tag-concept">concept</span>
        <div class="mb-card-title">Growing Moodboard</div>
        <div class="mb-card-desc">
        </div>
        <div class="mb-pill-row">
          <span class="mb-pill">Ada Lovelace</span>
          <span class="mb-pill">Vector</span>
          <span class="mb-pill">database design</span>
          <span class="mb-pill">more later</span>
        </div>
      </div>
    </div>
  </div>
`
};


function openBio(bioText) {
    const modal = document.getElementById("bioModal");
    const modalText = document.getElementById("modalText");
    modalText.innerText = bioText;
    
    modal.style.display = "flex"; 
    // This stops the main website from scrolling under the modal
    document.body.style.overflow = "hidden"; 
}

function openMoodboard(person) {
    const modal = document.getElementById("moodboardModal");
    const content = document.getElementById("moodboardContent");
    
    content.innerHTML = moodboards[person] || "<p>Loading...</p>";
    
    modal.style.display = "flex"; 
    document.body.style.overflow = "hidden";
}

function closeBio() {
    document.getElementById("bioModal").style.display = "none";
    document.body.style.overflow = "auto"; // Restore main page scroll
}

function closeMoodboard() {
    document.getElementById("moodboardModal").style.display = "none";
    document.body.style.overflow = "auto"; // Restore main page scroll
}

// Updated window click to check for the overlay
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeBio();
        closeMoodboard();
    }
};
