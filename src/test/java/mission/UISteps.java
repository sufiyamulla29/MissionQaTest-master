package mission;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebElement;

import org.testng.Assert;
import java.util.List;
import java.util.Map;

public class UISteps {

	iniClass pages = new iniClass();

    @Given("^I am on the home page$")
    public void iAmOnTheHomePage() {
        HomePage.homePage();
    }

    @Given("I login in with the following details")
    public void login(DataTable dt){

        List<Map<String,String>> data = dt.asMaps();

        iniClass.loginPage.login(
                data.get(0).get("userName"),
                data.get(0).get("Password")
        );
    }

    @Given("I add the following items to the basket")
    public void addItems(DataTable dt){

        List<String> items = dt.asList();

        for(String item : items){
            iniClass.inventoryPage.addItem(item);
        }
    }

    @And("I  should see {int} items added to the shopping cart")
    public void verifyCartCount(int count){

        int actual = iniClass.cartPage.getCartItemCount();
        Assert.assertEquals(actual,count,"Cart item count mismatch");

    }

    @And("I click on the shopping cart")
    public void openCart(){
        iniClass.cartPage.openCart();
    }

    @And("I remove the following item:")
    public void removeItem(DataTable dt){

        List<String> items = dt.asList();
        iniClass.cartPage.removeItem(items.get(0));

    }

    @And("I click on the CHECKOUT button")
    public void checkout(){
        iniClass.cartPage.clickCheckout();
    }

    @And("I type {string} for First Name")
    public void enterFirstName(String name){
        iniClass.checkoutPage.enterFirstName(name);
    }

    @And("I type {string} for Last Name")
    public void enterLastName(String name){
        iniClass.checkoutPage.enterLastName(name);
    }

    @And("I type {string} for ZIP\\/Postal Code")
    public void enterZip(String zip){
        iniClass.checkoutPage.enterZip(zip);
    }

    @When("I click on the CONTINUE button")
    public void continueCheckout(){
        iniClass.checkoutPage.clickContinue();
    }

    @Then("Item total will be equal to the total of items on the list")
    public void verifyItemTotal() {

        double calculatedTotal = iniClass.cartPage.getItemsTotalPrice();
        double displayedTotal = iniClass.overviewPage.getItemTotalDisplayed();

        Assert.assertEquals(displayedTotal, calculatedTotal, 0.01);
    }

    @And("a Tax rate of {int} % is applied to the total")
    public void verifyTax(int taxPercent) {

        double total = iniClass.overviewPage.getItemTotalDisplayed();
        double taxDisplayed = iniClass.overviewPage.getTaxDisplayed();

        double expectedTax = total * taxPercent / 100;

        Assert.assertEquals(taxDisplayed, expectedTax, 0.01);
    }

    @And("I verify that the QTY count for each item should be {int}")
    public void verifyItemQuantity(Integer qty) {

        boolean result = iniClass.cartPage.verifyAllItemQuantities(qty);

        Assert.assertTrue(result, "Item quantity mismatch in cart");
    }
}