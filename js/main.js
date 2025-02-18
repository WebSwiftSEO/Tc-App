/* JS FILE: js/main.js */
// 📤 Share App Logic
function shareApp() {
    const shareData = {
        title: 'Tc App - Troanary Connection',
        text: 'Join me on Tc - the app that rewards sharing, learning, and connecting!',
        url: window.location.href
    };
    navigator.share(shareData).then(() => {
        console.log('App shared successfully!');
        spinWheel();
    }).catch((error) => console.error('Error sharing:', error));
}

// 🎡 Spin the T-Wheel for Rewards
function spinWheel() {
    let reward = Math.floor(Math.random() * 100) + 100;
    alert(`🎡 The T-Wheel landed! You earned ${reward} Tc tokens!`);
}

// 📲 Feed Navigation
function loadFeed(feed) {
    alert(`Loading ${feed} feed...`);
}

// 🛠️ Actions
function action(type) {
    alert(`You selected ${type}`);
}

// 🔀 Random Action Button
function randomAction() {
    const actions = ['🚀 Boost', '🔗 Share', '🧠 Reflect', '🌱 Grow'];
    let selected = actions[Math.floor(Math.random() * actions.length)];
    alert(`Random action selected: ${selected}`);
}

// 🔍 Keyword Extraction
document.getElementById('linkInput').addEventListener('input', (event) => {
    const text = event.target.value;
    const words = text.split(/\s+/).slice(0, 6).join(', ');
    console.log(`Extracted keywords: ${words}`);
});

// 🌐 Lazy Load Sections
document.addEventListener('scroll', () => {
    const lazySections = document.querySelectorAll('.lazy');
    lazySections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.remove('lazy');
            section.innerHTML = `<p>Loaded: ${section.id}</p>`;
        }
    });
});
