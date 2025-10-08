// js/scripts.js

// Language translations
const translations = {
  pt: {
    // Navigation
    home: "Início",
    about: "Sobre",
    skills: "Habilidades",
    portfolio: "Portfólio",
    contact: "Contato",

    // Hero Section
    heroTitle: "Advogado e Desenvolvedor de Sistemas",
    heroDescription:
      "Combinando expertise jurídica com tecnologia para oferecer soluções inovadoras e eficientes aos meus clientes.",
    contactMe: "Entre em Contato",
    viewPortfolio: "Ver Portfólio",

    // About Section
    aboutTitle: "Sobre Mim",
    aboutDescription:
      "Advogado e desenvolvedor de sistemas com experiência em ambas as áreas, buscando integrar tecnologia e direito para criar soluções eficientes.",
    educationTitle: "Formação Acadêmica",
    degree1: "Análise e Desenvolvimento de Sistemas",
    degree1Desc: "Centro Universitário Internacional - UNINTER (Cursando)",
    degree2: "Direito",
    degree2Desc: "Centro Universitário Newton Paiva",
    degree3: "Técnico em Informática",
    degree3Desc: "Colégio Cotemig",
    experienceTitle: "Experiência Profissional",
    job1: "Advogado Autônomo",
    job1Desc:
      "Atuação em diversas áreas do direito, com foco em soluções personalizadas",
    job2: "Técnico de Informática",
    job2Desc: "Suporte técnico, manutenção de sistemas e infraestrutura de TI",
    job3: "Desenvolvedor de Sistemas",
    job3Desc: "Desenvolvimento de aplicações web e mobile",

    // Skills Section
    skillsTitle: "Minhas Habilidades",
    skillsDescription:
      "Combinando conhecimentos jurídicos e tecnológicos para oferecer soluções completas e inovadoras.",
    legalSkills: "Habilidades Jurídicas",
    legalSkill1: "• Direito Civil",
    legalSkill2: "• Direito Trabalhista",
    legalSkill3: "• Direito Digital",
    legalSkill4: "• Proteção de Dados",
    legalSkill5: "• Elaboração e Análise de Contratos",
    techSkills: "Habilidades Técnicas",
    techSkill1: "• HTML, CSS, JavaScript",
    techSkill2: "• Bootstrap e Design Responsivo",
    techSkill3: "• Desenvolvimento Front-end",
    techSkill4: "• Python",
    techSkill5: "• Desenvolvimento e Análise de Sistemas",
    integrationTitle: "Integração Direito e Tecnologia",
    integrationDescription:
      "Minha abordagem única combina conhecimentos jurídicos profundos com expertise em tecnologia para oferecer soluções completas. Desenvolvo sistemas que atendem às necessidades legais específicas de empresas e profissionais, criando ferramentas que otimizam processos jurídicos e garantem conformidade com a legislação.",

    // Portfolio Section
    portfolioTitle: "Portfólio",
    portfolioDescription:
      "Alguns dos projetos que desenvolvi, demonstrando a integração entre direito e tecnologia.",
    project1Title: "Website: Coleta Seletiva",
    project1Description:
      "Um website com design moderno e adaptativo utilizando Bootstrap, mapa interativo com Leaflet.js, e formulário integrado com Google Forms.",
    project2Title: "Debian Bundle Manager",
    project2Description:
      "Um poderoso script em Bash para automatizar a instalação de conjuntos de software em sistemas baseados em Debian usando APT e Flatpak a partir de um arquivo de texto.",
    project3Title: "JudInfo",
    project3Description:
      "Uma ferramenta de linha de comando intuitiva, desenvolvida em Python para interagir com a API DataJud do Conselho Nacional de Justiça (CNJ). Projetada para advogados, desenvolvedores e analistas, com o objetivo de automatizar e simplificar o acesso a dados judiciais públicos.",
    viewProject: "Ver Projeto",

    // Contact Section
    contactTitle: "Entre em Contato",
    contactDescription:
      "Estou disponível para novos projetos e oportunidades. Entre em contato para conversarmos!",
    formName: "Nome",
    formEmail: "E-mail",
    formSubject: "Assunto",
    formMessage: "Mensagem",
    formSubmit: "Enviar Mensagem",

    // Footer
    footerText:
      "© 2025 Cássio Augusto Couto Soares. Todos os direitos reservados.",
  },

  en: {
    // Navigation
    home: "Home",
    about: "About",
    skills: "Skills",
    portfolio: "Portfolio",
    contact: "Contact",

    // Hero Section
    heroTitle: "Lawyer and Systems Developer",
    heroDescription:
      "Combining legal expertise with technology to deliver innovative and efficient solutions to my clients.",
    contactMe: "Contact Me",
    viewPortfolio: "View Portfolio",

    // About Section
    aboutTitle: "About Me",
    aboutDescription:
      "Lawyer and systems developer with experience in both fields, seeking to integrate technology and law to create efficient solutions.",
    educationTitle: "Academic Education",
    degree1: "Systems Analysis and Development",
    degree1Desc: "International University Center - UNINTER (In Progress)",
    degree2: "Law",
    degree2Desc: "Newton Paiva University Center",
    degree3: "IT Technician",
    degree3Desc: "Cotemig College",
    experienceTitle: "Professional Experience",
    job1: "Independent Lawyer",
    job1Desc:
      "Practice in various areas of law, focusing on customized solutions",
    job2: "IT Technician",
    job2Desc: "Technical support, system maintenance and IT infrastructure",
    job3: "Systems Developer",
    job3Desc: "Web and mobile application development",

    // Skills Section
    skillsTitle: "My Skills",
    skillsDescription:
      "Combining legal and technological knowledge to offer complete and innovative solutions.",
    legalSkills: "Legal Skills",
    legalSkill1: "• Civil Law",
    legalSkill2: "• Labor Law",
    legalSkill3: "• Digital Law",
    legalSkill4: "• Data Protection",
    legalSkill5: "• Drafting and Analysis of Contracts",
    techSkills: "Technical Skills",
    techSkill1: "• HTML, CSS, JavaScript",
    techSkill2: "• Bootstrap and Responsive Design",
    techSkill3: "• Front-end Development",
    techSkill4: "• Python",
    techSkill5: "• Systems Development and Analysis",
    integrationTitle: "Law and Technology Integration",
    integrationDescription:
      "My unique approach combines deep legal knowledge with technology expertise to offer complete solutions. I develop systems that meet the specific legal needs of companies and professionals, creating tools that optimize legal processes and ensure compliance with legislation.",

    // Portfolio Section
    portfolioTitle: "Portfolio",
    portfolioDescription:
      "Some of the projects I've developed, demonstrating the integration between law and technology.",
    project1Title: "Website: Selective Waste Collection",
    project1Description:
      "Website with a modern, adaptive design using Bootstrap, an interactive map with Leaflet.js, and a form integrated with Google Forms.",
    project2Title: "Debian Bundle Manager",
    project2Description:
      "A powerful Bash script to automate software installation on Debian-based systems using APT and Flatpak from a text file.",
    project3Title: "JudInfo",
    project3Description:
      " A user-friendly command-line tool built with Python to interact with Brazil's National Council of Justice (CNJ) DataJud API. Designed for lawyers, developers, and analysts to automate and simplify access to public judicial data.",
    viewProject: "View Project",

    // Contact Section
    contactTitle: "Get in Touch",
    contactDescription:
      "I'm available for new projects and opportunities. Get in touch to talk!",
    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formSubmit: "Send Message",

    // Footer
    footerText: "© 2025 Cássio Augusto Couto Soares. All rights reserved.",
  },
};

