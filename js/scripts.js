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
    legalSkill1: "• Direito Civil e Contratual",
    legalSkill2: "• Direito do Consumidor",
    legalSkill3: "• Direito Digital e Proteção de Dados",
    legalSkill4: "• Consultoria Jurídica Empresarial",
    legalSkill5: "• Elaboração de Contratos e Documentos Legais",
    techSkills: "Habilidades Técnicas",
    techSkill1: "• HTML, CSS, JavaScript",
    techSkill2: "• Bootstrap e Design Responsivo",
    techSkill3: "• Desenvolvimento Front-end",
    techSkill4: "• Git e Controle de Versão",
    techSkill5: "• Análise e Modelagem de Sistemas",
    integrationTitle: "Integração Direito e Tecnologia",
    integrationDescription:
      "Minha abordagem única combina conhecimentos jurídicos profundos com expertise em tecnologia para oferecer soluções completas. Desenvolvo sistemas que atendem às necessidades legais específicas de empresas e profissionais, criando ferramentas que otimizam processos jurídicos e garantem conformidade com a legislação.",

    // Portfolio Section
    portfolioTitle: "Portfólio",
    portfolioDescription:
      "Alguns dos projetos que desenvolvi, demonstrando a integração entre direito e tecnologia.",
    project1Title: "Projeto 1",
    project1Description: "Descrição...",
    project1Tech: "Tags",
    project2Title: "Projeto 2",
    project2Description: "Descrição...",
    project2Tech: "Tags",
    project3Title: "Projeto 3",
    project3Description: "Descrição...",
    project3Tech: "Tags",
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
    legalSkill1: "• Civil and Contract Law",
    legalSkill2: "• Consumer Law",
    legalSkill3: "• Digital Law and Data Protection",
    legalSkill4: "• Business Legal Consulting",
    legalSkill5: "• Drafting Contracts and Legal Documents",
    techSkills: "Technical Skills",
    techSkill1: "• HTML, CSS, JavaScript",
    techSkill2: "• Bootstrap and Responsive Design",
    techSkill3: "• Front-end Development",
    techSkill4: "• Git and Version Control",
    techSkill5: "• Systems Analysis and Modeling",
    integrationTitle: "Law and Technology Integration",
    integrationDescription:
      "My unique approach combines deep legal knowledge with technology expertise to offer complete solutions. I develop systems that meet the specific legal needs of companies and professionals, creating tools that optimize legal processes and ensure compliance with legislation.",

    // Portfolio Section
    portfolioTitle: "Portfolio",
    portfolioDescription:
      "Some of the projects I've developed, demonstrating the integration between law and technology.",
    project1Title: "Legal Management System",
    project1Description:
      "Web application for managing legal processes, deadlines and documents.",
    project1Tech: "HTML, CSS, JavaScript",
    project2Title: "Smart Contract Generator",
    project2Description: "Tool for automated creation of customized contracts.",
    project2Tech: "JavaScript, Bootstrap",
    project3Title: "Legal Compliance System",
    project3Description:
      "Platform for verifying compliance with LGPD and other laws.",
    project3Tech: "HTML, CSS, JavaScript",
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

  // Form submission
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Placeholder message (no real implementation yet)
    alert(
      currentLanguage === "pt"
        ? "Mensagem enviada com sucesso! Em breve entrarei em contato."
        : "Message sent successfully! I will contact you soon."
    );
    contactForm.reset();
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });

        // Update active nav link
        document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
          link.classList.remove("active");
        });
        this.classList.add("active");

        // Check if the clicked anchor is a nav-link before adding the active class
        if (this.classList.contains("nav-link")) {
          this.classList.add("active");
        }
      }
    });
  });

  // Update active nav link on scroll
  window.addEventListener("scroll", function () {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 100) {
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
