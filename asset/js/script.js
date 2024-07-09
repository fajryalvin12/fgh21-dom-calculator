const result = document.getElementById("text");

const buttons = document.getElementsByTagName("button");
Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // debugging the comma
    if (event.currentTarget.textContent === ",") {
      if (result.textContent.includes(",") === false) {
        result.textContent += ",";
      }
    } else if (result.textContent === "0") {
      result.textContent = event.currentTarget.textContent;
    } else {
      result.textContent += event.currentTarget.textContent;
    }
    // reset the value
    if (event.currentTarget.textContent === "AC") {
      result.textContent = "0";
    }
    // submit the value
    if (event.currentTarget.textContent === "=") {
      //plus
      if (result.textContent.includes("+")) {
        const raw = result.textContent.slice(0, -1).split("+");
        const nums = raw.map((num) => parseInt(num));
        result.textContent = nums.reduce((total, plus) => {
          return total + plus;
        });
      }
      if (result.textContent.includes("-")) {
        const raw = result.textContent.slice(0, -1).split("-");
        const nums = raw.map((num) => parseInt(num));
        result.textContent = nums.reduce((total, minus) => {
          return total - minus;
        });
      }
      if (result.textContent.includes("/")) {
        const raw = result.textContent.slice(0, -1).split("/");
        const nums = raw.map((num) => parseInt(num));
        result.textContent = nums.reduce((total, divide) => {
          return total / divide;
        });
      }
      if (result.textContent.includes("×")) {
        const raw = result.textContent.slice(0, -1).split("×");
        const nums = raw.map((num) => parseInt(num));
        result.textContent = nums.reduce((total, times) => {
          return total * times;
        });
      }
      if (result.textContent.includes("%")) {
        const raw = result.textContent.slice(0, -1).split("%");
        const nums = raw.map((num) => parseInt(num));
        result.textContent = nums.reduce((total, percentage) => {
          return total / 100;
        });
      }
    }
  });
});
