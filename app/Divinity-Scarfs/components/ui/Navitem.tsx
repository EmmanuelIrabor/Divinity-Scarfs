import Link from "next/link";

type NavItemProps = {
  text: string;
  route: string;
};

export default function NavItem({ text, route }: NavItemProps) {
  return (
    <Link href={route}>
      <span className="font-bold text-[15px] cursor-pointer navitem">
        {text}
      </span>
    </Link>
  );
}
