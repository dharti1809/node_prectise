export default function loginForm() {
    return `<form action="/submit" method="post">
    <label for="username">Username:</label><br/>
        <input type="text" name="username" placeholder="Enter Username" required>
        <br/>
    <label for="password">Password:</label><br/>        
        <input type="password" name="password" placeholder="Enter Password" required><br/>
        <button type="submit">Login</button>
    </form>
    <a href="/">Back to Home</a>
    `;
}