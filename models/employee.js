const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: { type: String, required: [true, "Please enter your First Name! "], trim: true },
    lastName: { type: String, required: [true, "Please enter your Last Name!"], trim: true },
    emailId: {
        type: String, required: [true, "Please enter your email!"], validate: [(email) => {
            let val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return val.test(email);
        }, "Please enter the correct email format!"]
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema);