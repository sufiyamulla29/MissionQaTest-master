package mission.pages;

import mission.BasePage;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Page Object class representing the Checkout Information Page.
 * This page allows users to enter personal information before
 * proceeding to the checkout overview.
 */
public class CheckoutPage extends BasePage {

    // First name input field
    @FindBy(id = "first-name")
    WebElement firstNameField;

    // Last name input field
    @FindBy(id = "last-name")
    WebElement lastNameField;

    // Postal code input field
    @FindBy(id = "postal-code")
    WebElement zipCodeField;

    // Continue button to proceed to overview page
    @FindBy(id = "continue")
    WebElement continueButton;

    /**
     * Constructor to initialize PageFactory elements
     */
    public CheckoutPage() {
        PageFactory.initElements(driver, this);
    }

    /**
     * Enters first name in checkout form
     */
    public void enterFirstName(String name){
        firstNameField.sendKeys(name);
    }

    /**
     * Enters last name in checkout form
     */
    public void enterLastName(String name){
        lastNameField.sendKeys(name);
    }

    /**
     * Enters postal code in checkout form
     */
    public void enterZip(String code){
        zipCodeField.sendKeys(code);
    }

    /**
     * Clicks continue button to move to checkout overview page
     */
    public void clickContinue(){
        continueButton.click();
    }

}