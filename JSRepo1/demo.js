
    document.write("<h1>DOM Manipulation</h1>"); 
    
    function matching(){
        let username = document.getElementById("userName");
        let password = document.getElementById("password")
        
        if(username.checked == true){
            alert("Username selected"); 
        }
        else if(password.checked == true){
            alert(" Password Selected");
        }
        else{
            alert("None Selected")
        }
        
    }
    
    
    

