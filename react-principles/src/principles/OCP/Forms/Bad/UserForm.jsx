/*
Why this breaks OCP

Every time a new user type is added:

You must edit UserForm

More if/else or conditionals appear

Component becomes fragile and hard to read
*/
function UserForm({ userType }) {
    return (
      <form>
        <input placeholder="Name" />
  
        {userType === "student" && (
          <input placeholder="University" />
        )}
  
        {userType === "employee" && (
          <input placeholder="Company" />
        )}
  
        {userType === "freelancer" && (
          <input placeholder="Portfolio URL" />
        )}
  
        <button>Submit</button>
      </form>
    );
  }
  