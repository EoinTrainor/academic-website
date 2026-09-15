export default function MassFunctionEquation({ description }: { description: string }) {
  return (
    <div className="mt-6">
      <div className="inline-flex items-center gap-3 font-display text-2xl text-paper">
        <span className="italic">
          f(M) =
        </span>
        <span className="inline-flex flex-col items-center text-center leading-tight">
          <span className="border-b border-paper px-1 pb-1 italic">
            M<sub>BH</sub>
            <sup>3</sup> sin<sup>3</sup> i
          </span>
          <span className="pt-1 px-1 italic">
            (M<sub>BH</sub> + M<sub>2</sub>)<sup>2</sup>
          </span>
        </span>
      </div>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper-dim">{description}</p>
    </div>
  );
}
