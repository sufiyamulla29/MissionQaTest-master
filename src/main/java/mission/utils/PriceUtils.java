package mission.utils;

/**
 * Utility class for handling price related operations.
 *
 * This class provides helper methods to convert price text
 * retrieved from UI elements into numeric values that can be
 * used for calculations and validations in tests.
 */
public class PriceUtils {

    /**
     * Converts a price string into a numeric double value.
     *
     * Example:
     * Input  -> "$29.99"
     * Output -> 29.99
     *
     * This method removes the currency symbol and parses
     * the remaining value into a double.
     *
     * @param priceText price string captured from UI element
     * @return numeric value of the price
     */
    public static double parsePrice(String priceText) {

        // Example input: "$29.99"
        return Double.parseDouble(priceText.replace("$", ""));

    }

}