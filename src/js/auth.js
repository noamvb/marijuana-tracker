// This file manages user authentication, including login and registration functionalities.

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();

export const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            throw new Error(errorMessage);
        });
};

export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            throw new Error(errorMessage);
        });
};

export const logoutUser = () => {
    return signOut(auth)
        .then(() => {
            console.log("User signed out");
        })
        .catch((error) => {
            const errorMessage = error.message;
            throw new Error(errorMessage);
        });
};