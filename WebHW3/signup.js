function createNewVisitor(event) {
  event.preventDefault();

  let newUserName = document.getElementById("user_full_name").value;
  let newUserPassword = document.getElementById("user_password").value;
  const newUserMale=document.getElementById("male").checked;
  const newUserFemale=document.getElementById("female").checked;
  const validateFormInputs = () => {
    if (!newUserName || !newUserPassword) {
      alert("There is an empty input field.");
      return false;
    }
    return true;
  };

  const visitorExists = (name) => {
    for (const visitor of visitors) {
      if (visitor.name===name) {
        return true; 
      }
    }
    return false;
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return false;
    }
  
    for (let i = 0; i < password.length; i++) {
      if (!/\d/.test(password[i])) {
        return false;
      }
    }
  
    // הסיסמה תקינה
    return true;
  }
  const  validateFullName = (fullName) => {
    // בדיקת אורך שם מלא
    if (fullName.length < 3) {
      return false;
    }
  
    // בדיקת תווים לא חוקיים
    for (let i = 0; i < fullName.length; i++) {
      if (!/[a-zA-Z ]/.test(fullName[i])) {
        return false;
      }
    }
  
    // בדיקת קיום רווח
    if (!/\s/.test(fullName)) {
      return false;
    }
  
    // שם מלא תקין
    return true;
  }



    const makeVisitor = (name,password) =>
    {
    if (visitorExists(name)) 
    {
      alert("name exists");   
      return null; 
    } 

    if (!validateFullName(name)) 
    {
      alert("A full name was entered not according to the rules");   
      return null; 
    } 

    if (!validatePassword(password)){
      alert("error password");   
      return null;
    }

    

    else 
    {
      
      if (newUserMale){
         newGender="male";
         newimg='./images/man.png';
      }
      else{
         newGender="female";
         newimg='./images/woman.png';
      }
         

      const newUser = {
        name: newUserName,
        password: newUserPassword,
        coins: 50,
        gender: newGender,
        image: newimg
      };
      return newUser; 
    }
  };
  
  if (validateFormInputs()) {
    const newUser = makeVisitor(newUserName,newUserPassword);
    if (newUser) { 
      visitors.push(newUser);
      const stringifiedVisitors = JSON.stringify(visitors);
      localStorage.setItem("visitors", stringifiedVisitors);
      visitorsForView=visitors.map(visitor => visitor);
      localStorage.setItem("visitorsForView", JSON.stringify(visitorsForView));
      visitorsNames=visitors.map(visitor=>visitor.name);
      localStorage.setItem("visitorsNames", JSON.stringify(visitorsNames));
      localStorage.setItem("userIn", JSON.stringify(newUser));
      newUserName="";
      newUserPassword="";
      alert("user added");
      window.location.href = "./login.html";
    } else {
      
    }

  }

  }
  function logInVisitor(event) {
    event.preventDefault();
    let UserName = document.getElementById("Euser_full_name").value;
    let UserPassword = document.getElementById("Euser_password").value;
    const validateFormInputs = () => {
      if (!UserName || !UserPassword) {
        alert("There is an empty input field.");
        return false;
      }
      return true;
    };
    if (validateFormInputs()) {
      for (const visitor of visitors) {
        if (visitor.name===UserName) {
          if (visitor.password===UserPassword) {
            const Euser=visitor;
            alert("Welcome back");
            localStorage.setItem("userIn", JSON.stringify(Euser));
            window.location.href = "./login.html";
            return;
          }
        }
      }
      alert("There is no user with those detailes");
    }
    else
    {
      alert("something went wrong");
    }
  }
  
  
  /**************************************
    מימשתי עבורכם את ההאזנה לאירוע שליחת טופס
    שימו לב כי האיידי של createForm
    זהה לאיידי של הטופס בעמוד signup.html
    אין לשנות אותו */
  const createForm = document.getElementById("create-visitor-form");
  if (createForm) {
    createForm.addEventListener("submit", createNewVisitor);
  }

  const createFormExists = document.getElementById("exists-visitor-form");
  if (createFormExists) {
    createFormExists.addEventListener("submit", logInVisitor);
  }