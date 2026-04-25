import { topics } from "@/config/topics"

export default function ScrollingBanner() {
  const doubled = [...topics, ...topics]

  return (
    <section className="bg-banana-yellow py-3 overflow-hidden border-y border-banana-yellow">
      <div className="flex whitespace-nowrap animate-ticker">
        {doubled.map((topic, i) => (
          <a
            key={i}
            href={topic.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 mx-4 group"
          >
            <span className="font-display text-sm tracking-[0.25em] text-banana-bg group-hover:text-banana-surface transition-colors">
              {topic.label}
            </span>
            <span className="text-banana-bg/40 text-xs">◆</span>
          </a>
        ))}
      </div>
    </section>
  )
}
