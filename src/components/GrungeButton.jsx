export default function GrungeButton({ className = '', children, ...props }) {
  return (
    <button type="button" className={['focusRing', 'grungeBtn', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  )
}
