
const feedDialog = document.querySelector("#feed-dialog");



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

  const showfeedDialog = () => {
    feedDialog.style.visibility = "visible";
    feedDialog.style.opacity = 1;
  };
  
  // פונקציה להסתרת הדיאלוג
  const hidefeedDialog = () => {
    feedDialog.style.visibility = "hidden";
    feedDialog.style.opacity = 0;
  };

  const feedDialogClose=()=>
  {

    location.reload ();
    hidefeedDialog ();
    feedDialog.closes();
    
    
  }
  const getThankDiv = () =>
  {
    const template = `
    <p>Thank you !</p><p> YUMMY </p><p>😋😋😋</p>
    `
    const wrapper = document.createElement("div");
    wrapper.className = "";
    wrapper.innerHTML = template;
    return wrapper;
  }

  const getEscapeDiv = () =>
  {
    const template = `
    <p>You dont have enough coins ;( </p><p> 'The ${currAnimal.name} escaped from the zoo' </p><p>😤😲😱</p>
    <img src="./images/escape.jpg"  alt="escapeimg">
    `
    const wrapper = document.createElement("div");
    wrapper.className = "";
    wrapper.innerHTML = template;
    return wrapper;
  }

  const getEatenDiv = () =>
  {
    const template = `
    <p>You dont have enough coins ;( </p><p>  ${visitorIn.name} is eaten </p> <p>😓😖😨</p>
    <img src="./images/eaten.jpg" alt="eatenimg">
    `
    const wrapper = document.createElement("div");
    wrapper.className = "";
    wrapper.innerHTML = template;
    return wrapper;
  }

  const getCloseModalHTMLButton = () => {
    const closeButton = document.createElement("button");
    closeButton.innerText = " Close modal";
    closeButton.addEventListener("click", () => feedDialogClose());
    return closeButton;
  };
  
  function feedAnimal() {
   if (visitorIn.coins<10)
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
          visitors[i].coins = visitorIn.coins - 10;
          visitorIn=visitors[i];
          break; 
           }
          }
          localStorage.setItem("visitors", JSON.stringify(visitors));
          localStorage.setItem("visitorIn", JSON.stringify(visitorIn));
          feedDialog.innerHTML = "";
          feedDialog.append(getThankDiv(),getCloseModalHTMLButton());
          showfeedDialog ();
          feedDialog.showModal();
          
          
        }
        
        

  

  
  function visitorGotEaten() {
    for (let i = 0; i < visitors.length; i++) {
      if (visitors[i].name === visitorIn.name) {  
        visitors.splice (i,1) ;
        
        
        
        break; 
         }
        }
        feedDialog.append(getEatenDiv(),getCloseModalHTMLButton());
        visitorIn=undefined;
        localStorage.setItem("visitorIn", JSON.stringify(visitorIn));
        localStorage.setItem("visitors", JSON.stringify(visitors));
        visitorsForView=visitors.map(visitor => visitor);
        localStorage.setItem("visitorsForView", JSON.stringify(visitorsForView));
        visitorsNames=visitors.map(visitor=>visitor.name);
        localStorage.setItem("visitorsNames", JSON.stringify(visitorsNames));
        showfeedDialog ();
        feedDialog.showModal();
        


  }
  
  function animalEscaped() {
    for (let i = 0; i < animals.length; i++) {
      if (animals[i].name === currAnimal.name) {  
        animals.splice (i,1) ;

        break; 
         }
        }
        feedDialog.append(getEscapeDiv(),getCloseModalHTMLButton());
        currAnimal=undefined;
        localStorage.setItem("currAnimal", JSON.stringify(currAnimal));
        localStorage.setItem("animals", JSON.stringify(animals));
        animalsForView=animals.map(animal => animal);
        localStorage.setItem("animalsForView", JSON.stringify(animalsForView));
        showfeedDialog ();
        feedDialog.showModal();
        
  }

  const activeFeedMe =  () => {
    
    const feedButton = document.getElementById("feed-animal");       
    feedButton.addEventListener ("click" ,(e) => {
               feedAnimal();
   
  });
}



  getOutAnimal();
  document.body.insertAdjacentElement("afterbegin", getMainNav());
  activeDropDwonAndReset();
  renderAnimal();
  renderRelatedAnimals();
  activeFeedMe ();
  