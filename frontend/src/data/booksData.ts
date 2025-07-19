
export interface Book {
  title: Required<string>;
  author: Required<string>;
  price: Required<string | number>;
  imageUrl: Required<string>;
  description: Required<string>;
  category: Required<string>;
}

export const books: Book[] = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 299,
    imageUrl: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
    description: 'A classic novel that explores themes of decadence, idealism, and social upheaval in 1920s America.',
    category: 'Fiction'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 349,
    imageUrl: 'https://covers.openlibrary.org/b/id/8228691-L.jpg',
    description: 'A profound and powerful story of racial injustice and childhood innocence in the American South.',
    category: 'Fiction'
  },
  {
    title: '1984',
    author: 'George Orwell',
    price: 279,
    imageUrl: 'https://covers.openlibrary.org/b/id/7222241-L.jpg',
    description: 'A dystopian novel exploring surveillance, totalitarianism, and the loss of individuality.',
    category: 'Fiction'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 259,
    imageUrl: 'https://covers.openlibrary.org/b/id/8231856-L.jpg',
    description: 'A romantic novel that critiques the British class system through wit and strong characters.',
    category: 'Literature'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: 199,
    imageUrl: 'https://covers.openlibrary.org/b/id/8279101-L.jpg',
    description: 'A philosophical journey about finding one’s purpose and following dreams.',
    category: 'Fiction'
  },
  {
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    price: 399,
    imageUrl: 'https://covers.openlibrary.org/b/id/8100701-L.jpg',
    description: 'Reveals how habits work and how they can be changed to improve lives and organizations.',
    category: 'Education'
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    price: 349,
    imageUrl: 'https://covers.openlibrary.org/b/id/8091016-L.jpg',
    description: 'Personal finance book emphasizing financial education and investing for long-term wealth.',
    category: 'Finance'
  },
  {
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    price: 249,
    imageUrl: 'https://covers.openlibrary.org/b/id/8404895-L.jpg',
    description: 'A self-help classic focused on mindset, persistence, and goal-setting for financial success.',
    category: 'Finance'
  },
  {
    title: 'The Lean Startup',
    author: 'Eric Ries',
    price: 429,
    imageUrl: 'https://covers.openlibrary.org/b/id/8325262-L.jpg',
    description: 'A business methodology for creating successful startups through validated learning and fast iteration.',
    category: 'Business'
  },
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
    price: 379,
    imageUrl: 'https://covers.openlibrary.org/b/id/8369252-L.jpg',
    description: 'Offers unique insights into innovation, startups, and building the future.',
    category: 'Business'
  }
];
