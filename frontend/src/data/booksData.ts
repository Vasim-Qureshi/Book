
export interface Book {
  title: Required<string>;
  author: Required<string>;
  price: Required<string | number>;
  imageUrl: Required<string>;
  description: Required<string>;
  category: Required<string>;
}

export const books: Book[] =  [
  {
    title: "Zero to One",
    author: "Peter Thiel",
    price: 199,
    imageUrl: "https://covers.openlibrary.org/b/id/8200000-L.jpg",
    description: "A fascinating book exploring new perspectives.",
    category: "Literature"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 236,
    imageUrl: "https://covers.openlibrary.org/b/id/8200001-L.jpg",
    description: "A timeless classic loved by all generations.",
    category: "Education"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 273,
    imageUrl: "https://covers.openlibrary.org/b/id/8200002-L.jpg",
    description: "Inspires creativity and innovation.",
    category: "Fiction"
  },
  {
    title: "Charlotte’s Web",
    author: "E.B. White",
    price: 310,
    imageUrl: "https://covers.openlibrary.org/b/id/8200003-L.jpg",
    description: "A heartwarming and educational tale.",
    category: "Programming"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 347,
    imageUrl: "https://covers.openlibrary.org/b/id/8200004-L.jpg",
    description: "An insightful take on personal growth.",
    category: "Business"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 384,
    imageUrl: "https://covers.openlibrary.org/b/id/8200005-L.jpg",
    description: "A journey through powerful emotions.",
    category: "Kids"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 421,
    imageUrl: "https://covers.openlibrary.org/b/id/8200006-L.jpg",
    description: "Rich in knowledge and practical tips.",
    category: "Literature"
  },
  {
    title: "Diary of a Wimpy Kid",
    author: "Jeff Kinney",
    price: 458,
    imageUrl: "https://covers.openlibrary.org/b/id/8200007-L.jpg",
    description: "Adventures and fun for young readers.",
    category: "Education"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: 495,
    imageUrl: "https://covers.openlibrary.org/b/id/8200008-L.jpg",
    description: "A modern guide to achieving success.",
    category: "Fiction"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 532,
    imageUrl: "https://covers.openlibrary.org/b/id/8200009-L.jpg",
    description: "Explores deep philosophical questions.",
    category: "Programming"
  },
  {
    title: "Intro to Algorithms",
    author: "Thomas H. Cormen",
    price: 569,
    imageUrl: "https://covers.openlibrary.org/b/id/8200010-L.jpg",
    description: "A fascinating book exploring new perspectives.",
    category: "Business"
  },
  {
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: 606,
    imageUrl: "https://covers.openlibrary.org/b/id/8200011-L.jpg",
    description: "A timeless classic loved by all generations.",
    category: "Kids"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    price: 643,
    imageUrl: "https://covers.openlibrary.org/b/id/8200012-L.jpg",
    description: "Inspires creativity and innovation.",
    category: "Literature"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 680,
    imageUrl: "https://covers.openlibrary.org/b/id/8200013-L.jpg",
    description: "A heartwarming and educational tale.",
    category: "Education"
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    price: 717,
    imageUrl: "https://covers.openlibrary.org/b/id/8200014-L.jpg",
    description: "An insightful take on personal growth.",
    category: "Fiction"
  },
  {
    title: "Little Women",
    author: "Louisa May Alcott",
    price: 754,
    imageUrl: "https://covers.openlibrary.org/b/id/8200015-L.jpg",
    description: "A journey through powerful emotions.",
    category: "Programming"
  },
  {
    title: "Cracking the Coding Interview",
    author: "Gayle McDowell",
    price: 791,
    imageUrl: "https://covers.openlibrary.org/b/id/8200016-L.jpg",
    description: "Rich in knowledge and practical tips.",
    category: "Business"
  },
  {
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    price: 828,
    imageUrl: "https://covers.openlibrary.org/b/id/8200017-L.jpg",
    description: "Adventures and fun for young readers.",
    category: "Kids"
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 865,
    imageUrl: "https://covers.openlibrary.org/b/id/8200018-L.jpg",
    description: "A modern guide to achieving success.",
    category: "Literature"
  },
  {
    title: "1984",
    author: "George Orwell",
    price: 902,
    imageUrl: "https://covers.openlibrary.org/b/id/8200019-L.jpg",
    description: "Explores deep philosophical questions.",
    category: "Education"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 939,
    imageUrl: "https://covers.openlibrary.org/b/id/8200020-L.jpg",
    description: "A fascinating book exploring new perspectives.",
    category: "Fiction"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 976,
    imageUrl: "https://covers.openlibrary.org/b/id/8200021-L.jpg",
    description: "A timeless classic loved by all generations.",
    category: "Programming"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 1013,
    imageUrl: "https://covers.openlibrary.org/b/id/8200022-L.jpg",
    description: "Inspires creativity and innovation.",
    category: "Business"
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 1050,
    imageUrl: "https://covers.openlibrary.org/b/id/8200023-L.jpg",
    description: "A heartwarming and educational tale.",
    category: "Kids"
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 1087,
    imageUrl: "https://covers.openlibrary.org/b/id/8200024-L.jpg",
    description: "An insightful take on personal growth.",
    category: "Literature"
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    price: 1124,
    imageUrl: "https://covers.openlibrary.org/b/id/8200025-L.jpg",
    description: "A journey through powerful emotions.",
    category: "Education"
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 1161,
    imageUrl: "https://covers.openlibrary.org/b/id/8200026-L.jpg",
    description: "Rich in knowledge and practical tips.",
    category: "Fiction"
  },
  {
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    price: 1198,
    imageUrl: "https://covers.openlibrary.org/b/id/8200027-L.jpg",
    description: "Adventures and fun for young readers.",
    category: "Programming"
  },
  {
    title: "Refactoring UI",
    author: "Adam Wathan",
    price: 235,
    imageUrl: "https://covers.openlibrary.org/b/id/8200028-L.jpg",
    description: "A modern guide to achieving success.",
    category: "Business"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    price: 272,
    imageUrl: "https://covers.openlibrary.org/b/id/8200029-L.jpg",
    description: "Explores deep philosophical questions.",
    category: "Kids"
  },
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    price: 309,
    imageUrl: "https://covers.openlibrary.org/b/id/8200030-L.jpg",
    description: "A fascinating book exploring new perspectives.",
    category: "Literature"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    price: 346,
    imageUrl: "https://covers.openlibrary.org/b/id/8200031-L.jpg",
    description: "A timeless classic loved by all generations.",
    category: "Education"
  },
  {
    title: "Learning React",
    author: "Alex Banks",
    price: 383,
    imageUrl: "https://covers.openlibrary.org/b/id/8200032-L.jpg",
    description: "Inspires creativity and innovation.",
    category: "Fiction"
  },
  {
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: 420,
    imageUrl: "https://covers.openlibrary.org/b/id/8200033-L.jpg",
    description: "A heartwarming and educational tale.",
    category: "Programming"
  },
  {
    title: "The Gruffalo",
    author: "Julia Donaldson",
    price: 457,
    imageUrl: "https://covers.openlibrary.org/b/id/8200034-L.jpg",
    description: "An insightful take on personal growth.",
    category: "Business"
  },
  {
    title: "The Cat in the Hat",
    author: "Dr. Seuss",
    price: 494,
    imageUrl: "https://covers.openlibrary.org/b/id/8200035-L.jpg",
    description: "A journey through powerful emotions.",
    category: "Kids"
  },
  {
    title: "Oh, the Places You’ll Go!",
    author: "Barack Obama",
    price: 531,
    imageUrl: "https://covers.openlibrary.org/b/id/8200036-L.jpg",
    description: "Rich in knowledge and practical tips.",
    category: "Literature"
  },
  {
    title: "Green Eggs and Ham",
    author: "Michelle Obama",
    price: 568,
    imageUrl: "https://covers.openlibrary.org/b/id/8200037-L.jpg",
    description: "Adventures and fun for young readers.",
    category: "Education"
  },
  {
    title: "Coding for Kids",
    author: "Sun Tzu",
    price: 605,
    imageUrl: "https://covers.openlibrary.org/b/id/8200038-L.jpg",
    description: "A modern guide to achieving success.",
    category: "Fiction"
  },
  {
    title: "Python Crash Course",
    author: "Stephen R. Covey",
    price: 642,
    imageUrl: "https://covers.openlibrary.org/b/id/8200039-L.jpg",
    description: "Explores deep philosophical questions.",
    category: "Programming"
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Angela Duckworth",
    price: 679,
    imageUrl: "https://covers.openlibrary.org/b/id/8200040-L.jpg",
    description: "A fascinating book exploring new perspectives.",
    category: "Business"
  },
  {
    title: "A Promised Land",
    author: "Carol S. Dweck",
    price: 716,
    imageUrl: "https://covers.openlibrary.org/b/id/8200041-L.jpg",
    description: "A timeless classic loved by all generations.",
    category: "Kids"
  },
  {
    title: "Becoming",
    author: "Stephen Hawking",
    price: 753,
    imageUrl: "https://covers.openlibrary.org/b/id/8200042-L.jpg",
    description: "Inspires creativity and innovation.",
    category: "Literature"
  },
  {
    title: "The Art of War",
    author: "Carl Sagan",
    price: 790,
    imageUrl: "https://covers.openlibrary.org/b/id/8200043-L.jpg",
    description: "A heartwarming and educational tale.",
    category: "Education"
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Ray Bradbury",
    price: 827,
    imageUrl: "https://covers.openlibrary.org/b/id/8200044-L.jpg",
    description: "An insightful take on personal growth.",
    category: "Fiction"
  },
  {
    title: "Grit",
    author: "Roald Dahl",
    price: 864,
    imageUrl: "https://covers.openlibrary.org/b/id/8200045-L.jpg",
    description: "A journey through powerful emotions.",
    category: "Programming"
  },
  {
    title: "Mindset",
    author: "J.K. Rowling",
    price: 901,
    imageUrl: "https://covers.openlibrary.org/b/id/8200046-L.jpg",
    description: "Rich in knowledge and practical tips.",
    category: "Business"
  },
  {
    title: "A Brief History of Time",
    author: "C.S. Lewis",
    price: 938,
    imageUrl: "https://covers.openlibrary.org/b/id/8200047-L.jpg",
    description: "Adventures and fun for young readers.",
    category: "Kids"
  },
  {
    title: "Cosmos",
    author: "Rick Riordan",
    price: 975,
    imageUrl: "https://covers.openlibrary.org/b/id/8200048-L.jpg",
    description: "A modern guide to achieving success.",
    category: "Literature"
  },
  {
    title: "Fahrenheit 451",
    author: "James Dashner",
    price: 1012,
    imageUrl: "https://covers.openlibrary.org/b/id/8200049-L.jpg",
    description: "Explores deep philosophical questions.",
    category: "Education"
  },
  {
    title: "Matilda",
    author: "R.J. Palacio",
    price: 1049,
    imageUrl: "https://covers.openlibrary.org/b/id/8200050-L.jpg",
    description: "A fascinating book exploring new perspectives.",
    category: "Fiction"
  },
  {
    title: "Harry Potter and the Sorcerer’s Stone",
    author: "Madeleine L’Engle",
    price: 1086,
    imageUrl: "https://covers.openlibrary.org/b/id/8200051-L.jpg",
    description: "A timeless classic loved by all generations.",
    category: "Programming"
  },
  {
    title: "The Lion, the Witch and the Wardrobe",
    author: "Katherine Paterson",
    price: 1123,
    imageUrl: "https://covers.openlibrary.org/b/id/8200052-L.jpg",
    description: "Inspires creativity and innovation.",
    category: "Business"
  },
  {
    title: "Percy Jackson & the Olympians",
    author: "Lois Lowry",
    price: 1160,
    imageUrl: "https://covers.openlibrary.org/b/id/8200053-L.jpg",
    description: "A heartwarming and educational tale.",
    category: "Kids"
  },
  {
    title: "The Maze Runner",
    author: "Peter Thiel",
    price: 1197,
    imageUrl: "https://covers.openlibrary.org/b/id/8200054-L.jpg",
    description: "An insightful take on personal growth.",
    category: "Literature"
  },
  {
    title: "Wonder",
    author: "Harper Lee",
    price: 234,
    imageUrl: "https://covers.openlibrary.org/b/id/8200055-L.jpg",
    description: "A journey through powerful emotions.",
    category: "Education"
  },
  {
    title: "A Wrinkle in Time",
    author: "Robert C. Martin",
    price: 271,
    imageUrl: "https://covers.openlibrary.org/b/id/8200056-L.jpg",
    description: "Rich in knowledge and practical tips.",
    category: "Fiction"
  },
  {
    title: "Bridge to Terabithia",
    author: "E.B. White",
    price: 308,
    imageUrl: "https://covers.openlibrary.org/b/id/8200057-L.jpg",
    description: "Adventures and fun for young readers.",
    category: "Programming"
  },
  {
    title: "The Giver",
    author: "Robert Kiyosaki",
    price: 345,
    imageUrl: "https://covers.openlibrary.org/b/id/8200058-L.jpg",
    description: "A modern guide to achieving success.",
    category: "Business"
  },
  {
    title: "Zero to One",
    author: "J.D. Salinger",
    price: 382,
    imageUrl: "https://covers.openlibrary.org/b/id/8200059-L.jpg",
    description: "Explores deep philosophical questions.",
    category: "Kids"
  },
];
