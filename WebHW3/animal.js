const getAnimalHTMLCardHbitat = (animal) => {
  const template = `
     
        <img class="card-img" src="${animal.image}" alt="${animal.name}" />
        <div class="card-body">
          <p class="card-text">${animal.name}</p>
        </div>       `;
      const wrapper = document.createElement("div");
      wrapper.className = "cardP" ;
      wrapper.innerHTML = template;
      wrapper.addEventListener("click", () => animalClickHabitat(animal));
      
      
      return wrapper;
};

const animalClickHabitat = (animal) => {
  localStorage.setItem("currAnimal", JSON.stringify(animal));
  window.location.href = "./animal.html";
};









function renderAnimal() {
  
 const animalPicHolder = document.getElementById("image");
 animalPicHolder.innerHTML = `<img src="${currAnimal.image}" alt="${currAnimal.name}$">`;
 const animalNameHolder = document.getElementById("name");
 animalNameHolder.innerHTML = `Name :  ${currAnimal.name}`;
 const animalWeightHolder = document.getElementById("weight");
 animalWeightHolder.innerHTML = `Weight :  ${currAnimal.weight} (KG)`;
 const animalHeightHolder = document.getElementById("height");
 animalHeightHolder.innerHTML = `Height :  ${currAnimal.height}  (CM)`;
 const animalColorHolder = document.getElementById("color");
 animalColorHolder.innerHTML = `Color :  ${currAnimal.color}  `;
 const animalHabitatHolder = document.getElementById("habitat");
 animalHabitatHolder.innerHTML = `Habitat :  ${currAnimal.habitat}  `;
 const animalIsPredatorHolder = document.getElementById("isPredator");
 animalIsPredatorHolder.innerHTML = `IsPredator ?  :  ${currAnimal.isPredator}  `;
  }
  function renderRelatedAnimals() {
    animalsForView = animals.filter((animal) =>
       ((animal.habitat===currAnimal.habitat)&&(animal.name!=currAnimal.name)))
       const animalCards = animalsForView.map(getAnimalHTMLCardHbitat);
       const animalsPlaceholder = document.getElementById("related-animals");
       animalsPlaceholder.innerHTML = "";
     
       animalsPlaceholder.append(...animalCards);
  }
  
  function feedAnimal() {
   if (visitorIn.coins<2)
      {
        if (currAnimal.isPredator===true)
            visitorGotEaten();
          else{
            animalEscaped();
          }
          return;
      }
  
      for (let i = 0; i < visitors.length; i++) {
        if (visitors[i].name === visitorIn.name) {
          visitors[i].coins = visitorIn.coins - 2;
          visitorIn=visitors[i];
          break; // Exit the loop after finding the visitor
           }
          }
          localStorage.setItem("visitors", JSON.stringify(visitors));
          localStorage.setItem("visitorIn", JSON.stringify(visitorIn));
          location.reload ();
        }
        
        

  

  
  function visitorGotEaten() {
    // ממשו את הלוגיקה של חיה שטורפת אורח
  }
  
  function animalEscaped() {
    //ממשו את הלוגיקה של חיה שבורחת מגן החיות
  }

  const activeFeedMe =  () => {
    
    const feedButton = document.getElementById("feed-animal");       
    feedButton.addEventListener ("click" ,(e) => {
               feedAnimal();
   
  });
}



  getOut();
  document.body.insertAdjacentElement("afterbegin", getMainNav());
  activeDropDwonAndReset();
  renderAnimal();
  renderRelatedAnimals();
  activeFeedMe ();
  