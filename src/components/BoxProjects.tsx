import Link from "next/link";
import Image from "next/image";

type BoxProjectProps = {
  href: string;
  name?: string;
  description: string;
  src: string;
  alt: string;
  color: string;
}

export default function BoxProject( {href, description, name, src, alt, color}: BoxProjectProps ) {
  return(
    <Link href={href} className="relative h-50 w-80 rounded-2xl border border-gray-200 overflow-hidden">

      <div className={`absolute -inset-full rounded-2xl animate-[spin_4s_linear_infinite]`}
        style={{
          background: `conic-gradient(transparent 0deg, transparent 300deg,${color} 360deg)`
        }}
      />

      <div className={`absolute -inset-full rounded-2xl animate-[spin_4s_linear_infinite] `}
        style={{
          background: `conic-gradient(from 180deg, transparent 0deg, transparent 300deg, ${color} 360deg)`
        }}
      />

      <div className="flex flex-col relative h-[calc(100%-2px)] m-px p-3 rounded-2xl bg-black gap-2">
          <div className="flex items-center gap-1">
            <Image src={src} alt={alt} width={42} height={42} className="w-10.5 h-10.5 drop-shadow-[0_0_18px_rgba(124,58,237,0.35)]" />
            <h1 className="bg-linear-to-r from-white via-violet-300 to-sky-400 bg-clip-text text-2xl font-bold tracking-wide text-transparent" >{name}</h1>
          </div>
          <p className="text-xl">{description}</p>
          <p className=" absolute bottom-3 hover:underline">clique para saber mais.</p>
      </div>

    </Link>
  );
}

