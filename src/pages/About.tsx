export default function About() {
  const timeline = [
    {
      title: "Senior Developer @ TechCorp",
      period: "2021 - Present",
      description: "Leading development of enterprise applications",
      color: "bg-primary"
    },
    {
      title: "Full Stack Developer @ StartupXYZ",
      period: "2019 - 2021",
      description: "Built scalable web applications from scratch",
      color: "bg-secondary"
    },
    {
      title: "CS Degree @ University",
      period: "2015 - 2019",
      description: "Computer Science with focus on Software Engineering",
      color: "bg-accent"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with a love for creating digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
              alt="Alex Johnson in professional setting" 
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Hi, I'm Alex Johnson</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with over 5 years of experience creating 
              exceptional web applications. My journey started with a Computer Science degree 
              and has evolved through working with startups and established companies.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I specialize in React, Node.js, and modern web technologies. When I'm not coding, 
              you'll find me exploring new technologies, contributing to open source, or 
              hiking in the mountains.
            </p>

            {/* Timeline */}
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-4 h-4 ${item.color} rounded-full mt-2`}></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-1">{item.period}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
