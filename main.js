function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

let container = document.querySelector('.random-colors')

let MAX_LIMIT = window.innerWidth / 31

function generateColor(){
    for(let i = 0; i < MAX_LIMIT; i++){
        let color = randomColor()
        container.innerHTML += 
`<div class="random-color  skeleton">
<div class="color-box  skeleton" style="background: ${color};"></div>
<div class="color-data  skeleton">
<div class="code  skeleton">${color}</div>
<span class="btn  skeleton" title="Copy to clipboard" onClick="copyToClipboard('${color}')"><img src="./imgs/clipboard_48.png" style="width:50%; margin-top:20%; margin-left:20%;"></span>
</div>`;
    }
}

function copyToClipboard(color){
    navigator.clipboard.writeText(color).then(function() {
        alert(`Color copied...`);
    }, function() {
        alert('Failed to copy color, Try using mannual way of copying...');
    });
}

generateColor();