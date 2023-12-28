document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var helpdeskTable = document.getElementById('helpdesk-table');

    // Add event listener to the toggleButton
    toggleButton.addEventListener('change', function () {
        // Check if the toggleButton is checked
        if (toggleButton.checked) {
            // Hide columns 2, 3, 4, and 5
            hideColumns([1, 2, 3, 4]);
        } else {
            // Show all columns
            showAllColumns();
        }
    });

    // Function to hide specified columns
    function hideColumns(columnIndexes) {
        var rows = helpdeskTable.rows;

        for (var i = 0; i < rows.length; i++) {
            for (var j = 0; j < columnIndexes.length; j++) {
                rows[i].cells[columnIndexes[j]].classList.add('hide-column');
            }
        }
    }

    // Function to show all columns
    function showAllColumns() {
        var rows = helpdeskTable.rows;

        for (var i = 0; i < rows.length; i++) {
            for (var j = 0; j < rows[i].cells.length; j++) {
                rows[i].cells[j].classList.remove('hide-column');
            }
        }
    }
});
