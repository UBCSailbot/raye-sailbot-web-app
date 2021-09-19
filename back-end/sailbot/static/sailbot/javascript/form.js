function GetEdit(type, sensorID) {
    console.log(type);
    var param = new Object();
    param.type = type;
    param.sensorID = sensorID;
    $.ajax({
        type: "GET",
        url: "",
        contentType: "application/json; charset=utf-8",
        dataType: "html",
        data: $.param(param),
        success: function (data) {
            // Update form with data
        },
        error: function (data) {
           // Update show error
        }
    });
}
