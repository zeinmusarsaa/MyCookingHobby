$(document).ready(function () {
    $('#calculateButton').click(function () {
        var hours = $('#hoursInput').val();
        var rate = $('#rate').val();
        if (hours > 0) {
            var total = hours * rate;
            $('#totalOutput').val(total.toFixed(2));
        } else {
            alert('Please enter a positive number for hours.');
        }
    });
    $('#backButton').click(function () {
        window.location.href = '/';
    });
});
