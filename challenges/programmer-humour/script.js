let finding = document.querySelector(".picture");

function getFetch() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((finding) => {
      let dancing = finding.json();
      return dancing;
    })
    .then((data) => {
      finding.src = data.img;
      console.log(data);
    })
    .catch((err) => console.log("err", err));
}

getFetch();
