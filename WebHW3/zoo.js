let currWeightMin=0;
let currWeightMax=5000;
let currHeightMin=0;
let currHeightMax=5000;
let currAnimalSearchInput="";
let currHabitat="all areas";
let currColor="all colors"


const FilterShow =() => {
  animalsForView = animals.filter((animal) =>
  (animal.name.includes(currAnimalSearchInput))&&(animal.weight<=(currWeightMax))&&(animal.weight>=(currWeightMin))
  &&(animal.height<=(currHeightMax))&&(animal.height>=(currHeightMin))&&((animal.habitat===(currHabitat))||(currHabitat==="all areas"))
  &&((animal.color===(currColor))||(currColor==="all colors")))
  renderAvailableAnimals();
   
}











const getAnimalHTMLCard = (animal) => {
  const template = `
     
        <img class="card-img" src="${animal.image}" alt="${animal.name}" />
        <div class="card-body">
          <p class="card-text">${animal.name}</p>
        </div>       `;
      const wrapper = document.createElement("div");
      wrapper.className = "cardP" ;
      wrapper.innerHTML = template;
      wrapper.addEventListener("click", () => animalClick(animal));
      
      
      return wrapper;
};

const animalClick = (animal) => {
  localStorage.setItem("currAnimal", JSON.stringify(animal));
  window.location.href = "./animal.html";
};

const FilterBox =() => {
  const animalInput = document.getElementById("animalSearchInput");
  animalInput.placeholder = "Search animals";
  
  animalInput.addEventListener("input" ,(e) => {
    currAnimalSearchInput=(e.target.value);
    FilterShow();
    
  } )
  const animalMinweight = document.getElementById("weightMin");
  animalMinweight.placeholder = "weight Min";
  
  animalMinweight.addEventListener("input" ,(e) => {
    currWeightMin=(e.target.value);
    FilterShow();
  })
  const animalMaxweight = document.getElementById("weightMax");
  animalMaxweight.placeholder = "weight Max";
  
  animalMaxweight.addEventListener("input" ,(e) => {
    currWeightMax=(e.target.value);
    if (currWeightMax===""){
       currWeightMax=5000;
    }
    FilterShow();
  })
  const animalMinHeight = document.getElementById("heightMin");
  animalMinHeight.placeholder = "height Min";
  
  animalMinHeight.addEventListener("input" ,(e) => {
    currHeightMin=(e.target.value);
    FilterShow();
  })
  const animalMaxHeight = document.getElementById("heightMax");
  animalMaxHeight.placeholder = "height Max";
  
  animalMaxHeight.addEventListener("input" ,(e) => {
    currHeightMax=(e.target.value);
    if (currHeightMax===""){
       currHeightMax=5000;
    }
    FilterShow();
  })
  const animalHabitat= document.getElementById("habitat");

  
  animalHabitat.addEventListener("input" ,(e) => {
    currHabitat=(e.target.value);
    FilterShow();
  })
  const animalColor= document.getElementById("animal-color");
  
  
  animalColor.addEventListener("input" ,(e) => {
    currColor=(e.target.value);
    FilterShow();
  })




}








function renderAvailableAnimals() {
  const animalCards = animalsForView.map(getAnimalHTMLCard);
  const animalsPlaceholder = document.getElementById("animal-cards");
  animalsPlaceholder.innerHTML = "";

  animalsPlaceholder.append(...animalCards);

  
  }
  function visitAnimal(animalName) {
    // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
    // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
  }
  
  function setFilter(filterKey, filterValue) {
    /**
     * ממשו את הלוגיקה של השמת פילטר
     * הפילטרים הקיימים הם
     * isPredator: true | false
     * habitat: "land" | "sea"
     * weight: value > user selected weight
     * height: value > user selected height
     * color: dropdown of all available colors
     */
    // ודאו כי אתם שומרים את הפילטרים שהיוזר בחר בלוקל סטורג׳ וטוענים אותם בהתאם
    // רנדרו רק את החיות שעומדות בתנאים של הפילטרים
  }
  getOut();
  renderAvailableAnimals();
  FilterBox();
  document.body.insertAdjacentElement("afterbegin", getMainNav());
  activeDropDwonAndReset();