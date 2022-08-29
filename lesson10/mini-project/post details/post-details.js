// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href),
    userId = url.searchParams.get('userId'),
    postId = url.searchParams.get('postId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(
        posts => {
            let postContainer = document.createElement('div');
            postContainer.classList.add('post');
            document.body.appendChild(postContainer);

            for (const postObj of posts) {
                if (postObj.id === parseInt(postId)) {
                    for (let detail in postObj) {
                        let detailElement = document.createElement('p');
                        detailElement.innerText = detail + ': ' + postObj[detail];
                        postContainer.appendChild(detailElement);
                    }
                }
            }

            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(response => response.json())
                .then(
                    comments => {
                        let commentsContainer = document.createElement('div');
                        commentsContainer.classList.add('comments');
                        document.body.appendChild(commentsContainer);

                        for (const commentObj of comments) {
                            let commentElement = document.createElement('p');
                            commentElement.classList.add('comment')
                            commentsContainer.appendChild(commentElement);

                            for (let comment in commentObj) {
                                commentElement.innerText += comment + ': ' + commentObj[comment] + '\n';
                            }
                        }
                    }
                );

        }
    );
