package mission;

import org.openqa.selenium.WebDriver;

/**
 * BasePage serves as the parent class for all Page Object classes.
 *
 * It contains the shared WebDriver instance that is used across
 * all pages in the automation framework.
 *
 * By extending this class, all page classes can directly access
 * the driver without needing to initialize it separately.
 */
public class BasePage {

    /**
     * Shared WebDriver instance used by all page classes.
     * The driver is initialized in the test setup before
     * executing any test steps.
     */
    public static WebDriver driver;
}