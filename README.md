# Password Manager

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install necessary packages by running:

``` bash
npm i
# or
npm install
```

Secondly, create a ```.env.local``` file in the root of the project and add the following:
```
GOOGLE_CLIENT_ID=ADD_YOUR_OWN_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=ADD_YOUR_GOOGLE_CLIENT_SECRET

MONGODB_URI=ADD_YOUR_OWN_URILINK_FROM_MONGODB

NEXT_PUBLIC_BASE_URL="http://localhost:3000/"
// This is a random value used by the authjs to encrypt tokens and email verification hashes
// This is the same as NEXTAUTH_SECRET in their documentation
AUTH_SECRET=ADD_YOUR_OWN_SECRET_AUTH_CODE

NODE_ENV="development"

// For encryption and decryption 
SECRET_KEY=GENERATE_YOUR_OWN_STRING_FOR_ENCRYPTION
```
Visit this link for google client tokens and register and setup a OAuth applicattion: https://cloud.google.com/?hl=en
Visit MongoDB and setup a cluster: https://www.mongodb.com/
AuthJs or NextAuthJS documentation:
https://authjs.dev/
https://next-auth.js.org/

Thirdly, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
