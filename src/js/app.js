// This file initializes Firebase, sets up DOM element references, and contains functions for adding and loading data from Firestore. It includes event listeners for form submissions and handles asynchronous operations.

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { firebaseConfig } from './firebase.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const purchaseForm = document.getElementById('purchase-form');
const consumptionForm = document.getElementById('consumption-form');
const purchaseList = document.getElementById('purchase-list');
const consumptionList = document.getElementById('consumption-list');

purchaseForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(purchaseForm);
    const purchaseData = {
        item: formData.get('item'),
        quantity: formData.get('quantity'),
        price: formData.get('price'),
        date: new Date().toISOString(),
    };
    await addPurchase(purchaseData);
    purchaseForm.reset();
    loadPurchases();
});

consumptionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(consumptionForm);
    const consumptionData = {
        item: formData.get('item'),
        quantity: formData.get('quantity'),
        date: new Date().toISOString(),
    };
    await addConsumption(consumptionData);
    consumptionForm.reset();
    loadConsumption();
});

async function addPurchase(data) {
    try {
        await addDoc(collection(db, 'purchases'), data);
    } catch (error) {
        console.error('Error adding purchase: ', error);
    }
}

async function addConsumption(data) {
    try {
        await addDoc(collection(db, 'consumption'), data);
    } catch (error) {
        console.error('Error adding consumption: ', error);
    }
}

async function loadPurchases() {
    const querySnapshot = await getDocs(collection(db, 'purchases'));
    purchaseList.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const purchase = doc.data();
        purchaseList.innerHTML += `<li>${purchase.item} - ${purchase.quantity} - $${purchase.price} - ${new Date(purchase.date).toLocaleDateString()}</li>`;
    });
}

async function loadConsumption() {
    const querySnapshot = await getDocs(collection(db, 'consumption'));
    consumptionList.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const consumption = doc.data();
        consumptionList.innerHTML += `<li>${consumption.item} - ${consumption.quantity} - ${new Date(consumption.date).toLocaleDateString()}</li>`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadPurchases();
    loadConsumption();
});