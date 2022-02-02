$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/calendar/Calendar.feature");
formatter.feature({
  "line": 1,
  "name": "Валидиране на чaс в календар",
  "description": "",
  "id": "валидиране-на-чaс-в-календар",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.match({
  "location": "CalendarBookingSteps.openBookingScreen()"
});
formatter.result({
  "duration": 90644000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Запазване на час при зъболекар с верни данни",
  "description": "",
  "id": "валидиране-на-чaс-в-календар;запазване-на-час-при-зъболекар-с-верни-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Въведе \"gerity59@gmail.com\" е-поща",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "избере \"20-20-2022\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "и натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение \"Успешно запазихте час!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "gerity59@gmail.com",
      "offset": 8
    }
  ],
  "location": "CalendarBookingSteps.addEmail(String)"
});
formatter.result({
  "duration": 2267800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20-20-2022",
      "offset": 8
    }
  ],
  "location": "CalendarBookingSteps.addDate(String)"
});
formatter.result({
  "duration": 67500300,
  "status": "passed"
});
formatter.match({
  "location": "CalendarBookingSteps.clickReserveBtn()"
});
formatter.result({
  "duration": 567400,
  "error_message": "java.time.format.DateTimeParseException: Text \u002720-20-2022 10:10:35 АМ\u0027 could not be parsed at index 0\r\n\tat java.time.format.DateTimeFormatter.parseResolved0(Unknown Source)\r\n\tat java.time.format.DateTimeFormatter.parse(Unknown Source)\r\n\tat java.time.LocalDateTime.parse(Unknown Source)\r\n\tat uni.fmi.calendar.CalendarBookingService.bookHour(CalendarBookingService.java:22)\r\n\tat uni.fmi.calendar.CalendarBookingModel.clickReserveBtn(CalendarBookingModel.java:26)\r\n\tat uni.fmi.calendar.CalendarBookingSteps.clickReserveBtn(CalendarBookingSteps.java:42)\r\n\tat ✽.And и натисне бутона за запазване на час(uni/fmi/calendar/Calendar.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно запазихте час!",
      "offset": 17
    }
  ],
  "location": "CalendarBookingSteps.checkMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.match({
  "location": "CalendarBookingSteps.openBookingScreen()"
});
formatter.result({
  "duration": 34300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Запазване на час при зъболекар с грешни данни",
  "description": "",
  "id": "валидиране-на-чaс-в-календар;запазване-на-час-при-зъболекар-с-грешни-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Въведе \"MissingEmail\" е-поща",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "избере \"20-20-2022\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "и натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Вижда съобщение \"Грешни данни!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "MissingEmail",
      "offset": 8
    }
  ],
  "location": "CalendarBookingSteps.addEmail(String)"
});
formatter.result({
  "duration": 51800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20-20-2022",
      "offset": 8
    }
  ],
  "location": "CalendarBookingSteps.addDate(String)"
});
formatter.result({
  "duration": 653100,
  "status": "passed"
});
formatter.match({
  "location": "CalendarBookingSteps.clickReserveBtn()"
});
formatter.result({
  "duration": 426700,
  "error_message": "java.time.format.DateTimeParseException: Text \u002720-20-2022 10:10:35 АМ\u0027 could not be parsed at index 0\r\n\tat java.time.format.DateTimeFormatter.parseResolved0(Unknown Source)\r\n\tat java.time.format.DateTimeFormatter.parse(Unknown Source)\r\n\tat java.time.LocalDateTime.parse(Unknown Source)\r\n\tat uni.fmi.calendar.CalendarBookingService.bookHour(CalendarBookingService.java:22)\r\n\tat uni.fmi.calendar.CalendarBookingModel.clickReserveBtn(CalendarBookingModel.java:26)\r\n\tat uni.fmi.calendar.CalendarBookingSteps.clickReserveBtn(CalendarBookingSteps.java:42)\r\n\tat ✽.And и натисне бутона за запазване на час(uni/fmi/calendar/Calendar.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Грешни данни!",
      "offset": 17
    }
  ],
  "location": "CalendarBookingSteps.checkMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.match({
  "location": "CalendarBookingSteps.openBookingScreen()"
});
formatter.result({
  "duration": 44300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Запазване на час при зъболекар с заета дата",
  "description": "",
  "id": "валидиране-на-чaс-в-календар;запазване-на-час-при-зъболекар-с-заета-дата",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Въведе \"gerity59@gmail.com\" е-поща",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "избере \"BusyDate\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "и натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Вижда съобщение \"Часът е зает!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "gerity59@gmail.com",
      "offset": 8
    }
  ],
  "location": "CalendarBookingSteps.addEmail(String)"
});
formatter.result({
  "duration": 52600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BusyDate",
      "offset": 8
    }
  ],
  "location": "CalendarBookingSteps.addDate(String)"
});
formatter.result({
  "duration": 171200,
  "status": "passed"
});
formatter.match({
  "location": "CalendarBookingSteps.clickReserveBtn()"
});
formatter.result({
  "duration": 147300,
  "error_message": "java.time.format.DateTimeParseException: Text \u0027BusyDate 10:10:35 АМ\u0027 could not be parsed at index 0\r\n\tat java.time.format.DateTimeFormatter.parseResolved0(Unknown Source)\r\n\tat java.time.format.DateTimeFormatter.parse(Unknown Source)\r\n\tat java.time.LocalDateTime.parse(Unknown Source)\r\n\tat uni.fmi.calendar.CalendarBookingService.bookHour(CalendarBookingService.java:22)\r\n\tat uni.fmi.calendar.CalendarBookingModel.clickReserveBtn(CalendarBookingModel.java:26)\r\n\tat uni.fmi.calendar.CalendarBookingSteps.clickReserveBtn(CalendarBookingSteps.java:42)\r\n\tat ✽.And и натисне бутона за запазване на час(uni/fmi/calendar/Calendar.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Часът е зает!",
      "offset": 17
    }
  ],
  "location": "CalendarBookingSteps.checkMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.match({
  "location": "CalendarBookingSteps.openBookingScreen()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Запазване на час при зъболекар с невалидна дата и час",
  "description": "",
  "id": "валидиране-на-чaс-в-календар;запазване-на-час-при-зъболекар-с-невалидна-дата-и-час",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "Въведе \"gerity59@gmail.com\" е-поща",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "избере  \"2233-02-31\";",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "и натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Вижда съобщение \"Невалидни дата и час!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "gerity59@gmail.com",
      "offset": 8
    }
  ],
  "location": "CalendarBookingSteps.addEmail(String)"
});
formatter.result({
  "duration": 51900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2233-02-31",
      "offset": 9
    }
  ],
  "location": "CalendarBookingSteps.addDateHour(String)"
});
formatter.result({
  "duration": 87600,
  "status": "passed"
});
formatter.match({
  "location": "CalendarBookingSteps.clickReserveBtn()"
});
formatter.result({
  "duration": 93300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалидни дата и час!",
      "offset": 17
    }
  ],
  "location": "CalendarBookingSteps.checkMessage(String)"
});
formatter.result({
  "duration": 2381800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cНе[валидни дата и] час!\u003e but was:\u003cНе[успешно запазен] час!\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uni.fmi.calendar.CalendarBookingSteps.checkMessage(CalendarBookingSteps.java:47)\r\n\tat ✽.Then Вижда съобщение \"Невалидни дата и час!\"(uni/fmi/calendar/Calendar.feature:29)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.match({
  "location": "CalendarBookingSteps.openBookingScreen()"
});
formatter.result({
  "duration": 79400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Запазване на час при зъболекар с празна дата",
  "description": "",
  "id": "валидиране-на-чaс-в-календар;запазване-на-час-при-зъболекар-с-празна-дата",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "Въведе \"gerity59@gmail.com\" е-поща",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "не избере \"MissingDate\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "и натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Вижда съобщение \"Неуспешно запазен час!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "gerity59@gmail.com",
      "offset": 8
    }
  ],
  "location": "CalendarBookingSteps.addEmail(String)"
});
formatter.result({
  "duration": 201800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MissingDate",
      "offset": 11
    }
  ],
  "location": "CalendarBookingSteps.addNullDate(String)"
});
formatter.result({
  "duration": 93700,
  "status": "passed"
});
formatter.match({
  "location": "CalendarBookingSteps.clickReserveBtn()"
});
formatter.result({
  "duration": 43200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неуспешно запазен час!",
      "offset": 17
    }
  ],
  "location": "CalendarBookingSteps.checkMessage(String)"
});
formatter.result({
  "duration": 68100,
  "status": "passed"
});
});