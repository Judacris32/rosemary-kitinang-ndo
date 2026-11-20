import Image from "next/image";
import { docExpressApp } from "@/content/images";

const cols = [
  [docExpressApp.dashboard, docExpressApp.cart, docExpressApp.wallet],
  [docExpressApp.searchResults, docExpressApp.orderDetails, docExpressApp.inquiry],
  [docExpressApp.orderHistory, docExpressApp.signIn, docExpressApp.rating],
  [docExpressApp.registerFarmer, docExpressApp.fundWallet, docExpressApp.account],
  [docExpressApp.onboarding1, docExpressApp.orderSuccess, docExpressApp.contactUs],
];

/** Tilted wall of real DOC Express screens, used behind dark heroes. */
export function ScreensWall() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-forest-deep" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 flex w-[1500px] -translate-x-1/2 -translate-y-1/2 -rotate-[10deg] gap-6 opacity-70 md:w-[1800px]">
        {cols.map((col, i) => (
          <div key={i} className="flex flex-1 flex-col gap-6" style={{ transform: `translateY(${i % 2 ? -80 : 40}px)` }}>
            {col.map((src, j) => (
              <div key={j} className="relative aspect-[9/19.5] overflow-hidden rounded-[1.6rem] border-[5px] border-forest-ink">
                <Image src={src} alt="" fill sizes="300px" className="object-cover object-top" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const board = [
  { t: "To do", c: ["Stakeholder map", "Business case", "RAID register"] },
  { t: "In progress", c: ["Vendor build", "Data migration", "Test scripts"] },
  { t: "Review", c: ["UAT round 2", "Training plan"] },
  { t: "Done", c: ["Project charter", "Requirements", "Round 1 fixes", "Go-live plan"] },
];

/** A soft project board, used behind the How I work hero. */
export function BoardWall() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-forest-deep" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(159,227,196,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(159,227,196,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute left-1/2 top-1/2 grid w-[1400px] -translate-x-1/2 -translate-y-1/2 -rotate-[6deg] grid-cols-4 gap-6 opacity-60">
        {board.map((col) => (
          <div key={col.t} className="rounded-3xl bg-white/[0.06] p-5 ring-1 ring-white/10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-glow">{col.t}</p>
            <div className="mt-5 space-y-4">
              {col.c.map((c, i) => (
                <div key={c} className="rounded-2xl bg-white/[0.08] p-5 ring-1 ring-white/10">
                  <span className={`mb-3 block h-1.5 w-10 rounded-full ${i % 3 === 0 ? "bg-coral" : i % 3 === 1 ? "bg-emerald-glow" : "bg-coral-soft"}`} />
                  <p className="text-lg font-semibold text-ivory/90">{c}</p>
                  <div className="mt-3 h-1.5 w-2/3 rounded bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
