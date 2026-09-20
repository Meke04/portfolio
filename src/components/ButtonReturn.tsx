import Link from "next/link";

export default function ButtonReturn() {
  return(
    <div className="fixed bottom-10 right-10 hover:-translate-y-1">
      <Link href="/" className="relative block rounded-2xl border border-gray-200 overflow-hidden">

          <div className="absolute -inset-full rounded-2xl bg-[conic-gradient(transparent_0deg,transparent_300deg,#48D6C9_360deg)] animate-[spin_4s_linear_infinite] "/>

          <div className="absolute -inset-full rounded-2xl bg-[conic-gradient(from_180deg,transparent_0deg,transparent_300deg,#48D6C9_360deg)] animate-[spin_4s_linear_infinite] "/>

          <div className="flex flex-col relative m-0.5 p-2 rounded-2xl bg-black gap-3">
              ⟸ Voltar
          </div>

      </Link>
    </div>
  );
}