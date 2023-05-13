import React from "@heroicons/react";

export default function SkillList({
  skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
}) {
  return (
    <ul class="overflow-x-auto px-2 text-xs sm:text-sm flex space-x-3">
      {skills.map((skill) => (
        <li class="rounded-full flex-none bg-gray-700 p-1.5 text-xs uppercase text-gray-300 hover:bg-red-400 hover:text-white hover:tracking-widest">
          {skill}
        </li>
      ))}
    </ul>
  );
}
