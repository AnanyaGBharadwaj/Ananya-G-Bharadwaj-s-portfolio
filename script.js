function showSection(section) {
  const content = document.getElementById("content");

  let html = "";
   
  if (section === "about") {
  html = `
    <h2>About Me</h2>
    <p class="about-intro">
      I am a passionate Computer Science Engineering student with a strong interest in 
      <b>Artificial Intelligence, Web Development and Problem-Solving</b>. I enjoy creating 
      practical projects and exploring new technologies that can improve real-world systems.
    </p></br></br>

    <ul class="about-list">
      <li>🎯 Quick learner with the ability to understand and apply technical concepts effectively.</li>
      <li>🤝 Strong teamwork, communication and analytical thinking skills.</li>
      <li>💻 Aiming to build a career as an <b>AI Engineer / Software Developer</b> while continuously improving my coding and development skills.</li>
    </ul>
  `;
}

  if (section === "skills") {
    html = `
      <h2>My Skills</h2>

      <div class="skills-grid">

        <div class="skill-card">
          <i class="devicon-html5-plain colored"></i>
          <p>HTML</p>
        </div>

        <div class="skill-card">
          <i class="devicon-css3-plain colored"></i>
          <p>CSS</p>
        </div>

        <div class="skill-card">
          <i class="devicon-javascript-plain colored"></i>
          <p>JavaScript</p>
        </div>

        <div class="skill-card">
          <i class="devicon-python-plain colored"></i>
          <p>Python</p>
        </div>

        <div class="skill-card">
          <i class="devicon-java-plain colored"></i>
          <p>Java</p>
        </div>

        <div class="skill-card">
          <i class="devicon-c-plain colored"></i>
          <p>C Programming</p>
        </div>

        <div class="skill-card">
          <i class="devicon-git-plain colored"></i>
          <p>Git</p>
        </div>

        <div class="skill-card">
          <i class="devicon-vscode-plain colored"></i>
          <p>VS Code</p>
        </div>

      </div>
    `;
}

 if (section === "education") {
  html = `
    <h2>🎓 Education</h2>

    <div class="edu-block">
      <h3>Malnad College of Engineering, Hassan <span>| 2023–2027</span></h3>
      <p><b>B.E – Computer Science & Engineering</b></p>
      <p>5th Semester</p>
      <p>⭐ CGPA: <b>9.47</b></p>
    </div>
<br></br>
    <hr>
<br></br>
    <div class="edu-block">
      <h3>Masters PU College, Hassan <span>| 2021–2023</span></h3>
      <p><b>PUC – Science (PCMB)</b></p>
      <p>⭐ Percentage: <b>96.7%</b></p>
    </div>
<br></br>
    <hr>
<br></br>
    <div class="edu-block">
      <h3>United High School, Hassan <span>| 2021</span></h3>
      <p><b>SSLC</b></p>
      <p>⭐ Percentage: <b>99.3%</b></p>
    </div>
  `;
}

  if (section === "projects") {
  html = `
    <h2>Projects</h2>

    <div class="project-card">
      <h3>AI-Based Timetable Generator</h3>
      <p>
        A smart timetable generator using <b>Constraint Programming</b> and <b>Genetic Algorithms</b>
        to auto-create optimized college schedules aligned with <b>NEP 2020 guidelines</b>.
      </p>
    </div>
  `;
}


  if (section === "certifications") {
  html = `
    <h2>My Certifications</h2>

    <div class="cert-grid">
      <img src="Ananya-G-Bharadwaj-portfolio/cert1.jpeg" onclick="openCert(this.src)">
      <img src="Ananya-G-Bharadwaj-portfolio/cert2.jpeg" onclick="openCert(this.src)">
    </div>

    <div id="cert-popup" class="cert-popup" onclick="closeCert()">
      <img id="cert-img">
    </div>
  `;
}

function openCert(src) {
  document.getElementById("cert-img").src = src;
  document.getElementById("cert-popup").style.display = "flex";
}

function closeCert() {
  document.getElementById("cert-popup").style.display = "none";
}

  if (section === "contact") {
  html = `
    <h2>Contact Me</h2>

    <div class="contact-item">
      <i class="fa-solid fa-envelope"></i>
      <span>Email:</span>
      <a href="mailto:ananyagbharadwaj@gmail.com">ananyagbharadwaj@gmail.com</a>
    </div>

    <div class="contact-item">
      <i class="fa-solid fa-phone"></i>
      <span>Phone:</span>
      <a href="tel:6360572690">6360572690</a>
    </div>

    <div class="contact-item">
      <i class="fa-brands fa-linkedin"></i>
      <span>LinkedIn:</span>
      <a href="https://www.linkedin.com/in/ananya-g-bharadwaj-b665432bb/" target="_blank">
        linkedin.com/in/ananya-g-bharadwaj
      </a>
    </div>

    <div class="contact-item">
      <i class="fa-solid fa-location-dot"></i>
      <span>Location:</span>
      <p>Hassan, Karnataka</p>
    </div>
  `;
}

  content.innerHTML = html;

  // animation refresh
  AOS.init();
}

