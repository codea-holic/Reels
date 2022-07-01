import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import secrets from "./secrets";
import { getFirestore } from "firebase/firestore";

let app = initializeApp(secrets);
export let auth = getAuth(app);
export const db = getFirestore(app);

// I found the error : 
/*
Uncaught FirebaseError: Firebase: Error (auth/invalid-api-key).
    at createErrorInternal (assert.ts:128:1)
    at _assert (assert.ts:153:1)
    at register.ts:67:1
    at Component.instanceFactory (register.ts:90:1)
    at Provider.getOrInitializeService (provider.ts:318:1)
    at Provider.initialize (provider.ts:242:1)
    at initializeAuth (initialize.ts:66:1)
    at getAuth (index.ts:44:1)
    at ./src/firebase.js (firebase.js:6:1)
    at options.factory (react refresh:6:1)
    */