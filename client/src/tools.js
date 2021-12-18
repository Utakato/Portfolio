const options = {
    root:null,
    threshold : 0,
    rootMargin: "0px 0px -200px 800px",
};

export const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry =>{
        console.log(entry)
        if(entry.isIntersecting) {
            console.log("show")
            entry.target.classList.add("visible")
        }
    })
}, options)
