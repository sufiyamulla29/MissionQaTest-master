package mission;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

/**
 * LoadProp is a utility class responsible for reading configuration
 * values from the TestData.properties file.
 *
 * It provides a reusable method to retrieve property values
 * such as URLs, browser configuration, API keys, and other
 * environment-specific settings used in the automation framework.
 */
public class LoadProp extends BasePage {

    // Properties object used to store key-value pairs from the properties file
    static Properties prop;

    // Input stream used to read the properties file
    static FileInputStream input;

    // Relative path to the properties file containing test data and configuration
    public static String testData = "/src/test/java/TestData/TestData.properties";

    // Gets the current project directory path
    private static File currentDirectory = new File(new File("").getAbsolutePath());


    /**
     * Retrieves the value associated with the specified key
     * from the properties file.
     *
     * Example:
     * key = "url"
     * value returned = "https://example.com"
     *
     * @param key property key to retrieve from the configuration file
     * @return value corresponding to the provided key
     */
    public static String getProperty(String key) {

        // Initialize properties object
        prop = new Properties();

        try {

            // Open the properties file
            input = new FileInputStream(currentDirectory + testData);

            // Load properties from the file
            prop.load(input);

            // Close the file input stream
            input.close();

        } catch (IOException e) {

            // Print stack trace if file loading fails
            e.printStackTrace();
        }

        // Return the value corresponding to the requested key
        return prop.getProperty(key);
    }
}