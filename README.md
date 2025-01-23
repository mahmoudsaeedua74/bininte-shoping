# E-Commerce Website

## Description

This is an **E-Commerce Website** built with **Next.js**, using **Apollo GraphQL** for data fetching and **Redux Toolkit** for state management. The website allows users to view and filter products, add items to their cart, and manage their shopping experience with multiple features like layout customization, price filtering, and category-based filtering.

### Key Features
- **Product Filtering**: Users can filter products based on:
  - **Price Range**: Min and Max price.
  - **Category**: Filter products by category.
  - **Layout**: Switch between grid and list layout for product display.
  - **Sorting**: Sort products by name in ascending or descending order.

- **Cart System**: Users can:
  - Add, remove, increase, or decrease the quantity of items in their cart.
  - The cart state is persistent across sessions using **localStorage**.
  - Notifications are displayed when items are added or removed from the cart.

- **GraphQL Integration**: The website uses **Apollo Client** for querying the product data and other backend information. This makes it efficient for managing server-client communication and provides smooth performance.

- **Responsive Design**: The website is fully responsive, adapting to both mobile and desktop screen sizes.

## Technologies Used
- **React**: For building the UI components.
- **Next.js**: For server-side rendering and routing.
- **Redux Toolkit**: For state management.
- **Apollo Client (GraphQL)**: For data fetching from the backend.
- **Tailwind CSS**: A utility-first CSS framework used for styling.
- **React Hot Toast**: For displaying success messages (e.g., when adding or removing items from the cart).
- **React Icons**: For using vector icons in the UI.
- **React Range Slider Input**: For implementing price range sliders.

## Components
- **Navbar**: The navigation bar that allows access to different pages (home, categories, contact, etc.) and includes the language switcher.
- **ProductFilter**: A section that enables users to filter products by category, price range, and sort by name.
- **ProductCard**: Displays individual product details like image, price, and description.
- **Cart**: A section to manage the user's shopping cart, displaying added items and allowing quantity updates.
- **ProductGrid**: Displays products in a grid format with the option to switch to a list layout.

## State Management
- **Cart State**: Uses Redux to manage the user's cart. Features include:
  - **Add Item**: Add products to the cart.
  - **Delete Item**: Remove items from the cart.
  - **Increase/Decrease Quantity**: Update the quantity of items in the cart.
  - **Persistent Cart**: Cart data is stored in **localStorage** and persists across sessions.
 

- **Filter State**: Uses Redux for managing product filters. Features include:
  - **Category**: Filter products by category.
  - **Price Range**: Set minimum and maximum price filters.
  - **Layout**: Switch between grid and list view for product display.
  - **Sorting**: Sort products by name (ascending/descending).

## Setup

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (preferably v14 or above).
- A code editor such as [VSCode](https://code.visualstudio.com/).

### Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/e-commerce-website.git
 cd e-commerce-website
npm install 
npm run dev
![Screenshot 2025-01-23 222104](https://github.com/user-attachments/assets/a38d2f53-7d9c-4d1f-be29-c3f11f2b91de)
![Screenshot 2025-01-23 215314](ht![Screenshot 2025-01-23 215339](https://github.com/user-attachments/assets/6a5f70a1-5a00-4fd8-8a02-af208926c2fd)
tps://github.com/user-![Screenshot 202![Screenshot 2025-01-23 215356](https://github.com/user-attachments/assets/6df7be91-e3ce-4e01-8484-be788363d483)
5-01-23 215327](https://github.com/user-attachments/assets/9b045dce-d276-46b2-b78a-33c458894e65)
attachments/assets/6![Screenshot 2025-01-23 222104](https://github.com/user-attachments/assets/e80e1055-f9be-43d5-b321-bca5f1182b7e)
29ffed7-b305-42f0-b482-0a5cfb1bf361)

