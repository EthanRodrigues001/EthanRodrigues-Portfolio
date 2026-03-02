import React from 'react'

const SkillBadge = ({ skill }: { skill: { name: string; icon: React.ElementType } }) => {
    const Icon = skill.icon;
    return (
        <div
            className="
        flex items-center gap-1.5
        px-2.5 py-1.5
        rounded-md
        bg-neutral-100 dark:bg-neutral-800/80
        border border-neutral-200 dark:border-neutral-700/50
        hover:border-neutral-300 dark:hover:border-neutral-600
        transition-colors cursor-default
      "
        >
            <Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-200">
                {skill.name}
            </span>
        </div>
    )
}

export default SkillBadge
