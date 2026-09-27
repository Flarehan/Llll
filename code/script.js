// ==============================
// EASY PERSONALIZATION AREA
// Replace these lines with things that are specifically about her.
// The more specific they are, the more special the website will feel.
// ==============================

const compliments = [
  "Мне нравится, как даже самый обычный разговор с тобой может стать лучшей частью моего дня.",
  "Твоя улыбка слишком сильно влияет на моё настроение — это даже немного нечестно.",
  "Мне нравится, что рядом с тобой даже расстояние кажется чуть менее раздражающим.",
  "Ты умеешь быть невероятно милой, даже когда совсем не стараешься.",
  "Мне нравится, каким я становлюсь, когда разговариваю с тобой.",
  "Ты значишь для меня намного больше, чем я, наверное, умею правильно выразить словами."
];


// ==============================
// OPEN WHEN LETTERS
// ==============================

const letters = {
  alone: {
    title: "Когда тебе одиноко",
    text: "Я знаю, что не могу просто телепортироваться к тебе, и это, если честно, ужасный недостаток этого мира. Но, пожалуйста, помни одну вещь: расстояние не значит, что меня нет рядом. Где-то есть человек, который думает о тебе, переживает о том, как прошёл твой день, и очень хотел бы сейчас просто сесть рядом с тобой. Ты не настолько одна, как иногда может казаться в тихие моменты."
  },

  doubt: {
    title: "Когда ты сомневаешься в себе",
    text: "Иногда наш мозг говорит нам очень несправедливые вещи, и сейчас, возможно, именно такой момент. Тебе не нужно сегодня во всём разобраться. Тебе не нужно быть идеальной, чтобы тебя любили, ценили и чтобы тобой гордились. Я вижу в тебе столько прекрасного, даже в те дни, когда тебе самой трудно это увидеть."
  },

  miss: {
    title: "Когда ты скучаешь по мне",
    text: "Я тоже по тебе скучаю. Иногда даже в самых обычных моментах — когда что-то происходит и мне сразу хочется рассказать тебе, когда я вижу что-то, что тебе бы понравилось, или когда вокруг становится слишком тихо. Пока расстояние между нами не станет меньше, пусть это письмо будет маленькой частью меня рядом с тобой."
  },

  sleep: {
    title: "Когда ты не можешь уснуть",
    text: "После этого отложи телефон. Устройся поудобнее. Расслабь челюсть и плечи. Тебе не нужно решать проблемы завтрашнего дня сегодня ночью. Представь, что я рядом и очень тихо говорю тебе перестать обо всём думать и немного отдохнуть. Спокойной ночи, красавица. Надеюсь, завтра будет к тебе добрее."
  }
};


// ==============================
// MOOD MESSAGES
// ==============================

const moodMessages = {
  sad:
    "Тогда здесь тебе не нужно делать вид, что всё хорошо. Если тебе хочется немного погрустить — погрусти. Я просто хотел бы сейчас быть рядом, сесть возле тебя и сделать весь этот шум вокруг немного тише, пока тебе не станет легче. ♡",

  miss:
    "Я тоже по тебе скучаю. Это расстояние ужасно раздражает, но до меня всё равно всего одно сообщение, один звонок или одна мысль. И поверь, я тоже думаю о тебе гораздо чаще, чем, наверное, признаюсь.",

  tired:
    "Тогда сегодня тебе совсем не обязательно быть сильной и продуктивной. Выпей воды, устройся поудобнее, немного отдохни и разреши себе ничего не делать. Ты имеешь право устать, и тебе не нужно чувствовать за это вину.",

  love:
    "Хорошо. Иди сюда. О тебе заботятся, о тебе думают, по тебе скучают, и для одного человека по другую сторону экрана ты очень-очень важна. Считай, что это официальная доставка любви на сегодня. ♡",

  laugh:
    "Важное объявление: у тебя обнаружен серьёзный случай чрезмерной милоты во время грусти. Лечение включает долгие объятия, что-нибудь вкусное, хороший сон и меня, который будет надоедать тебе, пока ты наконец не улыбнёшься."
};


const moodMessage = document.getElementById("moodMessage");

document.querySelectorAll(".mood-btn").forEach(button => {
  button.addEventListener("click", () => {
    moodMessage.textContent = moodMessages[button.dataset.mood];
    moodMessage.classList.remove("hidden");

    if (
      button.dataset.mood === "love" ||
      button.dataset.mood === "miss"
    ) {
      heartBurst(16);
    }
  });
});


function scrollToSection(id) {
  document
    .getElementById(id)
    .scrollIntoView({
      behavior: "smooth"
    });
}


// ==============================
// HUG MACHINE
// ==============================

const hugBtn = document.getElementById("hugBtn");
const finalHugBtn = document.getElementById("finalHugBtn");

const hugArea = document.getElementById("hugArea");
const hugProgress = document.getElementById("hugProgress");
const hugPercent = document.getElementById("hugPercent");
const hugStatus = document.getElementById("hugStatus");
const hugResult = document.getElementById("hugResult");


