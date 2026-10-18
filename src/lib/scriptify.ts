import { scriptifyScenes } from "./scriptify-scenes";

export const scriptCategories = [
  { id: "funny", label: "Viral Funny Scripts", emoji: "🔥" },
  { id: "puneet", label: "Puneet Style Solo Reels", emoji: "🤪" },
  { id: "love", label: "Love & Dating Twists", emoji: "💕" },
  { id: "friendzone", label: "Friendzone & Bro-zone Tales", emoji: "💔" },
  { id: "daily", label: "Daily Relatable Memes & Jokes", emoji: "🤣" },
] as const;
export const scriptLanguages = [
  { id: "bihari", label: "Bihari", emoji: "🌾" },
  { id: "desi", label: "Desi Theth / Haryanvi Roast", emoji: "🔥" },
  { id: "hinglish", label: "Hinglish", emoji: "💬" },
  { id: "hindi", label: "Hindi", emoji: "🇮🇳" },
  { id: "arabic", label: "Arabic Vibe", emoji: "🌍" },
] as const;
export type ScriptCategory = typeof scriptCategories[number]["id"];
export type ScriptLanguage = typeof scriptLanguages[number]["id"];
export type ReelScript = { id: string; storyId: string; category: ScriptCategory; language: ScriptLanguage; title: string; cast: "solo" | "group"; people: number; hook: string; twist: string; punchline: string };
export const SCRIPT_BATCH_SIZE = 5;
export const SAVED_SCRIPTS_KEY = "scriptify-saved-scripts";
export const SCRIPT_MAX_WORDS = 40;
export const SCRIPT_MAX_LINE_WORDS = 14;

// Original monologues, not quotations or impersonations of a named creator.
const extras: Record<ScriptLanguage, string[][]> = {
  hinglish: [["Camera on. Confidence full, budget zero.", "Bhai, story sun, ending pe mat rona."], ["Yahin pe meri smile buffering kar gayi.", "Plot twist ne seedha reality check bheja."], ["Is scene ka screenshot mat lena, self-respect pending hai.", "Follow-up kal: aaj ka emotional budget khatam."]],
  hindi: [["कैमरा चालू, विश्वास पूरा, बजट शून्य।", "कहानी सुनो, आखिर में हँसना मत भूलना।"], ["यहीं मेरी मुस्कान अटक गई।", "कहानी ने सीधे हकीकत दिखा दी।"], ["इस दृश्य की फोटो मत लेना, आत्मसम्मान अभी बाकी है।", "बाकी कल, आज की भावनाओं का बजट खत्म।"]],
  bihari: [["का हो भइया, देखियो लेब, आज गजबे किस्सा बा।", "सुनऽ भइया, भरोसा पूरा, जेब एकदम खाली बा।"], ["एही जगह हमार मुस्कान अटक गइल।", "अरे बाप रे, ई त पूरा खेल पलट गइल।"], ["अब हँसऽ मत भइया, हमार इज्जत अभी बाकी बा।", "बाकी बतिया काल्ह, आज दिल के बजट खत्म बा।"]],
  desi: [["सुन भाई, आज का किस्सा पूरा बावला सै।", "राम राम भाई, अकड़ पूरी, जेब खाली सै।"], ["इब देख, यहीं सारी हेकड़ी निकल गई।", "यो मोड़ देख के दिमाग की छुट्टी हो गई।"], ["इब हँस ले भाई, मेरी अकड़ का रिचार्ज खत्म सै।", "बाकी कल, आज किस्मत ने पूरा रोस्ट कर दिया।"]],
  arabic: [["الكاميرا تعمل، الثقة كاملة والميزانية صفر.", "اسمع القصة، ولا تنس الضحك في النهاية."], ["هنا توقفت ابتسامتي عن العمل تماماً.", "تغيرت القصة وأرسلت لي اختبار واقع مباشر."], ["لا تصوروا هذه اللحظة، كرامتي ما زالت قيد الإصلاح.", "نكمل غداً، ميزانية المشاعر لهذا اليوم انتهت."]],
};

