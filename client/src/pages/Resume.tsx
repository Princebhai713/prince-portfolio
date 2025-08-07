import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

export default function Resume() {
  const handleDownloadResume = () => {
    // In a real application, this would link to an actual PDF file
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Alex_Johnson_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2021 - Present",
      responsibilities: [
        "Led development of enterprise web applications serving 10,000+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and established coding standards"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2019 - 2021",
      responsibilities: [
        "Built scalable web applications from concept to production",
        "Integrated third-party APIs and payment gateways",
        "Optimized application performance resulting in 40% faster load times"
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      bgColor: "bg-blue-50 border-blue-200"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2022",
      bgColor: "bg-green-50 border-green-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-xl text-gray-600 mb-8">
            Download my complete resume or view my experience below.
          </p>
          <Button 
            onClick={handleDownloadResume}
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF Resume
          </Button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Experience Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-bold text-gray-900">{job.title}</h4>
                  <p className="text-primary font-medium mb-2">{job.company} • {job.period}</p>
                  <ul className="text-gray-600 space-y-1">
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>• {responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Education
            </h3>
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-xl font-bold text-gray-900">Bachelor of Computer Science</h4>
              <p className="text-green-500 font-medium mb-2">State University • 2015 - 2019</p>
              <p className="text-gray-600">Graduated Magna Cum Laude with focus on Software Engineering and Web Development</p>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-6 h-6 mr-3 text-primary" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className={`p-4 rounded-lg border ${cert.bgColor}`}>
                  <h4 className="font-bold text-gray-900">{cert.title}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
