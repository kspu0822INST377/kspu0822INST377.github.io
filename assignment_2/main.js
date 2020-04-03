const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
btn.addEventListener('click', shadeChange);
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(var current = 0 ; current < 5 ; ++current)
{
    var targetImage = document.createElement('img');
    targetImage.setAttribute('src', 'images/pic' + (current+1) + '.jpg');
    thumbBar.appendChild(targetImage);
    
    targetImage.addEventListener('click', zoomImage);
}

function zoomImage(tarImage)
{
    var tarPth = tarImage.target.getAttribute('src');
    displayedImage.setAttribute('src', tarPth);
}
/* Wiring up the Darken/Lighten button */

function shadeChange()
{
    var state = btn.getAttribute('class');
    if(state === 'dark')
    {
        btn.innerText = 'Lighten';
        btn.setAttribute('class', 'light');
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else
    {
        btn.innerText = 'Darken';
        btn.setAttribute('class', 'dark');
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}