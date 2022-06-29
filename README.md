This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that uses [MongoDB](https://www.mongodb.com/).


### Running the Application

1. Clone the repo
2. Move to the application directory
   `cd Next-MongoDB-app`
3. Install dependencies
   `npm install` or `yarn install`
4. Run the application
   `npm run dev` or `yarn dev`
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

After the form submission all the data is inserting into the database via `pages/api/payment`. 
Sussessful "PUT" request returns the JSON object with "RequestId" and "Amount" properties.


