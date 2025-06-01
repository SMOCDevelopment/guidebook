let visible = false;

function switchTab(tabName, clickedButton) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
    tab.hidden = true;
  });

  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });

  const tab = document.getElementById(tabName);
  tab.hidden = false;

  tab.offsetWidth; 
  tab.classList.add('active');

  if (clickedButton) {
    clickedButton.classList.add('active');
    clickedButton.setAttribute('aria-selected', 'true');
  }
}

function closeBook() {
  document.querySelector('.handbook').classList.remove('active');

  setTimeout(() => {
    document.body.style.display = 'none';
  }, 400);

  visible = false;

  fetch(`https://${GetParentResourceName()}/closeBook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({})
  });
}

function toggleHandbook() {
  visible = !visible;
  if (visible) {
    document.body.style.display = 'block';
    setTimeout(() => {
      document.querySelector('.handbook').classList.add('active');
    }, 20);

    const firstTabBtn = document.querySelector('.tab-button');
    switchTab('start', firstTabBtn);
  } else {
    closeBook();
  }
}

function init() {
  window.addEventListener('message', event => {
    if (event.data?.type === 'toggleGuidebook') {
      toggleHandbook();
    }
  });
}
