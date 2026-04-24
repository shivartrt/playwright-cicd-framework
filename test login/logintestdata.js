export const login_data = {
    login_pageurl: 'https://practicetestautomation.com/practice-test-login/',
    username: 'student',
    password: 'Password123',

    //exceptions error message
    user_loggedin_successfully_url: /.*logged in successfully/,
    user_not_loggedin_successfully_url: /.*practice-test-login/,
    username_password_data: [
        {username: 'student', password: 'Password123'},
        {username: 'student', password: 'Password1234'},
        {username: 'student1', password: 'Password123'},
        {username: 'student1', password: 'Password1234'},
    ]
}