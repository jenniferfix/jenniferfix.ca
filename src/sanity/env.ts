export const apiVersion =
  process.env.VITE_PUBLIC_SANITY_API_VERSION || '2025-04-01'

export const dataset = assertValue(
  process.env.VITE_PUBLIC_SANITY_DATASET,
  'Missing environment variable: VITE_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.VITE_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: VITE_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
