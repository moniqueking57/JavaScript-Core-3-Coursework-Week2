// let finding = document.querySelector(".picture");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");

function getFetch() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((finding) => {
      let woofers = finding.json();
      return woofers;
    })

    .then((data) => {
      let ul = document.querySelector("ul");
      let li = document.createElement("li");
      let img = document.createElement("img");
      // console.log(data);
      img.src = data.message;
      img.classList = "img";
      li.appendChild(img);
      ul.appendChild(li);
    })
    .catch((err) => console.log("err", err));
}

btn.addEventListener("click", () => {
  getFetch();
});

btn2.addEventListener("click", () => {
  getFetch();
});

getFetch();
