import type {ButtonHTMLAttributes } from 'react';
import "../styles.css";

// Extend the native button attributes
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger';
}

const BaseButton = ({ variant, children, ...props }: ButtonProps) => {
  return (
    <button 
      {...props} // Standard props (onClick, disabled, etc.) work automatically
      className={`btn-${variant ?? 'primary'}`}
    >
      {children}
    </button>
  );
};

// Specialized component that is fully substitutable for BaseButton
const DangerButton = (props: ButtonProps) => (
  <BaseButton {...props} variant="danger" />
);

export default DangerButton;
export { BaseButton };