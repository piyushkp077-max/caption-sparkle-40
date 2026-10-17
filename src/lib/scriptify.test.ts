import { describe, expect, it } from "vitest";
import { nextScriptBatch, readSavedScripts, reelText, scriptCategories, scriptLanguages, scriptsFor, toggleSavedScript } from "./scriptify";

describe("Scriptify rules", () => {
  it("has more than 150 distinct scripts per language", () => {
    for (const language of scriptLanguages) {
      const all = scriptCategories.flatMap((category) => scriptsFor(category.id, language.id));
      expect(all.length).toBeGreaterThanOrEqual(150);
      expect(new Set(all.map((s) => `${s.hook}|${s.twist}|${s.punchline}`)).size).toBe(all.length);
    }
  });
  it("shows five scripts and never repeats before all 40 category scripts are seen", () => {
    for (const category of scriptCategories) {
      let seen: string[] = []; let previous: string[] = [];
      const drawn = new Set<string>();
      for (let i = 0; i < 8; i++) {
        const batch = nextScriptBatch(category.id, "hinglish", seen, previous);
        expect(batch.scripts).toHaveLength(5);
        for (const s of batch.scripts) { expect(drawn.has(s.storyId)).toBe(false); drawn.add(s.storyId); }
        seen = batch.seen; previous = batch.scripts.map((s) => s.storyId);
      }
      expect(drawn.size).toBe(40);
      const reset = nextScriptBatch(category.id, "hinglish", seen, previous);
      expect(reset.scripts).toHaveLength(5);
      expect(reset.scripts.every((s) => !previous.includes(s.storyId))).toBe(true);
    }
  });
  it("makes each batch majority solo with one two-to-three-person script", () => {
    for (const category of scriptCategories) {
      const batch = nextScriptBatch(category.id, "hindi", []);
      expect(batch.scripts.filter((s) => s.people === 1)).toHaveLength(4);
      expect(batch.scripts.filter((s) => s.people >= 2 && s.people <= 3)).toHaveLength(1);
    }
  });
  it("keeps regional and Arabic versions distinct and timed sections complete", () => {
    for (const language of scriptLanguages) {
      const script = scriptsFor("funny", language.id)[0];
      if (!script) throw new Error("Missing script");
      expect(script.language).toBe(language.id);
      expect(script.hook.length).toBeGreaterThan(30);
      expect(script.twist.length).toBeGreaterThan(30);
      expect(script.punchline.length).toBeGreaterThan(30);
      if (language.id === "arabic") expect(script.hook).toMatch(/[\u0600-\u06ff]/);
      if (language.id === "bihari") expect(script.hook).toContain("भइया");
      if (language.id === "desi") expect(script.hook).toContain("सै");
      expect(reelText(script)).toContain("Hook (0–10s)");
      expect(reelText(script)).toContain("Twist (10–20s)");
      expect(reelText(script)).toContain("Punchline (20–30s)");
    }
  });
  it("persists saved script text and toggles it off without duplicates", () => {
    const script = scriptsFor("funny", "arabic")[0];
    if (!script) throw new Error("Missing script");
    const saved = toggleSavedScript([], script);
    expect(readSavedScripts(JSON.stringify(saved))).toEqual([script]);
    expect(toggleSavedScript(saved, script)).toEqual([]);
    expect(readSavedScripts('[{"id":"broken"}]')).toEqual([]);
    expect(readSavedScripts("broken")).toEqual([]);
  });
});