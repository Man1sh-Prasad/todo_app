import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String 
    },
    user: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {timestamps: true})

export const Todos = mongoose.model('Todos', todoSchema)