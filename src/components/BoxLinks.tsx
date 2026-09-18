import Link from "next/link";
import type { IconType } from "react-icons";

type BoxLinkProps = {
  href: string;
  name: string;
  icon: IconType;
  color: string;
}

export default function BoxLink( {href, name, icon: Icon, color}: BoxLinkProps ) {
    return(
      <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center">
        <div className="flex gap-2 py-1 px-1.5" style={{backgroundColor: color}}>
          <Icon size={20} />
          <h1>{name}</h1>
        </div>
      </Link>
    );
}