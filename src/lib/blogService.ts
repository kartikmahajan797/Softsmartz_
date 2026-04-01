import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  addDoc,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/firebaseConfig';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML string
  author: string;
  createdAt: Date;
  category: string;
  image: string;
  slug: string;
}

const COLLECTION = 'blogs';

/**
 * Convert a Firestore doc to a BlogPost object.
 */
function docToBlogPost(doc: { id: string; data: () => Record<string, unknown> }): BlogPost {
  const data = doc.data();
  return {
    id: doc.id,
    title: data.title as string,
    excerpt: data.excerpt as string,
    content: data.content as string,
    author: data.author as string,
    createdAt: data.createdAt ? (data.createdAt as Timestamp).toDate() : new Date(),
    category: data.category as string,
    image: data.image as string,
    slug: data.slug as string,
  };
}

/**
 * Fetch all published blog posts, newest first.
 */
export async function fetchBlogs(): Promise<BlogPost[]> {
  try {
    // Try ordered query first
    const q = query(
      collection(db, COLLECTION),
      orderBy('createdAt', 'desc'),
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(docToBlogPost);
  } catch (err: unknown) {
    const firebaseErr = err as { code?: string; message?: string };
    console.error(
      '🔥 Firestore fetchBlogs error:',
      '\n  Code:', firebaseErr.code,
      '\n  Message:', firebaseErr.message,
    );

    // If the ordered query fails (missing index / permissions), fallback to unordered
    if (
      firebaseErr.code === 'failed-precondition' ||
      firebaseErr.code === 'permission-denied'
    ) {
      console.warn('⚠️ Falling back to unordered query...');
      const snapshot = await getDocs(collection(db, COLLECTION));
      const posts = snapshot.docs.map(docToBlogPost);
      // Sort client-side as fallback
      posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      return posts;
    }
    throw err;
  }
}

/**
 * Fetch a single blog post by its URL slug.
 */
export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const q = query(
      collection(db, COLLECTION),
      where('slug', '==', slug),
    );
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    return docToBlogPost(snapshot.docs[0]);
  } catch (err: unknown) {
    const firebaseErr = err as { code?: string; message?: string };
    console.error(
      '🔥 Firestore fetchBlogBySlug error:',
      '\n  Code:', firebaseErr.code,
      '\n  Message:', firebaseErr.message,
    );
    throw err;
  }
}

/**
 * Create a new blog post.
 */
export async function createBlog(
  data: Omit<BlogPost, 'id' | 'createdAt'>,
): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...data,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
}
