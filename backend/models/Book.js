import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
     required: true
    },

    // category: {
    // type: String,
    // enum: ['literature', 'education', 'fiction', 'programming', 'business', 'kids'],
    // required: true,
    // },
  },
  { timestamps: true }
);

export default mongoose.model('Book', bookSchema);
