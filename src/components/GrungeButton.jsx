export default function GrungeButton({ children, onClick, className = '', ...rest }) {
  return (
    <button type="button" className={`grungeBtn focusRing ${className}`.trim()} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
