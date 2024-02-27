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
    if (localStorage.getItem("animals")) {
      animals = JSON.parse(localStorage.getItem("animals"));
    } else {
      localStorage.setItem("animals", JSON.stringify(animals));
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
  generateDataset();
  
  //********************** */
  function logout() {
    localStorage.setItem("userIn", null);
  }