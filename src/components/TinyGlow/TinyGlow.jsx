import { cn } from '../../utils/cn'

/**
 * Initial tiny glow in the center before the flower blooms. Fades out when bloom starts.
 */
export default function TinyGlow({ visible = true }) {
  return (
    <div
      aria-hidden
      className={cn(
        'fixed left-1/2 top-1/2 z-[1] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full',
        'bg-gradient-radial from-neon-magenta via-neon-purple to-transparent',
        'shadow-glow-dot animate-tiny-glow-breathe transition-opacity duration-700',
        !visible && 'pointer-events-none opacity-0'
      )}
      style={{
        background: 'radial-gradient(circle, #e0aaff 0%, #c77dff 50%, transparent 70%)',
      }}
    />
  )
}
