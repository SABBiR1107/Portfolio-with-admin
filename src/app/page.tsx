'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase, About, Education, Project, Experience, Certificate, Skill } from '@/lib/supabase'
import { Github, Linkedin, Mail, Phone, MapPin, Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  const [about, setAbout] = useState<About | null>(null)
  const [education, setEducation] = useState<Education[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [experience, setExperience] = useState<Experience[]>([])
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      // Load about data
      const { data: aboutData } = await supabase
        .from('about')
        .select('*')
        .single()
      setAbout(aboutData)

      // Load education data
      const { data: educationData } = await supabase
        .from('education')
        .select('*')
        .order('start_date', { ascending: false })
      setEducation(educationData || [])

      // Load projects data
      const { data: projectsData } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })
      setProjects(projectsData || [])

      // Load experience data
      const { data: experienceData } = await supabase
        .from('experience')
        .select('*')
        .order('start_date', { ascending: false })
      setExperience(experienceData || [])

      // Load certificates data
      const { data: certificatesData } = await supabase
        .from('certificates')
        .select('*')
        .order('created_at', { ascending: false })
      setCertificates(certificatesData || [])

      // Load skills data
      const { data: skillsData } = await supabase
        .from('skills')
        .select('*')
        .order('created_at', { ascending: false })
      setSkills(skillsData || [])

    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold gradient-text animate-fade-in-left">
              {about?.name || 'Portfolio'}
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">About</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a href="#education" className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Education</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a href="#skills" className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Skills</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a href="#projects" className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Projects</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a href="#experience" className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Experience</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a href="#certificates" className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Certificates</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a href="#contact" className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#about" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md" onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#education" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md" onClick={() => setMobileMenuOpen(false)}>Education</a>
                <a href="#skills" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md" onClick={() => setMobileMenuOpen(false)}>Skills</a>
                <a href="#projects" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                <a href="#experience" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md" onClick={() => setMobileMenuOpen(false)}>Experience</a>
                <a href="#certificates" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md" onClick={() => setMobileMenuOpen(false)}>Certificates</a>
                <a href="#contact" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {about?.name || 'Your Name'}
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {about?.description || 'Passionate developer with expertise in web development and modern technologies.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              {about?.github_url && (
                <a
                  href={about.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20"
                >
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">GitHub</span>
                </a>
              )}
              {about?.linkedin_url && (
                <a
                  href={about.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20"
                >
                  <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl -translate-y-36 translate-x-36"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl translate-y-36 -translate-x-36"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 gradient-text">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Get to know me better</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              {about?.image_url && (
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={about.image_url}
                    alt={about.name}
                    className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
            </div>
            <div className="animate-fade-in-right">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {about?.name || 'Your Name'}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {about?.description || 'Add your description here.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                {about?.github_url && (
                  <a
                    href={about.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">GitHub</span>
                  </a>
                )}
                {about?.linkedin_url && (
                  <a
                    href={about.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">My academic journey</p>
          </div>
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {edu.start_date} - {edu.end_date || 'Present'}
                      {edu.gpa && ` • GPA: ${edu.gpa}`}
                    </p>
                    {edu.description && (
                      <p className="text-gray-700 dark:text-gray-300 mt-4">{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl -translate-y-48 -translate-x-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl translate-y-48 translate-x-48"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 gradient-text">Skills</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">My technical and soft skills</p>
          </div>
          
          {/* Soft Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Soft Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.filter(skill => skill.type === 'soft').map((skill, index) => (
                <div 
                  key={skill.id} 
                  className="group bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover-lift border border-gray-200 dark:border-gray-600 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{skill.name}</h4>
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 rounded-full">Level {skill.level}/5</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-6 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                  {skill.description && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{skill.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hard Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Hard Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.filter(skill => skill.type === 'hard').map((skill, index) => (
                <div 
                  key={skill.id} 
                  className="group bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover-lift border border-gray-200 dark:border-gray-600 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{skill.name}</h4>
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 rounded-full">Level {skill.level}/5</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-6 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                  {skill.description && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{skill.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Some of my recent work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                {project.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                )}
                <div className="flex space-x-4">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                  )}
                  {project.web_url && (
                    <a
                      href={project.web_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">My professional journey</p>
          </div>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                    <p className="text-xl text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {exp.start_date} - {exp.end_date || 'Present'}
                    </p>
                    {exp.description && (
                      <p className="text-gray-700 dark:text-gray-300 mt-4">{exp.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificates</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">My achievements and certifications</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div key={cert.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{cert.title}</h3>
                {cert.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{cert.description}</p>
                )}
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Get in touch with me</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg transition-colors duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-lg text-gray-900 dark:text-white">ahsanursabbir@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-lg text-gray-900 dark:text-white">01788857309</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-lg text-gray-900 dark:text-white">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">{about?.name || 'Ahsanur Rahman Sabbir'}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {about?.description || 'Passionate developer with expertise in web development and modern technologies.'}
              </p>
              <div className="flex space-x-4">
                {about?.github_url && (
                  <a
                    href={about.github_url}
            target="_blank"
            rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                )}
                {about?.linkedin_url && (
                  <a
                    href={about.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors duration-300">About</a>
                <a href="#education" className="block text-gray-300 hover:text-white transition-colors duration-300">Education</a>
                <a href="#skills" className="block text-gray-300 hover:text-white transition-colors duration-300">Skills</a>
                <a href="#projects" className="block text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
                <a href="#experience" className="block text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
                <a href="#certificates" className="block text-gray-300 hover:text-white transition-colors duration-300">Certificates</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-indigo-400" />
                  <span className="text-gray-300 text-sm">ahsanursabbir@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-indigo-400" />
                  <span className="text-gray-300 text-sm">01788857309</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-indigo-400" />
                  <span className="text-gray-300 text-sm">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; 2025 {about?.name || 'Ahsanur Rahman Sabbir'}. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Built with ❤️ using Next.js & Supabase
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}