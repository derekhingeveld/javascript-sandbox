// Synchronous Code
posts = loadPostsSync();
// ...wait till posts are fetched
// ...do something with posts
doTheNextThing(); // Has to wait until posts load

// Asynchronous Code
loadPostsAsync(function () {
  // ...wait till posts are fetched
  // ...do something with posts
});
doTheNextThing(); // Doesn't have to wait until posts load

// Most Async code you work with will be part of an API or library
// • XMLHttpRequest & Fetch
// • jQuery Ajax, Axios, other HTTP libraries
// • Node.js fs (filesystem) module

// Handing Async Code
// There are a few ways to work with Async code
// • Callbacks
// • Promises
// • Async/Await
