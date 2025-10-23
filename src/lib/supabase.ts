import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aubqsnzwrmzrasgnazmt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1YnFzbnp3cm16cmFzZ25hem10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMjY3MDIsImV4cCI6MjA3NjgwMjcwMn0.bw3_gnSi0E1MR9V1Z9Tpkvv5sF-WibaiaxbmUfFqjIc'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface About {
  id: string
  name: string
  description: string
  image_url: string
  linkedin_url: string
  github_url: string
  created_at: string
  updated_at: string
}

export interface Education {
  id: string
  institution: string
  start_date: string
  end_date: string
  gpa: number
  description: string
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  title: string
  github_url?: string
  web_url?: string
  description?: string
  created_at: string
  updated_at: string
}

export interface Experience {
  id: string
  company: string
  position: string
  start_date: string
  end_date: string
  description?: string
  created_at: string
  updated_at: string
}

export interface Certificate {
  id: string
  title: string
  url: string
  description?: string
  created_at: string
  updated_at: string
}

export interface Skill {
  id: string
  name: string
  type: 'soft' | 'hard'
  level: number
  description?: string
  created_at: string
  updated_at: string
}
