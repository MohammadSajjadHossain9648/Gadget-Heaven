# Gadget Heaven

**Gadget Heaven** is a responsive e-commerce platform where users can explore and purchase the latest gadgets. With a user-friendly design, the site includes key features such as product categories, a shopping cart, wishlist management, and product filtering. The application uses the Context API for managing global state (cart and wishlist) and LocalStorage for data persistence.


## Live Website

You can view the live website at [gadget-heaven-official.surge.sh](http://gadget-heaven-official.surge.sh).

## Requirement Document

You can view the detailed requirement document for the project [here](https://github.com/MohammadSajjadHossain9648/Gadget-Heaven/tree/main/All%20UI%20Design%20Files).

## React Fundamental Concepts Used

This project makes use of the following React fundamental concepts:

- **JSX (JavaScript XML)**: To create dynamic and interactive UI elements.
- **Components**: Functional components to display the home page, product cards, details page, dashboard, and other sections.
- **Props**: Used for passing data between components.
- **State Management**: `useState` is used for managing component-specific state (e.g., cart items).
- **useEffect**: Handles side effects, such as loading data when the component mounts.
- **React Router**: For managing navigation between pages like Home, Product Details, and Dashboard.
- **Context API**: Used to manage and share global state across the application, particularly for the cart and wishlist.
- **useLocation**: To manage background color changes based on the current page.
- **useNavigate**: For redirecting users to different pages after actions like purchasing or closing modals.

## Data Management

### **Context API**

- **Purpose**: The **Context API** is utilized to manage the global state of the shopping cart and wishlist, which are core components of the website. It allows different components across the application to access and update the cart and wishlist data without the need to prop-drill (passing props through multiple levels of components).

- **How It Works**:
   - A **CartContext** and **WishlistContext** are created to store and provide data related to the cart and wishlist, respectively.
   - The data (e.g., product details, quantities, and prices) is stored within these contexts and can be accessed from any component that subscribes to the context.
   - The **useContext** hook is used to consume these contexts in various components, ensuring that the state is available globally within the app.
   - By using **Context API**, actions like adding items to the cart or wishlist, removing items, and updating quantities can be handled in a centralized manner, making the codebase cleaner and more maintainable.

- **Benefits**:
   - **Centralized state management**: Keeps the application state (cart and wishlist) consistent and easy to manage.
   - **Seamless data flow**: Ensures data is accessible to components that need it without complicated prop passing.
   - **Reduces complexity**: Makes the codebase easier to maintain by avoiding prop drilling and improving the separation of concerns.

### **LocalStorage**

- **Purpose**: **LocalStorage** is used to persist data across page reloads and browser sessions. It allows the cart and wishlist data to be stored in the browser’s local storage, so users don’t lose their selections if they refresh the page or come back to the website later.

- **How It Works**:
   - When a user adds an item to the cart or wishlist, the data is saved to **LocalStorage**. This ensures that even after a page reload, the cart and wishlist data remains intact.
   - On page load, the data is read from **LocalStorage** and used to initialize the state of the cart and wishlist in the **Context API**. This way, even if a user navigates away or reloads the page, the state persists without needing to re-fetch or re-add items.
   - **LocalStorage** is a simple and effective solution for preserving data without relying on a backend server or database for this functionality.

- **Benefits**:
   - **Persistence**: Ensures that the cart and wishlist data persists across page reloads, enhancing the user experience.
   - **Efficiency**: LocalStorage is lightweight and doesn’t require external libraries or server-side interactions, making it fast and easy to implement.
   - **User Convenience**: Users can leave and return to the website without losing their selections, leading to a more seamless experience.

By combining **Context API** for state management and **LocalStorage** for data persistence, **Gadget Heaven** ensures that users can interact with their cart and wishlist effortlessly, regardless of page reloads or navigation.


## Features of Gadget Heaven

Here are 5 key features of the **Gadget Heaven** website:

1. **Comprehensive Product Catalog**:
   The website showcases a wide range of gadgets across multiple categories, such as computers, smartphones, smartwatches, chargers, and power banks. The catalog is thoughtfully organized to allow users to easily explore products based on their preferences and needs. Each product is presented with essential details, including high-quality images, pricing, and a quick link to detailed product information.

2. **In-Depth Product Details**:
   Every product on the platform is accompanied by a dedicated details page that provides an in-depth view of the product, including specifications, pricing, availability status, and user ratings. This ensures that customers have all the information they need to make informed purchasing decisions.

3. **Advanced Shopping Cart**:
   The shopping cart feature enables users to manage their selected items with ease. It includes functionality to view the total price, sort items by price, and adjust quantities. Additionally, the cart is seamlessly integrated into the navigation, providing real-time updates on the number of items added. A purchase button becomes active when the cart contains items, allowing users to proceed with the checkout process.

4. **Wishlist Management**:
   The platform allows users to save their favorite products to a personalized wishlist for later consideration. Items in the wishlist can easily be transferred to the shopping cart, streamlining the purchase process. This feature provides users with a convenient way to track desired items without needing to add them to the cart immediately.


