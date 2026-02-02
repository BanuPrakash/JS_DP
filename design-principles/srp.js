// GOOD. 

function validateUser(user) {
     // 1. Validate
    if(!user.email) {
        throw new Error("Email is required!!!")
    }
}

function saveUser(user) {
     // 2. Save to database 
    database.save(user);
}

function sendWelcomeEmail(user) {
    // 3. Send Email
    emailService.send(user.email, "Welcome " + user.email)
}

function register(user) {   
    validateUser(user);
    saveUser(user);
    sendWelcomeEmail(user);
}