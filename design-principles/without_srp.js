function register(user) {
    // 1. Validate
    if(!user.email) {
        throw new Error("Email is required!!!")
    }

    // 2. Save to database 
    database.save(user);

    // 3. Send Email
    emailService.send(user.email, "Welcome " + user.email)
}