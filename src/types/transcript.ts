export interface Transcript {
  videoId: string
  title: string
  source: string
  language: string
  kind: string
  retrievedAt: string
  duration: number
  chapters: { start: number; title: string }[]
  segments: { start: number; text: string }[]
}
