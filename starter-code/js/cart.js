/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cartData')) || [];
  // console.log('cartItems:', cartItems);
  // console.log('cart before:', cart);
  cart = new Cart(cartItems);
  // console.log('cart after:', cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableBodyElement = document.getElementsByTagName('tbody')[0];
  // console.log('tableBodyElement:', tableBodyElement);
  tableBodyElement.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tableBodyElement = document.getElementsByTagName('tbody');
  // console.log('tableBodyElement:',tableBodyElement);

  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++) {
    
    // TODO: Create a TR
    var trElement = document.createElement('tr');

    // TODO: Create a TD for the delete link, quantity,  and the item
    var tdDeleteLinkElement = document.createElement('td');
    var tdProductElement = document.createElement('td');
    var tdQuantityElement = document.createElement('td');
    tdDeleteLinkElement.innerHTML = '<a class="delete-button">X</a>';
    tdProductElement.textContent = cart.items[i].product;
    tdQuantityElement.textContent = cart.items[i].quantity;

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    trElement.appendChild(tdDeleteLinkElement);
    trElement.appendChild(tdProductElement);
    trElement.appendChild(tdQuantityElement);
    tableBodyElement[0].appendChild(trElement);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
