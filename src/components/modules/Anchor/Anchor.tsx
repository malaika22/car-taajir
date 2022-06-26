import { Children } from "@/types/general.types";
import Link from "next/link";

interface IAnchor {
  children: Children;
  href: string;
  className?: string;
}

const Anchor = ({ href, children, className }: IAnchor) => {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default Anchor;
