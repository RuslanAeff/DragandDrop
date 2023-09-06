const containers = document.querySelectorAll('.container');
const photo = document.querySelector('.photo');
const dropArea = document.querySelectorAll(".droparea");
console.log(dropArea);

// photo.forEach(photo => {
//     photo.addEventListener('dragstart', ()=>{
//         console.log('drag start')
//     })

//     photo.addEventListener('dragend', ()=>{
//         photo.classList.remove('draging');
//     })
// })

let dragImg;
photo.addEventListener("dragstart",(e)=>{
     dragImg = e.target;
 })



dropArea.forEach((x)=>{
     console.log(x);

     x.addEventListener('dragover', (e)=>{
        e.preventDefault()
    })
    x.addEventListener("drop" ,(e)=>{
        e.target.append(dragImg)
    })
})


// containers.forEach(container => {
//     container.addEventListener('dragover', e=>{
//         e.preventDefault()
//         const photo =document.querySelector('.draging')
//         // container.appendChild(photo)

//     })
// })