document.addEventListener("submit", postSubmit);

function postSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const postBody = {
    title,
    content,
  };
  fetch("http://localhost:3230/postagens", {
    body: JSON.stringify(postBody),
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.code === 201) return (location.href = "/postagens");
      alert(data.msg);
    })
    .catch((err) => console.log(err));
}
