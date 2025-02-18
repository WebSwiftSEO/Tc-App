/* JS FILE: js/main.js */
document.getElementById('bluetoothShare').addEventListener('click', () => {
    navigator.bluetooth.requestDevice({ acceptAllDevices: true })
        .then(device => alert(`Bluetooth sharing with: ${device.name}`))
        .catch(err => console.error(err));
});

function showFeed(feedType) {
    const feed = document.getElementById('feed');
    feed.innerHTML = `<h2>${feedType.toUpperCase()} Feed</h2>`;
}

function searchContent() {
    const query = document.getElementById('searchBox').value;
    document.getElementById('feed').innerHTML = `Searching for: ${query}`;
}

function showWallet() {
    document.getElementById('feed').innerHTML = '<h2>Crypto Wallet Interface</h2>';
    alert('Crypto wallet functionality coming soon!');
}
