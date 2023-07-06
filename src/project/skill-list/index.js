import React from "@heroicons/react";
import { useSearchParams } from "react-router-dom";
import { PATHS } from "../../utils/constants";

export default function SkillList({
  skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
}) {
  const queryKey = PATHS.FILTER_KEY;
  const [params, setParams] = useSearchParams();
  return (
    <ul class="overflow-x-auto px-2 text-xs sm:text-sm flex space-x-3">
      {skills.map((skill) => (
        <li>
          <button
            value={skill.toLowerCase()}
            class="rounded-full flex-none bg-gray-700 p-1.5 text-xs uppercase text-gray-300 hover:bg-red-400 hover:text-white hover:tracking-widest"
            onClick={(e) => setParams({ [queryKey]: e.target.value })}>
            {skill}
          </button>
        </li>
      ))}
    </ul>
  );
}
