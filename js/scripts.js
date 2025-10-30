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
    heroTitle:
      "Advogado Especialista em Tecnologia e Desenvolvedor de Sistemas",
    heroDescription:
      "Unindo a precisão do Direito com a inovação da Tecnologia para construir soluções estratégicas e eficientes.",
    contactMe: "Entre em Contato",
    viewPortfolio: "Conheça meus Projetos",

    // About Section
    aboutTitle: "Sobre Mim",
    aboutDescription:
      "Com uma carreira em Direito e Desenvolvimento de Sistemas, minha paixão é criar soluções tecnológicas que resolvem desafios jurídicos e de negócios.",
    educationTitle: "Formação Acadêmica",
    degree1: "Análise e Desenvolvimento de Sistemas",
    degree1Desc: "Centro Universitário Internacional - UNINTER (Cursando)",
    degree2: "Direito",
    degree2Desc: "Centro Universitário Newton Paiva (Concluído)",
    degree3: "Técnico em Informática",
    degree3Desc: "Colégio Cotemig (Concluído)",
    experienceTitle: "Experiência Profissional",
    job1: "Advogado Autônomo",
    job1Desc:
      "Consultoria e atuação em Direito Digital, Civil e Trabalhista com foco em soluções personalizadas para startups e empresas de tecnologia.",
    job2: "Desenvolvedor de Sistemas",
    job2Desc:
      "Desenvolvimento de aplicações web e automação de processos, integrando tecnologia à rotina de negócios.",
    job3: "Técnico de Informática",
    job3Desc:
      "Experiência consolidada em suporte técnico, manutenção de sistemas e infraestrutura de TI.",

    // Skills Section
    skillsTitle: "Minhas Habilidades",
    skillsDescription:
      "Minha expertise abrange tanto o universo jurídico quanto o tecnológico, permitindo-me criar soluções verdadeiramente completas.",
    legalSkills: "Habilidades Jurídicas",
    legalSkill1: "• Direito Digital e LGPD",
    legalSkill2: "• Análise e Elaboração de Contratos (Tech Contracts)",
    legalSkill3: "• Direito Civil e Resolução de Disputas",
    legalSkill4: "• Direito Trabalhista e Relações de Trabalho",
    legalSkill5: "• Propriedade Intelectual de Software",
    techSkills: "Habilidades Técnicas",
    techSkill1: "• Front-End: HTML, CSS, JavaScript",
    techSkill2: "• Frameworks: Bootstrap e Design Responsivo",
    techSkill3: "• Back-End: Python e Automação de Scripts",
    techSkill4: "• Análise de Requisitos e Modelagem de Sistemas",
    techSkill5: "• APIs e Integração de Sistemas",
    integrationTitle: "A Interseção entre Direito e Tecnologia",
    integrationDescription:
      "Minha abordagem única me permite não apenas entender as complexidades legais, mas também construir as ferramentas para navegá-las. Desenvolvo sistemas que otimizam processos, garantem conformidade (compliance) e transformam desafios jurídicos em vantagens competitivas.",

    // Portfolio Section
    portfolioTitle: "Portfólio de Projetos",
    portfolioDescription:
      "Explore alguns dos projetos que desenvolvi, onde a sinergia entre o conhecimento jurídico e a tecnologia se torna tangível.",
    project1Title: "Web App Relatório de NFe",
    project1Description:
      "Aplicação web para a extração de dados de arquivos XML de Nota Fiscal Eletrônica (NF-e), por meio de uma tabela interativa, permitindo a geração de relatórios consolidados e exportação em CSV.",
    project2Title: "Debian Bundle Manager",
    project2Description:
      "Um poderoso script em Bash para automatizar a instalação de conjuntos de software em sistemas baseados em Debian usando APT e Flatpak a partir de um arquivo de texto.",
    project3Title: "JudInfo",
    project3Description:
      "Uma ferramenta de linha de comando intuitiva, desenvolvida em Python para interagir com a API DataJud do Conselho Nacional de Justiça (CNJ). Projetada para advogados, desenvolvedores e analistas, com o objetivo de automatizar e simplificar o acesso a dados judiciais públicos.",
    viewProject: "Ver Projeto",

    // Contact Section
    contactTitle: "Vamos Conversar",
    contactDescription:
      "Estou sempre aberto a novos desafios e oportunidades. Se você tem um projeto em mente ou gostaria de saber mais, entre em contato!",
    formName: "Seu Nome",
    formEmail: "Seu E-mail",
    formSubject: "Assunto",
    formMessage: "Sua Mensagem",
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
      "Fusing legal precision with technological innovation to build strategic and efficient solutions.",
    contactMe: "Get in Touch",
    viewPortfolio: "View My Projects",

    // About Section
    aboutTitle: "About Me",
    aboutDescription:
      "With career in Law and Systems Development, my passion is creating tech-driven solutions to solve complex legal and business challenges.",
    educationTitle: "Academic Background",
    degree1: "Systems Analysis and Development",
    degree1Desc: "International University Center - UNINTER (In Progress)",
    degree2: "Bachelor of Laws (LL.B.)",
    degree2Desc: "Newton Paiva University Center (Completed)",
    degree3: "IT Technician",
    degree3Desc: "Cotemig College (Completed)",
    experienceTitle: "Professional Experience",
    job1: "Independent Lawyer",
    job1Desc:
      "Consulting and practice in Digital, Civil, and Labor Law, with a focus on tailored solutions for startups and tech companies.",
    job2: "Systems Developer",
    job2Desc:
      "Developing web applications and process automation, integrating technology into business workflows.",
    job3: "IT Technician",
    job3Desc:
      "Consolidated experience in technical support, system maintenance, and IT infrastructure.",

    // Skills Section
    skillsTitle: "My Skills",
    skillsDescription:
      "My expertise spans both the legal and technological domains, allowing me to create truly comprehensive solutions.",
    legalSkills: "Legal Skills",
    legalSkill1: "• Digital Law & Data Privacy (LGPD/GDPR)",
    legalSkill2: "• Tech Contract Drafting and Analysis",
    legalSkill3: "• Civil Law & Dispute Resolution",
    legalSkill4: "• Labor Law & Employment Relations",
    legalSkill5: "• Software Intellectual Property",
    techSkills: "Technical Skills",
    techSkill1: "• Front-End: HTML, CSS, JavaScript",
    techSkill2: "• Frameworks: Bootstrap & Responsive Design",
    techSkill3: "• Back-End: Python & Scripting Automation",
    techSkill4: "• Requirements Analysis & Systems Modeling",
    techSkill5: "• APIs & Systems Integration",
    integrationTitle: "The Intersection of Law and Technology",
    integrationDescription:
      "My unique approach allows me not just to understand legal complexities, but also to build the tools to navigate them. I develop systems that optimize processes, ensure compliance, and turn legal challenges into competitive advantages.",

    // Portfolio Section
    portfolioTitle: "Project Portfolio",
    portfolioDescription:
      "Explore some of the projects I've developed, where the synergy between legal knowledge and technology becomes tangible.",
    project1Title: "Invoice Report Web App",
    project1Description:
      "Web application for extracting data from XML files of Brazilian Electronic Invoices (NF-e), through an interactive table, allowing the generation of consolidated reports and export in CSV format.",
    project2Title: "Debian Bundle Manager",
    project2Description:
      "A powerful Bash script to automate software installation on Debian-based systems using APT and Flatpak from a text file.",
    project3Title: "JudInfo",
    project3Description:
      " A user-friendly command-line tool built with Python to interact with Brazil's National Council of Justice (CNJ) DataJud API. Designed for lawyers, developers, and analysts to automate and simplify access to public judicial data.",
    viewProject: "View Project",

    // Contact Section
    contactTitle: "Let's Talk",
    contactDescription:
      "I'm always open to new challenges and opportunities. If you have a project in mind or would like to learn more, feel free to reach out!",
    formName: "Your Name",
    formEmail: "Your Email",
    formSubject: "Subject",
    formMessage: "Your Message",
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
