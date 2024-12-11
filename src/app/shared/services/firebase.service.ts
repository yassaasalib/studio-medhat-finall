import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  QueryConstraint,
  Firestore,
  CollectionReference,
  DocumentData
} from 'firebase/firestore';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  Auth 
} from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

const firebaseConfig = {
  apiKey: "AIzaSyCuD5HvblbA7pYF1PX0fjRuPlHjNqir0tc",
  authDomain: "studio-medhat.firebaseapp.com",
  projectId: "studio-medhat",
  storageBucket: "studio-medhat.firebasestorage.app",
  messagingSenderId: "788679567148",
  appId: "1:788679567148:web:a8b190988511a410922e89"
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app = initializeApp(firebaseConfig);
  private db: Firestore;
  private auth: Auth;
  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    this.db = getFirestore(this.app);
    this.auth = getAuth(this.app);
    this.initializeAuthListener();
  }

  private initializeAuthListener(): void {
    onAuthStateChanged(this.auth, (user) => {
      this.isAuthenticatedSubject.next(!!user);
    });
  }

  async signIn(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.error('Authentication failed:', error);
      throw new Error('Authentication failed');
    }
  }

  async signOut(): Promise<void> {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Sign out failed:', error);
      throw new Error('Sign out failed');
    }
  }
  async addPublicDocument(collectionName: string, data: any): Promise<{ id: string; data: any }> {
    try {
      const collectionRef = collection(this.db, collectionName);
      // Add security rules to ensure data validation
      const sanitizedData = {
        ...data,
        createdAt: new Date().toISOString(),
        status: 'Pending', // Force pending status for public submissions
        isPublicSubmission: true // Flag to identify public submissions
      };
      
      const docRef = await addDoc(collectionRef, sanitizedData);
      return {
        id: docRef.id,
        data: {
          ...sanitizedData,
          id: docRef.id
        }
      };
    } catch (error) {
      console.error('Failed to add document:', error);
      throw new Error('Failed to add document');
    }
  }
  
  async addDocument(collectionName: string, data: any): Promise<{ id: string; data: any }> {
    try {
      const collectionRef = collection(this.db, collectionName);
      const docRef = await addDoc(collectionRef, {
        ...data,
        createdAt: new Date().toISOString()
      });
      return {
        id: docRef.id,
        data: {
          ...data,
          id: docRef.id
        }
      };
    } catch (error) {
      console.error('Failed to add document:', error);
      throw new Error('Failed to add document');
    }
  }
  async getDocuments(collectionName: string): Promise<any[]> {
    try {
      const querySnapshot = await getDocs(collection(this.db, collectionName));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Failed to fetch documents:', error);
      throw new Error('Failed to fetch documents');
    }
  }

  async updateDocument(collectionName: string, docId: string, data: any): Promise<void> {
    try {
      const docRef = doc(this.db, collectionName, docId);
      await updateDoc(docRef, {
        ...data,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Failed to update document:', error);
      throw new Error('Failed to update document');
    }
  }

  async deleteDocument(collectionName: string, docId: string): Promise<void> {
    try {
      const docRef = doc(this.db, collectionName, docId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Failed to delete document:', error);
      throw new Error('Failed to delete document');
    }
  }

  async queryDocuments(
    collectionName: string, 
    conditions: { field: string; operator: any; value: any }[],
    orderByField?: string,
    orderDirection: 'asc' | 'desc' = 'desc'
  ): Promise<any[]> {
    try {
      const collectionRef = collection(this.db, collectionName);
      const constraints: QueryConstraint[] = [];

      // Add conditions to constraints
      conditions.forEach(condition => {
        constraints.push(where(condition.field, condition.operator, condition.value));
      });

      // Add orderBy to constraints if specified
      if (orderByField) {
        constraints.push(orderBy(orderByField, orderDirection));
      }

      // Create and execute query
      const queryRef = query(collectionRef, ...constraints);
      const querySnapshot = await getDocs(queryRef);

      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Failed to query documents:', error);
      throw new Error('Failed to query documents');
    }
  }
}