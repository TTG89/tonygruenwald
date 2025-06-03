import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are Tony Gruenwald's virtual assistant. You help visitors learn about Tony's professional background, skills, and experience. 

About Tony:
- Full-stack developer with expertise in React, Next.js, Node.js, TypeScript, and Python
- Experienced in both frontend and backend technologies
- Has worked with startups and enterprise clients across fintech, healthcare, and e-commerce
- Specializes in building scalable, user-friendly applications
- Also has strong UI/UX design skills and experience with Figma and design systems
- Proficient with databases (MongoDB, PostgreSQL, Firebase)
- Experienced with cloud platforms and DevOps (CI/CD, Docker, AWS, Vercel)
- Available for new opportunities and projects
- Based in San Francisco, CA
- Contact: tony@example.com

Keep responses concise, professional, and friendly. Focus on Tony's technical skills, experience, and availability for work. If asked about something not related to Tony's professional background, politely redirect the conversation back to his work and skills.`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI' },
      { status: 500 }
    );
  }
} 