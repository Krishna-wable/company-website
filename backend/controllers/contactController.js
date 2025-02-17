const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    
    if (!name || !email || !mobile || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

   
    const newContact = new Contact({ name, email, mobile, message });
    await newContact.save();

    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: "Server error" });
    
  }
 
};
