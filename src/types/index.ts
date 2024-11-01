export interface Author {
  id: string;
  name: string;
  image: string;
  bio?: string;
  role?: string;
  avatar?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
}

export interface NewsletterSubscriber {
  email: string;
  subscribedAt: Date;
  status: "active" | "unsubscribed";
}
