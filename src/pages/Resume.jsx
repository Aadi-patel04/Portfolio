import React from 'react'

function Resume() {
  return (
    <div className="bg-yellow-50 min-h-screen relative pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
          <div>
            <h1 className="text-3xl font-extrabold">Aditya Patel</h1>
            <p className="text-gray-600 mt-1">Alpha 1, Greater Noida</p>
            <p className="text-gray-600">+91-8299113966 • aadipatel0042@gmail.com</p>
            <p className="text-gray-600">LinkedIn • GitHub • LeetCode</p>
          </div>
          <a href="/resume%20(2).pdf" download className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Download Resume
          </a>
        </header>

        {/* Summary */}
        <section className="bg-white p-6 rounded shadow mt-6">
          <h2 className="text-xl font-bold mb-2">Summary</h2>
          <p className="text-gray-700">
            Full-stack developer with experience in React, Next.js, Node.js, and MongoDB. Skilled in building
            RESTful APIs, implementing authentication and authorization, database design, and scalable web
            applications.
          </p>
        </section>

        {/* Education */}
        <section className="mt-6">
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Galgotias College Of Engineering and Technology</h3>
            <p className="text-gray-600">B.Tech - Computer Science and Engineering — 2022-2026</p>
            <p className="text-gray-600 mt-1">CGPA: 7.9 • Greater Noida</p>
          </div>
        </section>

        {/* Experience */}
        <section className="mt-6">
          <h2 className="text-xl font-bold mb-2">Experience</h2>

          <div className="bg-white p-6 rounded shadow mb-4">
            <h3 className="font-semibold">Full Stack Software Developer Intern — Vocman</h3>
            <p className="text-gray-600">Vikas Puri, New Delhi • Oct 2025 – Dec 2025</p>
            <ul className="list-disc list-inside mt-3 text-gray-700">
              <li>Designed and implemented core features using advanced data structures and algorithms (Graphs, Segment Trees, DP).</li>
              <li>Delivered multiple feature modules on time while ensuring code quality and correctness.</li>
              <li>Implemented secure authentication, search functionality, and a voting-based ranking system.</li>
              <li>Optimized backend DB operations and built responsive frontend components with React and CSS.</li>
              <li>Collaborated with cross-functional teams using version control and code reviews.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Frontend Developer — GLB Hackathon 3.0</h3>
            <p className="text-gray-600">Greater Noida • 2023</p>
            <ul className="list-disc list-inside mt-3 text-gray-700">
              <li>Finalist (Top 25/250+). Built a problem-solving application under time constraints.</li>
              <li>Handled frontend, APIs, and data handling; demonstrated rapid prototyping and teamwork.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-6">
          <h2 className="text-xl font-bold mb-2">Projects</h2>

          <div className="bg-white p-6 rounded shadow mb-4">
            <h3 className="font-semibold">Foodie-Feed</h3>
            <p className="text-gray-600">React, Node.js, Express, MongoDB • Jan 2025 - Apr 2025</p>
            <ul className="list-disc list-inside mt-3 text-gray-700">
              <li>Built a full-stack social platform for food content with responsive React UI.</li>
              <li>Implemented RESTful APIs with Node.js/Express and persisted data in MongoDB.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">AI Finance Platform</h3>
            <p className="text-gray-600">Next.js, Tailwind, Prisma, Supabase, AI APIs • Oct 2025 - Dec 2025</p>
            <ul className="list-disc list-inside mt-3 text-gray-700">
              <li>Built AI-powered finance platform with receipt scanning and automatic categorization.</li>
              <li>Used Clerk for auth, Prisma + Supabase for data, and Inngest for background workflows.</li>
            </ul>
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-2">Technical Skills</h3>
            <p className="text-gray-700">Languages: Java, JavaScript, Python, SQL</p>
            <p className="text-gray-700">Frameworks/Tools: React, Next.js, Node.js, Express, MongoDB, Tailwind, Bootstrap</p>
            <p className="text-gray-700">Developer Tools: Inngest, Clerk, Supabase, Prisma, MongoDB Compass, IntelliJ IDEA</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-2">Concepts</h3>
            <p className="text-gray-700">REST APIs, Authentication, Authorization, CRUD, MVC Architecture</p>
            <h3 className="font-semibold mt-4 mb-2">Extracurricular</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Taught basic Java/DSA in offline mode.</li>
              <li>Member - Extreme Technical Group (2023 - Present).</li>
            </ul>
          </div>
        </section>

        <div className="mt-8 text-center text-gray-600">Contact: aadipatel0042@gmail.com • +91-8299113966</div>
      </div>
    </div>
  )
}

export default Resume
