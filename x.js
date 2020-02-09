document.addEventListener("DOMContentLoaded", () => {
  addEventListenersMethod();
});

const counterH1 = document.getElementById("counter");

const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const heartBtn = document.getElementById("heart");
const pauseBtn = document.getElementById("pause");

const likesUl = document.getElementsByClassName("likes")[0];
const commentForm = document.getElementById("comment-form");
const submitBtn = document.getElementById("submit");

const commentList = document.getElementById("list");

function addEventListenersMethod() {
  minusBtn.addEventListener("click", decrementTimer);
  plusBtn.addEventListener("click", incrementTimer);
  heartBtn.addEventListener("click", likeFx);
  pauseBtn.addEventListener("click", pauseFx);
  commentForm.addEventListener("submit", () => addAComment(event));
}

let timer = setInterval(function() {
  counterH1.innerText++;
}, 1000);

function pauseFx() {
  if (pause.innerText === "pause") {
    pause.innerText = "resume";
    clearInterval(timer);
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submitBtn.disabled = true;
  } else {
    pause.innerText = "pause";
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submitBtn.disabled = false;
    timer = setInterval(function() {
      counterH1.innerText++;
    }, 1000);
  }
}

function decrementTimer() {
  counterH1.innerText = parseInt(counterH1.innerText, 10) - 1;
}

function incrementTimer() {
  counterH1.innerText = parseInt(counterH1.innerText, 10) + 1;
}

function likeFx() {
  const time = document.getElementById(`${counterH1.innerText}`);
  if (time) {
    time.innerText++;
  } else {
    const li = document.createElement("li");

    const span1 = document.createElement("span");
    span1.innerText = `${counterH1.innerText} is liked `;
    const span2 = document.createElement("span");
    span2.setAttribute("id", `${counterH1.innerText}`);
    span2.innerHTML = "1";
    const span3 = document.createElement("span");
    span3.innerText = " times.";

    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(span3);

    likesUl.appendChild(li);
  }
}

function addAComment(event) {
  event.preventDefault();
  const comment = document.getElementById("comment-input");

  const p = document.createElement("p");
  p.innerText = comment.value;

  commentList.appendChild(p);

  commentForm.reset();
}
