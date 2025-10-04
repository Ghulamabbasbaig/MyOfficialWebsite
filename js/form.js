const form = document.querySelector("#form");

if (!form) {
  console.log("no form found");
} else {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#project").value;
    const button = document.querySelector("#submit span");
    const loader = document.querySelector(".loader");
    const svgArrow = document.querySelector("#submit .mil-arrow");

    if (!name || !email || !message) {
      alert("Please fill the required fields first");
    } else {
      const params = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#project").value,
      };

      button.textContent = "Sending";
      svgArrow.style.display = "none";
      loader.style.display = "block";

      const serviceID = "service_kqtkqmo";
      const templateID = "template_fhug9ba";

      emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
          document.querySelector("#name").value = "";
          document.querySelector("#email").value = "";
          document.querySelector("#project").value = "";
          console.log(res);
          console.log(params);
          button.textContent = "Sent Successfully";
          svgArrow.style.display = "block";
          loader.style.display = "none";
          setTimeout(() => {
            button.textContent = "Send message";
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          button.textContent = "Error: Refresing the page";
          svgArrow.style.display = "block";
          loader.style.display = "none";
          setTimeout(() => {
            window.location.reload(true);
          }, 2000);
        });
    }
  });
}

// link redirection forcefully
const links = document.querySelectorAll(".redirect-link");
const website = "https://ghulamabbasbaig.com/";
const behance = "portfolio.html";
const instagram = "https://www.instagram.com/ghulamabasbaig/";
const linkedin = "https://www.linkedin.com/in/ghulamabbasbaig/";
const wa = "https://wa.me/+923087072145";

const pet = "pet-health-care-design.html";
const creator = "creator-landing-page-design.html";
const zombie = "zombie-NFT-landing-page-design.html";
const cera = "cera-landing-page-design.html";
const hulty = "hulty-landing-page.html";
const echo = "echo-harvest-website-design.html";
const smartlane = "smartlane-saas-website-design.html";
const keentodesign = "keentodesign-website-agency.html";
const salesflow = "salesflow-landing-page-design.html";
const oakwell = "oakwell-cosmetics-ecommerce-website-store.html";
const plascow = "plascow-Logistics-b2b-corporate-website-design.html"
const persuasion = "persuasion-systems-mvp-healthcare-sales-platform.html"
const cogniai = "cogniai-cro-focused-business-intelligence-landing-page.html"
const lusty = "lusty-lifestyle-dtc-ecommerce-website.html"
const basharacare = "basharacare-dermatologist-backed-ecommerce-website.html"










const upwork = "https://www.upwork.com/freelancers/~012af3a786efcdd65a";
const petFigmaLink =
  "https://www.figma.com/design/llLKzuv4ggbWMNUQ9YgxUr/Luscious-Cosmetics?node-id=91-7551&t=Q6qG4QQGdKZj34Er-1";

links.forEach(function (link) {
  link.addEventListener("click", () => {
    switch (true) {
      case link.classList.contains("behance"):
        window.open(behance, "_self");
        break;
      case link.classList.contains("instagram"):
        window.open(instagram, "_blank");
        break;
      case link.classList.contains("linkedin"):
        window.open(linkedin, "_blank");
        break;
      case link.classList.contains("wa"):
        window.open(wa, "_blank");
        break;
      case link.classList.contains("website"):
        window.location.href = website;
        break;
      case link.classList.contains("smartlane"):
        window.open(smartlane, "_self");
        break;
      case link.classList.contains("pet"):
        window.open(pet, "_self");
        break;
      case link.classList.contains("creator"):
        window.open(creator, "_self");
        break;
      case link.classList.contains("zombie"):
        window.open(zombie, "_self");
        break;
      case link.classList.contains("cera"):
        window.open(cera, "_self");
        break;
      case link.classList.contains("hulty"):
        window.open(hulty, "_self");
        break;
      case link.classList.contains("echo"):
        window.open(echo, "_self");
        break;
         case link.classList.contains("keentodesign"):
        window.open(keentodesign, "_self");
        break;
        case link.classList.contains("salesflow"):
        window.open(salesflow, "_self");
        break;
        case link.classList.contains("oakwell"):
        window.open(oakwell, "_self");
        break;
		case link.classList.contains("plascow"):
        window.open(plascow, "_self");
        break;
		case link.classList.contains("persuasion"):
        window.open(persuasion, "_self");
        break;
		case link.classList.contains("cogniai"):
        window.open(cogniai, "_self");
        break;
		case link.classList.contains("lusty"):
        window.open(lusty, "_self");
        break;
		case link.classList.contains("basharacare"):
        window.open(basharacare, "_self");
        break
		
		
		
		
		
		
		
		
     
     
      case link.classList.contains("upwork"):
        window.open(upwork, "_self");
        break;
      case link.classList.contains("petFigmaLink"):
        window.open(petFigmaLink, "_blank");
        console.log("clicked", click, petFigmaLink);
        break;

      default:
        console.log("default state");
    }
  });
});

links.forEach((link) => {
  link.href = "";
});
