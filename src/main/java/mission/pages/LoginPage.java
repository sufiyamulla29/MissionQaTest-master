package mission.pages;

import mission.BasePage;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Page Object class representing the Login Page.
 * This class contains web elements and actions related to user login.
 * It follows the Page Object Model design pattern using PageFactory.
 */
public class LoginPage extends BasePage {

    // Username input field
    @FindBy(id = "user-name")
    WebElement usernameField;

    // Password input field
    @FindBy(id = "password")
    WebElement passwordField;

    // Login button
    @FindBy(id = "login-button")
    WebElement loginButton;

    /**
     * Constructor to initialize web elements using PageFactory
     */
    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    /**
     * Performs login action using provided credentials
     * 
     * @param user Username for login
     * @param pass Password for login
     */
    public void login(String user, String pass){

        usernameField.sendKeys(user);
        passwordField.sendKeys(pass);
        loginButton.click();

    }
}