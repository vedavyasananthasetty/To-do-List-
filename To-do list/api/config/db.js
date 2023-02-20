const mongoose = require('mongoose')


const conncetDb = async (req,res) => {
  try {
    mongoose.set('strictQuery', true);
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to MongoDB!!!")
  } catch (error) {
    console.log("failed to connect to db!!!")
  }
}

module.exports = conncetDb