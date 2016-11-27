$(document).ready(function () {
    var objects = $('#hours_1, #minutes_1, #seconds_1, #hours_2, #minutes_2, #seconds_2, #minutes_3, #seconds_3, #hours_3, #minutes_4, #seconds_4, #hours_4, #minutes_5, #seconds_5, #hours_5, #minutes_6, #seconds_6, #hours_6, #minutes_7, #seconds_7')
    update_clock();
    setInterval(function () {
        update_clock();
    }, 1000)

    function update_clock() {
        objects.removeClass('active');
        var date = new Date();
        var hours_1 = date.getHours().toString().length == 1 ? '0' : date.getHours().toString()[0];
        var hours_2 = date.getHours().toString().length == 1 ? date.getHours().toString()[0] : date.getHours().toString()[1];
        var minutes_1 = date.getMinutes().toString().length == 1 ? '0' : date.getMinutes().toString()[0];
        var minutes_2 = date.getMinutes().toString().length == 1 ? date.getMinutes().toString()[0] : date.getMinutes().toString()[1];
        var seconds_1 = date.getSeconds().toString().length == 1 ? '0' : date.getSeconds().toString()[0];
        var seconds_2 = date.getSeconds().toString().length == 1 ? date.getSeconds().toString()[0] : date.getSeconds().toString()[1];
        switch(hours_1){
            case '0' :
                break;
            case '1': $('#hours_1').addClass('active');
                break;
            case '2': $('#hours_2').addClass('active');
                break;
        }
        switch(hours_2){
            case '0': break;
            case '1': $('#hours_3').addClass('active');break;
            case '2': $('#hours_4').addClass('active');break;
            case '3': $('#hours_3').addClass('active'); $('#hours_4').addClass('active');break;
            case '4': $('#hours_5').addClass('active');break;
            case '5': $('#hours_5').addClass('active');$('#hours_3').addClass('active');break;
            case '6': $('#hours_5').addClass('active');$('#hours_4').addClass('active');break;
            case '7': $('#hours_5').addClass('active');$('#hours_4').addClass('active');$('#hours_3').addClass('active');break;
            case '8': $('#hours_6').addClass('active');break;
            case '9': $('#hours_6').addClass('active'); $('#hours_3').addClass('active');break;
        }

        switch(minutes_1){
            case '0': break;
            case '1': $('#minutes_1').addClass('active');break;
            case '2': $('#minutes_2').addClass('active');break;
            case '3': $('#minutes_1').addClass('active'); $('#minutes_2').addClass('active');break;
            case '4': $('#minutes_3').addClass('active');break;
            case '5': $('#minutes_3').addClass('active');$('#minutes_1').addClass('active');break;
        }
        switch(minutes_2){
            case '0': break;
            case '1': $('#minutes_4').addClass('active');break;
            case '2': $('#minutes_5').addClass('active');break;
            case '3': $('#minutes_4').addClass('active');$('#minutes_5').addClass('active');break;
            case '4': $('#minutes_6').addClass('active');break;
            case '5': $('#minutes_6').addClass('active');$('#minutes_4').addClass('active');break;
            case '6': $('#minutes_6').addClass('active');$('#minutes_5').addClass('active');break;
            case '7': $('#minutes_6').addClass('active');$('#minutes_5').addClass('active');$('#minutes_4').addClass('active');break;
            case '8': $('#minutes_7').addClass('active');break;
            case '9': $('#minutes_7').addClass('active');$('#minutes_4').addClass('active');break;
        }
        switch(seconds_1){
            case '0': break;
            case '1': $('#seconds_1').addClass('active');break;
            case '2': $('#seconds_2').addClass('active');break;
            case '3': $('#seconds_1').addClass('active');$('#seconds_2').addClass('active');break;
            case '4': $('#seconds_3').addClass('active');break;
            case '5': $('#seconds_3').addClass('active');$('#seconds_1').addClass('active');break;
        }
        switch(seconds_2){
            case '0': break;
            case '1': $('#seconds_4').addClass('active');break;
            case '2': $('#seconds_5').addClass('active');break;
            case '3': $('#seconds_4').addClass('active');$('#seconds_5').addClass('active');break;
            case '4': $('#seconds_6').addClass('active');break;
            case '5': $('#seconds_6').addClass('active');$('#seconds_4').addClass('active');break;
            case '6': $('#seconds_6').addClass('active');$('#seconds_5').addClass('active');break;
            case '7': $('#seconds_6').addClass('active');$('#seconds_5').addClass('active');$('#seconds_4').addClass('active');break;
            case '8': $('#seconds_7').addClass('active');break;
            case '9': $('#seconds_7').addClass('active');$('#seconds_4').addClass('active');break;
        }
    }
})
