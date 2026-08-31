
import { useState,useEffect } from "react";
import translations from "./translations";
import {
  Menu,
  X,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Upload,
  Check,
  Mail,
  Phone,
} from "lucide-react";
function BookingSection() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    style: "",
    description: "",
    placement: "",
    size: "",
    referenceImage: null,
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = "Please enter your name.";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Please enter your phone number.";
      } else if (!/^[0-9+\-\s()]{8,15}$/.test(formData.phone)) {
        newErrors.phone = "Please enter a valid phone number.";
      }
    }

    if (step === 2) {
      if (!formData.style) {
        newErrors.style = "Please select a tattoo style.";
      }

      if (!formData.description.trim()) {
        newErrors.description = "Please describe your tattoo idea.";
      }

      if (!formData.placement) {
        newErrors.placement = "Please select the placement.";
      }

      if (!formData.size) {
        newErrors.size = "Please select the approximate size.";
      }
    }

    if (step === 3) {
      if (!formData.date) {
        newErrors.date = "Please select a date.";
      }

      if (!formData.time) {
        newErrors.time = "Please select a preferred time.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const previousStep = () => {
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleReferenceImage = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors({
        referenceImage: "Please select an image file.",
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors({
        referenceImage: "Image must be smaller than 5MB.",
      });
      return;
    }

    updateField("referenceImage", file);
  };

  const sendToWhatsApp = () => {
    if (!validateStep()) return;

    const whatsappNumber = "919006289005";
    
    const referenceText = formData.referenceImage
      ? `Yes - ${formData.referenceImage.name}`
      : "No";

    const message = `
Hi Graffiti Tattoo Studio,

I'd like to book a tattoo appointment.

━━━━━━━━━━━━━━━━
PERSONAL DETAILS
━━━━━━━━━━━━━━━━

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

━━━━━━━━━━━━━━━━
TATTOO DETAILS
━━━━━━━━━━━━━━━━

Style: ${formData.style}
Description: ${formData.description}
Placement: ${formData.placement}
Size: ${formData.size}
Reference Image: ${referenceText}

━━━━━━━━━━━━━━━━
APPOINTMENT
━━━━━━━━━━━━━━━━

Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

Thank you.
`.trim();

    const whatsappUrl = `https://wa.me/${9006289005}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="booking"
      className="bg-[#242424] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mb-14 text-center">

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c9a24d]">
            Book Your Session
          </p>

          <h2 className="text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
            Your Story.
            <br />
            <span className="text-[#c9a24d]">
              Your Ink.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Tell us about your tattoo idea, choose your preferred
            appointment time, and continue the conversation with us on
            WhatsApp.
          </p>

        </div>


        {/* ================= BOOKING CARD ================= */}

        <div className="overflow-hidden border border-white/10 bg-[#1b1b1b]">

          {/* ================= PROGRESS ================= */}

          <div className="border-b border-white/10 px-6 py-6 sm:px-10">

            <div className="flex items-center justify-center">

              {[1, 2, 3].map((number) => (
                <div
                  key={number}
                  className="flex items-center"
                >

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
                      step >= number
                        ? "border-[#c9a24d] bg-[#c9a24d] text-black"
                        : "border-white/20 bg-transparent text-gray-500"
                    }`}
                  >
                    {step > number ? (
                      <Check size={18} />
                    ) : (
                      number
                    )}
                  </div>

                  {number !== 3 && (
                    <div
                      className={`mx-2 h-px w-12 transition sm:w-24 ${
                        step > number
                          ? "bg-[#c9a24d]"
                          : "bg-white/10"
                      }`}
                    />
                  )}

                </div>
              ))}

            </div>


            <div className="mt-4 grid grid-cols-3 text-center text-[10px] uppercase tracking-wider sm:text-xs">

              <span
                className={
                  step === 1
                    ? "text-[#c9a24d]"
                    : "text-gray-500"
                }
              >
                Personal Details
              </span>

              <span
                className={
                  step === 2
                    ? "text-[#c9a24d]"
                    : "text-gray-500"
                }
              >
                Tattoo Details
              </span>

              <span
                className={
                  step === 3
                    ? "text-[#c9a24d]"
                    : "text-gray-500"
                }
              >
                Date & Time
              </span>

            </div>

          </div>


          {/* ================= FORM ================= */}

          <div className="px-6 py-10 sm:px-10 lg:px-16">

            {/* ================= STEP 1 ================= */}

            {step === 1 && (
              <div className="animate-fade-in">

                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#c9a24d]">
                    Step 01
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold uppercase">
                    Personal Details
                  </h3>
                </div>


                <div className="grid gap-6 md:grid-cols-2">

                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        updateField("name", e.target.value)
                      }
                      placeholder="Enter your name"
                      className="w-full border border-white/10 bg-[#242424] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#c9a24d]"
                    />

                    {errors.name && (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>


                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        updateField("phone", e.target.value)
                      }
                      placeholder="Enter your phone number"
                      className="w-full border border-white/10 bg-[#242424] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#c9a24d]"
                    />

                    {errors.phone && (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>


                  {/* Email */}
                  <div className="md:col-span-2">

                    <label className="mb-2 block text-sm text-gray-300">
                      Email Address
                      <span className="ml-2 text-xs text-gray-600">
                        Optional
                      </span>
                    </label>

                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        updateField("email", e.target.value)
                      }
                      placeholder="Enter your email address"
                      className="w-full border border-white/10 bg-[#242424] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#c9a24d]"
                    />

                  </div>

                </div>


                <div className="mt-10 flex justify-end">

                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-3 bg-[#c9a24d] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-[#e0b85c]"
                  >
                    Tattoo Details
                    <ArrowRight size={18} />
                  </button>

                </div>

              </div>
            )}


            {/* ================= STEP 2 ================= */}

            {step === 2 && (
              <div className="animate-fade-in">

                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#c9a24d]">
                    Step 02
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold uppercase">
                    Tattoo Details
                  </h3>
                </div>


                <div className="grid gap-6 md:grid-cols-2">

                  {/* Style */}
                  <div>

                    <label className="mb-2 block text-sm text-gray-300">
                      Tattoo Style *
                    </label>

                    <select
                      value={formData.style}
                      onChange={(e) =>
                        updateField("style", e.target.value)
                      }
                      className="w-full appearance-none border border-white/10 bg-[#242424] px-4 py-4 text-white outline-none transition focus:border-[#c9a24d]"
                    >
                      <option value="">
                        Select tattoo style
                      </option>
                      <option value="Realism">
                        Realism
                      </option>
                      <option value="Fine Line">
                        Fine Line
                      </option>
                      <option value="Minimalist">
                        Minimalist
                      </option>
                      <option value="Black & Grey">
                        Black & Grey
                      </option>
                      <option value="Traditional">
                        Traditional
                      </option>
                      <option value="Geometric">
                        Geometric
                      </option>
                      <option value="Japanese">
                        Japanese
                      </option>
                      <option value="Other">
                        Other
                      </option>
                    </select>

                    {errors.style && (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.style}
                      </p>
                    )}

                  </div>


                  {/* Placement */}
                  <div>

                    <label className="mb-2 block text-sm text-gray-300">
                      Tattoo Placement *
                    </label>

                    <select
                      value={formData.placement}
                      onChange={(e) =>
                        updateField("placement", e.target.value)
                      }
                      className="w-full appearance-none border border-white/10 bg-[#242424] px-4 py-4 text-white outline-none transition focus:border-[#c9a24d]"
                    >
                      <option value="">
                        Select placement
                      </option>
                      <option value="Forearm">
                        Forearm
                      </option>
                      <option value="Upper Arm">
                        Upper Arm
                      </option>
                      <option value="Full Arm">
                        Full Arm
                      </option>
                      <option value="Chest">
                        Chest
                      </option>
                      <option value="Back">
                        Back
                      </option>
                      <option value="Leg">
                        Leg
                      </option>
                      <option value="Shoulder">
                        Shoulder
                      </option>
                      <option value="Neck">
                        Neck
                      </option>
                      <option value="Other">
                        Other
                      </option>
                    </select>

                    {errors.placement && (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.placement}
                      </p>
                    )}

                  </div>


                  {/* Size */}
                  <div>

                    <label className="mb-2 block text-sm text-gray-300">
                      Approximate Size *
                    </label>

                    <select
                      value={formData.size}
                      onChange={(e) =>
                        updateField("size", e.target.value)
                      }
                      className="w-full appearance-none border border-white/10 bg-[#242424] px-4 py-4 text-white outline-none transition focus:border-[#c9a24d]"
                    >
                      <option value="">
                        Select size
                      </option>
                      <option value="Small">
                        Small
                      </option>
                      <option value="Medium">
                        Medium
                      </option>
                      <option value="Large">
                        Large
                      </option>
                      <option value="Full Sleeve">
                        Full Sleeve
                      </option>
                      <option value="Not Sure">
                        Not Sure
                      </option>
                    </select>

                    {errors.size && (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.size}
                      </p>
                    )}

                  </div>


                  {/* Description */}
                  <div className="md:col-span-2">

                    <label className="mb-2 block text-sm text-gray-300">
                      Tell Us About Your Tattoo *
                    </label>

                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        updateField("description", e.target.value)
                      }
                      rows="5"
                      placeholder="Describe your tattoo idea, design, meaning or anything you'd like the artist to know..."
                      className="w-full resize-none border border-white/10 bg-[#242424] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#c9a24d]"
                    />

                    {errors.description && (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.description}
                      </p>
                    )}

                  </div>


                  {/* Reference Image */}
                  <div className="md:col-span-2">

                    <label className="mb-2 block text-sm text-gray-300">
                      Reference Image
                      <span className="ml-2 text-xs text-gray-600">
                        Optional · Max 5MB
                      </span>
                    </label>

                    <label className="flex cursor-pointer items-center gap-4 border border-dashed border-white/20 bg-[#242424] px-5 py-5 transition hover:border-[#c9a24d]">

                      <div className="flex h-11 w-11 items-center justify-center bg-[#1b1b1b] text-[#c9a24d]">
                        <Upload size={20} />
                      </div>

                      <div className="min-w-0">

                        <p className="text-sm text-gray-300">
                          {formData.referenceImage
                          ? formData.referenceImage.name
                            : "Upload a reference image"}
                        </p>

                        <p className="mt-1 text-xs text-gray-600">
                          JPG, PNG or WEBP
                        </p>

                      </div>

                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleReferenceImage}
                        className="hidden"
                      />

                    </label>

                    {errors.referenceImage && (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.referenceImage}
                      </p>
                    )}

                  </div>

                </div>


                {/* Buttons */}
                <div className="mt-10 flex flex-col-reverse justify-between gap-4 sm:flex-row">

                  <button
                    type="button"
                    onClick={previousStep}
                    className="flex items-center justify-center gap-3 border border-white/20 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-gray-300 transition hover:border-[#c9a24d] hover:text-[#c9a24d]"
                  >
                    <ArrowLeft size={18} />
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center justify-center gap-3 bg-[#c9a24d] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-[#e0b85c]"
                  >
                    Date & Time
                    <ArrowRight size={18} />
                  </button>

                </div>

              </div>
            )}


            {/* ================= STEP 3 ================= */}
{step === 3 && (
  <div className="animate-fade-in">

    {/* Header */}
    <div className="mb-8">

      <p className="text-xs uppercase tracking-[0.3em] text-[#c9a24d]">
        Step 03
      </p>

      <h3 className="mt-2 text-2xl font-semibold uppercase">
        Request for Booking
      </h3>

      {/* Booking Notice */}
      <div className="mt-5 border-l-2 border-[#c9a24d] bg-[#1e1e1e] px-5 py-4">

        <p className="text-xs font-semibold uppercase leading-6 tracking-wide text-[#c9a24d]">
          You are requesting to book this slot for one individual.
          Appointments are strictly subject to availability and will be
          confirmed after a review by the studio. Please select your
          preferred date and time below.
        </p>

      </div>

    </div>


    <div className="grid gap-6 md:grid-cols-2">

      {/* Date */}
      <div>

        <label className="mb-2 block text-sm text-gray-300">
          Preferred Date *
        </label>

        <input
          type="date"
          value={formData.date}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) =>
            updateField("date", e.target.value)
          }
          className="w-full border border-white/10 bg-[#242424] px-4 py-4 text-white outline-none transition focus:border-[#c9a24d]"
        />

        {errors.date && (
          <p className="mt-2 text-xs text-red-400">
            {errors.date}
          </p>
        )}

      </div>


      {/* Time */}
      <div>

        <label className="mb-2 block text-sm text-gray-300">
          Preferred Time *
        </label>

        <select
          value={formData.time}
          onChange={(e) =>
            updateField("time", e.target.value)
          }
          className="w-full border border-white/10 bg-[#242424] px-4 py-4 text-white outline-none transition focus:border-[#c9a24d]"
        >
          <option value="">
            Select preferred time
          </option>

          <option value="10:00 AM">
            10:00 AM
          </option>

          <option value="11:00 AM">
            11:00 AM
          </option>

          <option value="12:00 PM">
            12:00 PM
          </option>

          <option value="1:00 PM">
            1:00 PM
          </option>

          <option value="2:00 PM">
            2:00 PM
          </option>

          <option value="3:00 PM">
            3:00 PM
          </option>

          <option value="4:00 PM">
            4:00 PM
          </option>

          <option value="5:00 PM">
            5:00 PM
          </option>

          <option value="6:00 PM">
            6:00 PM
          </option>

          <option value="7:00 PM">
            7:00 PM
          </option>
           <option value="8:00 PM">
            8:00 PM
          </option>
           <option value="9:00 PM">
            9:00 PM
          </option>
           <option value="10:00 PM">
            10:00 PM
          </option>

        </select>

        {errors.time && (
          <p className="mt-2 text-xs text-red-400">
            {errors.time}
          </p>
        )}

      </div>

    </div>


    {/* Request Information */}
    <div className="mt-6 border border-[#c9a24d]/20 bg-[#c9a24d]/5 p-5">

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a24d]">
        Important
      </p>

      <p className="mt-3 text-sm leading-6 text-gray-400">
        Your selected date and time are your preferred appointment slot.
        This is a booking request and does not guarantee availability.
        Our studio will review your request and confirm the final
        appointment on WhatsApp.
      </p>

    </div>


    {/* Summary */}
    <div className="mt-10 border border-white/10 bg-[#242424] p-6">

      <p className="text-xs uppercase tracking-[0.3em] text-[#c9a24d]">
        Appointment Summary
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">

        <div>

          <p className="text-xs uppercase tracking-wider text-gray-600">
            Name
          </p>

          <p className="mt-1 text-sm text-gray-300">
            {formData.name || "—"}
          </p>

        </div>


        <div>

          <p className="text-xs uppercase tracking-wider text-gray-600">
            Tattoo Style
          </p>

          <p className="mt-1 text-sm text-gray-300">
            {formData.style || "—"}
          </p>

        </div>


        <div>

          <p className="text-xs uppercase tracking-wider text-gray-600">
            Placement
          </p>

          <p className="mt-1 text-sm text-gray-300">
            {formData.placement || "—"}
          </p>

        </div>


        <div>

          <p className="text-xs uppercase tracking-wider text-gray-600">
            Preferred Date & Time
          </p>

          <p className="mt-1 text-sm text-gray-300">
            {formData.date || "—"}
            {formData.time && ` · ${formData.time}`}
          </p>

        </div>

      </div>

    </div>


    {/* WhatsApp CTA */}
    <div className="mt-10">

      <button
        type="button"
        onClick={sendToWhatsApp}
        className="group flex w-full items-center justify-center gap-3 bg-[#c9a24d] px-7 py-5 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-[#e0b85c]"
      >

        <MessageCircle
          size={21}
          className="transition-transform group-hover:scale-110"
        />

        Request to Book

        <ArrowRight size={18} />

      </button>

      <p className="mt-4 text-center text-xs leading-5 text-gray-600">
        Submitting this request does not confirm your appointment.
        The studio will review your preferred date and time and confirm
        availability with you on WhatsApp.
      </p>

    </div>


    {/* Back */}
    <div className="mt-6 text-center">

      <button
        type="button"
        onClick={previousStep}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 transition hover:text-[#c9a24d]"
      >

        <ArrowLeft size={14} />

        Back to Tattoo Details

      </button>

    </div>

  </div>
)}
          </div>
        </div>

      </div>
    </section>
  );
}
function InstagramSection({
  instagramPosts,
  instagramLoading,
  instagramError,
}) {
  const instagramUrl = "https://www.instagram.com/graffiti_tattoo_studio/";

  return (
    <section
      id="instagram"
      className="bg-[#1e1e1e] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c9a24d]">
              Follow Our Work
            </p>

            <h2 className="text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
              Graffiti
              <br />
              <span className="text-[#c9a24d]">
                On Instagram
              </span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/graffiti_tattoo_studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 border border-white/20 px-6 py-3 text-sm uppercase tracking-wider text-gray-300 transition hover:border-[#c9a24d] hover:text-[#c9a24d]"
          >
            <span className="font-bold">IG</span>
            Follow Us
            <span>↗</span>
          </a>

        </div>


        {/* ================= LOADING ================= */}
        {instagramLoading && (
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">

            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square animate-pulse bg-[#151515]"
              />
            ))}

          </div>
        )}


        {/* ================= ERROR ================= */}
        {!instagramLoading && instagramError && (
          <div className="border border-white/10 bg-[#151515] px-6 py-12 text-center">

            <p className="text-sm text-gray-400">
              Instagram posts are currently unavailable.
            </p>

            <a
              href="https://www.instagram.com/graffiti_tattoo_studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a24d] transition hover:text-[#e0b85c]"
            >
              Visit Instagram →
            </a>

          </div>
        )}


        {/* ================= INSTAGRAM GRID ================= */}
        {!instagramLoading &&
          !instagramError &&
          instagramPosts.length > 0 && (
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">

              {instagramPosts.slice(0, 6).map((post) => {

                const imageUrl =
                  post.media_type === "VIDEO"
                    ? post.thumbnail_url
                    : post.media_url;

                return (
                  <a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square overflow-hidden bg-[#151515]"
                  >

                    <img
                      src={imageUrl}
                      alt={
                        post.caption
                          ? post.caption.substring(0, 100)
                          : "Graffite Tattoo Studio Instagram"
                      }
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-500 group-hover:bg-black/60">

                      <div className="translate-y-4 text-center opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                        <div className="mx-auto flex h-12 w-12 items-center justify-center border border-white/40 text-lg font-bold text-white">
                          IG
                        </div>

                        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white">
                          View Post
                        </p>

                      </div>

                    </div>

                    {/* Video Indicator */}
                    {post.media_type === "VIDEO" && (
                      <div className="absolute right-4 top-4 border border-white/30 bg-black/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                        Video
                      </div>
                    )}

                  </a>
                );
              })}

            </div>
          )}


        {/* ================= NO POSTS ================= */}
        {!instagramLoading &&
          !instagramError &&
          instagramPosts.length === 0 && (
            <div className="border border-white/10 bg-[#151515] px-6 py-12 text-center">

              <p className="text-sm text-gray-400">
                No Instagram posts available yet.
              </p>

            </div>
          )}


        {/* Bottom CTA */}
        <div className="mt-12 border-t border-white/10 pt-10 text-center">

          <p className="text-sm text-gray-500">
            New work. New ideas. New stories.
          </p>

          <a
            href="https://www.instagram.com/graffiti_tattoo_studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a24d] transition hover:text-[#e0b85c]"
          >
            @graffiti_tattoo_studio →
          </a>

        </div>

      </div>
    </section>
  );
}
function ContactSidebar() {
  const phoneNumber = "+91XXXXXXXXXX";
  const whatsappNumber = "91XXXXXXXXXX";
  const email = "info@graffitetattoo.com";

  return (
    <>
      {/* Desktop Contact Sidebar */}
<div className="fixed right-0 top-1/2 z-[60] hidden -translate-y-1/2 md:block">

  <div className="overflow-hidden border border-white/10 bg-[#181818]/95 shadow-xl backdrop-blur-md">

    {/* Email */}
    <a
      href={`mailto:${email}`}
      aria-label="Email Graffite Tattoo Studio"
      className="group flex h-14 w-12 items-center justify-center border-b border-white/10 transition duration-300 hover:bg-[#c9a24d]"
    >
      <Mail
        size={19}
        strokeWidth={1.7}
        className="text-gray-300 transition duration-300 group-hover:scale-110 group-hover:text-black"
      />
    </a>

    {/* Phone */}
    <a
      href={`tel:${9006289005}`}
      aria-label="Call Graffite Tattoo Studio"
      className="group flex h-14 w-12 items-center justify-center border-b border-white/10 transition duration-300 hover:bg-[#c9a24d]"
    >
      <Phone
        size={19}
        strokeWidth={1.7}
        className="text-gray-300 transition duration-300 group-hover:scale-110 group-hover:text-black"
      />
    </a>

    {/* WhatsApp */}
    <a
      href={`https://wa.me/${9006289005}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Graffite Tattoo Studio"
      className="group flex h-14 w-12 items-center justify-center transition duration-300 hover:bg-[#c9a24d]"
    >
      <MessageCircle
        size={20}
        strokeWidth={1.7}
        className="text-gray-300 transition duration-300 group-hover:scale-110 group-hover:text-black"
      />
    </a>

  </div>

</div>


      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 bg-[#181818]/95 backdrop-blur-md md:hidden">

        <div className="mx-auto flex h-16 max-w-md">

          <a
            href={`mailto:${email}`}
            aria-label="Email"
            className="flex flex-1 items-center justify-center border-r border-white/10 text-white transition active:bg-[#c9a24d] active:text-black"
          >
            <Mail size={23} strokeWidth={1.7} />
          </a>

          <a
            href={`tel:${9006289005}`}
            aria-label="Call"
            className="flex flex-1 items-center justify-center border-r border-white/10 text-white transition active:bg-[#c9a24d] active:text-black"
          >
            <Phone size={23} strokeWidth={1.7} />
          </a>

          <a
            href={`https://wa.me/${9006289005}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex flex-1 items-center justify-center text-white transition active:bg-[#c9a24d] active:text-black"
          >
            <MessageCircle size={25} strokeWidth={1.7} />
          </a>

        </div>
      </div>
    </>
  );
}
const googleReviews = [
  {
    name: "Nihareeka Nath",
    rating: 5,
    text: "Had an absolutely incredible experience getting inked here! The vibe was welcoming and highly professional. The shop was exceptionally clean and hygienic, which was a top priority for me. My artist took the time to understand my reference ideas and tweak the design perfectly to fit the placement. The linework was incredibly sharp and the shading was smooth. Worth every penny!",
  },

  {
    name: "Nitu Baliram patil",
    rating: 5,
    text: "Had the best experience here! Got a tattoo for my friend and everything about this place was amazing. The people were super cool, friendly, and made the whole vibe comfortable and fun. The artist was incredibly talented, patient, and paid attention to every little detail. Absolutely loved the new tattoo and the experience that came with it!",
  },

  {
    name: "Harshal Lakhera",
    rating: 5,
    text: "Amazing experience from start to finish! The studio is super clean and welcoming, and the artists are incredibly talented and professional. They took the time to listen to my ideas, gave helpful suggestions, and made sure I was comfortable throughout the entire session. The attention to detail and quality of work really shows in the final tattoo.",
  },

  {
    name: "Vishnu Poduval",
    rating: 5,
    text: "Had an amazing experience at Graffiti Tattoo Studio. Super clean, professional, and friendly atmosphere. Huge thanks, the tattoo came out even better than I imagined. Incredible detailing and care from start to finish. Highly recommended!",
  },
];
function GuidesSection({ t }) {
  const [activeGuide, setActiveGuide] = useState(null);

  // Prevent the component from crashing if translations are not ready
  if (!t || !t.guides) {
    return null;
  }

  const guides = [
    {
      id: "aftercare",
      number: "01",
      title: t.guides.aftercare?.title || "Tattoo Aftercare",
      description:
        t.guides.aftercare?.description ||
        "Everything you need to know to care for your new tattoo while it heals.",
    },
    {
      id: "piercing",
      number: "02",
      title: t.guides.piercing?.title || "Piercing Guide",
      description:
        t.guides.piercing?.description ||
        "Piercing sizes, cleaning instructions, healing times and important aftercare.",
    },
    {
      id: "skintone",
      number: "03",
      title:
        t.guides.skintone?.title ||
        "Tattoo Colors Selection Guide Based On Skin Tone",
      description:
        t.guides.skintone?.description ||
        "Understand how skin tone, contrast and undertones can affect tattoo colors.",
    },
    {
      id: "painchart",
      number: "04",
      title: t.guides.painchart?.title || "Tattoo Pain Chart",
      description:
        t.guides.painchart?.description ||
        "Understand the different pain levels across common tattoo placement areas.",
    },
  ];

  return (
    <>
      {/* ================= GUIDES ================= */}
      <section
        id="guides"
        className="bg-[#242424] px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-14 max-w-3xl">

            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c9a24d]">
              {t.guides.label || "Studio Guides"}
            </p>

            <h2 className="text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
              {t.guides.title || "Everything You Need"}

              <br />

              <span className="text-[#c9a24d]">
                {t.guides.titleHighlight || "Before & After."}
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-400">
              {t.guides.intro ||
                "Helpful information from our studio to help you prepare for your tattoo or piercing and take care of it afterward."}
            </p>

          </div>

          {/* Guide Cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {guides.map((guide) => (
              <button
                key={guide.id}
                onClick={() => setActiveGuide(guide.id)}
                className="group min-h-[300px] border border-white/10 bg-[#1e1e1e] p-7 text-left transition duration-500 hover:-translate-y-1 hover:border-[#c9a24d]/50 sm:p-9"
              >

                <div className="flex items-start justify-between">

                  <span className="text-sm tracking-[0.2em] text-[#c9a24d]">
                    {guide.number}
                  </span>

                  <span className="text-xl text-gray-600 transition duration-300 group-hover:translate-x-1 group-hover:text-[#c9a24d]">
                    ↗
                  </span>

                </div>

                <div className="mt-20">

                  <h3 className="text-2xl font-semibold uppercase leading-tight text-white">
                    {guide.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-gray-500">
                    {guide.description}
                  </p>

                </div>

              </button>
            ))}

          </div>

        </div>
      </section>


      {/* ================= GUIDE MODAL ================= */}
      {activeGuide && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveGuide(null)}
        >

          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-white/10 bg-[#1e1e1e]"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setActiveGuide(null)}
              className="sticky right-0 top-0 z-20 ml-auto flex h-12 w-12 items-center justify-center border-l border-b border-white/10 bg-[#1e1e1e] text-xl text-gray-400 transition hover:text-[#c9a24d]"
              aria-label="Close guide"
            >
              <X size={22} />
            </button>


            {/* ================= TATTOO AFTERCARE ================= */}
            {activeGuide === "aftercare" && (
              <div className="px-7 pb-10 sm:px-10 lg:px-14">

                <p className="text-sm uppercase tracking-[0.3em] text-[#c9a24d]">
                  {t.guides.aftercare?.guideNumber || "Guide 01"}
                </p>

                <h3 className="mt-3 text-3xl font-bold uppercase sm:text-4xl">
                  {t.guides.aftercare?.title || "Tattoo Aftercare"}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400">
                  {t.guides.aftercare?.intro ||
                    "Proper tattoo aftercare is essential to ensure smooth healing and preserve the quality of your tattoo."}
                </p>


                <div className="mt-10 space-y-8">

                  <GuideStep
                    number="01"
                    title={
                      t.guides.aftercare?.steps?.wrap?.title ||
                      "Leave the Wrap On"
                    }
                    text={
                      t.guides.aftercare?.steps?.wrap?.text ||
                      "Leave the wrap on for 1–2 hours after your tattoo session."
                    }
                  />

                  <GuideStep
                    number="02"
                    title={
                      t.guides.aftercare?.steps?.clean?.title ||
                      "Clean the Tattoo Gently"
                    }
                    text={
                      t.guides.aftercare?.steps?.clean?.text ||
                      "Wash with lukewarm water and mild, fragrance-free soap using only your hands. Pat dry with a clean towel and avoid rubbing."
                    }
                  />

                  <GuideStep
                    number="03"
                    title={
                      t.guides.aftercare?.steps?.dermalize?.title ||
                      "Dermalize Wrap"
                    }
                    text={
                      t.guides.aftercare?.steps?.dermalize?.text ||
                      "Visit the studio the next day for Dermalize Wrap application. The studio guide recommends keeping the wrap on for about a week."
                    }
                  />

                  <GuideStep
                    number="04"
                    title={
                      t.guides.aftercare?.steps?.scratching?.title ||
                      "Avoid Scratching"
                    }
                    text={
                      t.guides.aftercare?.steps?.scratching?.text ||
                      "Itching can be normal during healing. Do not scratch or pick at scabs."
                    }
                  />

                  <GuideStep
                    number="05"
                    title={
                      t.guides.aftercare?.steps?.soaking?.title ||
                      "Avoid Soaking"
                    }
                    text={
                      t.guides.aftercare?.steps?.soaking?.text ||
                      "Avoid swimming, hot tubs and soaking in baths during the first few weeks. Showering is fine."
                    }
                  />

                  <GuideStep
                    number="06"
                    title={
                      t.guides.aftercare?.steps?.protect?.title ||
                      "Protect Your Tattoo"
                    }
                    text={
                      t.guides.aftercare?.steps?.protect?.text ||
                      "Wear loose clothing and minimize direct sunlight for 2–3 weeks. After healing, use SPF 50 or higher to help protect against fading."
                    }
                  />

                </div>


                {/* Infection Warning */}
                <div className="mt-10 border border-white/10 bg-[#242424] p-6">

                  <p className="text-sm font-semibold uppercase tracking-wider text-[#c9a24d]">
                    {t.guides.aftercare?.infection?.title ||
                      "Watch for signs of infection"}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {t.guides.aftercare?.infection?.text ||
                      "Unusual redness, swelling, pus or excessive pain should be taken seriously. Contact your tattoo artist or a healthcare professional immediately."}
                  </p>

                </div>

              </div>
            )}


            {/* ================= PIERCING GUIDE ================= */}
            {activeGuide === "piercing" && (
              <div className="px-7 pb-10 sm:px-10 lg:px-14">

                <p className="text-sm uppercase tracking-[0.3em] text-[#c9a24d]">
                  {t.guides.piercing?.guideNumber || "Guide 02"}
                </p>

                <h3 className="mt-3 text-3xl font-bold uppercase sm:text-4xl">
                  {t.guides.piercing?.title || "Piercing Guide"}
                </h3>


                {/* Size Guide */}
                <div className="mt-10">

                  <h4 className="text-lg font-semibold uppercase">
                    {t.guides.piercing?.hoopsSizeGuide ||
                      "Hoops Size Guide"}
                  </h4>

                  <div className="mt-5 overflow-x-auto">

                    <table className="w-full min-w-[500px] border-collapse text-left text-sm">

                      <thead>
                        <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-[#c9a24d]">

                          <th className="px-4 py-4">
                            {t.guides.piercing?.location || "Location"}
                          </th>

                          <th className="px-4 py-4">
                            {t.guides.piercing?.thickness || "Thickness"}
                          </th>

                          <th className="px-4 py-4">
                            {t.guides.piercing?.length || "Length"}
                          </th>

                        </tr>
                      </thead>

                      <tbody className="text-gray-400">

                        {[
                          ["Lobe", "20G / 18G / 16G", "6mm / 8mm / 10mm"],
                          ["Helix", "18G / 16G", "6mm / 8mm"],
                          ["Rook", "18G / 16G", "6mm"],
                          ["Daith", "16G", "8mm / 10mm"],
                          ["Forward Helix", "18G / 16G", "6mm"],
                          ["Conch", "16G", "10mm / 12mm"],
                          ["Tragus", "18G / 16G", "4mm / 6mm"],
                        ].map((row) => (
                          <tr
                            key={row[0]}
                            className="border-b border-white/5"
                          >

                            <td className="px-4 py-4 text-white">
                              {row[0]}
                            </td>

                            <td className="px-4 py-4">
                              {row[1]}
                            </td>

                            <td className="px-4 py-4">
                              {row[2]}
                            </td>

                          </tr>
                        ))}

                      </tbody>

                    </table>

                  </div>

                </div>


                {/* Aftercare */}
                <div className="mt-12">

                  <h4 className="text-lg font-semibold uppercase">
                    {t.guides.piercing?.aftercareTitle ||
                      "Piercing Aftercare"}
                  </h4>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">

                    <GuideInfo
                      title={
                        t.guides.piercing?.clean?.title || "Clean"
                      }
                      text={
                        t.guides.piercing?.clean?.text ||
                        "Wash your hands before touching your piercing. Use sterile saline solution or piercing aftercare spray twice daily."
                      }
                    />

                    <GuideInfo
                      title={
                        t.guides.piercing?.dry?.title || "Dry"
                      }
                      text={
                        t.guides.piercing?.dry?.text ||
                        "Gently pat dry with a disposable paper towel. Avoid cloth towels."
                      }
                    />

                    <GuideInfo
                      title={
                        t.guides.piercing?.avoid?.title || "Avoid"
                      }
                      text={
                        t.guides.piercing?.avoid?.text ||
                        "Avoid unnecessary touching or twisting of the jewelry."
                      }
                    />

                    <GuideInfo
                      title={
                        t.guides.piercing?.swimming?.title ||
                        "Swimming"
                      }
                      text={
                        t.guides.piercing?.swimming?.text ||
                        "Avoid pools, hot tubs and lakes for the first 2–4 weeks."
                      }
                    />

                  </div>

                </div>


                {/* ================= HEALING ================= */}
                <div className="mt-12">

                  <h4 className="text-lg font-semibold uppercase">
                    {t.guides.piercing?.healingTitle ||
                      "Estimated Healing Times"}
                  </h4>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">

                    {[
                      ["Earlobe", "6–8 weeks"],
                      ["Cartilage", "3–9 months"],
                      ["Nostril", "3–6 months"],
                      ["Septum", "6–8 weeks"],
                      ["Navel", "6–12 months"],
                      ["Eyebrow", "6–8 weeks"],
                      ["Tongue", "4–8 weeks"],
                    ].map(([name, time]) => (
                      <div
                        key={name}
                        className="flex justify-between border-b border-white/10 py-3 text-sm"
                      >

                        <span className="text-gray-300">
                          {t.guides.piercing?.healing?.[name] || name}
                        </span>

                        <span className="text-[#c9a24d]">
                          {t.guides.piercing?.healingTimes?.[time] ||
                            time}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>
            )}


            {/* ================= SKIN TONE GUIDE ================= */}
            {activeGuide === "skintone" && (
              <div className="px-7 pb-10 sm:px-10 lg:px-14">

                <p className="text-sm uppercase tracking-[0.3em] text-[#c9a24d]">
                  {t.guides.skintone?.guideNumber || "Guide 03"}
                </p>

                <h3 className="mt-3 text-3xl font-bold uppercase sm:text-4xl">
                  {t.guides.skintone?.guideTitle ||
                    "Tattoo Colors Selection Guide Based On Skin Tone"}
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">
                  {t.guides.skintone?.guideDescription ||
                    "Skin tone can affect how tattoo colors appear. Contrast, color choice and undertones are important when planning a tattoo."}
                </p>


                <div className="mt-10 grid gap-5 md:grid-cols-3">

                  <SkinToneCard
                    title={
                      t.guides.skintone?.darker?.title ||
                      "Darker Skin"
                    }
                    subtitle={
                      t.guides.skintone?.darker?.subtitle ||
                      "Contrast is key"
                    }
                    text={
                      t.guides.skintone?.darker?.text ||
                      "Black, deep blues, dark reds and shades of green can work well. Bright colors such as yellows and oranges may be harder to see or may fade faster."
                    }
                  />

                  <SkinToneCard
                    title={
                      t.guides.skintone?.medium?.title ||
                      "Medium Skin"
                    }
                    subtitle={
                      t.guides.skintone?.medium?.subtitle ||
                      "Versatile"
                    }
                    text={
                      t.guides.skintone?.medium?.text ||
                      "Medium skin tones offer flexibility with color choices. A balanced combination of light and dark inks can create a striking design."
                    }
                  />

                  <SkinToneCard
                    title={
                      t.guides.skintone?.lighter?.title ||
                      "Lighter Skin"
                    }
                    subtitle={
                      t.guides.skintone?.lighter?.subtitle ||
                      "Vibrant colors"
                    }
                    text={
                      t.guides.skintone?.lighter?.text ||
                      "Lighter skin tends to display colors more vibrantly. Undertones and the potential for fading should still be considered."
                    }
                  />

                </div>


                <div className="mt-10 border border-[#c9a24d]/20 bg-[#c9a24d]/5 p-6">

                  <p className="text-sm font-semibold uppercase tracking-wider text-[#c9a24d]">
                    {t.guides.skintone?.talkToArtist?.title ||
                      "Talk to your artist"}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {t.guides.skintone?.talkToArtist?.text ||
                      "A skilled tattoo artist can assess your skin tone and recommend suitable colors and techniques. Consider whether your undertone is warm, cool or neutral."}
                  </p>

                </div>

              </div>
            )}


            {/* ================= TATTOO PAIN CHART ================= */}
            {activeGuide === "painchart" && (
              <div className="px-7 pb-10 sm:px-10 lg:px-14">

                <p className="text-sm uppercase tracking-[0.3em] text-[#c9a24d]">
                  {t.guides.painchart?.guideNumber || "Guide 04"}
                </p>

                <h3 className="mt-3 text-3xl font-bold uppercase text-white sm:text-4xl">
                  {t.guides.painchart?.title || "Tattoo Pain Chart"}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400">
                  {t.guides.painchart?.intro ||
                    "A visual guide to help you understand the different pain levels associated with common tattoo placement areas."}
                </p>


                {/* Pain Chart Image */}
                <div className="mt-8 flex justify-center overflow-hidden border border-white/10 bg-black">

                  <img
                    src="/images/guides/tattoo-pain-chart.png"
                    alt={
                      t.guides.painchart?.imageAlt ||
                      "Graffite Tattoo Studio Tattoo Pain Chart"
                    }
                    className="block h-auto w-full max-w-[900px]"
                  />

                </div>


                {/* Note */}
                <div className="mt-8 border border-[#c9a24d]/20 bg-[#c9a24d]/5 p-6">

                  <p className="text-sm font-semibold uppercase tracking-wider text-[#c9a24d]">
                    {t.guides.painchart?.keepInMind ||
                      "Keep In Mind"}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {t.guides.painchart?.note ||
                      "Pain tolerance varies from person to person. Stay hydrated, eat well, and take breaks when needed for the best tattoo experience."}
                  </p>

                </div>

              </div>
            )}

          </div>

        </div>
      )}
    </>
  );
}


function GuideStep({ number, title, text }) {
  return (
    <div className="border-l border-[#c9a24d] pl-5">

      <div className="flex items-center gap-3">

        <span className="text-xs tracking-[0.2em] text-[#c9a24d]">
          {number}
        </span>

        <h4 className="font-semibold uppercase tracking-wider text-white">
          {title}
        </h4>

      </div>

      <p className="mt-3 text-sm leading-7 text-gray-400">
        {text}
      </p>

    </div>
  );
}


function GuideInfo({ title, text }) {
  return (
    <div className="border border-white/10 bg-[#242424] p-5">

      <h5 className="text-sm font-semibold uppercase tracking-wider text-[#c9a24d]">
        {title}
      </h5>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {text}
      </p>

    </div>
  );
}


function SkinToneCard({ title, subtitle, text }) {
  return (
    <div className="border border-white/10 bg-[#242424] p-6">

      <div className="h-1 w-10 bg-[#c9a24d]" />

      <h4 className="mt-6 text-xl font-semibold uppercase text-white">
        {title}
      </h4>

      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#c9a24d]">
        {subtitle}
      </p>

      <p className="mt-5 text-sm leading-7 text-gray-400">
        {text}
      </p>

    </div>
  );

  const galleryImages = [
  {
    src: "/images/gallery/tattoo-01.jpg",
    alt: "Tattoo artwork at Graffite Tattoo Studio",
  },
  {
    src: "/images/gallery/tattoo-02.jpg",
    alt: "Tattoo artwork at Graffite Tattoo Studio",
  },
  {
    src: "/images/gallery/tattoo-03.jpg",
    alt: "Tattoo artwork at Graffite Tattoo Studio",
  },
  {
    src: "/images/gallery/tattoo-04.jpg",
    alt: "Tattoo artwork at Graffite Tattoo Studio",
  },
  {
    src: "/images/gallery/tattoo-05.jpg",
    alt: "Tattoo artwork at Graffite Tattoo Studio",
  },
  {
    src: "/images/gallery/tattoo-06.jpg",
    alt: "Tattoo artwork at Graffite Tattoo Studio",
  },
  {
    src: "/images/gallery/tattoo-07.jpg",
    alt: "Tattoo artwork at Graffite Tattoo Studio",
  },
  {
    src: "/images/gallery/tattoo-08.jpg",
    alt: "Tattoo artwork at Graffite Tattoo Studio",
  },
  {
    src: "/images/gallery/tattoo-09.jpg",
    alt: "Tattoo artwork at Graffite Tattoo Studio",
  },
  {
    src: "/images/gallery/tattoo-10.jpeg",
    alt: "Tattoo artwork at Graffite Tattoo Studio",
  },
  {
    src: "/images/gallery/tattoo-11.jpeg",
    alt: "Tattoo artwork at Graffite Tattoo Studio",
  },
  {
    src: "/images/gallery/tattoo-12.jpg",
    alt: "Tattoo artwork at Graffite Tattoo Studio",
  },
];
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [instagramLoading, setInstagramLoading] = useState(true);
  const [instagramError, setInstagramError] = useState(false);
const languages = ["English", "Hindi", "Marathi"];
  const t = translations[language] || translations.English;
  useEffect(() => {
  const fetchInstagramPosts = async () => {
    try {
      setInstagramLoading(true);
      setInstagramError(false);

     const response = await fetch("/api/instagram");

      if (!response.ok) {
        throw new Error("Failed to fetch Instagram posts");
      }

      const data = await response.json();

      setInstagramPosts(data.data || []);
    } catch (error) {
      console.error("Instagram fetch error:", error);
      setInstagramError(true);
    } finally {
      setInstagramLoading(false);
    }
  };

  fetchInstagramPosts();
}, []);

  return (
    <div className="min-h-screen bg-[#242424] text-white">


      {/* Fixed Contact Sidebar */}
      <ContactSidebar />

      {/* ================= HEADER ================= */}
<header className="fixed left-0 right-0 top-0 z-50">

  {/* ================= TOP CONTACT BAR ================= */}
<div className="border-b border-white/10 bg-[#111111]">
  <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6 lg:px-10">

    {/* Phone & Email */}
    <div className="flex items-center gap-8">

      {/* Phone */}
      <a
  href="tel:+919006289005"
  className="flex items-center gap-2 text-sm transition hover:text-[#c9a24d]"
>
  <span className="font-semibold uppercase tracking-wider text-[#c9a24d]">
    Call Us On
  </span>

  <span className="font-medium text-white">
    +91 9006289005
  </span>
</a>

      {/* Divider */}
      <span className="hidden h-5 w-px bg-white/10 sm:block" />

      {/* Email */}
      <a
        href="mailto:info@graffitetattoo.com"
        className="hidden items-center gap-2 text-sm transition hover:text-[#c9a24d] sm:flex"
      >
        <span className="font-semibold uppercase tracking-wider text-[#c9a24d]">
          Email
        </span>

        <span className="font-medium text-white">
          info@graffitetattoo.com
        </span>
      </a>

    </div>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/graffiti_tattoo_studio/"
      className="hidden text-sm font-medium uppercase tracking-wider text-gray-300 transition hover:text-[#c9a24d] sm:block"
    >
      Instagram ↗
    </a>

  </div>
</div>

  {/* ================= MAIN NAVBAR ================= */}
  <nav className="border-b border-white/10 bg-[#181818]/95 backdrop-blur-md">

    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

      {/* ================= LOGO ================= */}
      <a href="#home" className="group">

        <div className="text-xl font-bold tracking-[0.25em] text-white">
          GRAFFITI
        </div>

        <div className="mt-1 text-[9px] tracking-[0.45em] text-[#c9a24d]">
          TATTOO STUDIO
        </div>

      </a>


      {/* ================= DESKTOP NAVIGATION ================= */}
     <div className="hidden items-center gap-8 md:flex">

  <a
    href="#home"
    className="text-sm uppercase tracking-wider text-white transition hover:text-[#c9a24d]"
  >
    {t.nav.home}
  </a>

  <a
    href="#about"
    className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-[#c9a24d]"
  >
    {t.nav.about}
  </a>

  <a
    href="#gallery"
    className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-[#c9a24d]"
  >
    {t.nav.gallery}
  </a>

  <a
    href="#instagram"
    className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-[#c9a24d]"
  >
    {t.nav.instagram}
  </a>

  <a
    href="#guides"
    className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-[#c9a24d]"
  >
    {t.nav.guides}
  </a>

  <a
    href="#booking"
    className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-[#c9a24d]"
  >
    {t.nav.booking}
  </a>

  <a
    href="#contact"
    className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-[#c9a24d]"
  >
    {t.nav.contact}
  </a>



        {/* ================= LANGUAGE SELECTOR ================= */}
        <div className="relative">

          <button
            onClick={() => setLanguageOpen(!languageOpen)}
            className="flex items-center gap-2 text-sm text-gray-200 transition hover:text-[#c9a24d]"
          >
            {language}

            <ChevronDown
              size={15}
              className={`transition-transform ${
                languageOpen ? "rotate-180" : ""
              }`}
            />
          </button>


          {languageOpen && (
            <div className="absolute right-0 top-8 w-36 overflow-hidden rounded-md border border-white/10 bg-[#202020] shadow-xl">

              {languages.map((item) => (

                <button
                  key={item}
                  onClick={() => {
                    setLanguage(item);
                    setLanguageOpen(false);
                  }}
                  className={`block w-full px-4 py-3 text-left text-sm transition ${
                    language === item
                      ? "bg-[#c9a24d] text-black"
                      : "text-gray-300 hover:bg-[#c9a24d] hover:text-black"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>
          )}

        </div>

      </div>


      {/* ================= MOBILE MENU BUTTON ================= */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="text-white md:hidden"
  aria-label="Toggle navigation menu"
>
  {menuOpen ? (
    <X size={28} />
  ) : (
    <Menu size={28} />
  )}
</button>

</div>


{/* ================= MOBILE MENU ================= */}
{menuOpen && (

  <div className="border-t border-white/10 bg-[#181818] px-6 py-6 md:hidden">

    <div className="flex flex-col gap-5">

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-[#c9a24d]"
      >
        {t.nav.home}
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-[#c9a24d]"
      >
        {t.nav.about}
      </a>

      <a
        href="#gallery"
        onClick={() => setMenuOpen(false)}
        className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-[#c9a24d]"
      >
        {t.nav.gallery}
      </a>

      <a
        href="#instagram"
        onClick={() => setMenuOpen(false)}
        className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-[#c9a24d]"
      >
        {t.nav.instagram}
      </a>

      <a
        href="#guides"
        onClick={() => setMenuOpen(false)}
        className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-[#c9a24d]"
      >
        {t.nav.guides}
      </a>

      <a
        href="#booking"
        onClick={() => setMenuOpen(false)}
        className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-[#c9a24d]"
      >
        {t.nav.booking}
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-[#c9a24d]"
      >
        {t.nav.contact}
      </a>

    

          {/* ================= MOBILE CONTACT ================= */}
          <div className="mt-2 border-t border-white/10 pt-5">

            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#c9a24d]">
              Contact
            </p>

            <a
              href="tel:+919006289005"
              className="block text-sm text-gray-400 transition hover:text-[#c9a24d]"
            >
              +91 9006289005
            </a>

            <a
              href="mailto:info@graffitetattoo.com"
              className="mt-3 block text-sm text-gray-400 transition hover:text-[#c9a24d]"
            >
              info@graffitetattoo.com
            </a>

          </div>


          {/* ================= MOBILE LANGUAGE ================= */}
          <div className="border-t border-white/10 pt-5">

            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#c9a24d]">
              Language
            </p>

            <div className="flex gap-3">

              {languages.map((item) => (

                <button
                  key={item}
                  onClick={() => setLanguage(item)}
                  className={`border px-3 py-2 text-xs transition ${
                    language === item
                      ? "border-[#c9a24d] bg-[#c9a24d] text-black"
                      : "border-white/10 text-gray-400 hover:border-[#c9a24d] hover:text-[#c9a24d]"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

        </div>

      </div>

    )}

  </nav>

</header>

     {/* ================= HERO ================= */}
<section
  id="home"
  className="relative flex min-h-screen items-center overflow-hidden"
>

  {/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/hero/hero-bg.jpeg')",
  }}
/>

{/* Lighter Dark Overlay */}
<div className="absolute inset-0 bg-black/5" />

{/* Softer Gradient for Text Readability */}
<div className="absolute inset-0 bg-gradient-to-r from-[#181818]/75 via-[#181818]/35 to-transparent" />

  {/* Hero Content */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 lg:px-10">

    <div className="max-w-3xl animate-fade-in">

      {/* Subtitle */}
      <p className="mb-5 text-sm font-medium uppercase tracking-[0.4em] text-[#c9a24d]">
        {t.hero.subtitle}
      </p>


      {/* Heading */}
      <h1 className="text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
        {t.hero.title}
        <br />

        <span className="text-[#c9a24d]">
          {t.hero.titleHighlight}
        </span>
      </h1>


      {/* Description */}
      <p className="mt-7 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
        {t.hero.description}
      </p>


      {/* Buttons */}
      <div className="mt-9 flex flex-wrap gap-4">

        <a
          href="#booking"
          className="group flex items-center gap-3 rounded-sm bg-[#c9a24d] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-[#e0b85c]"
        >
          {t.hero.book}

          <MessageCircle
            size={18}
            className="transition-transform group-hover:scale-110"
          />
        </a>


        <a
          href="#gallery"
          className="rounded-sm border border-white/30 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-[#c9a24d] hover:text-[#c9a24d]"
        >
          {t.hero.gallery}
        </a>

      </div>

    </div>

  </div>


  {/* Bottom Features */}
  <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">

    <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">

      {[
        "Professional Artists",
        "Premium Hygiene",
        "Custom Designs",
        "Safe & Sterile",
      ].map((item) => (
        <div
          key={item}
          className="px-5 py-6 text-center text-xs font-medium uppercase tracking-wider text-gray-300"
        >
          {item}
        </div>
      ))}

    </div>

  </div>

</section>


{/* ================= ABOUT ================= */}
<section
  id="about"
  className="bg-[#1e1e1e] px-6 py-24 lg:px-10"
>

  <div className="mx-auto max-w-7xl">

    {/* Section Heading */}
    <div className="mb-16">

      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c9a24d]">
        {t.about.label}
      </p>

      <h2 className="max-w-3xl text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
        {t.about.title}
      </h2>

      <div className="mt-5 h-px w-16 bg-[#c9a24d]" />

    </div>


          {/* About Content */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Image */}
            <div className="group relative overflow-hidden">

                        <img
              src="/images/about/studio.jpeg"
              alt="Graffiti Tattoo Studio interior"
              className="h-full w-full object-cover"
            />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 border border-[#c9a24d]/50 bg-black/60 px-6 py-5 backdrop-blur-sm">

                <p className="text-3xl font-bold text-[#c9a24d]">
                  100%
                </p>

                <p className="mt-1 text-xs uppercase tracking-widest text-gray-300">
                  Custom Artwork
                </p>

              </div>

            </div>


           {/* Text */}
<div>

  <p className="text-lg leading-8 text-gray-300">
    {t.about.description}
  </p>

  <p className="mt-6 text-base leading-7 text-gray-400">
    {t.about.artistDescription}
  </p>


  {/* Features */}
  <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">

    <div className="border-l-2 border-[#c9a24d] pl-4">

      <h3 className="font-semibold uppercase tracking-wider">
        {t.about.experiencedArtists}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {t.about.experiencedArtistsText}
      </p>

    </div>


    <div className="border-l-2 border-[#c9a24d] pl-4">

      <h3 className="font-semibold uppercase tracking-wider">
        {t.about.premiumHygiene}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {t.about.premiumHygieneText}
      </p>

    </div>


    <div className="border-l-2 border-[#c9a24d] pl-4">

      <h3 className="font-semibold uppercase tracking-wider">
        {t.about.customDesigns}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {t.about.customDesignsText}
      </p>

    </div>


    <div className="border-l-2 border-[#c9a24d] pl-4">

      <h3 className="font-semibold uppercase tracking-wider">
        {t.about.clientFocused}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {t.about.clientFocusedText}
      </p>

    </div>

  </div>


  {/* CTA */}
  <div className="mt-10">

    <a
      href="#booking"
      className="inline-flex items-center gap-3 border border-[#c9a24d] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-[#c9a24d] transition hover:bg-[#c9a24d] hover:text-black"
    >
      {t.about.startTattoo}
      <span>→</span>
    </a>

  </div>

</div>

</div>
</div>

</section>

     {/* ================= FEATURED WORK ================= */}
<section
  id="gallery"
  className="bg-[#242424] px-6 py-24 lg:px-10"
>
  <div className="mx-auto max-w-7xl">

    {/* Section Header */}
    <div className="mb-14 text-center">

      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c9a24d]">
        {t.gallery.label}
      </p>

      <h2 className="text-4xl font-bold uppercase sm:text-5xl">
        {t.gallery.title}
      </h2>

      <div className="mx-auto mt-5 h-px w-16 bg-[#c9a24d]" />

    </div>

    {/* ================= FEATURED 4 IMAGES ================= */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {[
        "/images/gallery/tattoo-01.jpg",
        "/images/gallery/tattoo-02.jpg",
        "/images/gallery/tattoo-03.jpg",
        "/images/gallery/tattoo-04.jpg",
      ].map((image, index) => (

        <div
          key={image}
          className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-[#1e1e1e]"
        >

          {/* Image */}
          <img
            src={image}
            alt={`Tattoo artwork ${index + 1} at Graffite Tattoo Studio`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />


          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />


          {/* Image Info */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">

            <p className="text-sm font-medium uppercase tracking-wider text-white">
              Tattoo Artwork
            </p>

            <span className="text-xs tracking-[0.2em] text-[#c9a24d]">
              {String(index + 1).padStart(2, "0")}
            </span>

          </div>

        </div>

      ))}

    </div>


    {/* ================= VIEW FULL GALLERY ================= */}
    <div className="mt-12 text-center">

      <button
        type="button"
        onClick={() => setGalleryOpen(true)}
        className="inline-flex items-center gap-3 border border-[#c9a24d] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-[#c9a24d] transition duration-300 hover:bg-[#c9a24d] hover:text-black"
      >
        View Full Gallery
        <span className="text-base">↗</span>
      </button>

    </div>

  </div>


  {/* ================= FULL GALLERY MODAL ================= */}
  {galleryOpen && (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#111111]/98 px-6 py-10 backdrop-blur-md">

      <div className="mx-auto max-w-7xl">

        {/* Modal Header */}
        <div className="mb-10 flex items-center justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-[#c9a24d]">
              Graffiti Tattoo Studio
            </p>

            <h3 className="mt-2 text-3xl font-bold uppercase sm:text-4xl">
              Full Gallery
            </h3>

          </div>


          {/* Close */}
          <button
            type="button"
            onClick={() => setGalleryOpen(false)}
            className="flex h-12 w-12 items-center justify-center border border-white/10 text-gray-300 transition hover:border-[#c9a24d] hover:text-[#c9a24d]"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

        </div>


        {/* ================= ALL 12 IMAGES ================= */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            "/images/gallery/tattoo-01.jpg",
            "/images/gallery/tattoo-02.jpg",
            "/images/gallery/tattoo-03.jpg",
            "/images/gallery/tattoo-04.jpg",
            "/images/gallery/tattoo-05.jpg",
            "/images/gallery/tattoo-06.jpg",
            "/images/gallery/tattoo-07.jpg",
            "/images/gallery/tattoo-08.jpg",
            "/images/gallery/tattoo-09.jpg",
            "/images/gallery/tattoo-10.jpeg",
            "/images/gallery/tattoo-11.jpeg",
            "/images/gallery/tattoo-12.jpg",
          ].map((image, index) => (

            <div
              key={image}
              className="group relative aspect-[3/4] overflow-hidden bg-[#1e1e1e]"
            >

              <img
                src={image}
                alt={`Tattoo artwork ${index + 1} at Graffite Tattoo Studio`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Number */}
              <div className="absolute bottom-4 left-4">
                <span className="text-xs tracking-[0.2em] text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )}

</section>      {/* ================= INSTAGRAM ================= */}
      <InstagramSection
  instagramPosts={instagramPosts}
  instagramLoading={instagramLoading}
  instagramError={instagramError}
/>
{/* ================= GOOGLE REVIEWS ================= */}
<section
  id="reviews"
  className="bg-[#1e1e1e] px-6 py-24 lg:px-10"
>
  <div className="mx-auto max-w-7xl">

    <div className="mb-14 text-center">

      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c9a24d]">
        {t.reviews.label}
      </p>

      <h2 className="text-4xl font-bold uppercase sm:text-5xl">
        {t.reviews.title}
      </h2>

      <div className="mt-6 flex items-center justify-center gap-3">
        <span className="text-xl tracking-widest text-[#c9a24d]">
          ★★★★★
        </span>

        <span className="text-sm text-gray-400">
          4.9 / 5 · Google Reviews
        </span>
      </div>

    </div>


    {/* ================= REVIEW CARDS ================= */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {googleReviews.map((review, index) => (
        <div
          key={index}
          className="group flex min-h-[360px] flex-col border border-white/10 bg-[#242424] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c9a24d]/40"
        >

          {/* Google */}
          <div className="flex items-center justify-between">

            <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
              Google
            </span>

            <span className="text-lg tracking-widest text-[#c9a24d]">
              ★★★★★
            </span>

          </div>


          {/* Review */}
          <p className="mt-7 flex-1 text-sm leading-7 text-gray-400">
            "{review.text}"
          </p>


          {/* Reviewer */}
          <div className="mt-6 border-t border-white/10 pt-5">

            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              {review.name}
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-600">
              Verified Google Review
            </p>

          </div>

        </div>
      ))}

    </div>

    <div className="mt-12 text-center">

      <a
       href="https://share.google/T9nii1KbQr856Oea4"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 border border-[#c9a24d] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#c9a24d] transition hover:bg-[#c9a24d] hover:text-black"
      >
        View All Google Reviews
        <span>↗</span>
      </a>

    </div>

  </div>
</section>
      {/* ================= GUIDES ================= */}
     <GuidesSection t={t} />

     {/* ================= BOOKING ================= */}
      <BookingSection />


  {/* ================= CONTACT ================= */}
<section
  id="contact"
  className="bg-[#242424] px-6 py-24 lg:px-10"
>
  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="mb-14">

      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c9a24d]">
        {t.contact.label}
      </p>

      <h2 className="max-w-3xl text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
        {t.contact.title}
      </h2>

      <p className="mt-6 max-w-xl text-gray-400">
        {t.contact.description}
      </p>

    </div>
    {/* Contact Grid */}
<div className="grid overflow-hidden border border-white/10 bg-[#1b1b1b] lg:grid-cols-2">

  {/* ================= CONTACT DETAILS ================= */}
  <div className="p-8 sm:p-10 lg:p-14">

    <div className="space-y-9">

      {/* Address */}
      <div className="border-b border-white/10 pb-8">

        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c9a24d]">
          {t.contact.studio}
        </p>

        <h3 className="text-lg font-semibold uppercase">
          Graffiti Tattoo Studio
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-gray-400">
          Shop No. 102, 1st Floor,
          <br />
          Xion Mall Complex, Hinjewadi–Wakad Road,
          <br />
          Hinjawadi, Pune, Maharashtra 411057
        </p>

      </div>


      {/* WhatsApp */}
      <div className="border-b border-white/10 pb-8">

        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c9a24d]">
          WhatsApp
        </p>

        <a
          href="#booking"
          className="text-lg font-medium text-white transition hover:text-[#c9a24d]"
        >
          {t.contact.whatsapp} →
        </a>

        <p className="mt-2 text-sm text-gray-500">
          {t.contact.whatsappDescription}
        </p>

      </div>


     {/* Opening Hours */}
<div className="border-b border-white/10 pb-8">

  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c9a24d]">
    Opening Hours
  </p>

  <div className="flex items-center justify-between gap-6 text-sm text-gray-400">

    <span className="whitespace-nowrap">
      Monday – Sunday
    </span>

    <span className="whitespace-nowrap">
      10:00 AM – 10:00 PM
    </span>

  </div>

</div>

      {/* Instagram */}
      <div>

        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c9a24d]">
          Instagram
        </p>

        <a
          href="https://www.instagram.com/graffiti_tattoo_studio/"
          className="text-lg font-medium text-white transition hover:text-[#c9a24d]"
        >
          @graffitetattoo →
        </a>

      </div>

    </div>


    {/* CTA */}
    <div className="mt-12">

      <a
        href="#booking"
        className="inline-flex items-center gap-3 bg-[#c9a24d] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-[#e0b85c]"
      >
        {t.contact.bookAppointment}
        <span>→</span>
      </a>

    </div>

  </div>
   {/* ================= GOOGLE MAP ================= */}
<div className="relative min-h-[450px] overflow-hidden bg-[#151515]">

  <iframe
    title="Graffite Tattoo Studio Location"
    src="https://www.google.com/maps?q=Graffite+Tattoo+Studio,+Xion+Mall,+Hinjawadi,+Pune&output=embed"
    width="100%"
    height="100%"
    style={{
      border: 0,
      position: "absolute",
      inset: 0,
    }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  />

</div>

</div>


{/* ================= BOTTOM DIRECTIONS ================= */}
<div className="mt-8 text-center">

  <a
    href="https://www.google.com/maps/search/?api=1&query=Graffite+Tattoo+Studio,+Xion+Mall,+Hinjawadi,+Pune"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 border border-white/20 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-gray-300 transition hover:border-[#c9a24d] hover:text-[#c9a24d]"
  >
    Get Directions
    <span>↗</span>
  </a>

</div>

</div>
</section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 bg-[#151515] px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">

          <div>

            <div className="font-bold tracking-[0.2em]">
              GRAFFITI
            </div>

            <p className="mt-1 text-xs tracking-wider text-[#c9a24d]">
              TATTOO STUDIO
            </p>

          </div>


          <a
            href="#"
            className="text-gray-400 transition hover:text-[#c9a24d]"
          >
            <span className="text-lg font-bold">
              IG
            </span>
          </a>


          <p className="text-xs text-gray-500">
            © 2026 Graffiti Tattoo Studio
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;