package mission;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

import java.text.MessageFormat;

/**
 * BrowserSetup class is responsible for initializing the WebDriver
 * based on the browser specified in the configuration file.
 *
 * The browser type is retrieved using the LoadProp utility class.
 * This class supports multiple browser executions including:
 *
 * - Chrome
 * - Edge
 * - Firefox
 * - Chrome Headless
 * - API mode (no browser)
 *
 * It uses WebDriverManager to automatically download and manage
 * the appropriate browser driver binaries.
 */
public class BrowserSetup extends BasePage {

    /**
     * Stores the browser name read from configuration
     */
    public static String browser = null;

    /**
     * Initializes the WebDriver based on the browser value
     * defined in the configuration properties file.
     *
     * Supported values:
     * Chrome
     * Edge
     * Firefox
     * chromeHeadless
     * api
     */
    public void selectBrowser() {

        // Read browser value from configuration file
        browser = LoadProp.getProperty("Browser");

        if (browser.equalsIgnoreCase("Chrome")) {

            // Setup Chrome driver using WebDriverManager
            WebDriverManager.chromedriver().setup();

            // Print driver location for debugging purposes
            System.out.println("Driver location: " + System.getProperty("webdriver.chrome.driver"));

            // Launch Chrome browser
            driver = new ChromeDriver();

        } else if (browser.equalsIgnoreCase("edge")) {

            // Setup and launch Edge browser
            WebDriverManager.edgedriver().setup();
            driver = new EdgeDriver();

        } else if (browser.equalsIgnoreCase("Firefox")) {

            // Setup and launch Firefox browser
            WebDriverManager.firefoxdriver().setup();
            driver = new FirefoxDriver();

        } else if (browser.equalsIgnoreCase("chromeHeadless")) {

            // Configure Chrome to run in headless mode
            ChromeOptions chromeOptions = new ChromeOptions();
            chromeOptions.addArguments("--headless");

            WebDriverManager.chromedriver().setup();

            // Launch Chrome in headless mode
            driver = new ChromeDriver(chromeOptions);

        } else if (browser.equalsIgnoreCase("api")) {

            // No browser initialization required for API testing

        } else {

            // Fail the test if an unsupported browser is provided
            Assert.fail(MessageFormat.format("Wrong Browser: {0}", browser));

        }
    }
}