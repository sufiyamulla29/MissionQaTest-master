$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("API-Test.feature");
formatter.feature({
  "line": 1,
  "name": "API test",
  "description": "",
  "id": "api-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4657112100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "# Please visit https://reqres.in/"
    }
  ],
  "line": 4,
  "name": "Should see LIST USERS of all existing users",
  "description": "",
  "id": "api-test;should-see-list-users-of-all-existing-users",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I get the default list of users for on 1st page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I get the list of all users within every page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see total users count equals the number of user ids",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.iGetTheDefaultListofusers()"
});
formatter.result({
  "duration": 104509900,
  "error_message": "java.lang.ExceptionInInitializerError\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n\tat ✽.Given I get the default list of users for on 1st page(API-Test.feature:5)\r\nCaused by: java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @726f3b58\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:353)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:329)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:277)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:179)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:173)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.iGetTheListOfAllUsers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.iShouldMatchTotalCount()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 596819000,
  "status": "passed"
});
formatter.before({
  "duration": 2149396800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Should see SINGLE USER data",
  "description": "",
  "id": "api-test;should-see-single-user-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I make a search for user 3",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I should see the following user data",
  "rows": [
    {
      "cells": [
        "first_name",
        "email"
      ],
      "line": 13
    },
    {
      "cells": [
        "Emma",
        "emma.wong@reqres.in"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "StepDefinition.iMakeASearchForUser(String)"
});
formatter.result({
  "duration": 795100,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n\tat ✽.Given I make a search for user 3(API-Test.feature:11)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @726f3b58 [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:353)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:329)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:277)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:179)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:173)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.IShouldSeeFollowingUserData(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 498066300,
  "status": "passed"
});
formatter.before({
  "duration": 2181684600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Should see SINGLE USER NOT FOUND error code",
  "description": "",
  "id": "api-test;should-see-single-user-not-found-error-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I make a search for user 55",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I receive error code 404 in response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "55",
      "offset": 25
    }
  ],
  "location": "StepDefinition.iMakeASearchForUser(String)"
});
formatter.result({
  "duration": 862100,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n\tat ✽.Given I make a search for user 55(API-Test.feature:18)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @726f3b58 [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:353)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:329)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:277)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:179)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:173)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 21
    }
  ],
  "location": "StepDefinition.iReceiveErrorCodeInResponse(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 802109400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I create a user with following \u003cName\u003e \u003cJob\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "response should contain the following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 25
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "api-test;create-a-user;",
  "rows": [
    {
      "cells": [
        "Name",
        "Job"
      ],
      "line": 28,
      "id": "api-test;create-a-user;;1"
    },
    {
      "cells": [
        "Peter",
        "Manager"
      ],
      "line": 29,
      "id": "api-test;create-a-user;;2"
    },
    {
      "cells": [
        "Liza",
        "Sales"
      ],
      "line": 30,
      "id": "api-test;create-a-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2211795200,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I create a user with following Peter Manager",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "response should contain the following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 25
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 31
    },
    {
      "val": "Manager",
      "offset": 37
    }
  ],
  "location": "StepDefinition.iCreateUserWithFollowing(String,String)"
});
formatter.result({
  "duration": 1021500,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n\tat ✽.Given I create a user with following Peter Manager(API-Test.feature:23)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @726f3b58 [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:353)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:329)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:277)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:179)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:173)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.iReceiveErrorCodeInResponse(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1188573200,
  "status": "passed"
});
formatter.before({
  "duration": 1820121200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I create a user with following Liza Sales",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "response should contain the following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 25
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Liza",
      "offset": 31
    },
    {
      "val": "Sales",
      "offset": 36
    }
  ],
  "location": "StepDefinition.iCreateUserWithFollowing(String,String)"
});
formatter.result({
  "duration": 799100,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n\tat ✽.Given I create a user with following Liza Sales(API-Test.feature:23)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @726f3b58 [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:353)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:329)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:277)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:179)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:173)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.iReceiveErrorCodeInResponse(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 827550600,
  "status": "passed"
});
formatter.before({
  "duration": 2277348200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "LOGIN - SUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---successful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I login unsuccessfully with the following data",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 35
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        "cityslicka"
      ],
      "line": 36
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I should get a response code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.iLoginSuccesfullyWithFollowingData(DataTable)"
});
formatter.result({
  "duration": 713700,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n\tat ✽.Given I login unsuccessfully with the following data(API-Test.feature:34)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @726f3b58 [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:353)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:329)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:277)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:179)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:173)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefinition.iShouldGetAResponseCodeOf(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 941762300,
  "status": "passed"
});
formatter.before({
  "duration": 2310477600,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "LOGIN - UNSUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---unsuccessful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "I login unsuccessfully with the following data",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 41
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        ""
      ],
      "line": 42
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I should get a response code of 400",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I should see the following response message:",
  "rows": [
    {
      "cells": [
        "\"error\": \"Missing password\""
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.iLoginSuccesfullyWithFollowingData(DataTable)"
});
formatter.result({
  "duration": 622300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n\tat ✽.Given I login unsuccessfully with the following data(API-Test.feature:40)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @726f3b58 [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:353)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:329)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:277)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:179)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:173)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefinition.iShouldGetAResponseCodeOf(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.iShouldSeeTheFollowingResponseMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 539899100,
  "status": "passed"
});
formatter.before({
  "duration": 2076389100,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Should see the list of users with DELAYED RESPONSE",
  "description": "",
  "id": "api-test;should-see-the-list-of-users-with-delayed-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "I wait for the user list to load",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I should see that every user has a unique id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.iWaitForUserListToLoad()"
});
formatter.result({
  "duration": 754900,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n\tat ✽.Given I wait for the user list to load(API-Test.feature:48)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @726f3b58 [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:353)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:329)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:277)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:179)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:173)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.iShouldSeeThatEveryUserHasAUniqueID()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 498720600,
  "status": "passed"
});
formatter.uri("SampleTest.feature");
formatter.feature({
  "line": 1,
  "name": "Sample Test",
  "description": "",
  "id": "sample-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2306599600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Sample",
  "description": "",
  "id": "sample-test;sample",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 888300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n\tat ✽.Given I am on the home page(SampleTest.feature:4)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @726f3b58 [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:353)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:329)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:277)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:179)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:173)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 544157800,
  "status": "passed"
});
formatter.uri("UI-Test.feature");
formatter.feature({
  "line": 1,
  "name": "Checkout items in the basket",
  "description": "Please use home page of https://www.saucedemo.com/",
  "id": "checkout-items-in-the-basket",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2444385700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Check item total cost and tax",
  "description": "",
  "id": "checkout-items-in-the-basket;check-item-total-cost-and-tax",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login in with the following details",
  "rows": [
    {
      "cells": [
        "userName",
        "Password"
      ],
      "line": 7
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add the following items to the basket",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 11
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 12
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 13
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I  should see 4 items added to the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify that the QTY count for each item should be 1",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I remove the following item:",
  "rows": [
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I  should see 3 items added to the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the CHECKOUT button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I type \"FirstName\" for First Name",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I type \"LastName\" for Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I type \"EC1A 9JU\" for ZIP/Postal Code",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on the CONTINUE button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Item total will be equal to the total of items on the list",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "a Tax rate of 8 % is applied to the total",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 712200,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n\tat ✽.Given I am on the home page(UI-Test.feature:5)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @726f3b58 [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:353)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:329)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:277)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:179)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:173)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat mission.RunnerTest.feature(RunnerTest.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:565)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:139)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:664)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:227)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:957)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:200)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:148)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1604)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:848)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:443)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:437)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:397)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:336)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1280)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1200)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1114)\r\n\tat org.testng.TestNG.run(TestNG.java:1082)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:293)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:91)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 545106500,
  "status": "passed"
});
});