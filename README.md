# Spotify

## Prerequisites

Before you begin, ensure that you have the following installed on your system:

- **Node.js** (version 12 or higher)
- **npm** (Node Package Manager) or **yarn**

## Installation

1. **Clone the repository** to your local machine using the following command:

    ```bash
    git clone [repository-url](https://github.com/sanskriti0606/Spotify06)
    ```

3. **Install the dependencies** by running either of the following commands:

    - Using npm:
          npm install
      ```

    - Using yarn:
yarn install
Configuration
To use the Spotify API, you'll need an API key. Follow these steps to get and configure your API key:

Sign up and log in at RapidAPI.

After signing in, note down your API key. 3.In my case my api key from my account are given below :- X-RapidAPI-Key = '73bc937552msh27eaf79d281b2bbp1e52afjsn9a548c143686' X-RapidAPI-Host= spotify23.p.rapidapi.com

export { RAPIDAPI_KEY, RAPIDAPI_HOST };


Replace `'73bc937552msh27eaf79d281b2bbp1e52afjsn9a548c143686'` with your actual API key.

Running the Application
To start the development server, run the following command:

Make sure to set the necessary environment variables in your deployment environment to match the configurations mentioned in the .env file.

**bash**
Copy code
NEXT_PUBLIC_API_BASE_URL=(https://spotifyproject1.onrender.com/)/api
Start the development server:

**yarn dev**
npm run dev
Access the app at http://localhost:3000.

Usage

**Login: /login**
**Signup: /signup**
Playlists: Manage playlists

## Backend

**Features**

User authentication (login, signup)

CRUD operations for playlists

Integration with MongoDB

**Technologies**

Node.js: JavaScript runtime for server-side

Express: Web application framework

MongoDB: NoSQL database

Mongoose: ODM for MongoDB

JWT: JSON Web Tokens for authentication

bash
Copy code
MONGO_URI=mongodb://localhost:27017/spotify-app
JWT_SECRET=your_jwt_secret
PORT=8081

**API Endpoints**

POST /api/login: Authenticate a user

POST /api/users: Register a new user

GET /api/playlists: Get all playlists

POST /api/playlists: Create a new playlist

PUT /api/playlists/

## API Documentation : https://documenter.getpostman.com/view/37832607/2sAXjSyoKV

**Deployement Link** : https://spotifyclient-five.vercel.app/

**Contributing**
Fork the repository.
Create a new branch: git checkout -b feature/your-feature.
Commit your changes: git commit -am 'Add new feature'.
Push to the branch: git push origin feature/your-feature.
Create a Pull Request.

**License**
Licensed under the MIT License - see the LICENSE file for details.

**Acknowledgments**
Inspired by Spotify
Thanks to Next.js, Tailwind CSS, MongoDB, Express, and Mongoose for their powerful tools.
Feel free to adjust the URLs and any specific details as necessary for your project.

![image](https://github.com/user-attachments/assets/f969fe5c-a226-4369-9f49-a40678809f98) 
![image](https://github.com/user-attachments/assets/28bd3378-9db8-4ba5-a90a-d473d5c62283)
![image](https://github.com/user-attachments/assets/8b316606-4d92-4243-99ee-9d588dc01bc2)



