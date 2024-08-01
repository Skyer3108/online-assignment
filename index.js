const back=document.getElementById('back')
const side=document.getElementById('side')
const barBack=document.getElementById('bar-back')


back.addEventListener('click',()=>{

    console.log('hii',side.className)
    if(side.className =='side-bar'){
        side.className='toggle'
        barBack.className='bar-tog'
    }
    else{
        side.className='side-bar'
    }
})

barBack.addEventListener('click',()=>{

    if(side.className =='toggle'){
        side.className='side-bar'
        barBack.className='bar-toggle'
    }

})