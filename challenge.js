document.addEventListener("DOMContentLoaded", function() {
  addEventListenersMethod();
});

const pauseBtn = document.getElementById("pause");
const plusBtn = document.getElementById("+");
const minusBtn = document.getElementById("-");
const heartBtn = document.getElementById("<3");

const counter = document.getElementById("counter");

const likesUl = document.getElementsByClassName("likes")[0];

const commentForm = document.getElementById("comment-form");
const submitBtn = document.getElementById("submit");

const commentList = document.getElementById("list");

function addEventListenersMethod() {
  pauseBtn.addEventListener("click", pauseBtnClick);
  plusBtn.addEventListener("click", plusTimer);
  minusBtn.addEventListener("click", minusTimer);
  heartBtn.addEventListener("click", likeTime);
  commentForm.addEventListener("submit", () => addAComment(event));
}

let timer = setInterval(function() {
  counter.innerText++;
}, 1000);

function pauseBtnClick() {
  if (pauseBtn.innerText === "pause") {
    pauseBtn.innerText = "resume";
    clearInterval(timer);
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    heartBtn.disabled = true;
    submitBtn.disabled = true;
  } else {
    pauseBtn.innerText = "pause";
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    heartBtn.disabled = false;
    submitBtn.disabled = false;
    timer = setInterval(function() {
      counter.innerText++;
    }, 1000);
  }
}

function plusTimer() {
  counter.innerText = parseInt(counter.innerText, 10) - 1;
}

function minusTimer() {
  counter.innerText = parseInt(counter.innerText, 10) + 1;
}

function likeTime() {
  const time = document.getElementById(`${counter.innerText}`);
  if (time) {
    time.innerText++;
  } else {
    const li = document.createElement("li");

    const span1 = document.createElement("span");
    span1.innerText = `${counter.innerText} is liked `;

    const span2 = document.createElement("span");
    span2.setAttribute("id", counter.innerText);
    span2.innerHTML = `1`;

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
  const comment = commentForm.children[0].value;

  const li = document.createElement("li");
  li.innerText = comment;

  commentList.appendChild(li);
}
