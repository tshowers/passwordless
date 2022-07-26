// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBBa2iIUnEFhKhVHT3wcepiVEl4BOfOOYA",
    authDomain: "taliferro-de66f.firebaseapp.com",
    databaseURL: "https://taliferro-de66f.firebaseio.com",
    projectId: "taliferro-de66f",
    storageBucket: "taliferro-de66f.appspot.com",
    messagingSenderId: "353334442276",
    appId: "1:353334442276:web:45b043204cc83aa7725bb1"
  },
  summaryRedirect: 'http://localhost:4200/email-check',
  CARTS: "carts",
  SAVED_CARTS: "saved-carts",
  CUSTOMERS: "customers",
  ORDERS: "orders",
  PAYMENTS: "payments",
  PRODUCTS: "products",
  SETTINGS: "settings",
  CATEGORIES: "categories",
  PRODUCT_TYPES: "product-types",
  APPOINTMENTS: "appointments",
  USERS: "users",
  LOGO_PATH: "logo",
  FILE_PATH: "files",
  RESULTS_PATH: "results",
  COMPANY_NAME: 'Taliferro'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
