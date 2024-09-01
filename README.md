
# Pantry Tracker App

**Pantry Tracker App** is a web application designed to help you efficiently manage your pantry inventory. With features that allow you to add, view, edit, and delete pantry items, this app ensures you always have the necessary ingredients on hand.

### Visit the Live App: [Pantry Tracker App](https://imamapantryapp.vercel.app/)

## Features

- **Add Items:** Seamlessly add pantry items with details like name, quantity, and expiration date.
- **View Pantry:** Get an organized view of all your pantry items, sorted by categories for easy access.
- **Edit Items:** Update item details to reflect changes in quantity or expiration dates.
- **Delete Items:** Remove items that are no longer needed from your pantry inventory.

> **Note:** The app currently does not support recipe suggestions or search functionality.

## Tech Stack

- **Node.js:** Backend runtime environment.
- **Next.js:** React framework for building the web application.
- **Firebase:** Backend-as-a-Service (BaaS) for authentication and database management.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or above)
- npm or yarn

### Installation

Follow these steps to get a local copy of the project up and running:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/pantry-tracker-app.git
   cd pantry-tracker-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables:**

   Create a `.env.local` file in the root directory and configure the following environment variables with your Firebase credentials:

   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=<Your Firebase API Key>
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<Your Firebase Auth Domain>
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=<Your Firebase Project ID>
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<Your Firebase Storage Bucket>
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<Your Firebase Messaging Sender ID>
   NEXT_PUBLIC_FIREBASE_APP_ID=<Your Firebase App ID>
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Access the app:**

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app locally.



1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

Please ensure your code follows the established coding standards.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions, suggestions, or collaboration, please contact imamakainat9@gmail.com

