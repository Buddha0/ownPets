import mongoose from 'mongoose';

export const connectDB = () => {
    const db_name = "AdoptPets";
    const db_url = `mongodb://localhost:27017/${db_name}`;

    mongoose.connect(db_url)
        .then(() => {
            console.log("Connection successful");
        })
        .catch((err) => {
            console.error("Connection error:", err);
        });
};
