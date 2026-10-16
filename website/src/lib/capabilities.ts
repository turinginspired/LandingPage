/** TinyTutor's capability areas and their status, taken from the TinyTutor Master Platform
 *  Blueprint (v1.0, 15 October 2026). The marketing site describes the product; it never claims a
 *  capability ships. The blueprint itself is "not an independently verified code audit", and the
 *  application's code is not part of this repository, so nothing here is marked available.
 *
 *  Status vocabulary, mapped from the blueprint:
 *    development  CURRENT / PARTIAL: being built; "requires release-level verification" (§16).
 *    designed     DESIGNED: agreed direction; "should not be marketed as shipping".
 *    planned      PROPOSED or later-maturity: future direction, shown only where useful.
 *  Update a status only when the release itself has been verified. */

export type Status = "development" | "designed" | "planned";

export const STATUS_LABEL: Record<Status, string> = {
  development: "In development",
  designed: "Designed",
  planned: "Planned",
};

export const CAPABILITIES = {
  offline: {
    title: "Offline-first learning",
    summary: "Learning keeps working without a connection. Syncing adds to it when you are online; it never has to unlock it.",
    status: "development",
    source: "§1.5, §10.1; §16 Offline: offline start and practice writes reportedly demonstrated",
  },
  curriculum: {
    title: "Curriculum-connected content and practice",
    summary: "Concepts mapped from syllabus to topic, each linked to explanation, practice with feedback, mastery and assessment.",
    status: "development",
    source: "§4.2, §4.3; §16 Content packs: graph, packs and reader infrastructure present",
  },
  interactive: {
    title: "Interactive textbooks and laboratories",
    summary: "Simulations, manipulable diagrams and experiments where they genuinely help a concept make sense.",
    status: "development",
    source: "§4.4; §16 Interactive labs: several labs and simulators explored or built",
  },
  ai: {
    title: "AI learning assistant",
    summary: "An explainer and guide that helps learners think, not a shortcut to answers, and says when it is unsure.",
    status: "development",
    source: "§4.6; §16 AI: local model and composer milestones",
  },
  continuity: {
    title: "One continuous learner profile",
    summary: "A learner keeps their history when they join a school or class; memberships add access rather than new accounts.",
    status: "development",
    source: "§1.2, §2.1; §16 Identity: major refactor and account switching iterated",
  },
  progress: {
    title: "Progress and mastery",
    summary: "Mastery and revision built from what a learner actually attempted, kept on the device first.",
    status: "development",
    source: "§4.1, §9; §16 Profile/reporting: Profile Hub and local activities partly implemented",
  },
  teaching: {
    title: "Teaching preparation and reusable resources",
    summary: "Lesson outlines, worksheets, papers, solutions and rubrics, kept in a personal library and reused.",
    status: "designed",
    source: "§6.1, §6.3; §15 Wave 2: teacher productivity",
  },
  classes: {
    title: "Classes, assignments and assessment",
    summary: "Assigned classes, homework, tests, marking and controlled publication of results, where a school enables them.",
    status: "designed",
    source: "§6.2, §7.3; §15 Waves 3 and 4",
  },
  parents: {
    title: "Parent and guardian support",
    summary: "Consent-based links to a child, a weekly picture of progress and schoolwork, and one or two useful next actions.",
    status: "designed",
    source: "§5; §16 Profile/reporting: guardian weekly reporting still to validate",
  },
  school: {
    title: "School academic operations",
    summary: "Institution setup, academic years, rosters, classes, content allocation and reporting for school leaders.",
    status: "designed",
    source: "§7; §16 School web: initial routes discussed; creation and yearly setup to validate",
  },
  finance: {
    title: "Fees, subscriptions and renewals",
    summary: "Financial visibility for school owners: subscriptions, fees, receipts and renewals, once validated.",
    status: "planned",
    source: "§7.3, §12.2 (\"avoid promising payment functionality until fully validated\"); §15 Wave 5",
  },
  partners: {
    title: "Content authoring and distribution",
    summary: "A curated path for vetted creators and institutions to build and distribute learning packs.",
    status: "planned",
    source: "§11.3 Marketplace future; §15 Wave 6",
  },
} as const satisfies Record<string, { title: string; summary: string; status: Status; source: string }>;

export type CapabilityId = keyof typeof CAPABILITIES;
