document.addEventListener("DOMContentLoaded", function () {
  let currentList = 0;
  const items = [];

  const listElement = document.querySelectorAll(".list");
  const addbtn = document.querySelector(".addbtn");
  const addbar = document.querySelector(".addbar");
  const pending = document.querySelector("");

  const displayItems = function (items) {
    listElement.innerHTML = "";
    items.forEach((item, i) => {
      const html = `<div class="item">
        <input type="checkbox" /> ${item}
        <button class="delete">delete</button>
      </div>
      <hr />`;
      listElement.insertAdjacentHTML("afterbegin", html);
    });

    // Add event listeners to the delete buttons after creating them
    document.querySelectorAll(".delete").forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", () => {
        // Traverse the DOM to find the parent element and remove it
        const listItem = deleteBtn.closest(".item");
        listItem.remove();
      });
    });
  };

  displayItems(items);

  const addbarvalue = () => {
    var additem = addbar.value;
    if (additem != "") items.push(additem);
    // displayItems(items);
    else {
      addbar.value = "";
    }
  };
  const nextStep = () => {
    if (currentList < listElement.length - 1) {
      currentList++;

      hideAllSteps();
      showCurrentStep();
    }
  };

  addbtn.addEventListener("click", addbarvalue);
});
