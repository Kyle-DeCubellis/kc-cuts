"use client";

import { useState } from "react";

interface FormData {
  parentName: string;
  clientName: string;
  clientAge: string;
  hasDiagnosis: string;
  diagnosisNotes: string;
  town: string;
  phone: string;
  email: string;
  hearAboutUs: string;
}

const initialForm: FormData = {
  parentName: "",
  clientName: "",
  clientAge: "",
  hasDiagnosis: "",
  diagnosisNotes: "",
  town: "",
  phone: "",
  email: "",
  hearAboutUs: "",
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.parentName.trim()) errors.parentName = "Your name is required.";
  if (!data.clientName.trim())
    errors.clientName = "Client/child name is required.";
  if (!data.clientAge.trim()) {
    errors.clientAge = "Age is required.";
  } else if (isNaN(Number(data.clientAge)) || Number(data.clientAge) < 0) {
    errors.clientAge = "Please enter a valid age.";
  }
  if (!data.hasDiagnosis)
    errors.hasDiagnosis = "Please indicate if there is an ASD/SPD diagnosis.";
  if (!data.town.trim()) errors.town = "Your town is required.";
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[\d\s\-().+]{7,}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.hearAboutUs.trim())
    errors.hearAboutUs = "Please tell us how you heard about KC Cuts.";

  return errors;
}

