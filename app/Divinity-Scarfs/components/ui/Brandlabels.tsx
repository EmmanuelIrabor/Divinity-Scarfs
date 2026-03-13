import Image from "next/image";

export default function Brandlabels() {
  return (
    <div className="mt-5 flex justify-center">
      <img
        src="/images/ds_labels.png"
        alt="DS Labels"
        className="w-[350px] max-w-full sm:w-[560px]"
      />
    </div>
  );
}
