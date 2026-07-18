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
  photo: "images/divya.jpg",
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
    date: "May 2026",
    category: "Milestone",
    title: "Jersey City Half Marathon — Finisher",
    org: "Jersey City, NJ · 13.1 miles · Bib 9979",
    story: `Completed the Jersey City Half Marathon — a goal that challenged me physically, mentally, and emotionally.

Training for this race reminded me that success, whether in fitness or career growth, is built on consistency, discipline, and showing up even on the hard days.

Whether in running or in our careers, progress rarely happens when things feel easy. It happens through discipline, patience, setbacks, and the decision to keep going.

This race was a personal milestone, but also a reminder that endurance, resilience, and consistency are some of the strongest leadership skills we can build.

Proud to cross this finish line and even more grateful for the lessons learned along the way.`,
    images: [
      { src: "images/jc-half-1.jpg", alt: "Divya at the Jersey City Half Marathon finish line" },
      { src: "images/jc-half-2.jpg", alt: "2026 Jersey City Half Marathon finisher medal" },
      { src: "images/jc-half-3.jpg", alt: "Race bib 9979 — Divyaben, Jersey City Half Marathon" },
      { src: "images/jc-half-4.jpg", alt: "Race tracker on course at mile 11 of 13.1" }
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
    link: { label: "Verified credential", url: "https://credentials.asq.org/277b0846-b74b-49a6-86e0-6811289af4a3#acc.jJg52CP0" }
  },
  {
    date: "June 2025",
    category: "Award",
    title: "Top Participant & Presenter — Leadership Development Program",
    org: "Lupin Pharmaceuticals · Somerset, NJ",
    story: `Reflecting on a proud moment in my leadership journey.

In late 2024, I had the privilege of being selected for an 8-week Essential Managerial and Supervisory Skills Development training program, alongside 24 professionals from cross-functional teams. The program sharpened critical leadership skills: conflict resolution, team collaboration and communication, navigating crucial conversations, and managerial role clarity.

After completing the program, participants were invited to present their key learnings and leadership insights. I was among the 8 who presented — and was deeply honored to be recognized by our Site Head and President as the "Top Participant and Presenter" at our townhall meeting.

A big thank-you to Helen Fazio, who led the program with depth and clarity, to our HR team, and to Quality Head Suneel Chhatre for their continuous support and encouragement.

This experience reinforced the power of investing in continuous learning, stepping up to lead, and sharing perspectives with others.`,
    images: [
      { src: "images/leadership-1.jpg", alt: "Divya recognized among the top three participants of the leadership program" },
      { src: "images/leadership-2.jpg", alt: "Receiving the award trophy at the townhall celebration" },
      { src: "images/leadership-3.jpg", alt: "A thank-you gift at the leadership program award ceremony" }
    ],
    link: null
  },
  {
    date: "October 2023",
    category: "Certification",
    title: "Six Sigma Green Belt (SSGB)",
    org: "Lupin DISHA · Operational Excellence",
    story: `Earned the Six Sigma Green Belt certification through Lupin's DISHA Operational Excellence program — an online training module, a written examination, four days of classroom training, and two completed improvement projects.

The certification recognizes the leadership qualities, technical skills, and application required for the Six Sigma methodology — a toolkit I use every day to drive measurable, repeatable improvements in pharmaceutical quality.`,
    images: [
      { src: "images/ssgb-cert.jpg", alt: "Six Sigma Green Belt Certificate of Achievement — Lupin DISHA", fit: "contain" }
    ],
    link: null
  },
  {
    date: "2023",
    category: "Milestone",
    title: "Manager, Quality Assurance & Compliance",
    org: "Lupin Pharmaceuticals · Somerset, NJ",
    story: `Stepped into leadership as Manager, Quality Assurance & Compliance at Lupin's Somerset site — growing from individual contributor to people leader in pharmaceutical quality.

Leading audit and compliance activities means owning the details and empowering the team: building confidence, sharing knowledge, and creating a culture where quality is everyone's job.`,
    images: [
      { src: "images/manager-card.svg", alt: "Manager, Quality Assurance & Compliance — Lupin Pharmaceuticals, Somerset NJ" }
    ],
    link: null
  },
  {
    date: "2022",
    category: "Milestone",
    title: "Milestone Celebration with Lupin CEO Vinita Gupta",
    org: "Lupin Pharmaceuticals · Somerset, NJ",
    story: `A milestone celebration with Lupin CEO Ms. Vinita Gupta — a woman to look up to and a truly inspiring person.

Moments like these are a reminder of what makes the journey special: leadership that shows up, celebrates the team, and inspires what comes next.`,
    images: [
      { src: "images/ceo-1.jpg", alt: "Divya with Lupin CEO Vinita Gupta and the Somerset team" }
    ],
    link: null
  },
  {
    date: "2008 — 2009",
    category: "Education",
    title: "Master's in Pharmaceutical Manufacturing",
    org: "Stevens Institute of Technology · Hoboken, NJ",
    story: `Where the quality journey began: a Master's in Pharmaceutical Manufacturing from Stevens Institute of Technology.

The program built the technical foundation for everything that followed — manufacturing processes, quality systems, and the science behind making medicines safely and consistently. It turned an interest in pharmaceutical science into a career-long commitment to quality.`,
    images: [
      { src: "images/education-card.svg", alt: "Master's in Pharmaceutical Manufacturing — Stevens Institute of Technology, 2008–2009" }
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
