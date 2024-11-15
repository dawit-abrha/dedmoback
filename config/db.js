const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://wediabrhana:yesno1212@cluster5.tmnig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster5")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Error connecting to MongoDB", err));