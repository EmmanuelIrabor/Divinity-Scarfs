"use client";

type InputProps = {
  label: string;
  type?: string;
  name?: string;
  value?: string;
  //   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  //   placeholder?: string;
};

export default function Input({
  label,
  type = "text",
  name,
  value,
}: //   onChange,
//   placeholder,
InputProps) {
  return (
    <div className="mx-2 input-container mt-5 flex flex-col w-60">
      <label className="text-black text-md mb-2 text-xs">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        // onChange={onChange}
        // placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
}
