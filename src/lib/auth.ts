import { supabase } from './supabase'

export interface AdminUser {
  email: string
  password: string
}

export const adminCredentials = {
  email: 'ahsanursabbir@gmail.com',
  password: 'Ahs@nursabbir0'
}

export const authenticateAdmin = async (email: string, password: string): Promise<boolean> => {
  console.log('Attempting login with:', { email, password })
  console.log('Expected credentials:', adminCredentials)
  
  // Trim whitespace and convert to lowercase for email comparison
  const trimmedEmail = email.trim().toLowerCase()
  const trimmedPassword = password.trim()
  const expectedEmail = adminCredentials.email.trim().toLowerCase()
  const expectedPassword = adminCredentials.password.trim()
  
  console.log('Trimmed input:', { trimmedEmail, trimmedPassword })
  console.log('Trimmed expected:', { expectedEmail, expectedPassword })
  
  const isValid = trimmedEmail === expectedEmail && trimmedPassword === expectedPassword
  console.log('Authentication result:', isValid)
  return isValid
}

export const setAdminSession = (isAuthenticated: boolean) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('admin_authenticated', isAuthenticated.toString())
  }
}

export const getAdminSession = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('admin_authenticated') === 'true'
  }
  return false
}

export const clearAdminSession = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('admin_authenticated')
  }
}
