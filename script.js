function redirectToReceiptPage() {
    // Get input values
    const upiId = document.getElementById('upiId').value;
    const amount = document.getElementById('amount').value;

    // Validate inputs
    if (upiId.trim() === '' || amount.trim() === '' || isNaN(amount) || Number(amount) <= 0) {
        alert('Please enter valid UPI ID and payment amount.');
        return false; // Prevent form submission
    }

    // Create URL for receipt page with query parameters
    const receiptUrl = `receipt.html?upiId=${encodeURIComponent(upiId)}&amount=${encodeURIComponent(amount)}`;

    // Redirect to the receipt page
    window.location.href = receiptUrl;
    document.getElementById('paymentForm').reset();
    return false; // Prevent form submission
    

}
