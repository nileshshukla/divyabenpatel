# How to update your website (no coding needed)

Your site: **https://nileshshukla.github.io/divyabenpatel/**

Everything you can read on the site — your name, intro, and every timeline
story — lives in **one file called `content.js`**. You never need to touch any
other file.

---

## ✏️ Change some text (2 minutes)

1. Go to **https://github.com/nileshshukla/divyabenpatel** and log in.
2. Click the file **`content.js`**.
3. Click the **pencil icon** (✏️, top-right of the file) to edit.
4. Change the text you want. Only edit words between `"quotes"` or between
   `` `backticks` `` — don't delete the quotes, commas, or brackets themselves.
5. Click the green **"Commit changes…"** button, then **"Commit changes"** again.
6. Wait about 1 minute, then refresh your site. Done! 🎉

---

## 📷 Add photos

1. On the GitHub page, open the **`images`** folder.
2. Click **"Add file" → "Upload files"** (top right).
3. Drag your photos in. Give them simple names first, like `audit-award-1.jpg`
   (lowercase, dashes instead of spaces).
4. Click the green **"Commit changes"** button.
5. Now the photo exists — reference it in `content.js` like this:
   `{ src: "images/audit-award-1.jpg", alt: "What this photo shows" }`

> **Certificates or documents:** add `, fit: "contain"` after the alt text so
> the certificate is always shown whole and never cropped:
> `{ src: "images/my-cert.jpg", alt: "My certificate", fit: "contain" }`

---

## ➕ Add a new moment to the timeline

1. Open `content.js` for editing (pencil icon).
2. Scroll to the bottom — there's a block marked **"TO ADD A NEW MOMENT"**
   with a ready-made template between `COPY START` and `COPY END`.
3. Copy the template and paste it **directly under the line
   `const MOMENTS = [`** (near the top of the timeline list — newest goes first).
4. Replace the placeholder text with your date, title, story, and photo names.
5. Commit changes (green button). Refresh the site after a minute.

**The five categories** you can use: `Award`, `Certification`, `Project`,
`Milestone`, `Education`. (These match the filter buttons on the site.)

---

## 😱 The site shows "Oops — the content file has a typo"

Don't panic — nothing is lost, and visitors can't break anything. This just
means the last edit accidentally removed a quote, comma, or backtick.

**Easiest fix — undo the last edit:**
1. On GitHub, open `content.js` and click **"History"** (top right of the file).
2. Click the edit **before** your last one.
3. Click the **`< >`** ("Browse repository at this point") button, open
   `content.js`, click the **copy icon** to copy the whole old version.
4. Go back, edit `content.js` (pencil), select everything, paste the old
   version over it, and commit.

Or just tell Nilesh 🙂

---

## Rules of thumb

- ✅ Edit text between quotes and backticks.
- ✅ Blank line inside a story = new paragraph.
- ❌ Never type the `` ` `` (backtick) character *inside* a story.
- ❌ Don't remove commas, quotes, `{ }`, or `[ ]`.
- The newest moment goes at the **top** of the `MOMENTS` list.
