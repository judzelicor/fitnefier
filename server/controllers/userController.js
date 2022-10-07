export function login(request, response) {
    console.log(request.body)
    response.json({ message: "User logged in." })
}

export function signup(request, response) {
    response.json({ message: "User signed up." })
}