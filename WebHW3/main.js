// מערכים גלובלים שישמשו אותנו בכל העמודים
let visitors = [
    {
      name: "John Smith",
      password : "123456",
      coins: 50,
      gender : "male",
      image: './images/man.png'
    },
    {
      name: "Emily Johnson",
      password : "123456" ,
      coins: 50,
      gender : "female",
      image: './images/woman.png'
    },
    {
      name: "Michael Williams",
      password : "123456" ,
      coins: 50,
      gender : "male",
      image: './images/man.png'
    },
    {
      name: "Jessica Brown",
      password : "123456" ,
      coins: 50,
      gender : "female",
      image: './images/woman.png'
    },
    {
      name: "Christopher Jones",
      password : "123456" ,
      coins: 50,
      gender : "male",
      image: './images/man.png'
    },
    {
      name: "Ashley Davis",
      password : "123456" ,
      coins: 50,
      gender : "female",
      image: './images/woman.png'
    },
    {
      name: "Matthew Miller",
      password : "123456" ,
      coins: 50,
      gender : "male",
      image: './images/man.png'
    },
    {
      name: "Amanda Wilson",
      password : "123456" ,
      coins: 50,
      gender : "female",
      image: './images/woman.png'
    },
    {
      name: "David Moore",
      password : "123456" ,
      coins: 50,
      gender : "male",
      image: './images/man.png'
    },
    {
      name: "Sarah Taylor",
      password : "123456" ,
      coins: 50,
      gender : "female",
      image: './images/woman.png'
    },
    {
      name: "James Anderson",
      password : "123456" ,
      coins: 50,
      gender : "male",
      image: './images/man.png'
    },
    {
      name: "Jennifer Thomas",
      password : "123456" ,
      coins: 50,
      gender : "female",
      image: './images/woman.png'
    },
    {
      name: "Robert Jackson",
      password : "123456" ,
      coins: 50,
      gender : "male",
      image: './images/man.png'
    },
    {
      name: "Elizabeth White",
      password : "123456" ,
      coins: 50,
      gender : "female",
      image: './images/woman.png'
    },
    {
      name: "Daniel Harris",
      password : "123456" ,
      coins: 50,
      gender : "male",
      image: './images/man.png'
    },
    {
      name: "Melissa Martin",
      password : "123456" ,
      coins: 50,
      gender : "female",
      image: './images/woman.png'
    },
    {
      name: "William Thompson",
      password : "123456" ,
      coins: 50,
      gender : "male",
      image: './images/man.png'
    },
    {
      name: "Linda Garcia",
      password : "123456" ,
      coins: 50,
      gender : "female",
      image: './images/woman.png'
    },
    {
      name: "Joseph Martinez",
      password : "123456" ,
      coins: 50,
      gender : "male",
      image: './images/man.png'
    },
    {
      name: "Karen Robinson",
      password : "123456" ,
      coins: 50,
      gender : "female",
      image: './images/woman.png'
    },
  ];
  
  let animals = [
    {
      name: "Lion",
      isPredator: true,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
      image: './images/Lion.png'
    },
    {
      name: "Elephant",
      isPredator: false,
      weight: 1200,
      height: 200,
      color: "grey",
      habitat: "land",
      image: './images/Elephant.png'
    },
    {
      name: "Giraffe",
      isPredator: false,
      weight: 300,
      height: 120,
      color: "brown",
      habitat: "land",
      image: './images/Giraffe.png'
    },
    {
      name: "Tiger",
      isPredator: true,
      weight: 100,
      height: 120,
      color: "orange",
      habitat: "land",
      image: './images/Tiger.png'
    },
    {
      name: "Monkey",
      isPredator: false,
      weight: 70,
      height: 120,
      color: "brown",
      habitat: "land",
      image: './images/Monkey.png'
    },
    {
      name: "Kangaroo",
      isPredator: false,
      weight: 120,
      height: 120,
      color: "brown",
      habitat: "land",
      image: './images/Kangaroo.png'
    },
    {
      name: "Penguin",
      isPredator: false,
      weight: 90,
      height: 120,
      color: "white",
      habitat: "sea",
      image: './images/Penguin.png'
    },
    {
      name: "Zebra",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "black",
      habitat: "land",
      image: './images/Zebra.png'
    },
    {
      name: "Cheetah",
      isPredator: true,
      weight: 90,
      height: 120,
      color: "orange",
      habitat: "land",
      image: './images/Cheetah.png'
    },
  ];

