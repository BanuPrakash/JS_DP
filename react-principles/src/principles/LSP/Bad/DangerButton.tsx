// ❌ VIOLATION: Cannot be used where a native button is expected
const DangerButton = ({ label }: { label: string }) => {
    return <div className="danger-styles">{label}</div>;
  };

export default DangerButton;

/*
Creating a component that looks like a button 
but doesn't behave like one violates the principle. 
For example, if your DangerButton uses a div internally, 
it loses native accessibility features like keyboard navigation 
and the type="submit" behavior.
*/