function calculate() {
    // Retrieve input values
    const listingPrice = parseFloat(document.getElementById("listingPrice").value) || 0;
    const shippingCost = parseFloat(document.getElementById("shippingCost").value) || 0;
    const shippingPaidBy = document.getElementById("shippingPaidBy").value;
    const actualShippingCost = parseFloat(document.getElementById("actualShippingCost").value) || 0;
    const salesTax = parseFloat(document.getElementById("salesTax").value) || 0;
    const marketingCost = parseFloat(document.getElementById("marketingCost").value) || 0;
    const itemCogs = parseFloat(document.getElementById("itemCogs").value) || 0;
    const withdrawalFee = parseFloat(document.getElementById("withdrawalFee").value) || 0;

    // Buyer calculations
    const buyerServiceFee = listingPrice * 0.10;
    const buyerPaymentFee = 0.50 + (listingPrice + shippingCost + buyerServiceFee) * 0.029;
    const buyerSalesTax = (listingPrice + shippingCost) * (salesTax / 100);
    const buyerTotalPayment = listingPrice + shippingCost + buyerServiceFee + buyerPaymentFee + buyerSalesTax;

    // Display buyer results
    document.getElementById("buyerItemPrice").innerText = `$${listingPrice.toFixed(2)}`;
    document.getElementById("buyerShippingCost").innerText = `$${shippingCost.toFixed(2)}`;
    document.getElementById("buyerServiceFee").innerText = `$${buyerServiceFee.toFixed(2)}`;
    document.getElementById("buyerPaymentFee").innerText = `$${buyerPaymentFee.toFixed(2)}`;
    document.getElementById("buyerSalesTax").innerText = `$${buyerSalesTax.toFixed(2)}`;
    document.getElementById("buyerTotalPayment").innerText = `$${buyerTotalPayment.toFixed(2)}`;

    // Seller calculations
    let grossRevenue = listingPrice;
    if (shippingPaidBy === "buyer") {
        grossRevenue += shippingCost;
    }

    const totalFees = buyerServiceFee + buyerPaymentFee + (shippingPaidBy === "seller" ? actualShippingCost : 0) + withdrawalFee + marketingCost;
    const netRevenue = grossRevenue - totalFees;
    const profitMargin = ((netRevenue - itemCogs) / listingPrice) * 100;

    // Display seller results
    document.getElementById("grossRevenue").innerText = `$${grossRevenue.toFixed(2)}`;
    document.getElementById("totalFees").innerText = `$${totalFees.toFixed(2)}`;
    document.getElementById("netRevenue").innerText = `$${netRevenue.toFixed(2)}`;
    document.getElementById("profitMargin").innerText = `${profitMargin.toFixed(2)}%`;

    // Graphs
    const ctxPie = document.getElementById("chartPie").getContext("2d");
    const ctxBar = document.getElementById("chartBar").getContext("2d");

    // Destroy old charts if they exist
    if (window.pieChart) window.pieChart.destroy();
    if (window.barChart) window.barChart.destroy();

    // Create pie chart for fee breakdown
    window.pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Service Fee', 'Payment Processing Fee', 'Shipping Cost', 'Marketing Costs', 'Withdrawal Fee'],
            datasets: [{
                data: [buyerServiceFee, buyerPaymentFee, (shippingPaidBy === "seller" ? actualShippingCost : 0), marketingCost, withdrawalFee],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });

    // Create bar chart for revenue comparison
    window.barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Gross Revenue', 'Total Fees', 'Net Revenue'],
            datasets: [{
                label: 'Amount ($)',
                data: [grossRevenue, totalFees, netRevenue],
                backgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}
function calculate() {
    // Retrieve input values
    const listingPrice = parseFloat(document.getElementById("listingPrice").value) || 0;
    const shippingCost = parseFloat(document.getElementById("shippingCost").value) || 0;
    const shippingPaidBy = document.getElementById("shippingPaidBy").value;
    const actualShippingCost = parseFloat(document.getElementById("actualShippingCost").value) || 0;
    const salesTax = parseFloat(document.getElementById("salesTax").value) || 0;
    const marketingCost = parseFloat(document.getElementById("marketingCost").value) || 0;
    const itemCogs = parseFloat(document.getElementById("itemCogs").value) || 0;
    const withdrawalFee = parseFloat(document.getElementById("withdrawalFee").value) || 0;

    // Buyer calculations
    const buyerServiceFee = listingPrice * 0.10;
    const buyerPaymentFee = 0.50 + (listingPrice + shippingCost + buyerServiceFee) * 0.029;
    const buyerSalesTax = (listingPrice + shippingCost) * (salesTax / 100);
    const buyerTotalPayment = listingPrice + shippingCost + buyerServiceFee + buyerPaymentFee + buyerSalesTax;

    // Display buyer results
    document.getElementById("buyerItemPrice").innerText = `$${listingPrice.toFixed(2)}`;
    document.getElementById("buyerShippingCost").innerText = `$${shippingCost.toFixed(2)}`;
    document.getElementById("buyerServiceFee").innerText = `$${buyerServiceFee.toFixed(2)}`;
    document.getElementById("buyerPaymentFee").innerText = `$${buyerPaymentFee.toFixed(2)}`;
    document.getElementById("buyerSalesTax").innerText = `$${buyerSalesTax.toFixed(2)}`;
    document.getElementById("buyerTotalPayment").innerText = `$${buyerTotalPayment.toFixed(2)}`;

    // Seller calculations
    let grossRevenue = listingPrice;
    if (shippingPaidBy === "buyer") {
        grossRevenue += shippingCost;
    }

    const totalFees = buyerServiceFee + buyerPaymentFee + (shippingPaidBy === "seller" ? actualShippingCost : 0) + withdrawalFee + marketingCost;
    const netRevenue = grossRevenue - totalFees;
    const profitMargin = ((netRevenue - itemCogs) / listingPrice) * 100;

    // Display seller results
    document.getElementById("grossRevenue").innerText = `$${grossRevenue.toFixed(2)}`;
    document.getElementById("totalFees").innerText = `$${totalFees.toFixed(2)}`;
    document.getElementById("netRevenue").innerText = `$${netRevenue.toFixed(2)}`;
    document.getElementById("profitMargin").innerText = `${profitMargin.toFixed(2)}%`;

    // Graphs
    const ctxPie = document.getElementById("chartPie").getContext("2d");
    const ctxBar = document.getElementById("chartBar").getContext("2d");

    // Destroy old charts if they exist
    if (window.pieChart) window.pieChart.destroy();
    if (window.barChart) window.barChart.destroy();

    // Create pie chart for fee breakdown
    window.pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Service Fee', 'Payment Processing Fee', 'Shipping Cost', 'Marketing Costs', 'Withdrawal Fee'],
            datasets: [{
                data: [buyerServiceFee, buyerPaymentFee, (shippingPaidBy === "seller" ? actualShippingCost : 0), marketingCost, withdrawalFee],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
            }]
        },
        options: {
            responsive: true
        }
    });

    // Create bar chart for revenue comparison
    window.barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Gross Revenue', 'Total Fees', 'Net Revenue'],
            datasets: [{
                label: 'Amount ($)',
                data: [grossRevenue, totalFees, netRevenue],
                backgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}