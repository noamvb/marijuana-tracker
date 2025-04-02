// This file handles operations related to consumption logs, including adding and fetching consumption data from Firestore.

const db = firebase.firestore();

// Function to add a consumption log
function addConsumptionLog(consumptionData) {
    return db.collection('consumptions').add(consumptionData)
        .then(() => {
            console.log('Consumption log added successfully');
        })
        .catch((error) => {
            console.error('Error adding consumption log: ', error);
        });
}

// Function to fetch consumption logs
function fetchConsumptionLogs() {
    return db.collection('consumptions').get()
        .then((querySnapshot) => {
            const consumptionLogs = [];
            querySnapshot.forEach((doc) => {
                consumptionLogs.push({ id: doc.id, ...doc.data() });
            });
            return consumptionLogs;
        })
        .catch((error) => {
            console.error('Error fetching consumption logs: ', error);
        });
}

// Example usage
document.getElementById('consumption-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const consumptionData = {
        strain: event.target.strain.value,
        amount: event.target.amount.value,
        date: new Date().toISOString(),
    };
    addConsumptionLog(consumptionData);
});