function runHugMachine() {

  hugArea.classList.remove("hidden");

  hugResult.textContent = "";
  hugProgress.style.width = "0%";

  let value = 0;

  const timer = setInterval(() => {

    value += 2;

    hugProgress.style.width = value + "%";
    hugPercent.textContent = value + "%";


    if (value < 35) {

      hugStatus.textContent = "Preparing hug...";

    }

    else if (value < 70) {

      hugStatus.textContent = "Crossing the distance...";

    }

    else if (value < 100) {

      hugStatus.textContent = "Adding extra warmth...";

    }

    else {

      clearInterval(timer);

      hugStatus.textContent = "Доставлено успешно ♡";

      hugResult.textContent =
        "Одно очень долгое объятие успешно доставлено. Возврату не подлежит. ♡";

      heartBurst(28);

    }

  }, 45);
}


hugBtn.addEventListener(
  "click",
  runHugMachine
);


finalHugBtn.addEventListener("click", () => {

  heartBurst(40);

  showToast(
    "Ещё одно очень крепкое объятие доставлено 🫂"
  );

});


// ==============================
// COMPLIMENTS
// ==============================

let lastCompliment = -1;


document
  .getElementById("complimentBtn")
  .addEventListener("click", () => {

    let index;

    do {

      index =
        Math.floor(
          Math.random() * compliments.length
        );

    }
    while (
      index === lastCompliment &&
      compliments.length > 1
    );


    lastCompliment = index;


    document
      .getElementById("complimentText")
      .textContent =
      compliments[index];

  });


// ==============================
// LETTERS MODAL
// ==============================

const modal =
  document.getElementById("modal");

const modalTitle =
  document.getElementById("modalTitle");

const modalText =
  document.getElementById("modalText");


document
  .querySelectorAll(".letter-card")
  .forEach(card => {

    card.addEventListener("click", () => {

      const letter =
        letters[card.dataset.letter];

      modalTitle.textContent =
        letter.title;

      modalText.textContent =
        letter.text;

      modal.classList.remove("hidden");

      heartBurst(8);

    });

  });


function closeModal() {

  modal.classList.add("hidden");

}


document
  .getElementById("closeModal")
  .addEventListener(
    "click",
    closeModal
  );


document
  .querySelector(".modal-overlay")
  .addEventListener(
    "click",
    closeModal
  );


document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeModal();

    }

  }
);


// ==============================
// EMERGENCY BUTTON
// ==============================

const emergencyBtn =
  document.getElementById("emergencyBtn");

const emergencyText =
  document.getElementById("emergencyText");


const emergencySteps = [

  {
    button: "Are you sure?",
    text:
      "Ты уверена? Это очень серьёзная и невероятно продвинутая система эмоциональной поддержки."
  },

  {
    button: "Really, really sure?",
    text:
      "Точно-точно? Хорошо... мне нужно ещё одно подтверждение."
  },

  {
    button: "Yes. I need it.",
    text:
      "Ладно. Запускаю экстренную доставку любви и объятий..."
  },

  {
    button: "♡",
    text:
      "Если бы я сейчас был рядом, я бы, наверное, просто крепко обнял тебя и позволил оставаться так столько, сколько тебе нужно. Поэтому, пожалуйста, прими это как немного худшую интернет-версию моих объятий. Тебе не обязательно сразу становиться лучше. Я всё равно рядом."
  }

];


let emergencyStep = 0;


emergencyBtn.addEventListener(
  "click",
  () => {

    const current =
      emergencySteps[emergencyStep];


    emergencyBtn.textContent =
      current.button;

    emergencyText.textContent =
      current.text;


    if (
      emergencyStep ===
      emergencySteps.length - 1
    ) {

      heartBurst(60);

      emergencyBtn.disabled = true;

      emergencyBtn.style.cursor =
        "default";

    }

    else {

      emergencyStep++;

    }

  }
);


// ==============================
// FLOATING HEARTS
// ==============================

function createHeart() {

  const heart =
    document.createElement("span");


  heart.className =
    "floating-heart";


  heart.textContent =
    Math.random() > 0.3
      ? "♥"
      : "♡";


  heart.style.left =
    Math.random() * 100 + "vw";


  heart.style.fontSize =
    (
      12 +
      Math.random() * 20
    ) + "px";


  heart.style.opacity =
    0.25 +
    Math.random() * 0.65;


  heart.style.animationDuration =
    (
      4 +
      Math.random() * 4
    ) + "s";


  document
    .getElementById("particles")
    .appendChild(heart);


  setTimeout(
    () => heart.remove(),
    8500
  );

}


function heartBurst(amount = 20) {

  for (
    let i = 0;
    i < amount;
    i++
  ) {

    setTimeout(
      createHeart,
      i * 35
    );

  }

}


// ==============================
// TOAST
// ==============================

let toastTimer;


function showToast(message) {

  const toast =
    document.getElementById("toast");


  toast.textContent =
    message;


  toast.classList.add("show");


  clearTimeout(toastTimer);


  toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 2600);

}


// ==============================
// REVEAL ON SCROLL
// ==============================

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (
          entry.isIntersecting
        ) {

          entry.target
            .classList
            .add("visible");

        }

      });

    },

    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach(
    el => observer.observe(el)
  );


// ==============================
// STARTING HEARTS
// ==============================

setTimeout(
  () => heartBurst(8),
  700
);