// This file handles operations related to purchases, including adding and fetching purchase data from Firestore.

const db = firebase.firestore();

const purchaseForm = document.getElementById('purchase-form');
const purchaseList = document.getElementById('purchase-list');

purchaseForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const purchaseData = {
        item: purchaseForm.item.value,
        quantity: purchaseForm.quantity.value,
        price: purchaseForm.price.value,
        date: new Date().toISOString()
    };

    try {
        await db.collection('purchases').add(purchaseData);
        purchaseForm.reset();
        loadPurchases();
    } catch (error) {
        console.error("Error adding purchase: ", error);
    }
});

const loadPurchases = async () => {
    purchaseList.innerHTML = '';
    try {
        const snapshot = await db.collection('purchases').get();
        snapshot.forEach(doc => {
            const purchase = doc.data();
            const li = document.createElement('li');
            li.textContent = `${purchase.date}: ${purchase.item} - Quantity: ${purchase.quantity}, Price: $${purchase.price}`;
            purchaseList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching purchases: ", error);
    }
};

document.addEventListener('DOMContentLoaded', loadPurchases);