export default function WaitlistForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error
      const firstErrorKey = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorKey)?.focus();
      return;
    }

    setStatus("submitting");

    // TODO: Replace Formspree endpoint with real form handler
    // Current implementation: send to Formspree or mailto fallback
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          "Parent / Guardian Name": form.parentName,
          "Client / Child Name": form.clientName,
          "Age": form.clientAge,
          "ASD/SPD Diagnosis": form.hasDiagnosis,
          "Diagnosis Notes": form.diagnosisNotes,
          "Town": form.town,
          "Phone": form.phone,
          "Email": form.email,
          "How They Heard About KC": form.hearAboutUs,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return <SuccessState />;
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Waitlist signup form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Parent/Guardian Name */}
        <div>
          <label htmlFor="parentName" className="label">
            Your Name <span className="text-crimson-600" aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={form.parentName}
            onChange={handleChange}
            className={`input-field ${errors.parentName ? "border-red-400 focus:border-red-500 focus:ring-red-400" : ""}`}
            placeholder="Jane Smith"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.parentName ? "parentName-error" : undefined}
          />
          {errors.parentName && (
            <p id="parentName-error" className="mt-1 text-xs text-red-500 font-body" role="alert">
              {errors.parentName}
            </p>
          )}
        </div>

        {/* Client/Child Name */}
        <div>
          <label htmlFor="clientName" className="label">
            Client / Child&apos;s Name <span className="text-crimson-600" aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={form.clientName}
            onChange={handleChange}
            className={`input-field ${errors.clientName ? "border-red-400" : ""}`}
            placeholder="Alex Smith"
            aria-required="true"
            aria-describedby={errors.clientName ? "clientName-error" : undefined}
          />
          {errors.clientName && (
            <p id="clientName-error" className="mt-1 text-xs text-red-500 font-body" role="alert">
              {errors.clientName}
            </p>
          )}
        </div>

        {/* Age */}
        <div>
          <label htmlFor="clientAge" className="label">
            Age <span className="text-crimson-600" aria-label="required">*</span>
          </label>
          <input
            type="number"
            id="clientAge"
            name="clientAge"
            value={form.clientAge}
            onChange={handleChange}
            className={`input-field ${errors.clientAge ? "border-red-400" : ""}`}
            placeholder="7"
            min="0"
            max="100"
            aria-required="true"
            aria-describedby={errors.clientAge ? "clientAge-error" : undefined}
          />
          {errors.clientAge && (
            <p id="clientAge-error" className="mt-1 text-xs text-red-500 font-body" role="alert">
              {errors.clientAge}
            </p>
          )}
        </div>

        {/* ASD/SPD Diagnosis */}
        <div>
          <label htmlFor="hasDiagnosis" className="label">
            ASD / SPD Diagnosis? <span className="text-crimson-600" aria-label="required">*</span>
          </label>
          <select
            id="hasDiagnosis"
            name="hasDiagnosis"
            value={form.hasDiagnosis}
            onChange={handleChange}
            className={`input-field ${errors.hasDiagnosis ? "border-red-400" : ""}`}
            aria-required="true"
            aria-describedby={errors.hasDiagnosis ? "hasDiagnosis-error" : undefined}
          >
            <option value="">Select one…</option>
            <option value="yes-asd">Yes • ASD (Autism Spectrum Disorder)</option>
            <option value="yes-spd">Yes • SPD (Sensory Processing Disorder)</option>
            <option value="yes-both">Yes • Both ASD & SPD</option>
            <option value="yes-other">Yes • Other sensory diagnosis</option>
            <option value="no">No formal diagnosis, but sensory sensitivities</option>
            <option value="unsure">Unsure / Awaiting evaluation</option>
          </select>
          {errors.hasDiagnosis && (
            <p id="hasDiagnosis-error" className="mt-1 text-xs text-red-500 font-body" role="alert">
              {errors.hasDiagnosis}
            </p>
          )}
        </div>

        {/* Diagnosis Notes (full width) */}
        <div className="sm:col-span-2">
          <label htmlFor="diagnosisNotes" className="label">
            Anything else you&apos;d like us to know?{" "}
            <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="diagnosisNotes"
            name="diagnosisNotes"
            value={form.diagnosisNotes}
            onChange={handleChange}
            rows={3}
            className="input-field resize-none"
            placeholder="Triggers, communication style, sensory preferences, past experiences with haircuts…"
          />
        </div>

        {/* Town */}
        <div>
          <label htmlFor="town" className="label">
            Town / City <span className="text-crimson-600" aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="town"
            name="town"
            value={form.town}
            onChange={handleChange}
            className={`input-field ${errors.town ? "border-red-400" : ""}`}
            placeholder="Southborough"
            autoComplete="address-level2"
            aria-required="true"
            aria-describedby={errors.town ? "town-error" : undefined}
          />
          {errors.town && (
            <p id="town-error" className="mt-1 text-xs text-red-500 font-body" role="alert">
              {errors.town}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="label">
            Phone Number <span className="text-crimson-600" aria-label="required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={`input-field ${errors.phone ? "border-red-400" : ""}`}
            placeholder="(508) 555-0100"
            autoComplete="tel"
            aria-required="true"
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-500 font-body" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <label htmlFor="email" className="label">
            Email Address <span className="text-crimson-600" aria-label="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`input-field ${errors.email ? "border-red-400" : ""}`}
            placeholder="jane@example.com"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-500 font-body" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* How did you hear */}
        <div className="sm:col-span-2">
          <label htmlFor="hearAboutUs" className="label">
            How did you hear about KC Cuts? <span className="text-crimson-600" aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="hearAboutUs"
            name="hearAboutUs"
            value={form.hearAboutUs}
            onChange={handleChange}
            className={`input-field ${errors.hearAboutUs ? "border-red-400" : ""}`}
            placeholder="Facebook, NECC, a friend, Instagram…"
            aria-required="true"
            aria-describedby={errors.hearAboutUs ? "hearAboutUs-error" : undefined}
          />
          {errors.hearAboutUs && (
            <p id="hearAboutUs-error" className="mt-1 text-xs text-red-500 font-body" role="alert">
              {errors.hearAboutUs}
            </p>
          )}
        </div>
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div
          className="mt-5 p-4 bg-red-50 border border-red-200 rounded-sm"
          role="alert"
        >
          <p className="font-body text-sm text-red-700">
            Something went wrong submitting your request. Please try again, or
            reach out directly on Instagram{" "}
            <a
              href="https://www.instagram.com/kccutsandstyle"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @kccutsandstyle
            </a>
            .
          </p>
        </div>
      )}

      {/* Submit */}
      <div className="mt-7">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
          aria-disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Spinner className="w-4 h-4 animate-spin" />
              Submitting…
            </>
          ) : (
            "Request to Join the Waitlist"
          )}
        </button>
        <p className="font-body text-xs text-gray-400 text-center mt-3">
          We typically respond within 48 hours. Your information is kept private
          and never shared.
        </p>
      </div>
    </form>
  );
}

function SuccessState() {
  return (
    <div className="text-center py-10">
      <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-5">
        <CheckIcon className="w-8 h-8 text-sage-600" />
      </div>
      <h3 className="font-display text-3xl text-gray-900 mb-3">
        You&apos;re on the list!
      </h3>
      <p className="font-body text-gray-600 max-w-md mx-auto leading-relaxed">
        Thank you for reaching out. Kristina will review your request and be in
        touch within{" "}
        <strong className="text-crimson-700">48 hours</strong> to discuss
        availability and next steps.
      </p>
      <div className="mt-8 p-5 bg-cream-100 border border-cream-200 rounded-sm max-w-sm mx-auto">
        <p className="font-body text-sm text-gray-600">
          While you wait, follow along on Instagram for tips, updates, and
          behind-the-scenes moments.
        </p>
        <a
          href="https://www.instagram.com/kccutsandstyle"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 font-body text-sm font-medium text-crimson-700 hover:text-crimson-800 transition-colors"
        >
          <span>@kccutsandstyle</span>
        </a>
      </div>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Spinner({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 12a9 9 0 11-6.219-8.56" />
    </svg>
  );
}
