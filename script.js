function toogleMode() {
    const html = document.documentElement;
    html.classList.toggle('light')
    
    //pegar a tag img
    const img = document.querySelector("#profile img")
    const alt = document.querySelector("#profile img")

    //substituir a img
    if (html.classList.contains('light')) {
     // se tiver tema light 
     img.setAttribute("src", "./assets/avatar.png")  
     alt.setAttribute("alt", "foto de grégory moraes tema light")  
    } else {
      // se tiver tema dark 
        img.setAttribute("src", "./assets/avatar.png")
        alt.setAttribute("alt", "foto de grégory moraes tema dark")
      
    }
 }