var svgStates = document.querySelectorAll("#states > *");
var infoStates = document.getElementById("Info");
var ul = document.createElement('ul');
ul.setAttribute('class', 'list-of-states');
infoStates.appendChild(ul);
// svg 에 있는 id 어트리뷰트를 이용해 ul > li 목록을 만들어 낸다.
svgStates.forEach(function(el) {
  var li = document.createElement('li');
  li.setAttribute('data-state', el.id);
  li.textContent = el.id;
  ul.appendChild(li);
});
var wordStates = document.querySelectorAll("#Info > ul > li");

function removeAllOn() {
  wordStates.forEach(function(el) {
    el.classList.remove("on");
  });
  svgStates.forEach(function(el) {
    el.classList.remove("on");
  });
}

function addOnFromList(el) {
  var stateCode = el.getAttribute("data-state");
  var svgState = document.querySelector("#" + stateCode);
  el.classList.add("on");
  svgState.classList.add("on");
}

function addOnFromState(el) {
  var stateId = el.getAttribute("id");
  var wordState = document.querySelector("[data-state='" + stateId + "']");
  el.classList.add("on");
  wordState.classList.add("on");
}

wordStates.forEach(function(el) {
  el.addEventListener("mouseenter", function() {
    addOnFromList(el);
  });
  el.addEventListener("mouseleave", function() {
     removeAllOn();
  });
  
  el.addEventListener("touchstart", function() {
    removeAllOn();
    addOnFromList(el);
  });
});

svgStates.forEach(function(el) {
  el.addEventListener("mouseenter", function() {
    addOnFromState(el);
  });
  el.addEventListener("mouseleave", function() {
     removeAllOn();
  });
  
  el.addEventListener("touchstart", function() {
    removeAllOn();
    addOnFromState(el);
  });
});

