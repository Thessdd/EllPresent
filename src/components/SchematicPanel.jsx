import { motion, useReducedMotion } from 'framer-motion'

export default function SchematicPanel({
  label,
  id,
  children,
  className = '',
  softened = false,
}) {
  const reduced = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={[
        'schematicPanel scrollbarThin relative px-6 py-7 md:px-10 md:py-10',
        softened ? 'rounded-[16px] border border-lime/15 bg-[rgba(20,15,25,0.80)]' : '',
        className,
      ].join(' ')}
      initial={reduced ? false : { opacity: 0, y: 12 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={reduced ? undefined : { duration: 0.6, ease: 'easeOut' }}
    >
      {label ? (
        <motion.div
          className="panelLabel"
          initial={reduced ? false : { opacity: 0, x: -8 }}
          whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={reduced ? undefined : { duration: 0.35, ease: 'easeOut', delay: 0.12 }}
        >
          {label}
        </motion.div>
      ) : null}
      {children}
    </motion.section>
  )
}

