const http = new easyHTTP();

// http
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then(data => console.log(data));
const newdata = {
  name: "sammy",
  organisation: "rabit"
};

http
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then(() => console.log("resources deleted"));
