const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://d5mv664komce2xmgyk437ac5hi0bltfv.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `👀 Views: ${data}`;
}
updateCounter();