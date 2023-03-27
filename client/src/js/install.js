const installButton = document.getElementById('installButton');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    installButton.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `installButton` element
installButton.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
	if (!promptEvent) {
		return;
	}
	promptEvent.prompt();
	window.deferredPrompt = null;
	installButton.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});