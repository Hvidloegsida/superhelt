fetch("https://kea-alt-del.dk/t7/superheroes/")
  .then((res) => res.json())
  .then(showsuperhelte);

function showsuperhelte(superhelte) {
  superhelte.forEach(showsuperhelt);
}

function showsuperhelt(superhelt) {
  console.log(superhelt);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h1").textContent = superhelt.alias;
  copy.querySelector("h3").textContent = superhelt.realName;
  copy.querySelector("#power").textContent = superhelt.powers;
  copy.querySelector("#origin").textContent = superhelt.origin;
  copy.querySelector("#weakness").textContent = superhelt.weaknesses;
  copy.querySelector("#active").textContent = superhelt.active;
  copy.querySelector("#evil").textContent = superhelt.isEvil;
  copy.querySelector("#height").textContent = superhelt.height;
  copy.querySelector("#birthday").textContent = superhelt.birthday.day + "/" + superhelt.birthday.month + "/" + superhelt.birthday.year;
  copy.querySelector("img").src = superhelt.image;
  const parent = document.querySelector("div");
  parent.appendChild(copy);
}
