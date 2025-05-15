import { useState } from "react";

// Define interfaces for props
interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}

// Reusable InputField component
function InputField({ label, type, value, onChange, placeholder, required }: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-md font-medium mb-2 text-center">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

// Reusable TextAreaField component
function TextAreaField({ label, value, onChange, placeholder, rows, required }: TextAreaFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-md font-medium mb-2">{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
        placeholder={placeholder}
        rows={rows}
        required={required}
      ></textarea>
    </div>
  );
}

// ContactForm component
function ContactForm({ onSubmit }: { onSubmit: (e: React.FormEvent) => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-5 w-full max-w-lg">
      <InputField
        label="Name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        required
      />
      <InputField
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />
      <TextAreaField
        label="Message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Enter your message"
        rows={4}
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Send Message
      </button>
    </form>
  );
}

// Main ContactPage component
export default function ContactPage() {
  const [isEditLinksVisible, setEditLinksVisible] = useState(false);
  const [socialLinks, setSocialLinks] = useState({
    twitter: "https://twitter.com/yourprofile",
    instagram: "https://instagram.com/yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
    facebook: "https://facebook.com/yourprofile",
    youtube: "https://youtube.com/yourchannel",
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for submitting the contact form
  };

  const handleEditLinks = (e: React.FormEvent) => {
    e.preventDefault();
    setEditLinksVisible(false);
  };

  const toggleEditLinksVisibility = () => {
    setEditLinksVisible((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] text-[var(--text-light)] dark:text-[var(--text-dark)] p-8">
      <h2 className="text-5xl font-extrabold mb-10 text-center">Contact Me</h2>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        {/* Contact Form Section */}
        <section className="card max-w-[56vw] flex-shrink-0 text-center">
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
          <p className="text-md">
            Feel free to reach out to me for collaborations, inquiries, or just to say hello! I look forward to hearing from you.
          </p>
          <ContactForm onSubmit={handleCreate} />
        </section>

        {/* Social Links Section */}
        <section className="card max-w-[56vw] flex-shrink-0">
          <h3 className="text-3xl font-bold mb-4">Follow Me</h3>
          <ul className="space-y-4">
            {Object.entries(socialLinks).map(([key, link]) => (
              <li key={key}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline ${key === "twitter"
                      ? "text-blue-400"
                      : key === "instagram"
                        ? "text-pink-400"
                        : key === "linkedin"
                          ? "text-blue-600"
                          : key === "facebook"
                            ? "text-blue-500"
                            : "text-red-500"
                    }`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleEditLinksVisibility}
            className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500"
          >
            {isEditLinksVisible ? "Cancel Edit" : "Edit Links"}
          </button>
          {isEditLinksVisible && (
            <form onSubmit={handleEditLinks} className="mt-4">
              {Object.entries(socialLinks).map(([key, value]) => (
                <InputField
                  key={key}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  type="url"
                  value={value}
                  onChange={(e) =>
                    setSocialLinks((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                  required
                />
              ))}
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Save Links
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
