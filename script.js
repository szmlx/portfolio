const textElement = document.querySelector(".typing-text");
const messages = ["code", "create", "innovate"];
let messageIndex = 0;
let charIndex = 0;

function typeMessage() {
  if (charIndex < messages[messageIndex].length) {
    textElement.textContent = messages[messageIndex].substring(
      0,
      charIndex + 1
    );
    charIndex++;
    setTimeout(typeMessage, 100); // Typing speed
  } else {
    charIndex = 0;
    messageIndex = (messageIndex + 1) % messages.length; // Cycle through messages
    setTimeout(typeMessage, 500); // Delay between messages
  }
}

typeMessage();

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navbar.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navbar.classList.remove("open");
    menuOpen = false;
  }
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("with-border", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentSectionId = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSectionId}`
          );
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const disableAnimationClass = "disable-animation";
  let isScrolling = false;

  window.addEventListener("scroll", () => {
    if (!isScrolling) {
      isScrolling = true;
      document.body.classList.add(disableAnimationClass);

      setTimeout(() => {
        isScrolling = false;
        document.body.classList.remove(disableAnimationClass);
      }, 100); // Adjust the timeout value as needed
    }
  });
});

// HOMEPAGE APPEAR
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const navbar = document.getElementById("navbar");
  const homeContentH3 = document.querySelector(".home-content h3");
  const homeContentH1 = document.querySelector(".home-content h1");
  const homeContentH2 = document.querySelector(".home-content h2");
  const homeContentButtons = document.querySelector(".home-content .buttons");
  const homeContentImgs = document.querySelector(".home-content .imgs");
  const homeScrollAnimation = document.querySelector(".scroll-arrow");
  setTimeout(() => {
    header.classList.add("visible");
  }, 500);

  setTimeout(() => {
    navbar.classList.add("visible");
  }, 700);
  setTimeout(() => {
    homeContentImgs.classList.add("visible");
  }, 1200);
  setTimeout(() => {
    homeContentH3.classList.add("visible");
  }, 1600);

  setTimeout(() => {
    homeContentH1.classList.add("visible");
  }, 2000);

  setTimeout(() => {
    homeContentH2.classList.add("visible");
  }, 2200);

  setTimeout(() => {
    homeContentButtons.classList.add("visible");
  }, 2600);

  setTimeout(() => {
    homeScrollAnimation.classList.add("visible");
  }, 2800);
});

document.addEventListener("DOMContentLoaded", () => {
  const greetingElement = document.getElementById("greeting");
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greetingMessage;

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = "Good Morning, I am";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = "Good Afternoon, I am";
  } else {
    greetingMessage = "Good Evening, I am";
  }

  greetingElement.textContent = greetingMessage;
});

document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", () => {
    const title = box.querySelector("h1").innerText;
    const tools = box.querySelector("h4"); // Get the entire <h4> element

    const description = box.querySelectorAll("p")[1].innerText; // Second <p>
    const imageUrl = box.dataset.image; // Get image from data attribute

    document.getElementById("popup-title").innerText = title;

    // Clear existing content and append the cloned <h4>
    const popupTools = document.getElementById("popup-tools");
    popupTools.innerHTML = ""; // Clear previous content
    popupTools.appendChild(tools.cloneNode(true)); // Clone and append the <h4>

    document.getElementById("popup-description").innerText = description;
    document.getElementById("popup-image").src = imageUrl; // Set the image source

    document.getElementById("popup").style.display = "flex"; // Show popup
  });
});

document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none"; // Hide popup
});

window.onclick = function (event) {
  if (event.target == document.getElementById("popup")) {
    document.getElementById("popup").style.display = "none"; // Hide popup on outside click
  }
};

const sectionIds = ["home", "about", "experience", "projects", "contact"];
const dots = document.querySelectorAll(".dot");
const scrollUpIcon = document.getElementById("scroll-up");
const scrollDownIcon = document.getElementById("scroll-down");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const sectionId = sectionIds[index];
    const section = document.getElementById(sectionId);
    const offset = 10; // Adjust this value as needed
    const scrollPosition = section.offsetTop - offset;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  });
});

scrollUpIcon.addEventListener("click", () => {
  if (scrollUpIcon.style.opacity === "1") {
    const currentSection = getCurrentSection();
    const currentIndex = sectionIds.indexOf(currentSection);
    const prevIndex =
      (currentIndex - 1 + sectionIds.length) % sectionIds.length;
    const prevSection = document.getElementById(sectionIds[prevIndex]);
    prevSection.scrollIntoView({ behavior: "smooth" });
  }
});

scrollDownIcon.addEventListener("click", () => {
  if (scrollDownIcon.style.opacity === "1") {
    const currentSection = getCurrentSection();
    const currentIndex = sectionIds.indexOf(currentSection);
    const nextIndex = (currentIndex + 1) % sectionIds.length;
    const nextSection = document.getElementById(sectionIds[nextIndex]);
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
});

window.addEventListener("scroll", () => {
  const currentSection = getCurrentSection();
  setActiveDot(currentSection);
  updateArrowVisibility(currentSection);
});

function getCurrentSection() {
  let currentSection = sectionIds[0];
  sectionIds.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    const sectionTop = section.offsetTop - window.innerHeight / 2;
    if (window.scrollY >= sectionTop) {
      currentSection = sectionId;
    }
  });
  return currentSection;
}

function setActiveDot(currentSection) {
  dots.forEach((dot) => dot.classList.remove("actives"));
  const activeDotIndex = sectionIds.indexOf(currentSection);
  dots[activeDotIndex].classList.add("actives");
}

function updateArrowVisibility(currentSection) {
  const firstSection = sectionIds[0];
  const lastSection = sectionIds[sectionIds.length - 1];

  scrollUpIcon.style.opacity = currentSection === firstSection ? "0.1" : "1";
  scrollDownIcon.style.opacity = currentSection === lastSection ? "0.1" : "1";

  scrollUpIcon.style.pointerEvents =
    currentSection === firstSection ? "none" : "auto";
  scrollDownIcon.style.pointerEvents =
    currentSection === lastSection ? "none" : "auto";

  scrollUpIcon.classList.toggle("grayed-out", currentSection === firstSection);
  scrollDownIcon.classList.toggle("grayed-out", currentSection === lastSection);
}

async function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = document.getElementById("dataForm");
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData);
  const submitButton = document.getElementById("submitButton");

  form.reset(); // Clear the form fields

  try {
    submitButton.disabled = true;
    submitButton.style.display = "none";
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbynX-POmvhgX5UIWiZTH2M09cxCRfQRuYUVPwqDNpU-C8RhT4YEvH3wjQ8PX6Or95e4aw/exec",
      {
        method: "POST",
        body: new URLSearchParams(formObject),
      }
    );

    const responseText = await response.text();
    console.log("Response:", responseText); // Log the response for debugging

    if (response.ok) {
      submitButton.disabled = false;
      submitButton.style.display = "inline";

      alert("Message Sent! Thank You!");
    } else {
      alert(`Error: ${responseText}`);
      submitButton.disabled = false;
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
    submitButton.disabled = false;
    submitButton.style.display = "inline";
  }
}
const showMoreButton = document.getElementById("show-more");
const showLessButton = document.getElementById("show-less");
const hiddenExperiences = document.querySelectorAll(".experience-box.hidden");

showMoreButton.addEventListener("click", () => {
  hiddenExperiences.forEach((experience, index) => {
    if (index < 3) {
      // Show the first 3 hidden experiences
      experience.classList.remove("hidden");
    }
  });

  // Hide the Show More button and display Show Less if there are no more hidden experiences
  if (Array.from(hiddenExperiences).slice(3).length === 0) {
    showMoreButton.style.display = "none";
  }
  showLessButton.style.display = "inline-block"; // Show the Show Less button
});

showLessButton.addEventListener("click", () => {
  hiddenExperiences.forEach((experience, index) => {
    if (index < 3) {
      experience.classList.add("hidden");
    }
  });

  if (
    Array.from(hiddenExperiences).every((experience) =>
      experience.classList.contains("hidden")
    )
  ) {
    showMoreButton.style.display = "inline-block";
    showLessButton.style.display = "none"; // Hide the Show Less button
  }
});
