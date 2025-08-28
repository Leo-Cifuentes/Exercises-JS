interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())   
    .then((data: Post[]) => {
        let filterData = data.slice(0,5);
        let titles = filterData.map((post: Post) => post.title);
        console.log(titles);
    })
.catch(error => {
    console.error("Error de comunicación", error);
});