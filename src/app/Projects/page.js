import React from 'react'

const projects = [
  {
    title: "figma clone",
    description:
      "A full-stack e-commerce app with cart, filters and payment integration.",
    image: "/images/project-1.png",
    link: "https://figma-smoky-eight.vercel.app",
  },
  {
    title: "Movie App",
    description: "Personal portfolio built using Next.js and Tailwind CSS.",
    image: "/images/project-2.png",
    link: "https://movie-app-seven-tau-54.vercel.app",
  },
  {
    title: "Weather App",
    description: "Weather forecast app using OpenWeatherMap API.",
    image: "/images/project-3.png",
    link: "https://weather-app-three-chi-19.vercel.app",
  },
  {
    title: "Mini E-Commerce",
    description: "Weather forecast app using OpenWeatherMap API.",
    image: "/images/project-4.png",
    link: "https://mini-ecomes.vercel.app",
  },

  {
    title: "Portfolio Website",
    description: "Personal portfolio built using Next.js and Tailwind CSS.",
    image: "/images/portfolio.png",
    link: "https://portfolio-lovat-omega-crtqkjv8wm.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div>
      <section className="bg-[#a6b7e2] py-5">
          <div className="max-w-[1320px] mx-auto text-center">
            <h1 className="text-4xl font-bold">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 px-5">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}
