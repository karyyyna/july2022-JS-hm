let url = new URL(location.href),
    id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(
        details => {
            // 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
            let userDetailsContainer = document.createElement('div');
            userDetailsContainer.classList.add('user-details');
            document.body.appendChild(userDetailsContainer);

            function breeding(obj) {
                for (const key in obj) {
                    if (typeof obj[key] === 'object') {
                        let detailElement = document.createElement('p');
                        detailElement.innerText = key + ':';
                        userDetailsContainer.appendChild(detailElement);

                        breeding(obj[key]);
                    } else {
                        let detailElement = document.createElement('p');
                        detailElement.innerText = key + ': ' + obj[key];
                        userDetailsContainer.appendChild(detailElement);
                    }
                }
            }

            breeding(details);

            // 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
            // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
            // 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
            let postsLinkContainer = document.createElement('div'),
                postsLink = document.createElement('a');
            postsLinkContainer.classList.add('posts-link-container');
            postsLink.classList.add('posts-link');
            postsLink.innerText = 'post of current user';
            document.body.appendChild(postsLinkContainer);
            postsLinkContainer.appendChild(postsLink);

            postsLink.addEventListener('click', function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                    .then((response) => response.json())
                    .then(
                        posts => {
                            let postsContainer = document.getElementsByClassName('posts');

                            if (postsContainer.length === 0) {
                                postsContainer = document.createElement('div');
                                postsContainer.classList.add('posts');
                                document.body.appendChild(postsContainer);

                                for (const post of posts) {
                                    let postElement = document.createElement('p'),
                                        postLink = document.createElement('a');

                                    postElement.classList.add('post');
                                    postElement.innerText = post.title + ' ';

                                    postLink.classList.add('post-link');
                                    postLink.href = `../post details/post-details.html?userId=${id}&postId=${post.id};`;
                                    postLink.innerText = 'see post';

                                    postsContainer.appendChild(postElement);
                                    postElement.appendChild(postLink);
                                }
                            }
                        }
                    );
            });
        }
    );


