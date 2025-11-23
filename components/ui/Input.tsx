"use client";

type InputProps = {
  label: string;
  type?: string;
  name?: string;
  value?: string;
  required?: boolean;
  onChange?: (value: string) => void;
};

export default function Input({
  label,
  type = "text",
  name,
  value,
  required = false,
  onChange,
}: InputProps) {
  return (
    <div className="lg:mx-2 input-container mt-5 flex flex-col w-85 lg:w-60">
      <label className="text-black text-md mb-2 text-xs">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="input-field"
        required={required}
      />
    </div>
  );
}
