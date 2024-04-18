  const containerEl = document.querySelector(".container");
  const prevEl = document.querySelector("#prev");
  const nextEl = document.querySelector("#next");

  let x = 0;
  let timer ;
  prevEl.addEventListener("click",()=>{
    x = x + 45;
    clearTimeout(timer);
    updateGallery()
  })
  nextEl.addEventListener("click",()=>{
    x = x - 45;
    updateGallery()
  })
  const updateGallery = ()=>{
    containerEl.style.transform =`perspective(1000px) rotateY(${x}deg) `;
    timer = setTimeout(()=>{
        x = x -45;
        updateGallery()
    },6000)
  }
  updateGallery()