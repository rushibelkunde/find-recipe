# Find-Recipe Web App

This is a simple web app built with React and Tailwind CSS that allows you to search for food recipes using the Edamam API. You can also add your favorite recipes to your list of favorites and they will be saved in your browser's local storage for persistent access.

## Live Link

You can access the live version of this web app [here](https://rushibelkunde.github.io/find-recipe/).

## Features

- **Search Functionality**: Enter an ingredient or recipe keyword, and the app will fetch and display a list of relevant recipes.

- **Add to Favorites**: You can add recipes to your list of favorites by clicking the heart icon on each recipe card.

- **Local Storage**: The app utilizes your browser's local storage to save your favorite recipes, ensuring they are available even after closing and reopening the app.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/rushibelkunde/find-recipe.git
   ```

2. Change to the project directory:

   ```bash
   cd find-recipe
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a free Edamam API account at [Edamam Developer](https://developer.edamam.com/) and obtain your API credentials (App ID and App Key).

5. Create a `.env` file in the project root directory and add your Edamam API credentials as follows:

   ```plaintext
   REACT_APP_EDAMAM_APP_ID=your-app-id
   REACT_APP_EDAMAM_APP_KEY=your-app-key
   ```

6. Start the development server:

   ```bash
   npm start
   ```

7. Open your browser and access the app at [http://localhost:3000](http://localhost:3000).

## Usage

- Enter an ingredient or recipe keyword in the search bar and hit "Search" to find relevant recipes.

- Click add to favourite on recipe-detail-page to add it to your list of favorite recipes.

- Your favorite recipes are saved locally and can be accessed on the "Favorites" page.

## Contributors

- [Rushikesh Belkunde](https://github.com/rushibelkunde)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to contribute to the project, report issues, or suggest improvements. Enjoy exploring new recipes with the Find Recipe Web App!
