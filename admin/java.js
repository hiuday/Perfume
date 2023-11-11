const list = document.querySelectorAll('.list-item')
const content = document.querySelectorAll('.content')
//list = nodeList []

list.forEach((item, index) => {
    item.addEventListener('click', function () {
        list.forEach(item => {
            item.classList.remove('active')
        })
        content.forEach(item => {
            item.classList.remove('active')
        })
        content[index].classList.add('active')
        item.classList.add('active')
    })
})