//formulario
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Enviado com sucesso!";
          status.classList.add('success')
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Ops! Deu um erro no envio."
              status.classList.add('error')
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)








/* animacao */
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