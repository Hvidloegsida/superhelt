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
  if (superhelt.powers.includes("flyve") || superhelt.powers.includes("flying") || superhelt.powers.includes("Fly")) {
    copy.querySelector("article").classList.add("flyve");
  }
  copy.querySelector("#power").textContent = superhelt.powers;
  copy.querySelector("#origin").textContent = superhelt.origin;
  copy.querySelector("#weakness").textContent = superhelt.weaknesses;
  copy.querySelector("#active").textContent = superhelt.active;

  /*I MIN CSS KAN MAN SE AT MIN CLASS EVIL IKKE ER SYNLIG. 
  DEREFTER ER DER EN KLASSE HVOR DEN SIGER AT HVIS MAN HAR CLASSEN EVILTRUE, SÅ ER DEN SYNLIG.
  HER SIGER MIN JS SÅ, HVIS EVIL ER TRUE ----*/
  if (superhelt.isEvil) {
    /*SÅ SKAL eviltrue TILFØJES TIL MIT DOM ELEMENT AKA GØR DEN SYNLIG*/
    copy.querySelector("article").classList.add("eviltrue");
    /*HER FORTÆLLER JEG DEN SÅ AT DEN IKKE SKAL SKRIVE TRUE, MEN BARE SKRIVE EVIL*/
    copy.querySelector("#evil").textContent = "Evil"; // Set the text content to "evil"
  }
  copy.querySelector("#height").textContent = superhelt.height;
  copy.querySelector("#birthday").textContent = superhelt.birthday.day + "/" + superhelt.birthday.month + "/" + superhelt.birthday.year;
  copy.querySelector("img").src = superhelt.image;
  const parent = document.querySelector("div");
  parent.appendChild(copy);
}
