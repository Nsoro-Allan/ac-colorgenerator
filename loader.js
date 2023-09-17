const allSkeleton = document.querySelectorAll('.skeleton')

window.addEventListener('load', function() {
    allSkeleton.forEach(item=> {
        item.classList.remove('skeleton')
    })
})
