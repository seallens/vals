import { cn } from '../../utils/cn'
import CardContent from './CardContent'

/**
 * The actual Valentine card panel. Fades in when stage is done.
 */
export default function ValCard({ done, title, message, signOff }) {
  return (
    <div
      className={cn(
        'relative w-full overflow-visible rounded-2xl sm:rounded-[20px] border border-[rgba(199,125,255,0.3)] transition-all duration-500',
        'bg-[rgba(22,0,45,0.92)] shadow-neon-card',
        'h-auto min-h-0',
        !done && 'scale-[0.95] opacity-0',
        done && 'scale-100 opacity-100'
      )}
    >
      <CardContent title={title} message={message} signOff={signOff} />
    </div>
  )
}
