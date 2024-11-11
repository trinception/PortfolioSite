import mongoose, { Schema } from "mongoose";

const bodySchema = new Schema({
    prompt:{
        type: String,
        required: [true, "Prompt is required"],
        trim: true,
        minLength: [2, "Prompt must be larger than 2 characters"],
        maxLength: [128, "Prompt must be lesser than 128 characters"],
    },
  });

  const Chat =
      mongoose.models.Chat || mongoose.model("Chat",
          bodySchema);
console.log('Model Chat.js accessed.');

  export default Chat;
