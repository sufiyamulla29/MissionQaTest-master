package mission;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import io.restassured.response.Response;
import mission.api.ReqResAPI;
import java.util.List;
import java.util.Map;
import org.testng.Assert;

public class APISteps {

	private Response response;

    @Given("^I get the default list of users for on 1st page$")
    public void iGetTheDefaultListofusers() {
    	
    	response = ReqResAPI.getUsers(1);
    }

    @When("I get the list of all users within every page")
    public void iGetTheListOfAllUsers() {
    	
    	response = ReqResAPI.getUsers(2);
    }

    @Then("I should see total users count equals the number of user ids")
    public void iShouldMatchTotalCount() {
    	
    	System.out.println(response.asString());   //DEBUG
    	int total = response.jsonPath().getInt("per_page");
    	    List<Integer> ids = response.jsonPath().getList("data.id");

    	    Assert.assertEquals(ids.size(), total);
    }

    @Given("I make a search for user {int}")
    public void iMakeASearchForUser(Integer userId) {
    	
    	response = ReqResAPI.getUser(userId);
    }

    @Then("I should see the following user data")
    public void IShouldSeeFollowingUserData(DataTable dt) {
    	
    	Map<String,String> data = dt.asMaps().get(0);

        String expectedName = data.get("first_name");
        String expectedEmail = data.get("email");

        Assert.assertEquals(response.jsonPath().getString("data.first_name"), expectedName);
        Assert.assertEquals(response.jsonPath().getString("data.email"), expectedEmail);

    }

    @Then("I receive error code {int} in response")
    public void iReceiveErrorCodeInResponse(Integer responseCode) {
    	 
    	Assert.assertEquals(response.getStatusCode(), responseCode);
    }

    @Given("I create a user with following {word} {word}")
    public void iCreateUserWithFollowing(String username, String job) {
    	
    	response = ReqResAPI.createUser(username, job);
    }

    @Then("response should contain the following data")
    public void iReceiveErrorCodeInResponse(DataTable dt) {
    	 
    	Assert.assertNotNull(response.jsonPath().getString("id"));
    	Assert.assertNotNull(response.jsonPath().getString("createdAt"));

    }

    @Given("I login unsuccessfully with the following data")
    public void iLoginSuccesfullyWithFollowingData(DataTable dt) {
    	
    	Map<String,String> data = dt.asMaps().get(0);

        String email = data.get("Email");
        String password = data.get("Password");

        response = ReqResAPI.login(email, password);

    }

    @Given("^I wait for the user list to load$")
    public void iWaitForUserListToLoad() {
    	
    	 response = ReqResAPI.getUsers(1);

    }

    @Then("I should see that every user has a unique id")
    public void iShouldSeeThatEveryUserHasAUniqueID() {

    	List<Integer> ids = response.jsonPath().getList("data.id");

        Assert.assertTrue(ReqResAPI.areIdsUnique(ids));
    }

    @Then("^I should get a response code of (\\d+)$")
    public void iShouldGetAResponseCodeOf(int responseCode) {
    	
    	 Assert.assertEquals(response.getStatusCode(), responseCode);
    }

    @And("I should see the following response message:")
    public void iShouldSeeTheFollowingResponseMessage(DataTable dt) {
    	
    	 String expected = dt.asLists().get(0).get(0);
    	 String actual = response.getBody().asString();

    	 Assert.assertTrue(actual.contains("Missing password"));

    }
}
