import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { projects, Project } from '../../../lib/projects';
import { logChatInteraction } from '../../../lib/supabase';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Get user info for logging
    const userIP = request.headers.get('x-forwarded-for') || 
                   request.headers.get('x-real-ip') || 
                   request.headers.get('cf-connecting-ip') || // Cloudflare
                   'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    
    // Generate a simple session ID (you might want to use a more sophisticated approach)
    const sessionId = request.headers.get('x-session-id') || `session_${Date.now()}`;

    // Prepare projects data for the AI context
    const projectsContext = projects.map((project: Project) => ({
      title: project.title,
      client: project.client,
      timeline: project.timeline,
      role: project.role,
      technologies: project.technologies,
      shortDescription: project.shortDescription,
      challenge: project.challenge,
      solution: project.solution,
      category: project.category,
      liveUrl: project.liveUrl
    }));

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are T.O.N.Y., Tony Gruenwald's AI assistant. 

CRITICAL: Keep ALL responses to EXACTLY 2-3 sentences maximum. No exceptions.

About T.O.N.Y.:
"Tech-Oriented Narrative for You" (professional) or "Tony's Optimized Networked Yapper" (for devs who appreciate humor!)

About Tony:
- Software Engineer with 8+ years in e-commerce and web applications
- Current: Sr. Software Engineer @ S&S Activewear (Shopify Hydrogen 2, React, APIs)
- Skills: React, Next.js, Vue.js, Shopify, Node.js, PHP, AWS, Docker
- Available for full-time, consulting, and freelance work

KEY AI PROJECT - CharterBot:
Tony built CharterBot, an AI-powered SaaS platform for charter boat companies. **It's a real product actively used by Life On The Rocks Charters (lifeontherockscharters.com) in Key West, FL, handling live customer inquiries and bookings.** Features include OpenAI GPT-4o-mini integration, real-time FareHarbor booking, NOAA weather data, multi-tenant architecture, and streaming responses. Built with Next.js, TypeScript, Supabase, and Vercel.

Recent Projects & Portfolio:
${JSON.stringify(projectsContext, null, 2)}

SPECIAL RESPONSES:
- If asked "What projects have you built?" → Mention CharterBot as a smart AI assistant for fishing and boat charters, plus other key projects
- If asked about "AI work" → Highlight CharterBot with OpenAI integration, booking help, FareHarbor integration, and upselling features
- If asked about "charter or boating industry" → Focus on CharterBot as an AI assistant for charter businesses with real-time booking and weather integration

Personal Touch:
🧀 Green Bay Packers shareholder from Milwaukee, now in St. Pete, FL
"Ok Fisher" (humble but probably better than he admits)
Jurassic Park fan, loves clean code, debugging philosophy: "It's not a bug, it's an undocumented feature"

RESPONSE RULES:
- Maximum 2-3 sentences per response
- Be concise, friendly, and professional
- Focus on Tony's skills and availability
- If asked for details, still keep to 2-3 sentences but be more specific
- Contact: tgruenwald15@gmail.com
- Resume: https://tonygruenwald.dev/resume

Remember: SHORT responses only! 2-3 sentences maximum.`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 100,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response. Please try again.";

    // Log the conversation to Supabase (don't block the response if logging fails)
    logChatInteraction({
      user_message: message,
      ai_response: reply,
      user_ip: userIP,
      user_agent: userAgent,
      session_id: sessionId
    }).catch(error => {
      console.error('Failed to log chat interaction:', error);
    });

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI' },
      { status: 500 }
    );
  }
} 