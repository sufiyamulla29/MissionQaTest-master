package mission;

/**
 * HomePage class represents the landing page of the application.
 * 
 * This class is responsible for navigating to the application URL.
 * The URL is retrieved from the configuration properties file using
 * the LoadProp utility class.
 * 
 * All page classes extend BasePage so they can access the shared
 * WebDriver instance.
 */
public class HomePage extends BasePage {

    /**
     * Navigates the browser to the application's home page.
     * The URL is read from the configuration file.
     */
    public static void homePage() {
        driver.get(LoadProp.getProperty("url"));
    }
}