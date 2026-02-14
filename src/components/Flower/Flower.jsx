import { cn } from '../../utils/cn'
import Petals from './Petals'
import './Flower.css'

/**
 * Neon flower: petals only. Sizes and position depend on bloom/done state.
 */
export default function Flower({ bloom, done }) {
  return (
    <div
      className={cn(
        'flower-wrap relative flex items-center justify-center',
        !done && 'bloom-big',
        done && 'done'
      )}
    >
      <svg width={0} height={0} aria-hidden>
        <defs>
          <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0aaff" stopOpacity={1} />
            <stop offset="50%" stopColor="#c77dff" stopOpacity={1} />
            <stop offset="100%" stopColor="#9d4edd" stopOpacity={1} />
          </linearGradient>
        </defs>
      </svg>
      <Petals bloom={bloom} done={done} />
    </div>
  )
}
