"use client";

import type { FormEvent } from "react";

const fields = [
  {
    name: "name",
    label: "Name",
    placeholder: "e.g Emmanuel Taiwo",
    type: "text",
    autoComplete: "name",
    required: true,
  },
  {
    name: "business",
    label: "Business name",
    placeholder: "e.g Niles companies",
    type: "text",
    autoComplete: "organization",
    required: false,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "e.g emmanuel@gmail.com",
    type: "email",
    autoComplete: "email",
    required: true,
  },
  {
    name: "phone",
    label: "Phone number",
    placeholder: "e.g 09123432345",
    type: "tel",
    autoComplete: "tel",
    required: false,
  },
];

const inputClass =
  "mt-[7.2px] w-full rounded-md border border-[#d5dae2] bg-white px-4 text-base text-ink placeholder:text-[#6c7585] focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none xl:mt-[6.2px] xl:px-[15px]";

// Until a form backend is chosen, the enquiry opens in the visitor's email app.
function sendEnquiry(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const value = (key: string) => String(data.get(key) ?? "").trim();
  const subject = `Enquiry from ${value("name")}${value("business") ? ` (${value("business")})` : ""}`;
  const body = [
    `Name: ${value("name")}`,
    `Business name: ${value("business")}`,
    `Email: ${value("email")}`,
    `Phone number: ${value("phone")}`,
    "",
    value("message"),
  ].join("\n");
  window.location.href = `mailto:support@ploutospage.ng?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  return (
    <form onSubmit={sendEnquiry}>
      <div className="space-y-[17.2px] xl:space-y-[20.4px]">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-sm leading-5 font-medium text-[#334054]"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required={field.required}
              placeholder={field.placeholder}
              className={`${inputClass} h-[54px] xl:h-[45px]`}
            />
          </div>
        ))}
        <div>
          <label
            htmlFor="message"
            className="block text-sm leading-5 font-medium text-[#334054]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Tell us a little about your business..."
            className={`${inputClass} h-[142px] resize-none py-3.5 leading-6 xl:h-[140px]`}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-[18.4px] flex h-[53px] w-full items-center justify-center rounded-full bg-brand text-base font-semibold text-white xl:mt-[17.8px] xl:h-[49px]"
      >
        Send message
      </button>
    </form>
  );
}
