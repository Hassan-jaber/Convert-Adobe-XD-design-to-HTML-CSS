let myCoursesContent = document.querySelector(".my-courses-content")
let noCoursesSection = document.querySelector(".no-courses")






// remove no-courses element when add any courses or any html element
    if(myCoursesContent.children.length === 1){
        noCoursesSection.style.display = "flex"
    }


    let navbar_toggler = document.querySelector(".navbar-toggler")
    let nav_container = document.querySelector(".nav_container")
    navbar_toggler.addEventListener(("click"),_=>{
      nav_container.classList.toggle("nav-container-bg")
    })
