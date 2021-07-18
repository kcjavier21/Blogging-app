

const API_URL = "https://blogging-app-api.herokuapp.com/api/posts";
const API_BASE_URL = "https://blogging-app-api.herokuapp.com/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        buildPosts(data);
    })
}

const buildPosts = (blogPosts) => {
    let blogContent = '';

    for(blogPost of blogPosts) {
        const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
        const postImage = `${API_BASE_URL}${blogPost.post_image}`;
        const postLink = `/post.html?id=${blogPost.id}`;

        blogContent += ` 
        <a href="${postLink}" style="text-decoration:none">
            <div class="post">
                <div class="post-image" style="background-image: url(${postImage})"></div>
                    <div class="post-content">
                        <div class="post-date">${postDate}</div>
                        <div class="post-title">${blogPost.title}</div>
                        <div class="post-text">${blogPost.content}</div>
                </div>
            </div>
        </a>`;

        document.querySelector('.blog-posts').innerHTML = blogContent;
    }
}