import { TURINS } from "@/lib/links";

// /learn used to serve a prototype of interactive lesson boards. It was never the TinyTutor
// product, so it has been withdrawn: 410 Gone tells browsers and search engines it is not
// coming back, and the page points people to the real TinyTutor page instead.
const body = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Page removed · TinyTutor</title>
</head>
<body style="font-family: system-ui, sans-serif; color: #111b34; max-width: 36rem; margin: 6rem auto; padding: 0 1.25rem; line-height: 1.6">
<h1>This page has been removed</h1>
<p>It hosted an early prototype that was not part of TinyTutor.</p>
<p><a href="${TURINS.product}">Learn about TinyTutor</a> &middot; <a href="/">Back to the home page</a></p>
</body>
</html>`;

function gone() {
  return new Response(body, {
    status: 410,
    headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex" },
  });
}

export const GET = gone;
export const HEAD = gone;
