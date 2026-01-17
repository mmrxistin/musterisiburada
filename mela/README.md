# Takekes — Local Static Blog

This is a small static blog in Kurdish (Kurmanji). It is intended to be run locally as a static site.

Admin workflow (local-only):

- Open `admin.html` in a browser (e.g. http://localhost:5501/admin.html). Enter any password to proceed (this is a local convenience, not secure).
- Use the editor to create, edit, or delete posts. Click "Export posts.json" to download the updated `posts.json` file.
- Replace the existing `posts.json` file in this folder with the downloaded file to publish changes.

Run locally:

```bash
cd /home/m/pewîst/berxwedan/takekes
python3 -m http.server 5501
# open http://localhost:5501 in your browser
```

Notes:
- This admin is client-side only and does not push changes to the server automatically. You'll need to replace `posts.json` on disk or use a server-side API if you want remote editing.
- The invocation header comment is present at the top of files as requested.
