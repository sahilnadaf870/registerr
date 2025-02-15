// Register User
document.getElementById("registerForm").addEventListener("submit",function(event){
    event.preventDefault();
    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;

    if(username === "" || password === ""){
        alert("All fileds are required");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) ||[];
    let userExits = users.some(user => user.username === username);
    if(userExits) {
        alert("Username already taken!");
        return;
    }
    users.push({username,password});
    localStorage.setItem("users",JSON.stringify(users));

    alert("Registration succesfully ! You can now log in.");
    document.getElementById("registerForm").reset();
});

// login user
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let message = document.getElementById("message");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let valildUser = users.find(user => user.username === username && user.password === password);

    if(valildUser){
        message.style.color = "pink";
        message.textContent = "Login succesfully";
    } else{
        message.style.color = "orange";
        message.textContent = "Invaild username or password!";
    }
    document.getElementById("loginForm").reset();
  
})



