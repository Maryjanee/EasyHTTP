const http = new easyHTTP();

const data = {
  name: "Maryjane",
  age: "26"
};

const newdata = {
  name: "sammy",
  organisation: "rabit"
};
// http
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then(datKa => console.log(data))
//   .catch(err => console.log(err));

// http
//   .post("https://jsonplaceholder.typicode.com/posts", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// http
//   .put("https://jsonplaceholder.typicode.com/posts/2", newdata)
//   .then(data => console.log(data.organisation))
//   .catch(err => console.log(err));

http
  .delete("https://jsonplaceholder.typicode.com/posts/2")
  .then(() => console.log("resource deleted"))
  .catch(err => console.log(err));
