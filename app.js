const statusText = document.getElementById('statusText');
const details = document.getElementById('details');
const dot = document.getElementById('dot');
const button = document.getElementById('checkBtn');

async function checkStatus() {
  statusText.textContent = 'Checking deployment...';
  details.textContent = 'Connecting to the server API.';
  dot.className = 'dot';
  try {
    const response = await fetch('/api/status');
    if (!response.ok) throw new Error('Server error');
    const data = await response.json();
    statusText.textContent = 'Deployment is working';
    details.textContent = `${data.message} Environment: ${data.environment}.`;
    dot.className = 'dot ok';
  } catch (error) {
    statusText.textContent = 'Unable to reach server';
    details.textContent = 'Run npm install and npm start, then refresh this page.';
    dot.className = 'dot bad';
  }
}

button.addEventListener('click', checkStatus);
checkStatus();
