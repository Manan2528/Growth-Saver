feather.replace();

// Select DOM elements
const goalAmountInput = document.getElementById("goal-amount");
const currentSavingsInput = document.getElementById("current-savings");
const monthlyContributionInput = document.getElementById(
  "monthly-contribution"
);
const calculateBtn = document.getElementById("calculate-btn");
const progressBar = document.getElementById("progress-bar");
const result = document.getElementById("result");

// Event Listener for calculate button
calculateBtn.addEventListener("click", () => {
  const goalAmount = parseFloat(goalAmountInput.value);
  const currentSaving = parseFloat(currentSavingsInput.value);
  const monthlyContribution = parseFloat(monthlyContributionInput.value);

  if (isNaN(goalAmount) || isNaN(currentSaving) || isNaN(monthlyContribution)) {
    result.textContent = "Please enter a valid number";
    result.classList.add("show");
    return;
  }

  const remainingAmount = goalAmount - currentSaving;
  const monthGoal = Math.ceil(remainingAmount / monthlyContribution);
  const progressPercentage = (currentSaving / goalAmount) * 100;

  progressBar.style.width = `${progressPercentage}%`;
  result.classList.remove("show");

  setTimeout(() => {
    if (currentSaving >= goalAmount) {
      result.innerHTML =
        "🎉Congratulations! Your savings have bloomed to reach your goal!";
    } else {
      result.innerHTML = `🌿 Keep nurturing your savings! You'll reach your goal in ${monthGoal} months.`;
    }
    result.classList.add("show");
  }, 200);
});
