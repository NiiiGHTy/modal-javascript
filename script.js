let $ = document

const openBtn = $.querySelector('[data-modal-target]')
const cancelBtn = $.getElementById('cancel')
const overlay = $.getElementById('overlay')


openBtn.addEventListener('click' , function(){

    const modal = $.getElementById('modal')

    showModal(modal)
})

cancelBtn.addEventListener('click' , function(){

    // const modal = $.getElementById('modal')

    cancelModal(modal)
})



function showModal(modal){
    
    modal.classList.add('active')
    overlay.classList.add('active')

    tl.fromTo('#title-modal' , {scale:0} , {scale:1})
    tl.fromTo('#img-modal' , {opacity:0 , y:100 , rotation:'-45deg'} , {opacity:1 , y:0 , rotation:'0deg'})
    tl.fromTo('#desc-modal' , {opacity:0 , y:45 } , {opacity:1 , y:0} )
    tl.fromTo('#price-modal' , {opacity:0 , y:30} , {opacity:1 , y:0 })
}


function cancelModal(modal){
    
    modal.classList.remove('active')
    overlay.classList.remove('active')

}


overlay.addEventListener('click' , function(){

    modal.classList.remove('active')
    overlay.classList.remove('active')

})



// time to add some animations to this

const tl = gsap.timeline({defaults : {duration:0.55}})


tl.fromTo('.card' , {scale:0} , {scale:1})
tl.fromTo('#image' , {opacity:0 , x:-50 , rotation:'-45deg'} , {opacity:1 , x:0 , rotation:'0deg'})
tl.fromTo('.info' , {x:30 , opacity:0} , {x:0 , opacity:1})

