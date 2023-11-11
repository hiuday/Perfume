// const item1 = document.querySelector('.item1')
// const item2 = document.querySelector('.item2')
// const item3 = document.querySelector('.item3')
// const item4 = document.querySelector('.item4')

// item1.addEventListener('click', function () {
//     const item2 = document.querySelector('.item2')
//     const item3 = document.querySelector('.item3')
//     const item4 = document.querySelector('.item4')
//     const content1 = document.querySelector('.content1')
//     const content2 = document.querySelector('.content2')
//     const content3 = document.querySelector('.content3')
//     const content4 = document.querySelector('.content4')
//     content1.classList.add('active')
//     content2.classList.remove('active')
//     content3.classList.remove('active')
//     content4.classList.remove('active')

//     item2.classList.remove('active')
//     item3.classList.remove('active')
//     item4.classList.remove('active')

//     item1.classList.add('active')
// })



// item2.addEventListener('click', function () {
//     const item1 = document.querySelector('.item1')
//     const item3 = document.querySelector('.item3')
//     const item4 = document.querySelector('.item4')
//     const content1 = document.querySelector('.content1')
//     const content2 = document.querySelector('.content2')
//     const content3 = document.querySelector('.content3')
//     const content4 = document.querySelector('.content4')
//     content2.classList.add('active')
//     content1.classList.remove('active')
//     content3.classList.remove('active')
//     content4.classList.remove('active')

//     item1.classList.remove('active')
//     item3.classList.remove('active')
//     item4.classList.remove('active')

//     item2.classList.add('active')
// })


// item3.addEventListener('click', function () {
//     const item1 = document.querySelector('.item1')
//     const item2 = document.querySelector('.item2')
//     const item4 = document.querySelector('.item4')
//     const content1 = document.querySelector('.content1')
//     const content2 = document.querySelector('.content2')
//     const content3 = document.querySelector('.content3')
//     const content4 = document.querySelector('.content4')
//     content3.classList.add('active')
//     content2.classList.remove('active')
//     content1.classList.remove('active')
//     content4.classList.remove('active')

//     item1.classList.remove('active')
//     item2.classList.remove('active')
//     item4.classList.remove('active')

//     item3.classList.add('active')
// })

// item4.addEventListener('click', function () {
//     const item1 = document.querySelector('.item1')
//     const item2 = document.querySelector('.item3')
//     const item3 = document.querySelector('.item4')
//     const content1 = document.querySelector('.content1')
//     const content2 = document.querySelector('.content2')
//     const content3 = document.querySelector('.content3')
//     const content4 = document.querySelector('.content4')
//     content4.classList.add('active')
//     content2.classList.remove('active')
//     content3.classList.remove('active')
//     content1.classList.remove('active')

//     item1.classList.remove('active')
//     item2.classList.remove('active')
//     item3.classList.remove('active')

//     item4.classList.add('active')
// })


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