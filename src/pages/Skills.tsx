import { Code, Server, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      iconBg: "bg-primary",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Next.js", level: 85 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconBg: "bg-green-500",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconBg: "bg-secondary",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Docker", level: 82 },
        { name: "AWS", level: 78 },
        { name: "Figma", level: 75 }
      ]
    }
  ];

  const getColorForCategory = (index: number) => {
    switch (index) {
      case 0: return "bg-primary";
      case 1: return "bg-green-500";
      case 2: return "bg-secondary";
      default: return "bg-primary";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className={`${category.bgColor} p-8 rounded-xl border border-opacity-20`}>
                <div className="text-center mb-6">
                  <div className={`${category.iconBg} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`${getColorForCategory(categoryIndex)} h-2 rounded-full skill-progress-bar`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
