var form = document.getElementById('inputForm')

form.addEventListener('click', (event) => {
    event.preventDefault() // Stop form submission

    var input = form.querySelector('input')
    var boxInput = input.value
    console.log(input, boxInput)

    for (let i = 0; i < boxInput; i++) {
        var div = document.createElement('div')
        div.className = 'box'
        document.getElementById('boxes-container').appendChild(div)
    }
})

function removeSquare(){
    var box = document.getElementById('box')
    box.remove()
}