const newVal = new easyHTTP();

function displayPost(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
}

const data = {
  title: "maryjane's post",
  body: "this is me learning http requests and api communications"
};

newVal.post("https://jsonplaceholder.typicode.com/posts/1", data, displayPost);

const http = new easyHTTP();

// Get Posts
http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Get Single Post
http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Create Post
http.post("https://jsonplaceholder.typicode.com/posts", data, displayPost);

// Update Post
http.put("https://jsonplaceholder.typicode.com/posts/5", data, displayPost);

// Delete Post
http.delete("https://jsonplaceholder.typicode.com/posts/1", displayPost);
