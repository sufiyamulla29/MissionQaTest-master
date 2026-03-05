package mission.utils;

import mission.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

/**
 * Utility class providing reusable explicit wait methods
 * for synchronization in Selenium tests.
 */
public class WaitUtils extends BasePage {

    /**
     * Waits until element located by locator becomes clickable
     */
    public static WebElement waitForClickable(By locator) {

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        return wait.until(ExpectedConditions.elementToBeClickable(locator));

    }

    /**
     * Waits until element becomes visible using locator
     */
    public static WebElement waitForVisible(By locator) {

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));

    }

    /**
     * Waits until element becomes visible using WebElement
     */
    public static WebElement waitForVisible(WebElement element) {

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        return wait.until(ExpectedConditions.visibilityOf(element));

    }

    /**
     * Waits until text is present inside an element
     */
    public static void waitForText(By locator, String text) {

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.textToBePresentInElementLocated(locator, text));

    }
}