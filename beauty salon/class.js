const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form-container"),
// formCloseBtn = document.querySelector(".form-close"),
// signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#signin"),
pwShowHide = document.querySelectorAll(".pw-hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
// formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// pwShowHide.forEach((icon) => 
// {
//     icon.addEventListener("click",() => {
//         let getPwInput = icon.parentElement.ATTRIBUTE_NODE.querySelector("input");
//         if(getPwInput.type === "password")
//         {
//             getPwInput.type = "text";
//             icon.classList.replace("uil-eye-slash", "uil-eye");
//         }
//         else{
//             getPwInput.type = "password";
//             icon.classList.replace("uil-eye", "uil-eye-slash");
//         }
//     })
// });

// signupBtn.addEventListener("click", (e) => 
// {
//     e.preventDefault();
//     formContainer.classList.add("active");
// });

loginBtn.addEventListener("click", (e) => 
{
    e.preventDefault();
    formContainer.classList.remove("active");
});


function auth(){
    // let email = document.querySelector("#SigninEmail").vlaue;
    // let password = document.querySelector("#SigninPassword").vlaue;
    let email = document.getElementById("SigninEmail").value;
    let password = document.getElementById("SigninPassword").value;
    console.log(email,password)
    if(email === "user123@gmail.com" || password === "12345")
    {
        console.log("in this block")
          window.location.assign("https://6483ff4601d6011fb88be171--idyllic-creponne-318e28.netlify.app/");
          return;
    }

    else{
        console.log(email)
        // alert("Invalid Information");
        return;
    }
}