let visitorsForView=visitors.map(visitor => visitor);
let visitorsNames=visitors.map(visitor=>visitor.name);
let animalsForView=animals.map(animals => animals); 
let userIn ; 
let visitorIn;
let currAnimal;
  
  // פונקציה זו טוענת עבורכם את המידע ההתחלתי של האפליקציה, במידה וקיים מידע בלוקל סטורג׳, היא תקח אותו משם
  // אל תשנו את הקוד בפונקציה הזו כדי לשמור על תקינות הטמפלייט
  function generateDataset() {
    if (localStorage.getItem("visitors")) {
      visitors = JSON.parse(localStorage.getItem("visitors"));
    } else {
      
      localStorage.setItem("visitors", JSON.stringify(visitors));
    }
    if (localStorage.getItem("visitorsForView")) {
      visitorsForView = JSON.parse(localStorage.getItem("visitorsForView"));
    } else {
      
      localStorage.setItem("visitorsForView", JSON.stringify(visitorsForView));
    }
    if (localStorage.getItem("visitorsNames")) {
      visitorsNames = JSON.parse(localStorage.getItem("visitorsNames"));
    } else {
      
      localStorage.setItem("visitorsNames", JSON.stringify(visitorsNames));
    }

    if (localStorage.getItem("animals")) {
      animals = JSON.parse(localStorage.getItem("animals"));
    } else {
      localStorage.setItem("animals", JSON.stringify(animals));
    }
    if (localStorage.getItem("animalsForView")) {
      animalsForView = JSON.parse(localStorage.getItem("animalsForView"));
    } else {
      localStorage.setItem("animalsForView", JSON.stringify(animalsForView));
    }
    if (localStorage.getItem("userIn")) {
      userIn = JSON.parse(localStorage.getItem("userIn"));
    } else {
      localStorage.setItem("userIn", JSON.stringify(userIn));
    }
    if (localStorage.getItem("visitorIn")) {
      visitorIn = JSON.parse(localStorage.getItem("visitorIn"));
    } else {
      localStorage.setItem("visitorIn", JSON.stringify(visitorIn));
    }
    if (localStorage.getItem("currAnimal")) {
      currAnimal = JSON.parse(localStorage.getItem("currAnimal"));
    } else {
      localStorage.setItem("currAnimal", JSON.stringify(currAnimal));
    }

    
    
  
    console.log(visitors);
  }


  const getMainNav = () => {
    const template = `
        <nav class="main-nav">
          <ul>
           <li><a >
           <select name="visitorsDropDown" id="visitor-select">
           <option value="">choose visitor</option>
           </select>
           </a><li>
           <li><a >
            Hi ${visitorIn.name} 😎 !  Let's play - you have ${visitorIn.coins} coins 💰 
            </a><li>
            <li><a href="./dashboard.html">
            <button type="button" class="btn btn-primary"" id="dashboard-button">Dashboard</button>
            </a><li>
            <li><a href="./zoo.html">
            <button type="button" class="btn btn-success" id="zoo-button">Zoo</button>
            </a><li>
            <li><a href="./login.html">
            <button type="button" class="btn btn-warning" id="visitors-button">Visitors</button>
            </a><li>
            
            <li><a >
            <button type="button" class="btn btn-danger" id="reset-button">Reset</button>
            </a><li>
          </ul>
            </nav>
          
        `;
  
    const wrapper = document.createElement("nav");
    wrapper.className = "";
    wrapper.innerHTML = template;
    return wrapper;
  };

  const getOut = () => {

    if (userIn===undefined)
    {
       window.location.href = "./signup.html";
       return;
    }
    if (visitorIn===undefined)
    {
       window.location.href = "./login.html";
       return;
    }
  }
  const getOutLogin = () => {

    if (userIn===undefined)
    {
       window.location.href = "./signup.html";
       return;
    }
  }


  const activeDropDwonAndReset = () => {
    const visitorSelect = document.getElementById("visitor-select");
  
    // יצירת אפשרויות הדרופ דאון
    for (const visitorName of visitorsNames) {
      const option = document.createElement("option");
      option.value = visitorName;
      option.textContent = visitorName;
      visitorSelect.appendChild(option);
    }
  
    // הוספת אירוע "input" לדרופ דאון
    visitorSelect.addEventListener("input", (e) => {
      for (const visitor of visitors) {
        if (visitor.name === e.target.value) {
          localStorage.setItem("visitorIn", JSON.stringify(visitor));
          location.reload();
        }
      }
    });
    const resetSelect=document.getElementById("reset-button");
    resetSelect.addEventListener("click",() =>{
    alert("The game is going to reset");
    localStorage.clear();
    window.location.href = "./signup.html";
    });
  };

  generateDataset();
  
  //********************** */
  function logout() {
    localStorage.setItem("userIn", null);
  }
  