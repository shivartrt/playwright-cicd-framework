export const ecologin_data = {
    login_pageurl: 'https://ecommerce-playground.lambdatest.io/',
    username: 'shivarttest@gmail.com',
    password: 'test12345@',

    //exceptions error message
    user_loggedin_successfully_url: /.*logged in successfully/,
    user_not_loggedin_successfully_url: /.*index.php?route=account\/login/,
    username_password_data: [
        {username: 'shivatest@gmail.com', password: 'test12345@'},
        {username: 'shivatest@gmail.com', password: 'Password1234'},
        {username: 'shivatest1@gmail.com', password: 'Password123'},
        {username: 'shivatest1@gmail.com', password: 'Password1234'},
    ]
}