/* This is a file inserted to keep the learn IDE browser happy */
// Step 1: Uncomment the code to locate the page element (heart)
const articleHearts = document.querySelectorAll(".like-glyph");

// Step 2: Uncomment the code to set up mock server communication
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("success"), 300);
  });
}

// Step 3: Uncomment the code to set up event listeners
function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(() => {
      heart.innerText = FULL_HEART;
      heart.classList.add("activated-heart");
    })
    .catch((error) => {
      document.getElementById("modal").classList.remove("hidden");
      document.getElementById("modal-message").innerText = error;
      setTimeout(() => {
        document.getElementById("modal").classList.add("hidden");
      }, 5000);
    });
}

for (const heart of articleHearts) {
  heart.addEventListener("click", likeCallback);
}
