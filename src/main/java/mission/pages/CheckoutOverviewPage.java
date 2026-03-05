package mission.pages;

import mission.BasePage;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Page Object class representing the Checkout Overview Page.
 * This page displays the final order summary including item total and tax.
 */
public class CheckoutOverviewPage extends BasePage {

    // Label displaying total price of items
    @FindBy(className = "summary_subtotal_label")
    WebElement itemTotalLabel;

    // Label displaying tax amount
    @FindBy(className = "summary_tax_label")
    WebElement taxLabel;

    /**
     * Constructor to initialize PageFactory elements
     */
    public CheckoutOverviewPage() {
        PageFactory.initElements(driver, this);
    }

    /**
     * Retrieves the total price of items displayed on the overview page
     * 
     * @return item total value
     */
    public double getItemTotalDisplayed() {

        String text = itemTotalLabel.getText();
        return Double.parseDouble(text.replace("Item total: $",""));

    }

    /**
     * Retrieves the tax value displayed on the overview page
     * 
     * @return tax value
     */
    public double getTaxDisplayed() {

        String text = taxLabel.getText();
        return Double.parseDouble(text.replace("Tax: $",""));

    }

}