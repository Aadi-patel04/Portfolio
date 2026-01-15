import React from 'react'

function Projects() {
  return (
    <div className="bg-yellow-50 min-h-screen relative pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className='flex items-center gap-3 mt-8'>
          <div className="w-5 h-5 bg-blue-500" />
          <h1 className="text-3xl font-bold">Projects</h1>
        </div>

        <p className="text-gray-700 mt-6">
          A selection of projects demonstrating full-stack and AI-powered web applications.
          Implementations emphasize performance, clean architecture, and user experience.
        </p>

        {/* Project: Foodie-Feed */}
        <div className="bg-white p-6 rounded shadow mt-8">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold">Foodie-Feed</h2>
              <p className="text-sm text-gray-600">React, Node.js, Express, MongoDB • Jan 2025 - Apr 2025</p>
            </div>
            <div className="text-right">
              <a href="#" className="text-blue-600 hover:underline">Repo</a>
            </div>
          </div>
          <p className="text-gray-700 mt-3">
            Built a full-stack, food-focused social platform where users can explore, post, and interact with
            food content. Focused on responsive UI, efficient API design, and scalable data modeling.
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Implemented responsive React components and optimized client-side rendering.</li>
            <li>Built RESTful APIs using Node.js and Express to handle users, posts, and interactions.</li>
            <li>Integrated MongoDB for data storage with efficient indexing for search and feeds.</li>
          </ul>
        </div>

        {/* Project: AI Finance Platform */}
        <div className="bg-white p-6 rounded shadow mt-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold">AI Finance Platform</h2>
              <p className="text-sm text-gray-600">Next.js, Tailwind, Prisma, Supabase, AI APIs • Oct 2025 - Dec 2025</p>
            </div>
            <div className="text-right">
              <a href="#" className="text-blue-600 hover:underline">Demo</a>
            </div>
          </div>
          <p className="text-gray-700 mt-3">
            AI-powered financial management application with receipt scanning, automated transaction
            categorization, multi-account tracking, and interactive dashboards.
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Integrated LLM APIs for receipt OCR and transaction categorization.</li>
            <li>Used Clerk for secure authentication, Prisma + Supabase for data modeling and storage.</li>
            <li>Implemented background workflows with Inngest for recurring transactions and alerts.</li>
          </ul>
        </div>

        {/* CTA / More projects */}
        <div className="mt-8 text-center text-gray-600">
          More projects and details available on request or via my GitHub profile.
        </div>
      </div>
    </div>
  )
}

export default Projects
