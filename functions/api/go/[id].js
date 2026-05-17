export async function onRequest(context) {
  const { params, env } = context;
  const id = params.id;

  const urls = {
    '1': env.TARGET_URL1,
  };

  const target = urls[id];

  if (!target) {
    return new Response('Not found', { status: 404 });
  }

  return Response.redirect(target, 302);
}
