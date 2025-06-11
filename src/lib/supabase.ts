import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our chat logs
export interface ChatLog {
  id?: string
  user_message: string
  ai_response: string
  user_ip?: string
  user_agent?: string
  session_id?: string
  created_at?: string
}

// Function to log chat interactions
export async function logChatInteraction(chatData: Omit<ChatLog, 'id' | 'created_at'>) {
  try {
    const { data, error } = await supabase
      .from('chat_logs')
      .insert([chatData])
      .select()

    if (error) {
      console.error('Error logging chat interaction:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Error logging chat interaction:', error)
    return null
  }
} 