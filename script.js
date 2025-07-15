const rsvpbtn = document.querySelector(".rsvp-button");
const manCta = document.querySelector(".main_cta");

// Confetti-js-scripts -start
function renderConfetti(amount, duration) {
  const confettiDuration = 5000;
  const animationEndTime = Date.now() + confettiDuration;
  const confettiDefaults = {
    startVelocity: 40,
    spread: 360,
    ticks: 80,
    gravity: 0.8,
    zIndex: 1000,
    colors: [
      "#FFC107",
      "#FF5722",
      "#8BC34A",
      "#03A9F4",
      "#E91E63",
      "#9C27B0",
      "#673AB7",
    ],
  };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const confettiInterval = setInterval(function () {
    const timeLeft = animationEndTime - Date.now();

    if (timeLeft <= 0) {
      clearInterval(confettiInterval);
      return;
    }

    const particleCount = amount * (timeLeft / confettiDuration);
    confetti({
      ...confettiDefaults,
      particleCount,
      origin: {
        x: randomInRange(0.1, 0.3),
        y: Math.random() - 0.2,
      },
    });
    confetti({
      ...confettiDefaults,
      particleCount,
      origin: {
        x: randomInRange(0.7, 0.9),
        y: Math.random() - 0.2,
      },
    });
  }, duration);
  // Confetti-js-scripts -end
}
renderConfetti(20, 400);

// formsubmission
const public_key = "D-H-WbuODWxnvG2dB";
const service_id = "service_z5mke3p";
const template_id = "template_q39l8mh";

(function () {
  emailjs.init(public_key);
})();

const load = document.createElement("div");

rsvpbtn.addEventListener("click", (e) => {
  // console.log("submitting");

  e.preventDefault();
  //getting form inputs
  const fullname = document.querySelector("#fname");
  const email = document.querySelector("#email");
  const message = "Excited to attend your event!";
  //form params
  const formParams = {
    from_name: `${fullname?.value}`,
    from_email: `${email?.value}`,
    message: `${message}`,
    to_name: "Arumaisoh",
    reply_to: `${email?.value}`,
  };

  for (const [key, value] of Object.entries(formParams)) {
    if (!key || !value || value == "") {
      alert("All fields are required");
      return;
    }
  }
  load.className = "loading";
  rsvpbtn.appendChild(load);
  rsvpbtn.setAttribute("disabled", "true");
  emailjs
    .send(service_id, template_id, formParams)
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        alert("Message Sent Successfullly");
        intializeresponse();
      } else {
        alert("Failed to send");
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send");
    })
    .finally(() => {
      setTimeout(() => load.remove(), 1000);
      rsvpbtn.removeAttribute("disabled");
    });
});

const intializeresponse = () => {
  const responseDiv = document.getElementById("responseMessage");

  // Change button text and show response
  rsvpbtn.innerHTML = "🎉 Thanks for RSVPing! 🎉";
  rsvpbtn.style.background = "linear-gradient(45deg, #ff6b6b, #ee5a24)";
  rsvpbtn.setAttribute("disabled", true);
  // Show success message
  responseDiv.innerHTML = "🎊 Awesome! Can't wait to see you there! 🎊";
  responseDiv.className = "response-message success show";

  // Add extra confetti effect
  renderConfetti(80, 300);
  setTimeout(() => {
    window.location.reload();
  }, 3000);
};
