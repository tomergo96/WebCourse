function loginAsVisitor(visitorName) {
    // תממשו את הלוגיקה של בחירת אורח שנכנס לגן החיות
    // שמרו את האורח שבחרתם, בלוקל סטורג' כך שבכל העמודים נדע מי האורח הנוכחי
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
        wrapper.addEventListener("click", () => VisitorClick(visitor));
        
        return wrapper;
  };
  

  const VisitorClick = (visitor) => {
    localStorage.setItem("visitorIn", JSON.stringify(visitor));
    window.location.href = "./zoo.html";
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
 
  
  
  searchBox();
  
  