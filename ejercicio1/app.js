fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    return response.json();
})
.then(jsondata => console.log(JSON.stringify(jsondata)));