import React from 'react'

export default function SkillsBelt({ i, skill }) {
  return (
    <div
            className="min-w-[8rem] max-w-[16rem] mb-2 flex flex-col items-center hover:scale-110 duration-300"
            key={i}
          >
            <div
              // style={{
              //   background: `conic-gradient(${skill.mainColor} ${skill.level}%, transparent ${skill.level}%)`,
              // }} Opção com círculo evolução
              className="w-20 aspect-square flex items-center justify-center rounded-full"
            >
              <div className="text-6xl w-16 aspect-square bg-light-100 dark:bg-dark-100 rounded-full flex items-center justify-center duration-300">
                <img
                  src={skill.src}
                  alt={skill.name}
                  title={skill.name}
                  className="w-10"
                />
              </div>
            </div>
            <span className="text-xl mt-1 text-gray-800 dark:text-gray-100">
              {skill.name}
            </span>
          </div>
  )
}
