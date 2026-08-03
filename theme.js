const html = document.documentElement;
const themeToggleBtn = document.querySelector("#theme-toggle-btn");

let savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", savedTheme);
if(savedTheme==="light"){
    themeToggleBtn.dataset.tip="Dark Mode";
}else{
    themeToggleBtn.dataset.tip="Light Mode";
}

if(themeToggleBtn){
    themeToggleBtn.addEventListener("click", () => {
        let currentTheme = html.getAttribute("data-theme");
        let newTheme = currentTheme === "light" ? "dark" : "light";
        html.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme); 
        if(newTheme==="light"){
            themeToggleBtn.dataset.tip="Dark Mode";
        }else{
            themeToggleBtn.dataset.tip="Light Mode";
        }
    });
}
