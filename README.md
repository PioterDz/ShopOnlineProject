# Project of online store

This project was created for education purposes. Stack: **_react, react-redux, redux-thunk, nodejs(express), mongoose._**

You can see it online at: https://shop-edu.herokuapp.com/

Last commit (ignoring README.md change commits) : https://github.com/PioterDz/ShopOnlineProject/commit/6f54a6a6eb8c38e0d8e052ba7dbcf7b391fd2d63

App was created with `create-react-app`. If you want to run it locally, clone repo, and run command `yarn install`.
To run app properly you also need to create two `.env` file in client and server folder.

In client folder's `.env` file copy/paste this line of code:

`REACT_APP_API=http://localhost:8000/api`

In server folder's `.env` file copy/paste:

```
DB_USER=peter
DB_PASS=mongomongo
```

For run app locally type command: `yarn runall`, use port :8000.

To build run `yarn build`.

Static files are in `client/public`.

Frontend files are in `client/src` folder. Sass files are separated from React components, in `client/src/styles`. The sass files's folders tree is same as react component's tree, so there should be no problem with finding each one of them.

Backend is located in `./server`.

Array of products is in MongoDB Atlas Cluster. You can also see it in `server/data.js`.

`server/summary.js` is file where data from shopping cart are stored, after final accepting products at SummaryPage.

Because of using local storage, it's recommended to not use it in privacy mode. If you want to delete local storage, open your brower inspector > application > local storage > del



