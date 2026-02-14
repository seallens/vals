import { cn } from '../../utils/cn'
import { useValentineStage } from '../../hooks/useValentineStage'
import Flower from '../Flower'
import ValCard from '../ValCard'

/**
 * Orchestrates the full sequence: blooming flower in center → flower to card top + card visible.
 */
export default function Stage() {
  const { bloom, done } = useValentineStage()

  return (
    <div
      className={cn(
        'flex min-h-screen w-full items-center justify-center overflow-x-hidden font-serif',
        'bg-vals-dark',
        'px-4 py-6 sm:px-6 sm:py-8'
      )}
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 50% 0%, rgba(157, 78, 221, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(199, 125, 255, 0.08) 0%, transparent 40%)
        `,
      }}
    >
      <div
        className={cn(
          'flex flex-col items-center justify-center',
          !done && 'fixed inset-0 z-[2] h-full w-full pointer-events-none',
          done && 'relative w-full max-w-[420px] mx-auto'
        )}
      >
        <Flower bloom={bloom} done={done} />
        <ValCard done={done} />
      </div>
    </div>
  )
}
