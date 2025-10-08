import React from "react";

export default function Contact() {
  return (
    <div className="pt-24 text-center bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">
        I'd love to connect with you! Whether you’re looking to collaborate,
        have a project in mind, or just want to say hello — feel free to reach out.
      </p>

      <div className="flex flex-col items-center space-y-4">
        <a
          href="mailto:maya.nelson@example.com"
          className="text-blue-600 font-semibold underline hover:text-blue-800"
        >
          maya.nelson@example.com
        </a>

        <p className="text-gray-600">
          📍 Based in: New York, USA
        </p>

        <a
          href="https://www.linkedin.com/in/maya-nelson"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  );
}
