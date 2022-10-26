import Link from "next/link"
import React from "react"

type Props = {}

export default function Articles({}: Props) {
  const articles = [
    {
      id: 1,
      name: "React Components Overview.",
      link: "https://espiramarvin.hashnode.dev/react-components",
    },
    {
      id: 2,
      name: "Quasar Vuejs Google authentication with firebase.",
      link: "https://www.section.io/engineering-education/quasar-googleauth-with-firebase",
    },
    {
      id: 3,
      name: "Getting started with Quasar cross-platform Framework for Vuejs.",
      link: "https://www.section.io/engineering-education/getting-started-with-quasar-framework",
    },
    {
      id: 4,
      name: "Vuejs CRUD application with localstorage.",
      link: "https://www.section.io/engineering-education/vue2-crud-app-with-localstorage",
    },
    {
      id: 5,
      name: "Vuejs V-model support without the need for value prop.",
      link: "https://espiramarvin.hashnode.dev/vuejs-v-model-support-without-need-for-value-prop",
    },
  ]

  return (
    <div className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl">
        Articles
      </h3>
      <div className="absolute text-sm text-center text-gray-500 top-36">
        Some articles I have written.
      </div>
      <div className="flex flex-col items-start justify-center h-screen px-4 overflow-hidden">
        {articles.map((article) => (
          <div
            className="flex items-center italic border-b border-white hover:border-b-blue-300 h-14 md:h-14 md:tracking-wide shadow-3xl"
            key={article.id}
          >
            <div className="hover:text-blue-300 ">
              <Link href={article.link}>
                <a target="_blank">{article.name}</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
