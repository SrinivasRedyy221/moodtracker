saveBtn.addEventListener('click', () => {
  // Get the selected mood
  const selectedMood = moodSelect.value;

  // Save the mood to local storage
  localStorage.setItem('mood', selectedMood);

  // Display a success message
  messageContainer.textContent = `Your mood has been saved as ${selectedMood}.`;
  container.appendChild(messageContainer);

  // Display a joke if the selected mood is "sad" or "neutral"
  if (selectedMood === "sad" || selectedMood === "neutral") {
    fetch('https://icanhazdadjoke.com/slack')
      .then(data => data.json())
      .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        messageContainer.textContent = jokeText;
        container.appendChild(messageContainer);
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
      })
      .catch(error => console.log(error));
  }
});
