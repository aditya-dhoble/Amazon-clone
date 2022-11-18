
# Amazon-Clone

what would a typical website clone look like? wanna get there? Head on to https://challenge-2375f.web.app/

#
### Technologies used
**Frontend** - React.js, Material-UI,  
**Backend** - Node.js, Express.js  
**Deployment** - Firebase  
**Payment Gateway** - Stripe

#
### What all does it include

It includes a sign up page, a home page, Cart & Payment page  
**Sign-up page** - If you are a new user, entering your mail and password for the first time, firestore (database provided by Firebase) saves it. Whenever you try to login next time, you will have to use same password corresponding to mail id otherwise it will show error.  
**Home Page** - This page shows you the list of products available on the site. You can choose to add to cart, doing so will show increase in number alongside the cart symbol. You can also see your mail up there with a "Hello" if you have signed up.  
**Cart** - Whenever you add a product into your cart, you can see them in your cart page. You can choose to remove products from the cart. It also shows you the total sum of the products that we have added to the cart.  
**Checkout Page** - In this page you see the final view of the products you want to buy. It is the extension of the Cart which it also includes feature of removing the item and showing up the net cost. Finally, It has this payment functionality provided by Stripe.

#
Few things I'm working right now and will working in the future includes
* A sign in page to collect details of the user and use them to show their name with "Hello", instead of email
* A small icon/block to show number of same items added to the cart, instead of showing the items again.
* Order page to show user history of what orders have been placed by the user in the past.

