export function language() {
  const langArr = {
    // #region header
    "h.n__home": {
      UK: "Home",
    },
    "h.n__about": {
      UK: "About me",
    },
    "h.n__services": {
      UK: "Services",
    },
    "menu__reviews": {
      UK: "Reviews",
    },
    "h.m__h1": {
      UK: "BEST PET CARE <br> <span>Amsterdam</span>",
    },
    "h.m__button": {
      UK: "Make a request",
    },
    // #endregion

    // #region modal
    "m.title": {
      UK: "Leave a request",
    },
    "m.name": {
      UK: "Name",
    },
    "m.n__pet": {
      UK: "Name of pet:",
    },
    "m.year": {
      UK: "Age of pet (in years):",
    },
    "m.ges": {
      UK: "Gender:",
    },
    "m.ges__k": {
      UK: "Choose gender",
    },
    "m.ges__j": {
      UK: "Boy",
    },
    "m.ges__m": {
      UK: "Girl",
    },
    "m.number": {
      UK: "Phone number:",
    },
    "m.dienst": {
      UK: "Service:",
    },
    "m.startdatum": {
      UK: "Start date:",
    },
    "m.einddatum": {
      UK: "End date:",
    },
    "m.opmerk": {
      UK: "Note (optional):",
    },
    "m.button": {
      UK: "Send",
    },
    // #endregion
    
    // #region about
    "a.title": {
      UK: "GET TO <span>KNOW ME</span>",
    },
    "a.p": {
      UK: "My name is Sofia Rodina, and I have been living in the Netherlands for over three years. During this time, I have dedicated myself to pet care, offering services such as dog walking, dog boarding, and cat sitting. I have completed a course on dog behavior and psychology, which has deepened my understanding of our furry friends. In the near future, I will be adding professional grooming services to my offerings to ensure your beloved pets look their best. Stay tuned for updates! Animals have always played a significant role in my life. My friend was a dog breeder and dog handler, so I spent a lot of time with dogs from a young age, caring for both puppies and adult dogs. This experience has allowed me to develop a strong bond with animals, and I truly believe I can find the perfect approach for your pet. I look forward to providing loving and attentive care to your furry family members!",
    },
    // #endregion

    // #region services
    "s.title": {
      UK: "Dog and cat services",
    },
    "s.i-t-1": {
      UK: "BOARDING",
    },
    "s.i-t-2": {
      UK: "Daycare",
    },
    "s.i-t-3": {
      UK: "Babysitter at home",
    },
    "s.i-t-4": {
      UK: "Quick date",
    },
    "s.i-t-5": {
      UK: "Walking service",
    },
    "s.i-p-1": {
      UK: "Your furry stays by my house for one or more nights",
    },
    "s.i-p-2": {
      UK: "Your furry stays by my house only for day, without night stay",
    },
    "s.i-p-3": {
      UK: "I come to your house and stay with your lovely furry",
    },
    "s.i-p-4": {
      UK: "Quick date for your furry, I come to your house to make short visit 30 minute",
    },
    "s.i-p-5": {
      UK: "I come to you to walk with your dog, also possible individual or group outdoor walks to the sea, in the forest, in certain parks for additional costs",
    },
    "s.i-b-1": {
      UK: "<b>55€</b>/per day",
    },
    "s.i-b-2": {
      UK: "<b>50€</b>/per day",
    },
    "s.i-b-3": {
      UK: "<b>60€</b>/per day",
    },
    "s.i-b-4": {
      UK: "<b>30€</b>/per visit",
    },
    "s.i-b-5": {
      UK: "<b>30€</b>/per walk",
    },
    "s.paw": {
      UK: "Discounts may apply depending on the numbers of days staying",
    },
    // #endregion

    // #region header
    "r.title": {
      UK: "Reviews",
    },
    "r.i-d-1": {
      UK: "Dog walking 22-12-23",
    },
    "r.i-d-2": {
      UK: "Dog boarding 09-10-23",
    },
    "r.i-d-3": {
      UK: "Babysitter at home 12-01-23",
    },
    "r.i-d-4": {
      UK: "Dog boarding 04-10-24",
    },
    "r.i-d-5": {
      UK: "Dog walking 22-12-23",
    },
    "r.i-p-1": {
      UK: "My dogs are usually difficult around new people, but with Sofia, they were immediately comfortable. She did a wonderful job with the walking and followed all the instructions I gave her, so I would definitely recommend her!",
    },
    "r.i-p-2": {
      UK: "Is the first time we left our dog with someone and Sofia has been the best! They had connection since the beginning and we fully trust her. Salsa has been really happy with her and we will definetelly repeat.",
    },
    "r.i-p-3": {
      UK: "Sofia heeft goed voor onze cocker spaniel Simba en ons huis gezorgd! Hele lieve jonge dame. Ze hadden allebei meteen een klik. Via filmpjes en foto's heeft ze ons goed geïnformeerd. Wij kunnen Sofia van harte aanbevelen.",
    },
    "r.i-p-4": {
      UK: "Sofia provided excellent care for our little Roosevelt. It was our first time leaving him with a sitter, and her kindness and thoughtfulness reassured us. The photo updates she sent melted away our initial worries and showed her exceptional care. Roosevelt had a fantastic time making a new friend. We highly recommend Sofia's dog-sitting services. 10/10 stars & thank you!",
    },
    "r.i-p-5": {
      UK: "Sofia was just amazing! Shes very reliable, punctual, great communication and handled our big German Shephard so gently. You know she was great because our puppy would wait for her by the window and greet her with kisses and hugs. Definitely recommend her 🙌 Thank you so much!",
    },
    // #endregion

    // #region header
    "media.title": {
      UK: "Let’s Get to <span>contact Me</span>",
    },
    // #endregion

    // #region header
    "h": {
      UK: "Home",
    },
    // #endregion
  };

  const body = document.body;
  const iconLanguage = document.querySelector(".header__nav__flag img");
  let currentLang = "NL";

  function setLang(lang) {
    currentLang = lang;
    iconLanguage.src = `img/header/${
      lang === "UK" ? "flag-uk" : "flag-nl"
    }.svg`;

    document.querySelectorAll("[data-lang-key]").forEach((element) => {
      const langKey = element.getAttribute("data-lang-key");

      if (lang === "UK") {
        if (!element.hasAttribute("data-original-text")) {
          element.setAttribute("data-original-text", element.innerHTML);
        }
        if (
          !element.hasAttribute("data-original-placeholder") &&
          (element.tagName === "INPUT" || element.tagName === "TEXTAREA")
        ) {
          element.setAttribute(
            "data-original-placeholder",
            element.getAttribute("placeholder")
          );
        }

        if (langArr[langKey]?.["UK"]) {
          if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
            element.setAttribute("placeholder", langArr[langKey]["UK"]);
          } else {
            element.innerHTML = langArr[langKey]["UK"];
          }
        }
      } else {
        const originalText = element.getAttribute("data-original-text");
        const originalPlaceholder = element.getAttribute(
          "data-original-placeholder"
        );

        if (originalText) {
          element.innerHTML = originalText;
        }
        if (originalPlaceholder) {
          element.setAttribute("placeholder", originalPlaceholder);
        }
      }
    });
  }

  function toggleLang() {
    setLang(currentLang === "NL" ? "UK" : "NL");
  }

  document
    .querySelector(".header__nav__flag")
    .addEventListener("click", toggleLang);

  document.querySelectorAll(".menu__lan").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      setLang(button.getAttribute("data-lang"));
    });
  });
}
