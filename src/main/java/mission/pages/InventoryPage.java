package mission.pages;

import mission.BasePage;
import mission.utils.WaitUtils;
import org.openqa.selenium.By;

/**
 * Page Object representing Inventory / Products page.
 * Allows adding products to cart dynamically.
 */
public class InventoryPage extends BasePage {

    public void addItem(String itemName) {

        By addButton = By.xpath(
            "//div[text()='" + itemName + "']/ancestor::div[@class='inventory_item']//button"
        );

        WaitUtils.waitForClickable(addButton).click();
    }
}