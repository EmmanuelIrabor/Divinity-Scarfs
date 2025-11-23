"use client";
import { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";

interface InputSelectProps {
  label: string;
  name: string;
  value?: string;
  options?: { value: string; label: string }[];
  onChange?: (value: string) => void;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  type?: "country" | "state" | "city" | "custom";
  countryCode?: string;
  stateCode?: string;
}

export default function InputSelect({
  label,
  name,
  value = "",
  options,
  onChange,
  className = "",
  required = false,
  disabled = false,
  type = "custom",
  countryCode = "",
  stateCode = "",
}: InputSelectProps) {
  const [dynamicOptions, setDynamicOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadOptions = () => {
      setIsLoading(true);
      try {
        let newOptions: { value: string; label: string }[] = [];

        switch (type) {
          case "country":
            const countries = Country.getAllCountries();
            newOptions = countries.map((country) => ({
              value: country.isoCode,
              label: country.name,
            }));
            break;

          case "state":
            if (countryCode) {
              const states = State.getStatesOfCountry(countryCode);
              newOptions = states.map((state) => ({
                value: state.isoCode,
                label: state.name,
              }));
            }
            break;

          case "city":
            if (countryCode && stateCode) {
              const cities = City.getCitiesOfState(countryCode, stateCode);
              newOptions = cities.map((city) => ({
                value: city.name,
                label: city.name,
              }));
            }
            break;

          case "custom":
          default:
            newOptions = options || [];
            break;
        }

        newOptions.sort((a, b) => a.label.localeCompare(b.label));

        if (required && newOptions.length > 0) {
          newOptions = [{ value: "", label: `${label}` }, ...newOptions];
        }

        setDynamicOptions(newOptions);
      } catch (error) {
        setDynamicOptions(options || []);
      } finally {
        setIsLoading(false);
      }
    };

    loadOptions();
  }, [type, countryCode, stateCode, options, required, label]);

  const selectOptions = type !== "custom" ? dynamicOptions : options || [];

  return (
    <div className={`lg:mx-2 mt-5 flex flex-col w-90 lg:w-39 ${className}`}>
      <label className="text-black text-xs mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        className={`input-field ${
          disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        disabled={disabled || isLoading}
      >
        {isLoading ? (
          <option value="">Loading</option>
        ) : selectOptions.length === 0 ? (
          <option value="">Select</option>
        ) : (
          selectOptions.map((option, index) => (
            <option
              key={`${option.value}-${index}-${type}`}
              value={option.value}
            >
              {option.label}
            </option>
          ))
        )}
      </select>
    </div>
  );
}
