let currentActive = null;

document.querySelectorAll("[data-target]").forEach((btn) => {
    btn.addEventListener("click", function(){
        const section = document.querySelector(btn.dataset.target);
        if(currentActive){
            currentActive.classList.add("hidden");
        }
        section.classList.remove("hidden");
        currentActive = section;
    })
})

document.querySelector("#logOut-btn").addEventListener("click", () => {
    window.location.replace("index.html");
})