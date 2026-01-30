
import Button from "./Button";
import "../styles.css"

const OCP = () => {
  return (
    <div className='button-wrapper'>
      <Button text='Go Home' role='forward' />
      <Button text='Go Back' role='back' />
    </div>
  );
};

export default OCP;