// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();

    let username = event.target.username.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;

    const userDetails = {
        username, email, phone
    };

    localStorage.setItem(email, JSON.stringify(userDetails));

    showUserDetails(userDetails);
}


function showUserDetails(user) {
    let userList = document.querySelector('#userList');

    const li = document.createElement('li');
    li.textContent = `${user.username} - ${user.email} - ${user.phone}`;

    let delBtn = document.createElement('button');
    delBtn.textContent = 'delete';
    delBtn.onclick = function () {
        localStorage.removeItem(user.email);
        userList.removeChild(li); 
    }

    li.appendChild(delBtn);
    userList.appendChild(li);

}

module.exports = handleFormSubmit;