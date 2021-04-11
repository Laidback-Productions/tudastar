window.addEventListener("load", () => {
	if ("serviceWorker" in navigator) {
		if (typeof navigator.serviceWorker !== "undefined") {
			navigator.serviceWorker.register("assets/js/sw.js");
		}
	}
});

// Listen to changes in the network state, reload when online.
// This handles the case when the device is completely offline.
window.addEventListener("online", () => {
	window.location.reload();
});
// Notify the user that we using the local copy aka. cache
window.addEventListener("offline", () => {
	alert("Offline mode detected local copy is being used.");
});
