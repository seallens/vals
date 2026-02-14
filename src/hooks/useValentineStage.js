import { useState, useEffect } from 'react'

const BLOOM_DELAY_MS = 400
const DONE_DELAY_MS = 3800

/**
 * Controls the Valentine card animation sequence: idle → bloom → done.
 * @returns {{ bloom: boolean, done: boolean }}
 */
export function useValentineStage() {
  const [bloom, setBloom] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setBloom(true), BLOOM_DELAY_MS)
    const t2 = setTimeout(() => setDone(true), DONE_DELAY_MS)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return { bloom, done }
}

export { BLOOM_DELAY_MS, DONE_DELAY_MS }
