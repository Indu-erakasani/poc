import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


// const candidateSchema = new mongoose.Schema({
//   _id: { type: mongoose.Schema.Types.ObjectId, auto: true },

//   Candidatename: { type: String, required: true },
//   Candidateemail: { type: String, required: true, unique: true },
// }); 

const candidateSchema = new mongoose.Schema({
    Candidatename: { type: String, required: true },
    Candidateemail: { type: String, required: true, unique: true },
    correctAnswers: { type: Number, default: 0 },
    totalQuestions: { type: Number, default: 0 },
    qualified: { type: Boolean, default: false },
  });
  




candidateSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


candidateSchema.methods.getJWTToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
    });
};

candidateSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};  


 const User = mongoose.model("User", candidateSchema);

export { User };




