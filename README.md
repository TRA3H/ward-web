
# Ward Web Application

Welcome to the Ward Web Application! This React-based frontend is designed to work with the Ward API for intelligent clothing classification. Users can upload images of clothing, receive AI-driven classification results, and provide feedback on the accuracy of these predictions.

## Features

- **Image Upload**: Users can upload images of clothing to be classified.
- **Real-Time Predictions**: The application interfaces with the Ward API to deliver real-time clothing classification.
- **Feedback System**: Users can provide immediate feedback on whether the classification was correct.
- **Feedback Analytics**: Visual representation of feedback data using a Doughnut chart to display the proportion of correct and incorrect classifications.

## Getting Started

To get the Ward Web Application up and running on your local machine, follow these steps:

### Prerequisites

- Node.js and npm installed (Visit [Node.js](https://nodejs.org/) for installation instructions)
- Access to the Ward API or a similar backend service

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/ward-web.git
```

Navigate to the project directory:

```bash
cd ward-web
```

Install the required dependencies:

```bash
npm install
```

### Configuration

Ensure that your application is configured to connect to the Ward API. Set the API URL in the environment variables or directly within the code if not dynamically set.

### Running the Application

To start the application locally:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies Used

- React.js: A JavaScript library for building user interfaces
- Firebase: Backend database for storing feedback data
- Chart.js: Simple yet flexible JavaScript charting for designers & developers

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your features or corrections.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
