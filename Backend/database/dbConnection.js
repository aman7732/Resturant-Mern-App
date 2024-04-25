import mongoose from "mongoose";


export const dbConnection = async() =>{
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected successfully")
  } catch (error) {
    console.log("error while connecting", error)
  }
}
// export const dbConnection = () =>{
//   mongoose.connect(process.env.MONGO_URL);
//   console.log(`Connected to mongodb database ${mongoose.connection.host}`)
// }