const list = document.querySelectorAll('.btn-cart')

list.forEach((item) => {
  item.addEventListener('click', function () {
    this.classList.toggle('btn-success')
    this.classList.toggle('btn-danger')

    setTimeout(function () {
      item.classList.toggle('btn-success')
      item.classList.toggle('btn-danger')
    }, 3000)
  })
})