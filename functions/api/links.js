export async function onRequest(context) {
  const { env } = context;

  const buttons = [
    { id: '1', label: env.BUTTON_LABEL1, hasUrl: !!env.TARGET_URL1 },
  ].filter(b => b.hasUrl && b.label);

  return new Response(JSON.stringify({ buttons }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}
