package mission.pages;

import mission.BasePage;
import mission.utils.WaitUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

/**
 * Page Object class representing the Cart Page.
 * Contains elements and actions related to cart operations
 * such as viewing items, removing items, verifying quantities
 * and calculating total price.
 */
public class CartPage extends BasePage {

    // Cart icon in the header
    @FindBy(className = "shopping_cart_link")
    WebElement cartIcon;

    // List of items present in the cart
    @FindBy(className = "cart_item")
    List<WebElement> cartItems;

    // Checkout button
    @FindBy(id = "checkout")
    WebElement checkoutButton;

    // Prices of items present in the cart
    @FindBy(className = "inventory_item_price")
    List<WebElement> itemPrices;

    // Cart badge showing number of items in cart
    @FindBy(className = "shopping_cart_badge")
    WebElement cartBadge;

    // Quantity of each cart item
    @FindBy(className = "cart_quantity")
    List<WebElement> itemQuantities;

    /**
     * Constructor to initialize PageFactory elements
     */
    public CartPage() {
        PageFactory.initElements(driver, this);
    }

    /**
     * Opens the cart page by clicking the cart icon
     */
    public void openCart(){
        cartIcon.click();
    }

    /**
     * Clicks checkout button to proceed to checkout page
     */
    public void clickCheckout(){
        checkoutButton.click();
    }

    /**
     * Removes a specific item from the cart
     * 
     * @param item Name of the item to remove
     */
    public void removeItem(String item){

        String xpath =
        "//div[text()='"+item+"']/ancestor::div[@class='cart_item']//button";

        driver.findElement(org.openqa.selenium.By.xpath(xpath)).click();

    }

    /**
     * Returns the number of items currently present in the cart badge
     */
    public int getCartItemCount() {

        try {
            WaitUtils.waitForVisible(cartBadge);

            String count = cartBadge.getText();
            return Integer.parseInt(count);

        } catch (Exception e) {
            return 0;
        }

    }

    /**
     * Verifies whether all items in the cart have the expected quantity
     * 
     * @param expectedQty expected quantity for each cart item
     * @return true if all quantities match expected value
     */
    public boolean verifyAllItemQuantities(int expectedQty) {

        for (WebElement q : itemQuantities) {

            int actual = Integer.parseInt(q.getText());

            if (actual != expectedQty) {
                return false;
            }
        }

        return true;
    }

    /**
     * Calculates the total price of all items present in the cart
     * 
     * @return total price of items
     */
    public double getItemsTotalPrice() {

        double total = 0;

        for (WebElement price : itemPrices) {

            String priceText = price.getText();
            double value = Double.parseDouble(priceText.replace("$",""));
            total += value;

        }

        return total;

    }

}