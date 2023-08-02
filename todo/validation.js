function handleSubmit(callback) {
    event.preventDefault()
    var username = document.getElementById("uname").value
    var password = document.getElementById("pwd").value

    if (username == 'admin' && password == '12345') {
        callback()
    }
}

function redirect() {
    window.location = 'todo.html'
}