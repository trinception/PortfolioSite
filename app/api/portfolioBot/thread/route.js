import {openai} from '@/app/openai';

export const runtime = "nodejs";

const ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID;

// Create a new thread
export async function POST() {

    /*console.log('OpenAI Configuration:', {
    hasApiKey: !!process.env.OPENAI_API_KEY,
    hasAssistantId: !!process.env.OPENAI_ASSISTANT_ID,
    betaExists: !!openai.beta,
    threadsExists: !!openai.beta?.threads,
    assistantsExists: !!openai.beta?.assistants
  } );*/

  try {
   // Retrieve assistant
    try {
       await openai.beta.assistants.retrieve(ASSISTANT_ID);
       } catch (error) {
         console.error('Error retrieving assistant:', error);
         return Response.json(
           { error: 'Invalid assistant ID' },
           { status: 400 }
         );
     }

     // Create a new thread
     const thread = await openai.beta.threads.create();

     return Response.json({
       threadId: thread.id,
       assistantId: ASSISTANT_ID
     });

  }catch (error) {
    console.error("Error creating thread:", error);
    return new Response("Failed to create thread", { status: 500 });
  }
}
