
// To make it generalize, settings object is used.
var settings = {
               rows: 5,                           // rows: total number of rows of seats.
               cols: 15,                          // cols: total number of seats in each row.
               rowCssPrefix: 'row-',              // rowCssPrefix: will be used to customize row layout using (rowCssPrefix + row number) css class.
               colCssPrefix: 'col-',              // colCssPrefix: will be used to customize column using (colCssPrefix + column number) css class.
               seatWidth: 55,                     // seatWidth: width of seat.
               seatHeight: 55,                    // seatHeight: height of seat.
               seatCss: 'seat',                   //seatCss: css class of seat.
               selectedSeatCss: 'selectedSeat',   //selectedSeatCss: css class of already booked seats.
               selectingSeatCss: 'selectingSeat'  //selectingSeatCss: css class of selected seats
           };


//create basic layout of seats.
var init = function (reservedSeat) {
                var str = [], seatNo, className;
                for (i = 0; i < settings.rows; i++) {
                    for (j = 0; j < settings.cols; j++) {
                        seatNo = (i + j * settings.rows + 1);
                        className = settings.seatCss + ' ' + settings.rowCssPrefix + i.toString() + ' ' + settings.colCssPrefix + j.toString();
                        if ($.isArray(reservedSeat) && $.inArray(seatNo, reservedSeat) != -1) {
                            className += ' ' + settings.selectedSeatCss;
                        }
                        str.push('<li class="' + className + '"' +
                                  'style="top:' + (i * settings.seatHeight).toString() + 'px;left:' + (j * settings.seatWidth).toString() + 'px">' +
                                  '<a title="' + seatNo + '">' + seatNo + '</a>' +
                                  '</li>');
                    }
                }
                $('#place').html(str.join(''));
            };
            //case I: Show from starting
            //init();

            //Case II: If already booked
            var bookedSeats = [5, 10, 25];
            init(bookedSeats);
//init method is used to draw seats layout. Already booked
//seats array will be passed as argument of this method.


//When user clicks on available seat, it is selected and
//second click on same seat will unselect seat. Button “Show All” will show all booked seat numbers and “Show Selected Seats” will show selected seats only.

$('.' + settings.seatCss).on('click', function () {
if ($(this).hasClass(settings.selectedSeatCss)){
    alert('This seat is already reserved');
}
else{
    $(this).toggleClass(settings.selectingSeatCss);
    }
});



$('#btnShowNew').on('click', function () {

    var str = [], item;
    var seatNo = $.each($('#place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
        item = $(this).attr('title');
        str.push(item);

    });
    var $inputFname = $('#fname').val();
    var $inputLname = $('#lname').val();
    if ($inputFname.length===0){
      alert('Please fill in your First Name');
    }
    else if ($inputLname.length===0){
      alert("Please fill in your Last Name");
    }
    else if (seatNo.length===0){
      alert("Please select your seat(s)");
    }
    else {
    alert('Thank you ' + $inputFname + " " + $inputLname + ' you have researved seat(s) ' + str.join(', '));
    };
});


// testing, testing. Branch example. -shelby
