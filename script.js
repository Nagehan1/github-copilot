// on window load
window.onload = function() {
    //create chart js bar chart for id myChart
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        // type of chart
        type: 'bar',
        // data for chart
        data: {
            // labels for x axis
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            // datasets for y axis
            datasets: [{
                // label for data

                label: '# of Votes',

                // data for y axis
                data: [12, 19, 3, 5, 2, 3],
                // background color for data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    



}