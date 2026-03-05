package mission.api;

import io.restassured.response.Response;
import mission.LoadProp;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static io.restassured.RestAssured.given;

/**
 * ReqResAPI class provides reusable methods to interact with
 * the ReqRes API endpoints using RestAssured.
 *
 * This class acts as a service layer for API tests where
 * HTTP requests are constructed and executed.
 *
 * Configuration such as base URL and API key are read
 * from the properties file using the LoadProp utility.
 */
public class ReqResAPI {

    // Base URL of the API loaded from configuration file
    private static final String BASE_URL = LoadProp.getProperty("api.base.url");

    // API authentication key loaded from configuration file
    private static final String API_KEY = LoadProp.getProperty("api.key");

    /**
     * Sends a GET request to retrieve a list of users
     * for the specified page number.
     *
     * @param page page number for pagination
     * @return Response object containing API response
     */
    public static Response getUsers(int page) {

        return given()
                .baseUri(BASE_URL)
                .header("User-Agent", "Mozilla/5.0")
                .header("Accept", "application/json")
                .header("x-api-key", API_KEY)
                .queryParam("page", page)
                .when()
                .get("/users")
                .then()
                .extract()
                .response();
    }

    /**
     * Sends a GET request to retrieve details of a specific user
     * using the user ID.
     *
     * @param id user ID
     * @return Response object containing user details
     */
    public static Response getUser(int id) {

        return given()
                .baseUri(BASE_URL)
                .header("User-Agent", "Mozilla/5.0")
                .header("Accept", "application/json")
                .header("x-api-key", API_KEY)
                .when()
                .get("/users/" + id)
                .then()
                .extract()
                .response();
    }

    /**
     * Sends a POST request to create a new user.
     *
     * @param name name of the user
     * @param job job role of the user
     * @return Response object containing created user details
     */
    public static Response createUser(String name, String job) {

        // JSON request body for user creation
        String body = "{ \"name\": \"" + name + "\", \"job\": \"" + job + "\" }";

        return given()
                .baseUri(BASE_URL)
                .header("User-Agent", "Mozilla/5.0")
                .header("Content-Type", "application/json")
                .header("Accept", "application/json")
                .header("x-api-key", API_KEY)
                .body(body)
                .when()
                .post("/users")
                .then()
                .extract()
                .response();
    }

    /**
     * Sends a POST request to perform user login.
     *
     * If password is not provided, the request will be sent
     * with only the email field to simulate a negative scenario.
     *
     * @param email user email
     * @param password user password (optional)
     * @return Response object containing login result
     */
    public static Response login(String email, String password) {

        String body;

        // Build request body depending on whether password is provided
        if (password == null || password.isEmpty()) {
            body = "{ \"email\": \"" + email + "\" }";
        } else {
            body = "{ \"email\": \"" + email + "\", \"password\": \"" + password + "\" }";
        }

        return given()
                .baseUri(BASE_URL)
                .header("User-Agent", "Mozilla/5.0")
                .header("Content-Type", "application/json")
                .header("Accept", "application/json")
                .header("x-api-key", API_KEY)
                .body(body)
                .when()
                .post("/login")
                .then()
                .extract()
                .response();
    }

    /**
     * Utility method to verify that all user IDs in a list are unique.
     *
     * This method converts the list into a Set which removes duplicates.
     * If the size remains the same, it means all IDs are unique.
     *
     * @param ids list of user IDs
     * @return true if all IDs are unique, otherwise false
     */
    public static boolean areIdsUnique(List<Integer> ids) {

        Set<Integer> unique = new HashSet<>(ids);
        return ids.size() == unique.size();
    }
}