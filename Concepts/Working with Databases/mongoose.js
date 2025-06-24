import mongoose from 'mongoose';

// Connecting to MongoDB
const uri = 'mongodb://127.0.0.1:27017/mytestdb';
await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema (structure of the data)
const bookingSchema = new mongoose.Schema({
    firstName: String,
    surname: String,
    attendees: Number,
    bookingDate: {
        type: Date,
        default: Date.now
    }
});

// Create a model (like a class)
const Booking = mongoose.model("Booking", bookingSchema);

// Create a new booking
const newBooking = new Booking({
    firstName: "Alice",
    surname: "Smith",
    attendees: 2
});

// Save it to the DB
await newBooking.save;

// Find and print all bookings
const bookings = await Booking.find();

// Close connection
await mongoose.disconnect();