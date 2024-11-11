import { assistantId } from "@/app/assistant-config";
import { openai } from "@/app/openai";

export const runtime = "nodejs";

// Send a new message to a thread
export async function POST(request, { params: { threadId } }) {

  try{
    const { content } = await request.json();

    await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: content,
    });

      const stream = openai.beta.threads.runs.stream(threadId, {
        assistant_id: assistantId,
      });
      
      return new Response(stream.toReadableStream());

  } catch (error) {
    console.error('Error creating message:', error);
    return Response.json(
      { error: 'Failed to create message', details: error.message },
      { status: 500 }
    );
  }

}
