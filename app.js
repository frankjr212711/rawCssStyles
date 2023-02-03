document.querySelectorAll('nav ul li a').forEach(function(el) {
    el.addEventListener('click', function() {
        console.log(this.innerHTML)
    })
})