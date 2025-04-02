// This file manages the dashboard view, fetching and displaying summarized data.

document.addEventListener('DOMContentLoaded', function() {
    const purchasesList = document.getElementById('purchases-list');
    const consumptionList = document.getElementById('consumption-list');
    const totalSpent = document.getElementById('total-spent');
    const totalConsumed = document.getElementById('total-consumed');

    function fetchPurchases() {
        // Fetch purchases from Firestore and update the UI
        firebase.firestore().collection('purchases').get().then(snapshot => {
            let total = 0;
            purchasesList.innerHTML = '';
            snapshot.forEach(doc => {
                const purchase = doc.data();
                total += purchase.amount;
                purchasesList.innerHTML += `<li>${purchase.item} - $${purchase.amount}</li>`;
            });
            totalSpent.textContent = `Total Spent: $${total}`;
        });
    }

    function fetchConsumption() {
        // Fetch consumption logs from Firestore and update the UI
        firebase.firestore().collection('consumption').get().then(snapshot => {
            let total = 0;
            consumptionList.innerHTML = '';
            snapshot.forEach(doc => {
                const consumption = doc.data();
                total += consumption.amount;
                consumptionList.innerHTML += `<li>${consumption.item} - ${consumption.amount}g</li>`;
            });
            totalConsumed.textContent = `Total Consumed: ${total}g`;
        });
    }

    fetchPurchases();
    fetchConsumption();
});