// Current language
let currentLanguage = "pt";

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize language
  updateLanguage();

  // Theme toggle functionality
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", toggleTheme);

  // Language switcher functionality
  const languageOptions = document.querySelectorAll(".language-option");
  languageOptions.forEach((option) => {
    option.addEventListener("click", function (e) {
      e.preventDefault();
      currentLanguage = this.getAttribute("data-lang");
      document.getElementById("currentLanguage").textContent =
        currentLanguage.toUpperCase();
      updateLanguage();
    });
  });

  // Form submission to Google Forms
  const contactForm = document.getElementById("contactForm");
  const statusDiv = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Set loading message based on current language
      statusDiv.textContent =
        currentLanguage === "pt"
          ? "Enviando, por favor aguarde..."
          : "Sending, please wait...";
      statusDiv.style.display = "block";
      statusDiv.className = "alert alert-info";

      // Google Form field mapping
      const formData = {
        "entry.765598628": document.getElementById("name").value, // Name
        "entry.647321037": document.getElementById("email").value, // Email
        "entry.16358610": document.getElementById("subject").value, // Subject
        "entry.2022728961": document.getElementById("message").value, // Message
      };

      const formActionURL =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeLvj2m0jAaJJm_KNXAanALnG1PoD8G9N1an0pwtfangutTiA/formResponse";

      const urlEncodedData = new URLSearchParams(formData).toString();

      fetch(formActionURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData,
      })
        .then(() => {
          // Success message based on language
          statusDiv.textContent =
            currentLanguage === "pt"
              ? "Mensagem enviada com sucesso!"
              : "Message sent successfully!";
          statusDiv.className = "alert alert-success";
          contactForm.reset();
        })
        .catch((error) => {
          console.log("Error (may be ignored due to no-cors):", error);
          // Still show success since no-cors always throws error
          statusDiv.textContent =
            currentLanguage === "pt"
              ? "Mensagem enviada com sucesso!"
              : "Message sent successfully!";
          statusDiv.className = "alert alert-success";
          contactForm.reset();
        })
        .finally(() => {
          setTimeout(() => {
            statusDiv.style.display = "none";
          }, 5000);
        });
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Calculate the position considering the fixed navbar
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Update URL without page jump
        history.pushState(null, null, targetId);
      }
    });
  });

  // Update active nav link on scroll
  window.addEventListener("scroll", function () {
    let current = "";
    const sections = document.querySelectorAll("section");
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - navbarHeight - 50) {
        current = section.getAttribute("id");
      }
    });

    document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

// Update language function
function updateLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
}

// Theme toggle function
function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.body.setAttribute("data-bs-theme", newTheme);

  // Update theme toggle icon
  const themeIcon = document.querySelector("#themeToggle i");
  if (newTheme === "dark") {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }

  // Store theme preference in localStorage
  localStorage.setItem("theme", newTheme);
}

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.setAttribute("data-bs-theme", savedTheme);

  // Update theme toggle icon based on saved theme
  const themeIcon = document.querySelector("#themeToggle i");
  if (savedTheme === "dark") {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
}
