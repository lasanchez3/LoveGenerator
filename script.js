document.addEventListener("DOMContentLoaded", function () {
    const compliments = [
        "✨ You radiate kindness and creativity—just by being yourself, you make the world a brighter place! 💖",
        "🌿 Your unique perspective and ideas inspire those around you. Keep sharing your brilliance! ✨",
        "🔥 You have a spark that makes you unforgettable. Keep shining, the world needs your light! 💫",
        "💡 Your curiosity and drive make you a lifelong learner—your growth is unstoppable! 🚀",
        "💜 You are more than enough, just as you are. Your presence makes a difference! 🌎",
        "🌸 You bring warmth and positivity wherever you go. People feel better because of you! ☀️",
        "🎨 Your creativity flows effortlessly—your ideas bring color and joy to the world! 🖌️",
        "💪 Your resilience is inspiring. No matter what, you keep going and growing! 🌱",
        "🌟 You don’t need permission to take up space—your voice and thoughts are valuable! 🔥",
        "💕 You are loved, appreciated, and more amazing than you realize. Keep being you! 🌈"
    ];

    let count = 0;
    const complimentText = document.getElementById("compliment");
    const generateBtn = document.getElementById("generate-btn");
    const newComplimentBtn = document.getElementById("new-compliment");
    const clickCount = document.getElementById("click-count");
    const heartImage = document.getElementById("heart");
    const sound = new Audio('audio/heartbeat.mp3');
    const button = document.getElementById('generate-btn');

    button.addEventListener('click', function() {
        sound.play();  // Play the sound when the button is clicked
      });

    function generateCompliment() {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        complimentText.textContent = compliments[randomIndex];

        // Update counter
        count++;
        clickCount.textContent = count;

        // Heart "beating" animation
        heartImage.classList.add("heart-beat");

        // Remove animation after a short delay so it can be reapplied on next click
        setTimeout(() => {
            heartImage.classList.remove("heart-beat");
        }, 200);
    }

    generateBtn.addEventListener("click", generateCompliment);
    newComplimentBtn.addEventListener("click", generateCompliment);
});
