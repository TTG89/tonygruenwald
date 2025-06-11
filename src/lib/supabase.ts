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

    // Run cleanup after logging (keep only last 2 weeks)
    cleanupOldLogs()

    return data
  } catch (error) {
    console.error('Error logging chat interaction:', error)
    return null
  }
}

// Function to clean up old logs (keeps only last X days)
export async function cleanupOldLogs(daysToKeep: number = 14) {
  try {
    const cutoffDate = new Date()
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep)
    
    const { error } = await supabase
      .from('chat_logs')
      .delete()
      .lt('created_at', cutoffDate.toISOString())

    if (error) {
      console.error('Error cleaning up old logs:', error)
    } else {
      console.log(`Cleaned up logs older than ${daysToKeep} days`)
    }
  } catch (error) {
    console.error('Error in cleanup function:', error)
  }
}

// Function to get storage stats
export async function getStorageStats() {
  try {
    const { count, error } = await supabase
      .from('chat_logs')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Error getting storage stats:', error)
      return { totalRecords: 0, estimatedSize: '0 KB' }
    }

    // Rough estimate: ~500 bytes per record (text + metadata)
    const estimatedBytes = (count || 0) * 500
    const estimatedSize = estimatedBytes < 1024 
      ? `${estimatedBytes} B`
      : estimatedBytes < 1024 * 1024
      ? `${(estimatedBytes / 1024).toFixed(1)} KB`
      : `${(estimatedBytes / (1024 * 1024)).toFixed(1)} MB`

    return {
      totalRecords: count || 0,
      estimatedSize
    }
  } catch (error) {
    console.error('Error getting storage stats:', error)
    return { totalRecords: 0, estimatedSize: '0 KB' }
  }
} 