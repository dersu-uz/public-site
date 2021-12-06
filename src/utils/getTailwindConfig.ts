import resolveConfig from 'tailwindcss/resolveConfig'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
import tailwindConfig from '../../tailwind.config.js'

export function getTailwindConfig(): TailwindConfig {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return resolveConfig(tailwindConfig as unknown as TailwindConfig)
}
