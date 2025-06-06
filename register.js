
document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Full Name:", fullname);
    console.log("Email:", email);
    console.log("Password:", password);
    document.getElementById("fullname").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
     

});
