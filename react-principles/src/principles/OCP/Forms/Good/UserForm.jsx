//Form stays closed for modification
function UserForm({ userType }) {
    const fields = userTypeFields[userType] || [];
  
    return (
      <form>
        <Field name="name" label="Name" />
  
        {fields.map(field => (
          <Field
            key={field.name}
            name={field.name}
            label={field.label}
          />
        ))}
  
        <button>Submit</button>
      </form>
    );
  }
  