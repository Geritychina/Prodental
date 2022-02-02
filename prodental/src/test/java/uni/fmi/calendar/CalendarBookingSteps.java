package uni.fmi.calendar;

import static org.junit.Assert.assertEquals;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import cucumber.api.Format;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalendarBookingSteps {

	private CalendarBookingModel model,date;
	

	@Given("^Потребителят отваря екрана за запазване на час$")
	public void openBookingScreen() throws Throwable {
	    model = new CalendarBookingModel();
	}

	@When("^Въведе \"([^\"]*)\" е-поща$")
	public void addEmail(final String email) throws Throwable {
	    model.setEmail(email);
	}

	@When("^избере \"([^\"]*)\"$")
	public void addDate( final String arg1) throws Throwable {
	   date = new CalendarBookingModel();
	   DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss a");
	   String time1 = "2019-03-27 10:15:30 AM";
	   LocalDateTime localTimeObj = LocalDateTime.parse(time1, formatter);
	   model.setDate(arg1);
	  model.setHour("10:10:35 АМ");
	   
	}

	
	@When("^и натисне бутона за запазване на час$")
	public void clickReserveBtn() throws Throwable {
	    model.clickReserveBtn();
	}

	@Then("^Вижда съобщение \"([^\"]*)\"$")
	public void checkMessage(final String expectedMsg) throws Throwable {
	    assertEquals(expectedMsg, model.getMessage());
	}
	
	
	@When("^избере заета дата и час$")
	public void chooseBusyDate() throws Throwable {
		assertEquals("Часът е зает!", model.getMessage());
	}
	

	@When("^избере  \"([^\"]*)\";$")
	public void addDateHour(final String dateHour) throws Throwable {
	    model.setDate(dateHour);
	}

	@When("^не избере \"([^\"]*)\"$")
	public void addNullDate(final String missingDate) throws Throwable {
	    model.setDate(missingDate);
	}


}
