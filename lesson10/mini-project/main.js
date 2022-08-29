// index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(
        users => {
            let usersContainer = document.createElement('div');
            usersContainer.classList.add('users');
            document.body.appendChild(usersContainer);

            for (const user of users) {
                let userElement = document.createElement('div'),
                    learnMoreLink = document.createElement('a');

                userElement.innerText = `${user.id}. ${user.name} `;
                userElement.classList.add('user');
                learnMoreLink.href = `user details/user-details.html?id=${user.id}`;
                learnMoreLink.innerText = 'learn more...';
                learnMoreLink.classList.add('learn-more');
                userElement.appendChild(learnMoreLink);
                usersContainer.appendChild(userElement);
            }
        }
    );
