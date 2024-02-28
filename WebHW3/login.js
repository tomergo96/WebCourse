
const VisitorsDialog = document.querySelector("#gameOver-visitors-dialog");
const showVisitorsDialog = () => {
  VisitorsDialog.style.visibility = "visible";
  VisitorsDialog.style.opacity = 1;
};

// פונקציה להסתרת הדיאלוג
const hideVisitorsDialog = () => {
  VisitorsDialog.style.visibility = "hidden";
  VisitorsDialog.style.opacity = 0;
};

const VisitorsDialogClose=()=>
{

  location.reload ();
  hideVisitorsDialog ();
  VisitorsDialog.closes();

}
 
const getEndVisitorsDiv = () =>
{
  const template = `
  <img src="./images/game-over.png" alt="game-over-img">
  <p>All visitors are eaten :(</p>
  <p>You must reset the game and start all over</p>
  <button id="reset-visitors-btn" class="btn btn-danger">RESET</button>
  `
  const wrapper = document.createElement("div");
  wrapper.className = "end-visitors";
  wrapper.innerHTML = template;
  wrapper.children["reset-visitors-btn"].addEventListener("click",() =>{
    alert("The game is going to reset");
    localStorage.clear();
    window.location.href = "./signup.html";

  }
        
  
   );
  return wrapper;
}




const getOutLogin = () => {

  if (userIn===undefined)
  {
     window.location.href = "./signup.html";
     return;
  }
  if(visitors.length===0)
    {
      VisitorsDialog.innerHTML = "";
      VisitorsDialog.append(getEndVisitorsDiv());
      showVisitorsDialog ();
      VisitorsDialog.showModal();
    }
}




function loginAsVisitor(visitor) {
  localStorage.setItem("visitorIn", JSON.stringify(visitor));
  window.location.href = "./zoo.html";
  }


  const searchBox =() => {
    const queryInput = document.getElementById("visitorSearchInput");
    queryInput.placeholder = "Search visitors";
    
    queryInput.addEventListener("input" ,(e) => {
      visitorsForView = visitors.filter((visitor) =>
      visitor.name.includes(e.target.value));
      renderVisitors();
    } )
    renderVisitors();
  }

  const getEmptyCardsHTMLTemplate = () => {
    const templateWrapper = document.createElement("div");
    templateWrapper.className = "empty-result";
  
    const template = `
      <h2>No Visitor Found</h2>
      <p>We're sorry, but no visitors match your search or filter criteria.</p>
      <button id="clear-filter-btn" class="btn btn-dark">Clear search text</button>
      `;
    templateWrapper.innerHTML = template;
    templateWrapper.className ="none-visitors";
    templateWrapper.children["clear-filter-btn"].addEventListener("click",clearSearchBox);
    return templateWrapper;
  };

  const clearSearchBox = () => {
    const input = document.getElementById("visitorSearchInput");
    input.value = "";
    visitorsForView = [...visitors];
    renderVisitors();
  };
  

  const getVisitorHTMLCard = (visitor) => {
    const template = `
       
          <img class="card-img" src="${visitor.image}" alt="${visitor.name}" />
          <div class="card-body">
            <p class="card-text">${visitor.name}</p>
            <p class="card-text">${visitor.coins}    💰</p>
          </div>       `;
        const wrapper = document.createElement("div");
        wrapper.className = "cardP" ;
        wrapper.innerHTML = template;
        wrapper.addEventListener("click", () => loginAsVisitor(visitor));
        
        return wrapper;
  };
  


  

  


  const renderVisitors = () => {
    const visitorCards = visitorsForView.map(getVisitorHTMLCard);
    const visitorsPlaceholder = document.getElementById("visitorsHolder");
    visitorsPlaceholder.innerHTML = "";
  
    if (!visitorCards.length) {
      visitorsPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
      return;
    }
    visitorsPlaceholder.append(...visitorCards);
  };
 
  
  getOutLogin();
  searchBox();
  
  