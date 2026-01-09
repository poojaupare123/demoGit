// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const userDetails = {
        username, email, phone
    };

    // store each user with a email as key 
    localStorage.setItem(email, JSON.stringify(userDetails));

    showUSerDetails(userDetails);

}

function getUserFromLocal() {
    const userList = document.querySelector('#userList');
    userList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(key));
        showUSerDetails(user);
    }
}

// display user in ui 
function showUSerDetails(user) {
    let userList = document.getElementById('userList');

    const li = document.createElement('li');
    li.textContent = `Username: ${user.username}, Email:${user.email}, Phone:${user.phone}`;

    userList.appendChild(li);
}

// load user on ppage refresh
window.addEventListener('DOMContentLoaded', getUserFromLocal)

module.exports = handleFormSubmit;