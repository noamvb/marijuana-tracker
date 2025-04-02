# Marijuana Tracker

## Overview
The Marijuana Tracker is a web application designed to help users track their marijuana purchases and consumption. It provides a user-friendly interface to log purchases, record consumption, and view historical data. The application utilizes Firebase Firestore for data storage and Tailwind CSS for styling.

## Features
- Add and manage marijuana purchase entries.
- Log consumption details and track usage over time.
- View a dashboard summarizing purchases and consumption.
- Access a history page to review past entries.

## Technologies Used
- HTML
- Tailwind CSS
- Vanilla JavaScript
- Firebase Firestore

## Project Structure
```
marijuana-tracker
├── public
│   ├── index.html
│   ├── dashboard.html
│   ├── add-purchase.html
│   ├── add-consumption.html
│   └── history.html
├── src
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   ├── app.js
│   │   ├── auth.js
│   │   ├── firebase.js
│   │   ├── purchases.js
│   │   ├── consumption.js
│   │   ├── dashboard.js
│   │   └── utils.js
│   └── models
│       └── types.js
├── .gitignore
├── firebase.json
├── tailwind.config.js
├── package.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd marijuana-tracker
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Configure Firebase:
   - Create a Firebase project in the Firebase console.
   - Add your Firebase configuration in `src/js/firebase.js`.

5. Start the application:
   - You can use a local server to serve the `public` directory or deploy it to Firebase Hosting.

## Usage
- Open `public/index.html` in your browser to start using the application.
- Use the forms to add purchases and consumption logs.
- Navigate to the dashboard to view summaries and to the history page for detailed logs.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.