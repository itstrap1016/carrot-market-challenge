import { error } from "console";

export default function FormInput({
  name,
  type,
  placeholder,
  errors,
  value,
}: {
  name: string;
  type: string;
  placeholder: string;
  errors: string[];
  value: string;
}) {
  return (
    <>
      <input
        className="w-[500px] h-[60px] bg-transparent border-2 border-gray-400 rounded-full pl-14 pr-5 focus:ring-2 focus:ring-gray-400 ring-offset-2"
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={value}
      />
      {errors.map((error, index) => (
        <p className="text-sm text-red-500 mt-2">{error}</p>
      ))}
    </>
  );
}
