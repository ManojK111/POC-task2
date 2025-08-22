class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[type="password"]';
    this.loginButton = 'button[type="submit"]';
  }

  async gotoLoginPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

module.exports = { LoginPage };