function regional(text: string, language: ScriptLanguage): string {
  if (language === "bihari") return text.replace(/\bNEVER_MATCH\b/g, "").replace(/मैंने/g, "हमने").replace(/मुझे/g, "हमके").replace(/मेरा/g, "हमार").replace(/मेरी/g, "हमार").replace(/मैं /g, "हम ").replace(/तुम्हारा/g, "तोहार").replace(/तुम्हारी/g, "तोहार").replace(/ है/g, " बा").replace(/ हूँ/g, " बानी").replace(/बोली/g, "बोलीं");
  if (language === "desi") return text.replace(/मुझे/g, "मन्ने").replace(/मैंने/g, "मन्ने").replace(/तुम्हारा/g, "तेरा").replace(/तुम्हारी/g, "तेरी").replace(/ है/g, " सै").replace(/ हैं/g, " सैं").replace(/यह /g, "यो ").replace(/अब /g, "इब ").replace(/बहुत/g, "घणा").replace(/क्यों/g, "क्यूँ");
  return text;
}

export function scriptsFor(category: ScriptCategory, language: ScriptLanguage): ReelScript[] {
  return scriptifyScenes.filter((scene) => scene.category === category).map((scene, sceneIndex) => {
      const source = language === "arabic" ? scene.arabic : language === "hinglish" ? scene.hinglish : scene.hindi;
      const parts = source.map((text) => regional(text, language));
      const storyId = `short-v2-${category}-${sceneIndex}`;
      return { id: `${storyId}-${language}`, storyId, category, language, title: scene.title, cast: scene.cast, people: scene.cast === "solo" ? 1 : category === "friendzone" && sceneIndex < 28 ? 3 : 2, hook: parts[0] ?? "", twist: parts[1] ?? "", punchline: parts[2] ?? "" };
  });
}

// Materialize the full 160-scene bank once; language changes only select translations.
export const scriptBank: ReelScript[] = scriptLanguages.flatMap((language) => scriptCategories.flatMap((category) => scriptsFor(category.id, language.id)));

export function translateScriptBatch(scripts: ReelScript[], language: ScriptLanguage): ReelScript[] {
  return scripts.map((script) => scriptBank.find((item) => item.storyId === script.storyId && item.language === language) ?? script);
}

function shuffle<T>(items: T[], random: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    const a = copy[i]; const b = copy[j];
    if (a !== undefined && b !== undefined) { copy[i] = b; copy[j] = a; }
  }
  return copy;
}

export function nextScriptBatch(category: ScriptCategory, language: ScriptLanguage, seen: string[], previous: string[] = [], random = Math.random): { scripts: ReelScript[]; seen: string[] } {
  const pool = scriptBank.filter((script) => script.category === category && script.language === language);
  let history = new Set(seen);
  let available = pool.filter((script) => !history.has(script.storyId) && !previous.includes(script.storyId));
  // Every batch contains four solo scripts and one easy group script. Reset only after exhaustion.
  if (available.filter((s) => s.cast === "solo").length < 4 || !available.some((s) => s.cast === "group")) {
    history = new Set();
    available = pool.filter((script) => !previous.includes(script.storyId));
  }
  // Fisher–Yates gives a true unbiased shuffle, unlike a random sort comparator.
  const solo = shuffle(available.filter((s) => s.cast === "solo"), random);
  const selected: ReelScript[] = [];
  // Prefer distinct topics without discarding unseen variations.
  for (const script of solo) if (!selected.some((s) => s.title === script.title) && selected.length < 4) selected.push(script);
  for (const script of solo) if (!selected.some((s) => s.id === script.id) && selected.length < 4) selected.push(script);
  const group = shuffle(available.filter((s) => s.cast === "group"), random)[0];
  if (group) selected.push(group);
  selected.forEach((script) => history.add(script.storyId));
  return { scripts: selected, seen: [...history] };
}

export function reelText(script: ReelScript): string {
  const language = scriptLanguages.find((item) => item.id === script.language)?.label;
  return `${script.title}\n${language} · ${script.people === 1 ? "Solo POV" : `${script.people} people`} · 15–20 sec\n\nHook: ${script.hook}\nRant: ${script.twist}\nPunchline: ${script.punchline}`;
}

export function readSavedScripts(value: string | null): ReelScript[] {
  try {
    const parsed: unknown = JSON.parse(value ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is ReelScript => !!item && typeof item === "object" && typeof item.id === "string" && typeof item.storyId === "string" && typeof item.title === "string" && typeof item.hook === "string" && typeof item.twist === "string" && typeof item.punchline === "string" && scriptLanguages.some((l) => l.id === item.language) && scriptCategories.some((c) => c.id === item.category) && (item.cast === "solo" || item.cast === "group") && [1, 2, 3].includes(item.people));
  } catch { return []; }
}

export function toggleSavedScript(saved: ReelScript[], script: ReelScript): ReelScript[] {
  return saved.some((item) => item.id === script.id) ? saved.filter((item) => item.id !== script.id) : [script, ...saved];
}