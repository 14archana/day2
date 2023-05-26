let btn1 =document.getElementById("btn1")

btn1. addEventListener("click", () => {  

    var pass1 = document.getElementById("pass1").value;  
    var pass2 = document.getElementById("pass2").value;  
    if(pass1 != pass2)  
    {   
      alert("Passwords did not match");  
    } else {  
      alert("Password created successfully");  
    }  
  } ) 