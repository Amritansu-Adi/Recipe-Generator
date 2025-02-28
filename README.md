Recipe Generator - Chef Claude 🍽️
Welcome to Chef Claude, a smart recipe generator web app powered by AI! 🧑‍🍳✨
Simply enter ingredients, and let Chef Claude suggest delicious recipes for you.

🚀 Getting Started
Follow these steps to set up and run the project on your local machine.

1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/recipe-generator-chef-claude.git
cd recipe-generator-chef-claude
2️⃣ Install Dependencies
Make sure you have Node.js installed, then run:

sh
Copy
Edit
npm install
3️⃣ Create an API Key on Hugging Face
Go to Hugging Face and create an account if you don’t have one.
Navigate to Settings > Access Tokens and generate a new API key.
Copy the key for the next step.
4️⃣ Configure Environment Variables
Create a .env file in the root directory and add the following:

sh
Copy
Edit
VITE_RECIPE_API=your_huggingface_api_key_here
▶️ Run the Project
Once everything is set up, start the development server:

sh
Copy
Edit
npm run dev
The app will be available at http://localhost:5173/ (or the port specified in your terminal).

🛠 Build for Production
To create an optimized production build, run:

sh
Copy
Edit
npm run build
