var target = document.querySelectorAll('[data-anime]');
let animationClass = 'animate';

function animeScroll()
{
    let windowTop = window.pageYOffset + 500;
    target.forEach(function(element)
     {
        if((windowTop) > element.offsetTop)
        {
            element.classList.add(animationClass);
        }
        else
        {
            element.classList.remove(animationClass);
        }
     })
}
    


window.addEventListener('scroll', function()
{
    animeScroll();
})