# React Frontend Project Documentation

## Getting Started

Follow the steps below to set up and run the frontend application locally.

### 1. Clone the Repository

- Execute the following commands in your terminal:
  ```sh
  git clone <repository-url>
  cd <project-folder>
  ```

### 2. Checkout to the Main Branch

- Switch to the primary branch by running:
  ```sh
  git checkout main
  ```

### 3. Install Dependencies

- Install the required packages using Yarn:
  ```sh
  yarn
  ```

### 4. Set Up Environment Variables

- Create a `.env` file in the root directory.
- Obtain the necessary environment variables from the project admin.
- Update the `.env` file with the provided variables.

### 5. Start the Development Server

- Start the frontend development server by running:
  ```sh
  yarn dev
  ```

The frontend application should now be running locally! 🚀

---

## Tech Stack

- **Framework:** React.js
- **Language:** JavaScript
- **Package Manager:** Yarn

---

## Important Notes

- Ensure **Node.js** and **Yarn** are installed on your system before proceeding.
- If you are working with a different branch, replace `main` with the appropriate branch name in the checkout step.

### Using Local Backend for Testing

To use your local backend for testing or debugging purposes:

- Navigate to `src/api/axiosInstance.js`.
- Locate the following line:
  ```js
  const API_HOST = import.meta.env.VITE_PRODUCTION_API_HOST;
  ```
- Update it to:
  ```js
  const API_HOST = import.meta.env.VITE_LOCAL_API_HOST;
  ```

By default, the project is configured to use the production backend.

---

## Redeployment Instructions

The application is deployed using Docker. Follow these steps to redeploy:

1. Navigate to the project directory:

   ```sh
   cd projects/frontend
   ```

2. Pull the latest changes from the repository:

   ```sh
   git checkout main  # Replace with your appropriate branch if different
   git pull
   ```

3. Stop and Remove the currently running frontend container:

   ```sh
   docker stop datanext-frontend
   docker remove datanext-frontend
   ```

4. Build the new Docker image and Run the updated Docker container:
   ```sh
   docker build -t datanext-frontend .
   docker run -d --name datanext-frontend -p 3002:80 datanext-frontend
   ```

The updated frontend application should now be redeployed successfully!

---

Happy coding! 🎉
