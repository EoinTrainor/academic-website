import type { Method } from "@/data/methods";

export default function MethodsGrid({ items }: { items: Method[] }) {
  return (
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((method) => (
        <div key={method.title} className="border-t border-ink-line pt-4">
          <h3 className="font-display text-lg text-paper">{method.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-paper-dim">{method.description}</p>
        </div>
      ))}
    </div>
  );
}
