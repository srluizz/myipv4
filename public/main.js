const API = 'https://api.ipify.org?format=json';

const ipDisplay = document.getElementById('ip-display');
const idBtnRefresh = document.getElementById('btn-refresh');

async function getIP(){
    try {
    ipDisplay.textContent = "Searching for IP...";
    const response = await fetch(API);
    const data = await response.json();
    ipDisplay.textContent = data.ip;
    }
    catch (error) {
        console.error("Error fetching IP", error);
        ipDisplay.textContent = "Error fetching IP.";
    }
}

idBtnRefresh.addEventListener('click', getIP);
getIP();
