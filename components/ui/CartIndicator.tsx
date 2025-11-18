import { useRouter } from "next/navigation";
import Link from "next/link";
import { CartCount } from "./CartCount";
export default function CartIndicator() {
  const router = useRouter();
  return (
    <div
      className="fixed bottom-0 left-1/2 -translate-x-1/2
    xl:static xl:translate-x-0 xl:bottom-auto xl:left-auto
    xl:flex xl:justify-end xl:px-40 xl:mt-12 xl:mb-0"
    >
      {/* <button className="secondary-btn" onClick={() => router.push("/Cart")}>
        CART ( 0 )
      </button> */}
      <Link href={"/Cart"} className="secondary-btn">
        <CartCount />
      </Link>
    </div>
  );
}
