async function github(){
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();

  const parent = document.getElementById("main");
  for(let users of data)
  {
    const element = document.createElement("div");
    element.classList.add("user");

    const image = document.createElement("img");
    image.src=users.avatar_url;

    const username = document.createElement("h2");
    username.textContent=users.login;

    const anchor = document.createElement("a");
    anchor.href=users.html_url;

    element.append(image,username,anchor);
    parent.append(element);

   element.addEventListener("click", () => {
  window.open(users.html_url, "_blank");
});
  }

  
}

github();