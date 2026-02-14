import Petal from './Petal'

const PETAL_COUNT = 6
const ROTATION_STEP = 360 / PETAL_COUNT
const DELAY_STEP_MS = 100

/**
 * Renders 6 petals in a circle with staggered bloom delay.
 */
export default function Petals({ bloom, done }) {
  return (
    <div className="petals absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
      {Array.from({ length: PETAL_COUNT }, (_, i) => (
        <Petal
          key={i}
          rotationDeg={i * ROTATION_STEP}
          delayMs={200 + i * DELAY_STEP_MS}
          bloom={bloom}
          done={done}
        />
      ))}
    </div>
  )
}
