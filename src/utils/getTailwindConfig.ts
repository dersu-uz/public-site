import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

export function getTailwindConfig() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return resolveConfig(tailwindConfig as unknown as any)
}
