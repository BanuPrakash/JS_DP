import "../styles.css"
import Button from "./Button";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";


const OCP = () => {
  return (
    <div className='button-wrapper'>
      <Button text='Go Home' icon={<HiOutlineArrowNarrowRight />} />
      <Button text='Go Back' icon={<HiOutlineArrowNarrowLeft />} />
    </div>
  );
};

export default OCP;