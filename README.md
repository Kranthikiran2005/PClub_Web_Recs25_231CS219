# 📸 NITK Photography Club Website

## Task-2

A simple, interactive photo gallery website for the NITK Photography Club. Users can browse beautiful photo cards, filter them by category, like their favorite shots, and shuffle the gallery layout.

🎞️ **Dynamic Photo Cards**  
  Photos are loaded dynamically using JavaScript from a predefined product list.

- 🔍 **Category Filtering**  
  View specific types of photos by selecting categories like:
  - Nature
  - Portrait
  - College
  - Beach

- ❤️ **Like Functionality**  
  Click on the back of any photo card to increment a like count. Like count is stored in `localStorage` and persists across page refreshes (shared across all cards for now).

- 🔀 **Shuffle Gallery**  
  A shuffle button allows users to randomly reorder the displayed photo cards.

- 🔁 **Flip Card Animation**  
  Hovering over a photo flips the card to reveal the caption and like count, using 3D CSS animations.

- 🌐 **Responsive Grid Layout**  
  The layout uses CSS Grid for clean structure — a sidebar for filters and a main section for images.

  **More Ideas we can present**
  We can shuffle the cards according to the most liked (yet to be implemented).
  We can give a background colour signal when we hover on a portrait or nature pics.

  ## WorkFlow
  The website is a reactive page, we can load the pics dynamically after clicking on the selected category(also hav transition effects).<br>
  the image objects are stored in an array called products, we access each object and append it to the class-'grid' div after making the flipcard element using that picture<br>
  The site consists of two grid layouts-<br>
  ->one is of the whole body, to determine the area of Title, Blinking camera icon, filters and photos<br>
  -> second grid is to arrange the flipcards in a proper order<br>

  flipcards - I have made the flipcards to rotate on hovering and show the like counts and some text.<br>
  shuffle - made it by sorting using javascript random() function<br>
