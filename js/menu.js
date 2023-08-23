// Get the element with the ID "MenuItems" (the navigation menu)
var MenuItems = document.getElementById("MenuItems");
      // Set the initial maxHeight of the navigation menu to "0px" (hidden)
      MenuItems.style.maxHeight = "0px";
      // Define the function to toggle the menu
      function menutoggle() {
        // Check if the current maxHeight of the menu is "0px" (hidden)
        if (MenuItems.style.maxHeight == "0px") {
          // If hidden, set the maxHeight to "200px" to show the menu
          MenuItems.style.maxHeight = "200px";
        } else {
          // If shown, set the maxHeight back to "0px" to hide the menu
          MenuItems.style.maxHeight = "0px";
        }
      }