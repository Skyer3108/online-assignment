const toggleButton=document.getElementById('toggleButton')

const toggle=document.getElementById('toggle')

const sidebar=document.getElementById('sidebar')

const read=document.getElementById('read')
const readval=document.getElementById('readval')


read.addEventListener('click',()=>{

    console.log('kk')

    if(readval.className=='read-more'){
        readval.classList.remove('read-more')
        read.innerText='READ LESS'
    }
    else{
        readval.classList.add('read-more')
        read.innerText='READ MORE'
    }

   
})

toggle.addEventListener('click',()=>{

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-300px"; // Move sidebar out of view
      }else{
        sidebar.style.left = "0px";
      }

})

toggleButton.addEventListener('click',()=>{

    if(sidebar.style.left==='-300px'){
        sidebar.style.left = "0px";
    }

})