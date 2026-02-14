import { cn } from '../../utils/cn'

const PETAL_PATH = 'M12 2 C18 10 20 22 12 38 C4 22 6 10 12 2 Z'
const VIEW_BOX = '0 0 24 48'

/**
 * Single petal shape. Rotation and delay come from parent.
 */
export default function Petal({ rotationDeg, delayMs, bloom, done }) {
  const transform = `rotate(${rotationDeg}deg) scale(${bloom ? 1 : 0})`
  const style = { transform, transitionDelay: bloom ? `${delayMs}ms` : undefined }

  return (
    <div
      aria-hidden
      className={cn(
        'petal absolute left-1/2 top-1/2 opacity-0',
        bloom && 'opacity-100',
        done && 'done'
      )}
      style={style}
    >
      <svg viewBox={VIEW_BOX} className="block h-full w-full" style={{ filter: 'drop-shadow(0 0 10px #c77dff) drop-shadow(0 0 20px rgba(157, 78, 221, 0.6))' }}>
        <path
          d={PETAL_PATH}
          fill="url(#petalGradient)"
          stroke="#e0aaff"
          strokeWidth={0.4}
          strokeOpacity={0.9}
        />
      </svg>
    </div>
  )
}
