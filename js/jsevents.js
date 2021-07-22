$(document).ready(function() {
    $('#myModal').on('shown.bs.modal', function(e) {
        $('#contactomodal').prop('disabled', true);
    });

    $('#myModal').on('hidden.bs.modal', function(e) {
        $('#contactomodal').prop('disabled', false);
    });
});