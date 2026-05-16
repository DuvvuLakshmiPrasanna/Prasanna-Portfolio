Development notes — local setup

1. Ensure Node.js (LTS) and npm are installed

Check versions:

```powershell
node -v
npm -v
```

If missing, install Node.js LTS (one of):

```powershell
# winget (Windows)
winget install OpenJS.NodeJS.LTS

# or chocolatey
choco install nodejs-lts
```

2. Install dependencies and run the dev server

```bash
npm install
npm run dev
```

3. Configure EmailJS (optional)

- Copy `.env.local.example` to `.env.local` and set the values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_USER_ID=user_xxx
```

- Restart the dev server after adding env vars.

4. Notes

4) Preview and theme

- After `npm run dev` open http://localhost:3000 to preview.
- Use the theme toggle in the header to switch to light-mode — the site uses a warm parchment (`#F0EDE6`) background and the network animation will render white nodes/lines in light mode.

- The light theme uses a warm parchment palette (no pure white backgrounds). Toggle theme in the header to preview the white network nodes on light background.
- If `npm` is not recognized in your VS Code terminal after installing Node, restart VS Code and reopen the terminal.
