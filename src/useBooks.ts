import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db, auth } from "./firebase/firebaseInit";
import { addDoc } from 'firebase/firestore';



export type TBook = {
    id: string;
    title: string;
    author: string;
    pages: number;
    read: boolean;
    createdAt: Date;
    imageURL: string;
    uid: string;
};


type UseBooksReturnType = [TBook[], (book: TBook) => void]; 

export default function useBooks(): UseBooksReturnType { 
    const [books, setBooks] = useState<TBook[]>([]);
    
    useEffect(() => {
        const q = query(collection(db, "books"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setBooks(
                snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as TBook))
            );
        });
        return () => unsubscribe();
    }, []);

    const addBook = async (book: TBook) => {
        const { uid } = auth.currentUser!;
        const docRef= await collection(db, "books");
        await addDoc(docRef, {
            ...book,
            uid,
            createdAt: new Date(),
            imageURL: "",
        });
    };
    
    return [books, addBook];
}


