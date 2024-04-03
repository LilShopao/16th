const observer = new IntersectionObserver((enteries) =>{
    enteries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } 
        else {
            entry.target.classList.remove('show');
        }
    });
});

let names = ['.personCard'];

const hiddenElements = document.querySelectorAll(names);
hiddenElements.forEach((el) =>observer.observe(el));
