import mongoose from 'mongoose';




export const connectDB = async () => {

    try{
       await mongoose.connect(
            process.env.MONGODB_URI,{
                useUnifiedTopology: true, useNewUrlParser: true
            }
          );
    }
    catch(e){
        console.log(`Error connecting to DB -> ${e}`)
    }

}
