const imagenes = ["./img/belgrano.png", "./img/conCalendario.jpg", "./img/escudo.png",
 "./img/cajuvsindependiente.jpg" ]

function lastImg() {
    const sliders = document.getElementById('listImg')
  const imgWidth = document.getElementById('img')



        sliders.scrollLeft -= imgWidth.clientWidth
        
    
}
function nextImg () {
   const sliders = document.getElementById('listImg')
   const imgWidth = document.getElementById('img')

    sliders.scrollLeft += imgWidth.clientWidth
 
}

function gallery () {
  const list = document.getElementById("listImg")
   for(let i = 0; i < imagenes.length; i++){
    list.insertAdjacentHTML("afterbegin", `<img id="img" src=${imagenes[i]} class="imgGallery" />` )      

   }
   
}
gallery()
        