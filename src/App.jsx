import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Calendar, MapPin, Briefcase, GraduationCap, Code, Lightbulb } from 'lucide-react';

// Main App Component
const App = () => {
  // Dummy data for the portfolio sections
  const sections = {
    about: {
      title: "About Me",
      content: "Hi there! I'm Heng Thirith, a passionate Full Stack Developer with 2+ years of experience building and deploying scalable web applications. I love transforming ideas into robust solutions and am always eager to learn new technologies. My expertise lies in creating dynamic user experiences and efficient backend systems.",
    },
    experience: {
      title: "Experience",
      items: [
        {
          title: "Junior Full Stack Developer",
          company: "Self Company",
          duration: "Jun 25 - Present",
          location: "cambodia Tuek Thla, Saensokh, Phnom Penh",
          description: [
            "I use to crate selling closthing",
            "Website High School",
            "Website News",
          ],
        },
        {
          title: "Computer Networking",
          company: "Basic course ( Mikrotik Router Switch )",
          duration: "Jan 2024 - May 2024",
          location: "cambodia Tuek Thla, Saensokh, Phnom Penh",
          description: [
            "Mikrotik",
            "Hotspot PPPoE Voucher LAN,VLAN",
            "Mainternent at school 8 month",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Associate's degree in Computer Science",
          university: "Industrial Technical Institute ",
          duration: "Jan 2023 - November 2025",
          location: "cambodia Tuek Thla, Saensokh, Phnom Penh",
        },
        {
          degree: "Course Computer Networking",
          university: "Industrial Technical Institute ",
          duration: "Jan 2024 - May 2024",
          location: "cambodia Tuek Thla, Saensokh, Phnom Penh",
        },
      ],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Programming Languages",
          items: ["JavaScript", "TypeScript", "Java"],
        },
        {
          name: "Frontend Development",
          items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
        },
        {
          name: "Backend Development",
          items: ["Node.js", "Express.js",],
        },
        {
          name: "Databases",
          items: ["MongoDB", "MySQL", "Firebase Firestore", ],
        },
        {
          name: "Tools & Platforms",
          items: ["Docker", "AWS", "Google Cloud", "Git", "Figma", "VS Code"],
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        // {
        //   title: "E-commerce Platform",
        //   description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment gateway integration.",
        //   techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        //   link: "https://github.com/johndoe/ecommerce-platform",
        // },
        {
          title: "Website High Schoool",
          description: "It is eazy for studeny or self study",
          techStack: ["ReactJS", "TailwindCSS"],
          link: "https://mykhmernews.site",
        },
        {
          title: "Selling Clothsing",
          description: "A collaborative Selling Clothsing lication with real-time updates, drag-and-drop functionality, and user roles.",
          techStack: ["ReactJS", "TypeScript","Tailwind CSS","Firebase", ],
          link: "https://selling-clothes.vercel.app/",
        },
      ],
    },
    contact: {
      title: "Contact",
      items: [
        { icon: <Mail size={20} />, text: "hengthirith@gmail.com"},
        { icon: <Phone size={20} />, text: "+855 069297337", },
        { icon: <Linkedin size={20} />, text: "https://www.linkedin.com/in/thirith-heng-022319355/", link: "https://www.linkedin.com/in/thirith-heng-022319355/" },
        { icon: <Github size={20} />, text: "https://github.com/JAVERSSER", link: "https://github.com/JAVERSSER" },
      ],
    },
  };

  // Reusable Card Component with the animated gradient hover effect
  const AnimatedCard = ({ children }) => {
    return (
      <div className="relative overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm shadow-xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 animate-gradient-shift rounded-xl"
               style={{
                 backgroundSize: '200% 200%',
                 animationDelay: '100ms' // Subtle delay for more dynamic look
               }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500 via-blue-500 to-green-500 animate-gradient-shift-reverse rounded-xl"
               style={{
                 backgroundSize: '200% 200%',
                 animationDelay: '200ms' // Subtle delay for more dynamic look
               }}
          ></div>
        </div>

        {/* Content wrapper to ensure it's above the gradient */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  };

  // Section component for consistency
  const Section = ({ id, title, children }) => (
    <section id={id} className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center relative pb-4">
        {title}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
      </h2>
      {children}
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800 font-inter">
      {/* Tailwind CSS custom keyframes for gradient animation */}
      <style>
        {`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradient-shift-reverse {
          0% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 6s ease infinite;
        }
        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 6s ease infinite;
        }
        html {
          scroll-behavior: smooth;
        }
        `}
      </style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm py-4">
        <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Heng Thirith</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#about" className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium">About</a>
            <a href="#experience" className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium">Experience</a>
            <a href="#education" className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium">Education</a>
            <a href="#skills" className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium">Contact</a>
          </div>
          {/* Mobile menu button could go here */}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 opacity-60 animate-gradient-shift"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tigaht mb-4 animate-fade-in-up">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Heng Thirith</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            A passionate Full Stack Developer building beautiful and functional web applications.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            View My Work
            <ExternalLink size={20} className="ml-2" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title={sections.about.title}>
        <div className="text-center text-lg leading-relaxed max-w-3xl mx-auto">
          {sections.about.content}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title={sections.experience.title}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {sections.experience.items.map((exp, index) => (
            <AnimatedCard key={index}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
              <p className="text-lg text-gray-700 flex items-center mb-1">
                <Briefcase size={18} className="mr-2 text-purple-500" /> {exp.company}
              </p>
              <p className="text-md text-gray-600 flex items-center mb-1">
                <Calendar size={18} className="mr-2 text-pink-500" /> {exp.duration}
              </p>
              <p className="text-md text-gray-600 flex items-center mb-4">
                <MapPin size={18} className="mr-2 text-blue-500" /> {exp.location}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title={sections.education.title}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {sections.education.items.map((edu, index) => (
            <AnimatedCard key={index}>
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                <GraduationCap size={20} className="mr-2 text-purple-600" /> {edu.degree}
              </h3>
              <p className="text-lg text-gray-700 mb-1">{edu.university}</p>
              <p className="text-md text-gray-600 flex items-center mb-1">
                <Calendar size={18} className="mr-2 text-pink-500" /> {edu.duration}
              </p>
              <p className="text-md text-gray-600 flex items-center">
                <MapPin size={18} className="mr-2 text-blue-500" /> {edu.location}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title={sections.skills.title}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.skills.categories.map((category, index) => (
            <AnimatedCard key={index}>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Lightbulb size={20} className="mr-2 text-purple-600" /> {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:text-white hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title={sections.projects.title}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.projects.items.map((project, index) => (
            <AnimatedCard key={index}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors duration-300"
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title={sections.contact.title}>
        <div className="flex flex-col items-center justify-center space-y-4 max-w-md mx-auto">
          {sections.contact.items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg bg-white/70 backdrop-blur-sm shadow-md w-full hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 transition-all duration-300 group"
            >
              <span className="text-purple-600 group-hover:text-white group-hover:bg-purple-600 p-2 rounded-full transition-all duration-300">
                {item.icon}
              </span>
              <span className="ml-4 text-lg text-gray-800 group-hover:text-gray-900 font-medium">
                {item.text}
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-200 mt-16">
        <p>&copy; {new Date().getFullYear()} Heng Thirith. All rights reserved.</p>
        <p>Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
