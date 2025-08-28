fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var filterData = data.slice(0, 5);
    var titles = filterData.map(function (post) { return post.title; });
    console.log(titles);
})
    .catch(function (error) {
    console.error("Error de comunicación", error);
});
