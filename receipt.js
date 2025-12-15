window.onload = function() {
    // Get query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const upiId = urlParams.get('upiId');
    const amount = urlParams.get('amount');

    // Display the receipt
    document.getElementById('receiptUpiId').textContent = upiId;
    document.getElementById('receiptAmount').textContent = `₹${parseFloat(amount).toFixed(2)}`;
};

function goBack() {
    window.history.back();
}
