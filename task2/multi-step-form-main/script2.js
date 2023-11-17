document.addEventListener("DOMContentLoaded", function () {
  let currentStep = 0;

  const stepSections = document.querySelectorAll(".step1");
  const goBackButton = document.querySelector(".btnGo");
  const nextButton = document.querySelector(".btnNext");
  const card = document.querySelectorAll(".card");
  const labelcard3stp = document.querySelectorAll(".labelcard");
  const sidelist = document.querySelectorAll(".sidelist");
  const numbers = document.querySelectorAll(".number");
  const sidebarButtons = document.querySelectorAll(".sidebtn");

  const togglebtn = document.querySelector(".toggleround");

  //hover
  // console.log(numbers);
  // singleNum = numbers.forEach((e) => {
  //   e.target = document.querySelectorAll(".number");
  //   e.style.backgroungColor = "red";
  // });
  // console.log(singleNum);

  // console.log(numbers);

  // Get all the sidebar buttons

  // // hover.remove();
  // // Loop through the buttons and add a click event listener
  // sidebarButtons.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     // Get the data-tab attribute value to determine the target step
  //     const targetStep = button.getAttribute("data-tab");

  //     console.log("clicked");

  //     // Call a function to switch to the desired step
  //     switchToStep(targetStep);
  //   });
  // });

  // // Function to switch to the desired step
  // function switchToStep(targetStep) {
  //   // Hide all the step sections
  //   const allStepSections = document.querySelectorAll(".step1");
  //   allStepSections.forEach((section) => {
  //     section.style.display = "none";
  //   });

  //   // Show the step with the matching data-tab attribute
  //   const targetStepSection = document.getElementById(`step${targetStep}`);
  //   if (targetStepSection) {
  //     targetStepSection.style.display = "block";
  //   }
  // }

  //  hide all step sections
  // Toggle switch handling
  // const toggleLabel = document.querySelector(".togglelabel");
  // const toggleSwitch = document.getElementById("switch");

  // toggleLabel.addEventListener("click", function () {
  //   // Toggle the switch when the label is clicked
  //   toggleSwitch.checked = !toggleSwitch.checked;

  //   // Perform additional actions based on the switch state if needed
  //   const toggleAfterStyle = document.querySelector(".toggle");
  //   if (toggleSwitch.checked) {
  //     // Switch is ON (Yearly)
  //     console.log("Switch is ON (Yearly)");

  //     toggleAfterStyle.style.marginLeft = "15px";
  //     toggleAfterStyle.style.marginRight = "auto";
  //   } else {
  //     // Switch is OFF (Monthly)
  //     console.log("Switch is OFF (Monthly)");
  //     toggleAfterStyle.style.marginLeft = "auto"; // Reset the left margin
  //     toggleAfterStyle.style.marginRight = "15px";
  //   }
  // });
  // ***********************************************************************************************************
  const hideAllSteps = () => {
    stepSections.forEach((section) => {
      section.style.display = "none";
      numbers.forEach((numbers) => {
        numbers.style.backgroundColor = "";
        numbers.style.color = "";
      });
    });
  };
  const gohide = () => {
    if (currentStep === 0) {
      goBackButton.style.display = "none";
    } else {
      goBackButton.style.display = "inline-block";
    }
  };

  const thankbtn = () => {
    if (currentStep === 4) {
      goBackButton.style.display = "none";
      nextButton.style.display = "none";
    }
  };
  const confirmbtn = () => {
    if (currentStep === 3) {
      nextButton.innerHTML = "Confirm";
      nextButton.addEventListener("mouseover", () => {
        nextButton.style.backgroundColor = "blue";
      });
      nextButton.addEventListener("mouseout", () => {
        nextButton.style.backgroundColor = "";
      });
    } else {
      nextButton.innerHTML = "Next Step";
      nextButton.style.backgroundColor = "";
    }
  };

  //  show the current step
  const showCurrentStep = () => {
    stepSections[currentStep].style.display = "block";
    gohide();
    confirmbtn();
    thankbtn();
    numbers.forEach((numbers, index) => {
      if (currentStep === index) {
        numbers.style.backgroundColor = "powderblue";
        numbers.style.color = "black";
      }
    });
  };
  // Initial setup
  hideAllSteps();
  showCurrentStep();

  //first step
  let formName = function () {
    let name = document.querySelector("#name").value;
    //name
    let splitNampe = name.split(" ");
    let correctName = [];
    for (letter of splitNampe) {
      correctName.push(
        letter[0].toUpperCase() + letter.slice(1).toLowerCase().split(" ")
      );
      console.log(correctName.join(" "));
    }
  };
  //form email
  document.querySelector("#phone").addEventListener("click", function () {
    var email = document.getElementById("email").value;

    // Get the error message div
    var emailError = document.getElementById("emailError");

    // Check if the email is empty or invalid
    if (email.trim() === "") {
      emailError.innerHTML = "Email is required.";
    } else if (!isValidEmail(email)) {
      emailError.innerHTML = "Invalid email format.";
    } else {
      // Clear any existing error messages
      emailError.innerHTML = "";
    }
  });
  // Function to validate email format
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  isValidEmail(email);

  const formStep1 = function () {
    formName();

    let phone = document.querySelector("#phone").value;
    // console.log(correctName, email, phone);
  };
  //first step end

  //second step
  console.log(card);
  card.forEach(function (e) {
    e.target = "cardlabel";
    // console.log(e);
    e.addEventListener("click", function () {
      e.setAttribute("style", "border:1px solid blue");
    });
    e.addEventListener("dblclick", function () {
      e.setAttribute("style", "borde: 1px solid black");
    });
  });

  const toggleSwitch = document.getElementById("toggleSwitch");
  const yearlyLabel = document.querySelector(".yearly-label");
  const monthlyLabel = document.querySelector(".monthly-label");

  // Initial state
  toggleSwitch.checked = false;
  // check
  function checkCheckbox() {
    toggleSwitch.checked = true;
    toggleSwitch.dispatchEvent(new Event("change"));
    //2step
    dolor2();
    paras();
    //3step
    dolor3();

    //4thstep
    doler4();
  }

  //  uncheck the checkbox
  function uncheckCheckbox() {
    toggleSwitch.checked = false;
    toggleSwitch.dispatchEvent(new Event("change"));
    //step2
    dolor2();
    paras();
    //3step
    dolor3();

    //4thstep
    doler4();
  }
  function handleToggle() {
    if (toggleSwitch.checked) {
      yearlyLabel.classList.add("active");
      monthlyLabel.classList.remove("active");
      checkCheckbox();
    } else {
      yearlyLabel.classList.remove("active");
      monthlyLabel.classList.add("active");
      // Apply your transformations or additional logic if needed
      toggleSwitch.style.transform = "translateX(0)";
      uncheckCheckbox();
    }
  }

  toggleSwitch.addEventListener("change", handleToggle);

  // const para = document.createElement("p");
  // para.textContent = "2months free";
  // const bro = document.querySelectorAll(".bro");
  // bro.forEach(() => {
  //   const bropara = document.querySelector(".bro");
  //   bropara.after(para.cloneNode(true));
  //   console.log(bropara);
  // });

  // const paras = () => {
  //   const para = document.createElement("p");
  //   para.textContent = "2months free";

  //   const broElements = document.querySelectorAll(".bro");
  //   broElements.forEach((broElement) => {
  //     broElement.after(para.cloneNode(true));
  //   });
  // };
  // const paras = () => {
  //   const broElements = document.querySelectorAll(".bro");

  //   broElements.forEach((broElement) => {
  //     const para = document.createElement("p");
  //     para.textContent = "2 months free";

  //     broElement.after(para);
  //   });
  // };

  //step2 check box
  const paras = () => {
    // Remove existing paragraphs with the class "free-months" before appending new ones
    document.querySelectorAll(".free-months").forEach((existingPara) => {
      existingPara.remove();
    });

    const broElements = document.querySelectorAll(".bro");

    broElements.forEach((broElement) => {
      const para = document.createElement("p");
      para.textContent = "2months free";
      if (toggleSwitch.checked == true) {
        para.classList.add("free-months"); // Add a class to identify these paragraphs
        broElement.after(para);
      } else {
        para.remove();
      }
    });
  };
  //step2  content change(doler)
  const dolor2 = () => {
    if (toggleSwitch.checked == true) {
      const dolar1 = document.querySelector(".doler1");
      const dolar2 = document.querySelector(".doler2");
      const dolar3 = document.querySelector(".doler3");
      dolar1.innerHTML = "$90/yr";
      dolar2.innerHTML = "$120/yr";
      dolar3.innerHTML = "$150/yr";
    } else {
      const dolar1 = document.querySelector(".doler1");
      const dolar2 = document.querySelector(".doler2");
      const dolar3 = document.querySelector(".doler3");
      dolar1.innerHTML = "$9/mo";
      dolar2.innerHTML = "$12/mo";
      dolar3.innerHTML = "$15/mo";
    }
  };

  //step 3 content change
  const dolor3 = () => {
    if (toggleSwitch.checked === true) {
      const doler1 = document.querySelector(".oneDoler");
      const doler2 = document.querySelector(".twoDoler");
      const doler3 = document.querySelector(".threeDoler");
      doler1.innerHTML = "+$10/yr";
      doler2.innerHTML = "+$20/yr";
      doler3.innerHTML = "+$20/yr";
    } else {
      const doler1 = document.querySelector(".oneDoler");
      const doler2 = document.querySelector(".twoDoler");
      const doler3 = document.querySelector(".threeDoler");
      doler1.innerHTML = "+$1/mo";
      doler2.innerHTML = "+$2/mo";
      doler3.innerHTML = "+$2/mo";
    }
  };

  //step 4 content change
  const doler4 = () => {
    if (toggleSwitch.checked == true) {
      const total = document.querySelector(".total");
      total.innerHTML = "(per year)";
      const totalcls = document.querySelector(".totalcls");
      totalcls.innerHTML = "+$120/yr";

      const advanced = document.querySelector(".advanced");
      advanced.innerHTML = "(Yearly)";

      //step4.1
      const advdolor = document.querySelector(".advdolor");
      advdolor.innerHTML = "$90/yr";

      const onvdolor = document.querySelector(".ondolor");
      onvdolor.innerHTML = "+$10/yr";
      const larvdolor = document.querySelector(".lardolor");
      larvdolor.innerHTML = "+$20/yr";
    } else {
      //step 4
      const total = document.querySelector(".total");
      total.innerHTML = "(per month)";
      const totalcls = document.querySelector(".totalcls");
      totalcls.innerHTML = "+$12/mo";
      const advanced = document.querySelector(".advanced");
      advanced.innerHTML = "(Monthly)";

      //step4.1
      const advdolor = document.querySelector(".advdolor");
      advdolor.innerHTML = "$9/mo";
      const onvdolor = document.querySelector(".ondolor");
      onvdolor.innerHTML = "+$1/mo";
      const larvdolor = document.querySelector(".lardolor");
      larvdolor.innerHTML = "+$2/mo";
    }
  };

  //second step end
  // console.log(labelcard3stp);
  labelcard3stp.forEach(function (e) {
    e.target = "targetlabel";
    // console.log(e);
    e.addEventListener("click", function () {
      e.setAttribute("style", "border:1px solid blue");
    });
  });

  //third step start

  //  next step
  const nextStep = () => {
    if (currentStep < stepSections.length - 1) {
      currentStep++;

      hideAllSteps();
      showCurrentStep();
      formStep1();
    }
  };

  //  previous step
  const previousStep = () => {
    if (currentStep > 0) {
      currentStep--;
      hideAllSteps();
      showCurrentStep();
    }
  };

  goBackButton.addEventListener("click", previousStep);
  nextButton.addEventListener("click", nextStep);
});
