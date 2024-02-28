
const findVisitor = () => {

  for (let i = 0; i < visitors.length; i++) {
    if (visitors[i].name === visitorIn.name) 
       return i;

}
}




const getVisitorHTMLCardDash = (visitor) => {
  const template = `
     
        <img class="dash-img" src="${visitor.image}" alt="${visitor.name}" />
        <div class="card-dash">
          <p class="card-text">${visitor.name}</p>
          <p class="card-text">${visitor.coins}    💰</p>
        </div>       `;
      const wrapper = document.createElement("div");
      wrapper.className = "cardD" ;
      wrapper.innerHTML = template;
     
      
      return wrapper;
};

const getAnimalHTMLCardDash = (animal) => {
  const template = `
     
        <img class="dash-img-animal" src="${animal.image}" alt="${animal.name}" />
               `;
      const wrapper = document.createElement("div");
      wrapper.className = "cardDanimal" ;
      wrapper.innerHTML = template; 
      return wrapper;
};

const getFavAnimalHTMLCardDash = (animal,numFeed) => {
  const template = `
     
        <img class="dash-img-animal" src="${animal.image}" alt="${animal.name}" />
        <p>Name : ${animal.name} </p>
        <p>How much feeded ? ${numFeed} </p>
        <p>Color : ${animal.color} </p>
        <p>Habitat : ${animal.habitat} </p>
        <p>Weight : ${animal.weight}  </p>
        <p>height : ${animal.height}  </p>
        <p>Is predator ?  : ${animal.isPredator}  </p>


               `;
      const wrapper = document.createElement("div");
      wrapper.className = "" ;
      wrapper.innerHTML = template; 
      return wrapper;
};





 function showVisitorImg() {
  const visitorCard = getVisitorHTMLCardDash (visitorIn);
  const visitorPlaceholder = document.getElementById("img-dashboard");
  visitorPlaceholder.innerHTML = "";
  visitorPlaceholder.append(visitorCard);

 }
  function showVisitedAnimals() {
    const i = findVisitor();
    const animalVisitedArray=(visitors[i].visits).map(visit => visit.animalVisited);
    const animalCardsDash = animalVisitedArray.map(getAnimalHTMLCardDash);
    const animalsPlaceholder = document.getElementById("visited-animals");
    animalsPlaceholder.innerHTML = "";
    animalsPlaceholder.append(...animalCardsDash);


  }
  function showFeededAnimals() {
    const i = findVisitor();
    const onlyFeeded =visitors[i].visits.filter(visit => visit.countFeed > 0);
    const animalFeededArray = onlyFeeded.map(visit => visit.animalVisited);
    const animalCardsDash = animalFeededArray.map(getAnimalHTMLCardDash);
    const animalsPlaceholder = document.getElementById("feeded-animals");
    animalsPlaceholder.innerHTML = "";
    animalsPlaceholder.append(...animalCardsDash);  }


  function showFavoriteAnimal() {
    const i = findVisitor();
    let maxFeed=0;
    let animal;
    const onlyFeeded =visitors[i].visits.filter(visit => visit.countFeed > 0);
    for (const feeded of onlyFeeded)
    {
      if(feeded.countFeed>maxFeed)
        {
          maxFeed=feeded.countFeed;
          animal=feeded.animalVisited;
        }

    }
    const animalCard = getFavAnimalHTMLCardDash (animal , maxFeed);
    const animalPlaceholder = document.getElementById("favorite-animal");
    animalPlaceholder.innerHTML = "";
    animalPlaceholder.append(animalCard);



    
  }

  showVisitorImg();
  showVisitedAnimals();
  showFeededAnimals();
  showFavoriteAnimal();



  getOut();
  document.body.insertAdjacentElement("afterbegin", getMainNav());
  activeDropDwonAndReset();