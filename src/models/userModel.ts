import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userType: {
    type: String,
    required: true,
    default: 'Employee'
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },

  //additional fields for employee
  skills: {
    type: [],
    required: false,
  },
  experience: {
    type: [],
    required: false,
  },
  education: {
    type: [],
    required: false,
  },
  carrierObjective: {
    type: String,
    required: false,
  },

  // additional fields for employer
  establishmentYear: {
    type: String,
    required: false,
  },
  companySize: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  about: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  }
}, {
  timestamps: true,
});

if (mongoose.models.users) {
  const userModel = mongoose.model('users');
  mongoose.deleteModel(userModel.modelName);
}

const newUserModel = mongoose.model('users', userSchema);

export default newUserModel;