function getElementID(id) {
  const getId = document.getElementById(id);
  return getId;
}

const cartCallButtons = document.getElementsByClassName("call-Btn");
const cardCopyBtn = document.getElementsByClassName("copy-btn");

for (let copyBtn of cardCopyBtn) {
  const title = copyBtn.parentNode.parentNode.childNodes[3].innerText;
  const hotLineNumber = copyBtn.parentNode.parentNode.childNodes[7].innerText;
  console.log(hotLineNumber);

  copyBtn.addEventListener("click", function () {
    alert(`${hotLineNumber} has been copied!`);

    const copyNumber = getElementID("copy-number").innerText;
    const currentCopyNumber = Number(copyNumber) + 1;
    getElementID("copy-number").innerText = currentCopyNumber;

    navigator.clipboard.writeText(hotLineNumber);
  });
}

for (let cartCallBtn of cartCallButtons) {
  console.log(cartCallBtn);

  cartCallBtn.addEventListener("click", function () {
    console.log("my Cart Call Buttomn");

    const title = cartCallBtn.parentNode.parentNode.childNodes[3].innerText;
    const hotLineNumber =
      cartCallBtn.parentNode.parentNode.childNodes[7].innerText;
    console.log(hotLineNumber);

    const cartBox = getElementID("Cart-Box");

    const callCost = 20;
    const totalCoins = getElementID("coins").innerText;

    if (totalCoins >= 20) {
      const now = new Date();

      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      hours = hours % 12;
      hours = hours ? hours : 12;

      alert(`Calling ${title} ${hotLineNumber} `);
      const cartElement = document.createElement("div");
      cartElement.innerHTML = `
            <div class="flex justify-between items-center bg-gray-100 p-4 rounded-[4px]">
              <div>
                <h3 class="text-md font-bold">${title}</h3>
                <p>${hotLineNumber}</p>
              </div>
              <div>${hours}: ${minutes}: ${seconds}</div>
            </div>`;

      cartBox.append(cartElement);

      const currentCoint = Number(totalCoins) - callCost;
      getElementID("coins").innerText = currentCoint;
    } else {
      alert(`You haven't Sufficient Coin!`);
    }
  });
}

// Heart Sections

const heartCounts = document.getElementsByClassName("heart");

for (let heartCount of heartCounts) {
  heartCount.addEventListener("click", function () {
    console.log("Heart Counts");
    const heartNumber = getElementID("heart-number").innerText;

    const currentNumber = Number(heartNumber) + 1;
    getElementID("heart-number").innerText = currentNumber;
  });
}

// Clear Button

getElementID("clear-btn").addEventListener("click", function () {
  const clearButton = getElementID("Cart-Box");
  clearButton.innerHTML = "";

  getElementID("coins").innerText = 100
});
