package mission;

import mission.pages.LoginPage;
import mission.pages.InventoryPage;
import mission.pages.CartPage;
import mission.pages.CheckoutPage;
import mission.pages.CheckoutOverviewPage;

/**
 * iniClass acts as a central place to initialize all page objects.
 * Step definition classes can access these objects instead of
 * creating new instances repeatedly.
 */
public class iniClass {

    public static LoginPage loginPage;
    public static InventoryPage inventoryPage;
    public static CartPage cartPage;
    public static CheckoutPage checkoutPage;
    public static CheckoutOverviewPage overviewPage;

    public iniClass() {

        loginPage = new LoginPage();
        inventoryPage = new InventoryPage();
        cartPage = new CartPage();
        checkoutPage = new CheckoutPage();
        overviewPage = new CheckoutOverviewPage();
    }
}