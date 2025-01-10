const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();

app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/bookappregister')
    .then(() => {
        console.log("DB connected");
    })
    .catch((error) => {
        console.error("Error connecting to DB:", error);
    });

const appSchema1 = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});
const appSchema2 = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String,},
    phone:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true}, 
    country:{type:String,required:true}, 
    state:{type:String,required:true}, 
    zipcode:{type:String,required:true}, 
    price:{type:Number,required:true},
    items:{type:Number,required:true}
});


const collection = mongoose.model("register", appSchema1);
const collection2 = mongoose.model("checkout", appSchema2);

app.post('/registerdata', async (req, res) => {
    try {
        const data = req.body;
        console.log("Incoming data:", data); // Log request body
        const{email,password}=data //data is like object destructure
        console.log("Incoming email:", email);
        console.log("Incoming password:", password); // Log password field
        

        if (!email || !password) {
            console.error("Email or password missing");
            return res.status(400).json({ error: "Email and password are required" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const document = new collection({ email, password: hashedPassword });
        const saved = await document.save();
        console.log("Saved document:", saved); // Log saved data
        res.status(200).json({ message: "Data saved successfully", data: saved });
    } catch (error) {
        console.error("Error in /logindata:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
//The data from login page
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }
        // Find the user by email
        const user = await collection.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Compare entered password with the stored hashed password
        const isMatchPass = await bcrypt.compare(password, user.password);

        if (!isMatchPass) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful", id:user._id });
    } catch (error) {
        console.error("Error in /login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/checkout", async (req, res) => {
    try {
      const data = req.body;
      const document2 = new collection2(data);
      const saved2 = await document2.save();
      res.status(200).json({ message: "Data saved successfully", data: saved2 });
    } catch (error) {
      console.error("Error in /checkout:", error);
      res.status(500).json({ error: "Something went wrong" }); // Add error response
    }
  });
  

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
