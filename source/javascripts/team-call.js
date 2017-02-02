$(function () {
  var tcData = {
      main: {
          "hour": 08,
          "minute": 30,
          "duration": 30,
          "dayS": "Monday",
          "dayE": "Thursday",
          "originTz": "America/Los_Angeles"
      },
      apac: {
          "hour": 18,
          "minute": 30,
          "duration": 30,
          "dayS": "Monday",
          "originTz": "America/Los_Angeles"
      }
  };


  function setTimeDate(tcData) {
      var now = moment().tz(tcData.originTz);
      var pstTime = now.set({
          'day': tcData.dayS,
          'hour': tcData.hour,
          'minute': tcData.minute,
          'second': 0
      });

      var userTime = moment.tz(pstTime, moment.tz.guess()),
          utcTime = moment.utc(pstTime),
          timezones = {
              PST: pstTime,
              UTC: utcTime,
              USER: userTime
          };

      for (tz in timezones) {
          var cTZ = timezones[tz]

          var startT = cTZ.format('hh:mm a')
          var endT = cTZ.add(tcData.duration, 'm').format('hh:mm a')
          var startD = cTZ.format('dddd')
          var endD = endDayHelper(cTZ, tz, pstTime)

          $("#" + timezone + "-" + "abbr").html(cTZ.zoneAbbr());
          $("#" + timezone + "-" + tz).html(startT + " to " + endT + " - " + startD + (timezone === "main" ? " to " + endD : ""))
      }
  }

  function endDayHelper(timezone, tz, pstTime) {
      return {
          'PST': moment(timezone).day(tcData.main.dayE).format('dddd'),
          'UTC': moment(timezone).utc().day(tcData.main.dayE).format('dddd'),
          'USER': moment.tz(moment(pstTime).day(tcData.main.dayE), moment.tz.guess()).format('dddd')
      }[tz];
  }

  for (timezone in tcData) {
      setTimeDate(tcData[timezone]);
  }
});