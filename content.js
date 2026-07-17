/* ==========================================================================
   HI DIVYA! 👋  THIS IS THE ONLY FILE YOU EVER NEED TO EDIT.

   Everything visitors read on your site lives in this file:
     • PROFILE  — your name, role, and intro line
     • MOMENTS  — your timeline (newest at the top)

   THE 3 GOLDEN RULES
   1. Only change the text between quotes "..." or between backticks `...`
   2. Never delete quotes, backticks, commas, brackets or braces.
   3. Inside a story (between backticks) do NOT type the ` character.

   If the site ever shows an "Oops" message after your edit, don't worry —
   nothing is lost. Open EDITING.md for the 1-minute fix.
   ========================================================================== */

const PROFILE = {
  name: "Divya Patel",
  role: "Manager — Quality Assurance & Compliance · Lupin Pharmaceuticals",
  lede: "A career in pharmaceutical quality — the audits, awards, certifications, and milestones that tell the story.",
  badges: ["MS", "ASQ-CQA", "Six Sigma Green Belt", "ASQ Member"]
};

const CATEGORIES = ["All", "Award", "Certification", "Project", "Milestone", "Education"];

const MOMENTS = [
  {
    date: "2026 — Ongoing",
    category: "Project",
    title: "Veeva Vault Training — Digital Quality Transformation",
    org: "Lupin Pharmaceuticals · Somerset, NJ",
    story: `Leading hands-on Veeva Vault training for Lupin employees as our site adopts Veeva as the new home for quality documentation.

Session by session, we walk through logging in, navigating the Vault workspace, document libraries, and viewing controlled documents through their lifecycle — turning a new system into a familiar everyday tool.

In a regulated environment, adoption doesn't happen at rollout — it happens when people feel confident using the system in their daily work. Watching colleagues go from cautious first logins to confidently finding and owning their documents is the most rewarding part of this project.`,
    images: [
      { src: "images/veeva-1.jpg", alt: "Divya leading a Veeva Vault navigation training session at Lupin" },
      { src: "images/veeva-2.jpg", alt: "Presenting the Viewing Documents module of Veeva Vault training" },
      { src: "images/veeva-3.jpg", alt: "Training room during the Logging in to Vault session" },
      { src: "images/veeva-4.jpg", alt: "Walking trainees through the Vault home tab and navigation" },
      { src: "images/veeva-5.jpg", alt: "Document Libraries training session with Lupin employees" },
      { src: "images/veeva-6.jpg", alt: "Viewing Documents session — document lifecycle states in Vault" }
    ],
    link: null
  },
  {
    date: "December 2025",
    category: "Award",
    title: "Catalyst Team of the Year",
    org: "Lupin Pharmaceuticals · Somerset Audit & Compliance Team",
    story: "Honored to be part of the Catalyst Team of the Year and to receive this recognition at our year-end holiday event at Lupin Pharmaceuticals. Grateful for the continued support of Lupin leadership and incredible teamwork of the Somerset Audit & Compliance team. This award truly reflects a collective effort, and I'm proud to be part of such an inspiring team.",
    images: [
      { src: "images/catalyst-3.jpg", alt: "Catalyst Team of the Year Award certificate presented to Divyaben Patel", fit: "contain" },
      { src: "images/catalyst-2.jpg", alt: "Somerset Audit & Compliance team receiving the award on stage" },
      { src: "images/catalyst-1.jpg", alt: "Team members with their certificates at the Lupin year-end holiday event" },
      { src: "images/catalyst-4.jpg", alt: "Catalyst Team of the Year — Somerset Audit & Compliance team on screen" }
    ],
    link: null
  },
  {
    date: "October 2025",
    category: "Certification",
    title: "ASQ Certified Quality Auditor (CQA)",
    org: "American Society for Quality",
    story: `Proud to share: I am now an ASQ Certified Quality Auditor (CQA)!

Preparing for the CQA exam while working full-time and managing family responsibilities pushed me outside my comfort zone. There were moments of doubt — failing my practice exam shook my confidence — but I reminded myself why I started. So I pushed harder, especially in the final two weeks of intense study.

The 5.5-hour exam tested not just my knowledge, but my mental strength. Seeing "PASSED" on the screen was more than a result — it was a reminder that we can achieve anything when we set our minds to it.

I'm incredibly thankful to my Quality Head Suneel Chhatre for inspiring, supporting, and pushing me to grow. Leaders who invest in people create more leaders, not followers — and I'm grateful to be under such leadership.

Passing this just before Diwali made the celebration extra meaningful — a personal light earned through dedication and perseverance.

To anyone preparing for a certification or working toward a personal goal while juggling life — keep going. Your future self will thank you.

Grateful for my family's support and proud to bring this value back into my professional journey in Quality & Compliance.`,
    images: [
      { src: "images/cqa-1.jpg", alt: "ASQ Certified Quality Auditor verified certificate", fit: "contain" }
    ],
    link: { label: "Verified credential", url: "https://lnkd.in/e7a_EUxs" }
  },
  {
    date: "Placeholder — year",
    category: "Milestone",
    title: "Manager, Quality Assurance & Compliance",
    org: "Lupin Pharmaceuticals · Somerset, NJ",
    story: "Placeholder — the story of stepping into leadership at Lupin: the team, the scope, and what this milestone means. Replace with Divya's own words.",
    images: [
      { src: "images/ph-6.svg", alt: "Placeholder — replace with a real photo" }
    ],
    link: null
  },
  {
    date: "Placeholder — year",
    category: "Certification",
    title: "Six Sigma Green Belt (SSGB)",
    org: "Placeholder — certifying body",
    story: "Placeholder — the Green Belt journey: the training, the project that earned it, and how she uses it every day in pharmaceutical quality.",
    images: [
      { src: "images/ph-5.svg", alt: "Placeholder — replace with a real photo" }
    ],
    link: null
  },
  {
    date: "Placeholder — year",
    category: "Education",
    title: "Master of Science",
    org: "Placeholder University",
    story: "Placeholder — completing the M.S.: the focus of study and the foundation it built for a career in quality and compliance.",
    images: [
      { src: "images/ph-2.svg", alt: "Placeholder — replace with a real photo" }
    ],
    link: null
  }
];


/* ==========================================================================
   ➕ TO ADD A NEW MOMENT
   1. Select and copy everything BETWEEN the COPY START and COPY END lines.
   2. Paste it directly UNDER the line  "const MOMENTS = ["  above.
   3. Replace the placeholder text with yours. Keep all commas and quotes!

▶ COPY START
  {
    date: "Month Year",
    category: "Award",
    title: "Name of the achievement",
    org: "Lupin Pharmaceuticals · Somerset, NJ",
    story: `Write your story here.

Leave a blank line to start a new paragraph.`,
    images: [
      { src: "images/my-photo-1.jpg", alt: "Short description of this photo" },
      { src: "images/my-photo-2.jpg", alt: "Short description of this photo" }
    ],
    link: null
  },
▶ COPY END

   NOTES
   • category must be one of: Award, Certification, Project, Milestone, Education
   • Photos: first upload the photo file into the images/ folder on GitHub,
     then write its name in src: "images/the-file-name.jpg"
   • Is the photo a certificate or document? Add  , fit: "contain"  after the
     alt text so it is always shown whole and never cropped.
   • Got a link (LinkedIn post, credential)? Replace  link: null  with:
     link: { label: "See the post", url: "https://..." }
   ========================================================================== */
