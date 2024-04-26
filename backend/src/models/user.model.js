import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    todoList: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Todos"
        }
    ]
}, {timestamps: true})

export const User = mongoose.model('User', userSchema);