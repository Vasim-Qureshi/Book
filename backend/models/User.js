import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'inactive',
    },
  },
  { timestamps: true }
);

// Password hash before save
userSchema.pre('save', async function (next) {
  //hindi me => agar password change nahi hua hai toh next() call karo
  if (!this.isModified('password')) return next();
  //hindi me => agar password change hua hai toh hash karo
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  //hindi me => hash hone ke baad next() call karo
  next();
});

// Compare password
userSchema.methods.matchPassword = function (enteredPassword) {
  //hindi me => enteredPassword ko hash karke compare karo
  const ComparePassword = bcrypt.compareSync(enteredPassword, this.password);
  //hindi me => agar match hua toh true return karo, nahi toh false
  return ComparePassword;
};

export default mongoose.model('User', userSchema);
