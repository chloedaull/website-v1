const sections = [
    "hero",
    "about",
    "resume",
    "experience",
    "projects",
    "education",
    "contact"
  ];
  
  async function loadSections() {
    const container = document.getElementById("content");
    for (const section of sections) {
      const response = await fetch(`sections/${section}.html`);
      const html = await response.text();
      container.innerHTML += html;
    }
  
    // Re-run event listeners after content is loaded
    initPageInteractions();
  }
  
  function initPageInteractions() {
    const hero = document.getElementById("hero");
  
    // Mouse gradient effect
    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      hero.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(100, 100, 100, 0.3) 0%, #091a1a 60%)`;
    });
  
    // Smooth scroll between sections
    document.querySelectorAll(".zone").forEach(zone => {
      zone.addEventListener("click", () => {
        const target = document.querySelector(zone.dataset.target);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Intersection observer for timeline animation
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.2 });
  
    document.querySelectorAll(".timeline-item").forEach(item => observer.observe(item));

    //button to open description 
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {

        const description = button.nextElementSibling;
        const isVisible = description.style.display === "block";
        description.style.display = isVisible ? 'none' : 'block';
        button.textContent = isVisible ? '▼' : '▲';
      });
    });
  
    // Language toggle logic
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'fr' : 'en';
        for (const id in translations[currentLang]) {
          const el = document.getElementById(id);
          if (el) {
            if (id.includes('zone')) {
              el.setAttribute('data-label', translations[currentLang][id]);
            } else {
              el.innerHTML = translations[currentLang][id];
            }
          }
        }
      });
    }
  }
  
  // Translations
  const translations = {
    en: {
      'main-title': "Chloe DAULL",
      'intro': "Hello, I am a recent graduate from Concordia University",
      'about-title': "About Me",
      'about-text': "Hi there!👋 My name is Chloe DAULL, a recent Computer Science Graduate from Concordia Univeristy. <br><br> I love learning about software develpoment, data analytics, Machine Learning and cybersecurity. I have experience coding in Java and Python! <br><br> I was born in France, grew up in Singapore and was drawn by the vibrant city of Montreal to pursue a bachelor degree in.<br><br>",
      'zone-about': "About Me",
      'zone-experience': "Experience",
      'zone-projects': "Projects",
      'zone-contact': "Contact",
      'resume-description': "If you are interested in a technical overview of my skills and experiences, here is access to my",
      'work-title': "Work Experiences",
      'wsp-title': "Programming Intern",
      'wsp-dates': "Jan 2025 - April 2025",
      'wsp-description': "▶ Developed in-house user-friendly applications designed for company needs, such as making front-end HTML modifications to make the user experience more enjoyable <br></br>▶ Used Azure Functions, Docker, Power Automate and Python to automate client Excel files processing system, saving time and making the team more productive.<br></br>▶ Created a PDF file converter in Python for client contracts that would allow to automatically organize large amounts of documents<br></br>▶ Mainly worked with MS Power Apps, Power BI, JavaScript, HTML and Python",
      'bombardier-title': "Smart Sales Intern",
      'bombardier-dates': "May 2023 - August 2023",
      'bombardier-description': "▶ Was responsible for keeping track of customer aircraft flight hours and status. <br></br>▶ Took part in a Case Competition in a team of 4 engineers, presenting an AI integrated plane maintenance model. Leveraged MS PowerApp and PowerBI in finding the best combination of parameters of previous data to forecast future behavior. <br></br>▶ Involved in organizing cross-functional teams, setting sprint goals, conducting daily stand-ups.<br></br>▶ Implementing rigorous testing and debugging processes, including unit tests and integration tests, ensuring our software met quality standards",
      'kookmin-title': "Summer Intern - Capital Market Division",
      'kookmin-location': "Kookmin Bank - Singapore",
      'kookmin-dates': "Jul 2022 - August 2022",
      'kookmin-description': "▶ Supported senior bankers with market research, data analysis, and financial models to facilitate informed decision-making.<br><br>▶ Played a key role in creating client presentations and pitch materials, maintaining a high standard for company image and professionalism.<br><br>▶ Exhibited strong analytical abilities while preparing balance sheets and conducting risk assessments.",
      'projets-title': "Projects",
      'website-title': "Website Portfolio",
      'website-description': "Designed and developed a fully responsive personal website using HTML, CSS, and JavaScript.",
      'machine-title': "Machine Learning Project",
      'machine-description': "Explored supervised learning models (Decision Trees, SVM) using Python and Scikit-Learn.",
      'concordia-titre': "Concordia University",
      'concordia-dates': "September 2021 - December 2024",
      'concordia-description': "Bachelor in Computer Science with a minor in Economics <br> Relevant Courses: Artificial Intelligence, Data Structures and Algorithms, Software Web Development, Object-Oriented Programming, Operating Systems, System Hardware",
      'ifs-dates': "September 2006 - June 2021",
      'ifs-description': "French Baccalaureat - Specialization in Mathematics, Physics, and Chemistry",
      'lets-connect': "Let's Connect!",
    },
    fr: {
      'main-title': "Chloé DAULL",
      'intro': "Bonjour, je suis une diplômée récente de l'Université Concordia",
      'about-title': "À propos de moi",
      'about-text': "Coucou!👋 Je m'appelle Chloé DAULL, je suis une nouvelle diplômée de bachelor en Sciences Informatique à l'Université Concordia. <br><br> J'adore apprendre les domaines de développement logiciel, d'analyse de données, d'apprentissage automatique, et de la cybersecurité. Je programme principalement avec Java et Python <br><br> Je suis née en France, j'ai grandi a Singapour et j'ai fait mes études post-bac a Montréal<br><br> Je suis fascinée par le monde de l'informatique et du dévelopment logiciel et je cherche toujours a en apprendre d'aventage!",
      'title-about': "Introduction",
      'title-experience': "Expérience",
      'title-projects': "Projets",
      'title-contact': "Contact",
      'work-title': "Mes Expériences",
      'resume-description': "Si un aperçu technique de mes compétences et de mes expériences vous interesse, voici l'accès à mon",
      'wsp-title': "Stagaire en Programmation",
      'wsp-dates': "Jan 2025 - Avril 2025",
      'wsp-description': "▶ Développement d'applications internes conviviales adaptées aux besoins de l'entreprise, telles que des modifications de l'interface HTML pour améliorer l'expérience utilisateur. Participation aux revues de code pour perfectionner mes compétences en programmation auprès de collègues expérimentés.<br><br>▶ Utilisation d'Azure Functions, Docker, Power Automate et Python pour automatiser le traitement des fichiers Excel des clients, permettant ainsi un gain de temps et une amélioration de la productivité de l'équipe.<br><br>▶ Création d'un convertisseur de fichiers PDF en Python pour organiser automatiquement de grandes quantités de contrats clients.<br><br>▶ Travail principalement avec MS Power Apps, Power BI, JavaScript, HTML et Python.",
      'bombardier-title': "Stagiare en Smart Sales",
      'bombardier-dates': "Mai 2023 - Aout 2023",
      'bombardier-description': "▶ Responsable du suivi des heures de vol et de l'état des avions des clients.<br><br>▶ Participation à une compétition de cas en équipe de 4 ingénieurs, présentant un modèle de maintenance aéronautique intégré à l'IA. Utilisation de MS PowerApps et Power BI pour analyser les données et optimiser la prévision du comportement futur.<br><br>▶ Implication dans l'organisation d'équipes interfonctionnelles, la définition des objectifs de sprint et la conduite de réunions quotidiennes (daily stand-ups).<br><br>▶ Mise en place de processus rigoureux de tests et de débogage, incluant des tests unitaires et des tests d'intégration, pour garantir la qualité du logiciel.",
      'kookmin-title': "Stage d'été - divion Marché des capitaux",
      'kookmin-location': "Kookmin Bank - Singapour",
      'kookmin-dates': "Jul 2022 - Aout 2022",
      'kookmin-description': "▶ Soutien aux banquiers seniors dans la recherche de marché, l'analyse de données et la création de modèles financiers afin de faciliter la prise de décision.<br><br>▶ Rôle clé dans la création de présentations client et de documents de prospection, tout en maintenant un haut niveau d'image de marque et de professionnalisme.<br><br>▶ Excellentes compétences analytiques démontrées lors de la préparation de bilans financiers et de l'évaluation des risques.",
      'projets-title': "Projets",
      'website-title': "Site Web Personnel",
      'website-description': "Conçu et développé un site web personnel entièrement responsive en utilisant HTML, CSS et JavaScript.",
      'machine-title': "Projet d’apprentissage automatique ",
      'machine-description': "Exploration de modèles d’apprentissage supervisé (arbres de décision, SVM) en utilisant Python et Scikit-Learn.",
      'concordia-titre': "Université Concordia",
      'concordia-dates': "Septembre 2021 - Décembre 2024",
      'concordia-description': "Baccalauréat en Informatique avec une mineure en Économie<br><br> Cours pertinents : Intélligence Artificielle, Structures de Données et Algorithmes, Développement Web Logiciel, Programmation Orientée d'Objets, Systèmes d'Exploitation, Matériel Informatique",
      'ifs-dates': "Septembre 2006 - Juin 2021",
      'ifs-description': "Baccalauréat Francais - Spécialization en Mathématiques, Physique, et Chimie <br><br> Option Maths Expertes <br><br> Section Européenne: Physique-Chimie",
      'lets-connect': "Restons en contact!",
    }
  };
  
  let currentLang = 'en';
  
  // Start everything
  loadSections();
  