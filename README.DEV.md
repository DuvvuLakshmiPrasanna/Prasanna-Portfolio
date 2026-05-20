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

3. Direct email delivery

- The form posts directly to an email relay service so it works without SMTP setup.
- If you want to use your own SMTP account instead, copy `.env.local.example` to `.env.local` and set the values:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-smtp-username@example.com
SMTP_PASS=your-smtp-password-or-app-password
CONTACT_FROM_EMAIL=your-smtp-username@example.com
```

- Restart the dev server after adding env vars.
- The contact form sends to `ig.prasannayadav@gmail.com` and uses the visitor's email as reply-to.

4. Notes

4) Preview and theme

- After `npm run dev` open http://localhost:3000 to preview.
- Use the theme toggle in the header to switch to light-mode — the site uses a warm parchment (`#F0EDE6`) background and the network animation will render white nodes/lines in light mode.

- The light theme uses a warm parchment palette (no pure white backgrounds). Toggle theme in the header to preview the white network nodes on light background.
- If `npm` is not recognized in your VS Code terminal after installing Node, restart VS Code and reopen the terminal.
