// Variable to store the various keys and values for each business hour
var businessHours = [
    {
        id: "0",
        milTime: "09",
        hour: "09",
        timeOfDay: "am",
    },
    {
        id: "1",
        milTime: "10",
        hour: "10",
        timeOfDay: "am",
    },
    {
        id: "2",
        milTime: "11",
        hour: "11",
        timeOfDay: "am",
    },
    {
        id: "3",
        milTime: "12",
        hour: "12",
        timeOfDay: "pm",
    },
    {
        id: "4",
        milTime: "13",
        hour: "01",
        timeOfDay: "pm",
    },
    {
        id: "5",
        milTime: "14",
        hour: "02",
        timeOfDay: "pm",
    },
    {
        id: "6",
        milTime: "15",
        hour: "03",
        timeOfDay: "pm",
    },
    {
        id: "7",
        milTime: "16",
        hour: "04",
        timeOfDay: "pm"
    },
    {
        id: "8",
        milTime: "17",
        hour: "05",
        timeOfDay: "pm",
    },
    
]

// Creates elements for each part of the planner
businessHours.forEach(function(currentHour) {

    // Creates box where the hours show up
    var hoursBox = $("<div>")
        .text(`${currentHour.hour}${currentHour.timeOfDay}`)
        .attr({"class": "col-lg-2 hour" });

    // Makes hours row
    var hoursRow = $("<form>").attr({"class": "row"});
    $(".container").append(hoursRow);})