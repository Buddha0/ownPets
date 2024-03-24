import mongoose from 'mongoose'

export const connectDB = () => {
    const db_name = "petAdoption"
    mongoose.connect(process.env.MONGO_DB_URI, {
        dbName: db_name
    }).then(() => {
        console.log("connection succesfull")
    }).catch((err) => {
        console.log(err)
    })
}
