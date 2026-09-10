self.addEventListener("install", function(event) {
    console.log("App installed");
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        fetch(event.request)
    );
});