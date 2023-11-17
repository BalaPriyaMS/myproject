document.addEventListener("DOMContentLoaded", function () {
  var currentList = 0;
  const items = [];

  const listElement = document.querySelectorAll(".list");
  const addbtn = document.querySelector(".addbtn");
  const addbar = document.querySelector(".addbar");
  const pendingitem = document.querySelectorAll(".pendingitem");

  const check = document.querySelector(".checkbox");

  const hideAllSteps = () => {
    listElement.forEach((list) => {
      list.style.display = "none";
    });
  };
  //  show the current step
  const showCurrentStep = () => {
    listElement[currentList].style.display = "block";
  };
  // Initial setup
  hideAllSteps();
  showCurrentStep();
  const displayItems = function (items) {
    listElement.forEach((listElement) => {
      listElement.innerHTML = "";
      items.forEach((item, i) => {
        console.log(item, i);
        const html = `<div class="item">
    <input type="checkbox" /> ${item}
    <button class="delete">delete</button>
  </div>
  <hr />`;
        listElement.insertAdjacentHTML("afterbegin", html);
      });
    });
    //remove item
    document.querySelectorAll(".delete").forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", () => {
        console.log("clicked");
        items.pop();
        // const item = document.querySelector(".item");
        const list = deleteBtn.closest(".item");
        list.remove();

        const hr = document.querySelector("hr");
        hr.remove();
      });
    });
  };

  displayItems(items);

  //add items
  addbtn.addEventListener("click", function (e) {
    e.preventDefault();
    var additem = addbar.value;
    if (additem != "") items.push(additem);

    displayItems(items);
    addbar.value = "";
  });

  //
  function checkCheckbox() {
    pendingitem.forEach((pendingitem) => {
      if (!pendingitem.checked) {
        pendingitem.checked = true;
      }
    });
  }
  var nextStep = () => {
    if (currentList < listElement.length - 1) {
      currentList++;

      hideAllSteps();
      showCurrentStep();
      checkCheckbox();
    }
  };

  const allstep = document.querySelector("#alllist");
  allstep.addEventListener("click", function (e) {
    e.preventDefault();
    displayItems(items);
  });
  const pending = document.querySelector("#pendinglist");
  pending.addEventListener("click", function (e) {
    e.preventDefault();
    displayItems(items);
    nextStep();
  });
  const completed = document.querySelector("#Completed");
  completed.addEventListener("click", function (e) {
    e.preventDefault();
    displayItems(items);
    nextStep();
  });
});
