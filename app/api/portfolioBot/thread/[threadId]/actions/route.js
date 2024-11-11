import { openai } from "openai";

// Send a new message to a thread
export async function POST(request, { params: { threadId } }) {
    console.log("inside api/portfolioBot/thread/threadId/actions/route.js");
  const { toolCallOutputs, runId } = await request.json();

  const stream = openai.beta.threads.runs.submitToolOutputsStream(
    threadId,
    runId,
    // { tool_outputs: [{ output: result, tool_call_id: toolCallId }] },
    { tool_outputs: toolCallOutputs }
  );

  return new Response(stream.toReadableStream());
}
