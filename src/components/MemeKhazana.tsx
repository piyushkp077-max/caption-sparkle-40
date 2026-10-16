import { useEffect, useRef, useState } from "react";
import { Check, Clapperboard, Copy, Flame, Plus, Shuffle, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { khazanaCategories, localDay, scriptText, shuffledScripts, type KhazanaCategory, type ViralScript } from "@/lib/meme-khazana";

export function MemeKhazana() {
  const [category, setCategory] = useState<KhazanaCategory>("funny");
  const [day, setDay] = useState("initial");
  const [cycle, setCycle] = useState(0);
  const [count, setCount] = useState(4);
  const [randomStory, setRandomStory] = useState<ViralScript | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState("");
  const seen = useRef(new Set<string>());
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scripts = shuffledScripts(category, day, cycle);

  useEffect(() => {
    const update = () => setDay(localDay());
    update();
    const timer = setInterval(update, 60_000);
    return () => { clearInterval(timer); if (copyTimer.current) clearTimeout(copyTimer.current); };
  }, []);

  useEffect(() => { setRandomStory(null); setCycle(0); setCount(4); seen.current.clear(); }, [day]);

  const selectCategory = (next: KhazanaCategory) => {
    setCategory(next); setCount(4); setCycle(0); setRandomStory(null); setCopied(null); setError(""); seen.current.clear();
  };

  const randomize = () => {
    let available = scripts.filter((script) => !seen.current.has(script.id) && script.id !== randomStory?.id);
    if (!available.length) { seen.current.clear(); available = scripts.filter((script) => script.id !== randomStory?.id); }
    const next = available[Math.floor(Math.random() * available.length)];
    if (!next) return;
    seen.current.add(next.id); setRandomStory(next); setCopied(null); setError("");
  };

  const copy = async (script: ViralScript) => {
    try {
      await navigator.clipboard.writeText(scriptText(script));
      setCopied(script.id); setError("");
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(null), 2000);
    } catch { setError("Could not copy. Please try again."); }
  };

  const featured = randomStory ?? scripts[0];
  const remaining = scripts.filter((script) => script.id !== featured?.id);

  return <section className="rise" aria-label="Meme & Story Khazana">
    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-5">
      <div className="min-w-0">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase text-primary"><Clapperboard className="size-4" /> The 30-second collection</p>
        <h1 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">Meme & Story Khazana</h1>
      </div>
      <Button variant="ink" size="lg" onClick={randomize} className="w-full sm:w-auto"><Shuffle /> Random Viral Story</Button>
    </div>
    <div role="tablist" aria-label="Story categories" className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {khazanaCategories.map((item) => <Button key={item.id} id={`khazana-tab-${item.id}`} role="tab" aria-selected={category === item.id} aria-controls="khazana-scripts" variant={category === item.id ? "ink" : "glass"} onClick={() => selectCategory(item.id)} className={cn("h-auto min-h-11 justify-start whitespace-normal px-3 py-3 text-left", item.id === "funny" && "font-bold")}><span aria-hidden="true">{item.emoji}</span><span className="min-w-0">{item.label}</span></Button>)}
    </div>
    <div id="khazana-scripts" role="tabpanel" aria-labelledby={`khazana-tab-${category}`} className="mt-6">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 font-display text-xl"><Flame className="size-5 text-primary" />{khazanaCategories.find((item) => item.id === category)?.label}</h2>
        <span className="text-xs font-semibold text-muted-foreground">{randomStory ? "Shuffle pick" : "Today's spotlight"}</span>
      </div>
      {error && <p role="alert" className="mb-3 text-sm text-destructive">{error}</p>}
      {featured && <ScriptCard key={`featured-${featured.id}`} script={featured} featured copied={copied === featured.id} onCopy={() => copy(featured)} />}
      <div className="mt-5 grid items-start gap-5 md:grid-cols-2">
        {remaining.slice(0, count).map((script) => <ScriptCard key={script.id} script={script} copied={copied === script.id} onCopy={() => copy(script)} />)}
      </div>
      <div className="mt-6 flex justify-center">
        <Button variant="outline" size="lg" onClick={() => {
          if (count >= remaining.length) { setCycle((value) => value + 1); setCount(4); setRandomStory(null); }
          else setCount((value) => value + 4);
        }}><Plus /> More stories</Button>
      </div>
    </div>
  </section>;
}

function ScriptCard({ script, featured = false, copied, onCopy }: { script: ViralScript; featured?: boolean; copied: boolean; onCopy: () => void }) {
  return <article className={cn("rise overflow-hidden rounded-lg border bg-card shadow-glass", featured ? "border-primary/50" : "border-border")} aria-label={script.title}>
    <div className={cn("flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3", featured && "bg-primary/10")}>
      <h3 className="min-w-0 font-display text-xl font-medium">{script.title}</h3>
      <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-muted-foreground"><Timer className="size-3.5" /> 30 sec · Hinglish</span>
    </div>
    <div className={cn("grid gap-5 p-4 sm:p-5", featured && "md:grid-cols-3")}>
      {[
        { label: "Hook", time: "0–10s", text: script.hook },
        { label: "Twist", time: "10–20s", text: script.twist },
        { label: "Punchline", time: "20–30s", text: script.punchline },
      ].map((part, index) => <div key={part.label} className="min-w-0">
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-primary"><span className="text-muted-foreground">0{index + 1}</span>{part.label}<span className="ml-auto font-normal text-muted-foreground">{part.time}</span></div>
        <p className="text-sm leading-7 text-card-foreground">{part.text}</p>
      </div>)}
    </div>
    <div className="px-4 pb-4 sm:px-5"><Button variant={copied ? "secondary" : "ink"} className="w-full sm:w-auto" onClick={onCopy}>{copied ? <Check /> : <Copy />}<span role="status" aria-live="polite">{copied ? "Copied!" : "Copy Script"}</span></Button></div>
  </article>;
}