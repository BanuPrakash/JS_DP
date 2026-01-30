//Reusable Field component
function Field({ label, ...props }) {
    return (
      <div>
        <label>{label}</label>
        <input {...props} />
      </div>
    );
  }
  