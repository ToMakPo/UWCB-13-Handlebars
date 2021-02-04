$('#available-burgers').on('click', 'li', event => {
    const id = event.target.dataset.id
    $.ajax({
        url: '/eatBurger',
        type: 'POST',
        data: {id}
    }).then(data => {
        $('#eaten-burgers .burger-list').append(event.target)
    })
})

$('#new-burger-form').on('submit', event => {
    event.preventDefault()
    const burgerNameInput = $('#burger-name')
    const name = burgerNameInput.val()
    burgerNameInput.val('')
    $.ajax({
        url: '/newBurger',
        type: 'POST',
        data: {name}
    }).then(data => {
        const newBurger = $(`<li data-id='${data.insertId}'>${name}</li>`)
        $('#available-burgers .burger-list').append(newBurger)
    })
})
