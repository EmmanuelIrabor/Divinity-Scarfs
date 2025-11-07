type NavItemProps = {
  text: string;
};

export default function NavItem({ text }: NavItemProps) {
  return (
    <span className="font-bold text-[15px] cursor-pointer navitem">{text}</span>
  );
}
