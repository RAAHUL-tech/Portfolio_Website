import React, { useState, useEffect } from 'react';
import { 
  ChevronUp, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Menu, X,
  Award, Calendar, Clock, Zap, ShieldCheck, Image, Monitor, Smile,
  FileText, Star, TrendingUp,
  GraduationCap, Target, ArrowRight, Rocket, Sun, Moon, Briefcase, BookOpen, Layers
} from 'lucide-react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import LoadingSpinner from './components/LoadingSpinner';
import SkillsSection from './components/SkillsSection';



interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
  skills: string[];
  icon: React.ReactNode;
}

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
  githubLink?: string;
  featured: boolean;
}

interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}


// Theme Toggle Component
const ThemeToggle: React.FC = () => {
  const { actualTheme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline-primary rounded-pill p-2 d-flex align-items-center justify-content-center"
      style={{ width: '40px', height: '40px' }}
      title={`Switch to ${actualTheme === 'light' ? 'dark' : 'light'} theme`}
    >
      {actualTheme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { actualTheme } = useTheme();


  const experiences: Experience[] = [
    {
      title: "EG-RSCA Research Assistant",
      company: "UROC, CSUF",
      location: "Fullerton, CA",
      duration: "January 2025 – August 2025",
      icon: <Briefcase className="w-6 h-6" />,
      skills: ["AI Algorithms", "Fleet Management", "Real-time Systems", "Automation", "Matlab"],
      achievements: [
        "Designed and developed automation algorithms for heavy equipment fleet management to improve operational efficiency in construction sites.",
        "Implemented real-time tracking and collision avoidance using sensor data, reducing potential equipment downtime by 20%.",
        "Collaborated with interdisciplinary teams to integrate AI-driven decision-making models enhancing fleet utilization by 15%."
      ]
    },
    {
      title: "Computer Vision Research Intern",
      company: "VSquare MediTech",
      location: "New Delhi, India",
      duration: "April 2024 – July 2024",
      icon: <Briefcase className="w-6 h-6" />,
      skills: ["PyTorch", "OpenCV", "TensorFlow", "Computer Vision", "MxNet"],
      achievements: [
        "Improved eye treatment diagnostics accuracy by 15% by developing and deploying computer vision models using PyTorch and OpenCV for retinal and facial image analysis.",
        "Integrated face emotion recognition into diagnostics software using PyTorch, TensorFlow, and MxNet, achieving 92% classification accuracy to support mental health screening.",
        "Conducted in-depth research on state-of-the-art computer vision techniques from academic papers and translated them into production-ready solutions.",
        "Ensured software reliability and robustness through rigorous unit testing, model validation, and cross-framework benchmarking."
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Techcellent IT Solutions",
      location: "Pondicherry, India",
      duration: "April 2023 – May 2023",
      icon: <Briefcase className="w-6 h-6" />,
      skills: ["HTML5", "Bootstrap CSS", "AJAX", "PHP", "MySQL"],
      achievements: [
        "Developed and deployed a dynamic website for a gaming center, integrating user registration and database retrieval features.",
        "Improved customer engagement by 25% through intuitive UI/UX and real-time interactions.",
        "Built backend services using PHP and MySQL; implemented frontend interactivity with JavaScript and AJAX."
      ]
    }
  ];

  const projects: Project[] = [
    {
      title: "BibliophileAI",
      category: "AI & Microservices",
      description: "BibliophileAI is a production-ready, intelligent social book recommendation system that delivers highly personalized suggestions using a hybrid ensemble of collaborative filtering, deep learning, and graph neural networks. Built with a microservices architecture and Kubernetes-native stack, it captures real-time user interactions and social connections, integrates rich metadata from the Google Books API, and handles cold-start challenges intelligently. The platform leverages Apache Kafka for event streaming, Pinecone for vector search, Neo4j for graph-based relationship modeling, and Redis for low-latency caching. Advanced MLOps tooling such as Airflow and Prometheus ensures seamless orchestration, monitoring, and explainability.",
      tech: ["FastAPI", "React", "Kubernetes", "Apache Kafka", "PyTorch", "Pinecone", "Neo4j", "Redis", "Airflow", "Prometheus"],
      icon: <BookOpen className="w-6 h-6" />,
      githubLink: "https://github.com/RAAHUL-tech/BibliophileAI",
      featured: true
    },
    {
      title: "DevOps Orchestra",
      category: "AI-Powered DevOps",
      description: "DevOps Orchestra is an AI-driven multi-agent DevOps automation platform that streamlines 95% of the software delivery pipeline—from code validation to deployment, rollback, and observability—without human intervention. Built with LangGraph for intelligent agent collaboration, Kafka for state management, and Terraform for infrastructure provisioning, it is triggered by GitHub webhooks and supports secure development via ngrok. The system performs AI-assisted code analysis, test generation, Dockerfile creation, and automated blue-green or canary deployments. A ChatOps agent ensures seamless real-time communication via Slack, while monitoring and rollback are fully automated for reliable production operations.",
      tech: ["LangGraph", "Kafka", "AI Agents", "Python", "Slack API", "Docker", "CI/CD", "Terraform"],
      icon: <Layers className="w-6 h-6" />,
      githubLink: "https://github.com/Devops-orchestra/DevOps-Orchestra",
      featured: true
    },
    {
      title: "Real-time Fraud Detection Pipeline",
      category: "MLOps & Production ML",
      description: "A production-ready, serverless credit card fraud detection pipeline with <3s latency, built on AWS Lambda and Amazon SQS. Achieves 99.2% precision on imbalanced datasets using PyTorch Lightning and SMOTE, with models exported to ONNX for faster inference. The pipeline features full MLOps lifecycle management: dynamic configuration via Hydra, experiment tracking with MLflow and Weights & Biases, versioning with DVC, and real-time data drift monitoring with Evidently AI. CI/CD is automated through GitHub Actions, deploying Dockerized models to Amazon ECR and Lambda, while CloudWatch enables real-time logging. Fully scalable, self-retraining, and production-ready.",
      tech: ["AWS Lambda", "Amazon SQS", "PyTorch Lightning", "ONNX", "MLflow", "Weights & Biases", "DVC", "Hydra", "Evidently AI", "GitHub Actions", "Docker"],
      icon: <ShieldCheck className="w-6 h-6" />,
      githubLink: "https://github.com/RAAHUL-tech/Real-Time-Fraud-Detection-Pipeline",
      featured: true
    },
    {
      title: "Real-Time Election Voting Analysis",
      category: "ML & Data Analytics",
      description: "Developed a Real-Time Election Voting Analysis System to predict election trends and ensure secure voter authentication. Historical trends are modeled using linear regression, while ARIMA provides real-time predictive analytics. Voter identities are verified with a pre-trained Siamese network. The system leverages Kafka for real-time streaming, Hadoop and Apache Spark for scalable data processing, and Streamlit for interactive visualization, achieving significant improvements in electoral transparency and operational efficiency.",
      tech: ["ARIMA", "Siamese Networks", "Kafka", "Hadoop", "Apache Spark", "Streamlit", "Python", "Real-time Analytics"],
      icon: <TrendingUp className="w-6 h-6" />,
      githubLink: "https://github.com/RAAHUL-tech/Vote_Prediction",
      featured: true
    },
    {
      title: "Fact-Checking News Aggregator",
      category: "AI & Multi-Agent Systems",
      description: "Developed a fully automated multi-agent AI system that processes 50,000+ news articles daily to extract and verify factual claims with high accuracy. Leveraged LLMs for claim extraction and validation, reducing manual verification by over 90%. Built with the A2A (Agent-to-Agent) protocol for asynchronous agent communication and MCP (Model Context Protocol) for seamless integration with external tools. The modular agent pipeline—crawling, extraction, fact-checking, and publishing—is orchestrated centrally, with results auto-published to a static Jekyll site for real-time dissemination. Designed for scalability, fault-tolerance, and end-to-end automation.",
      tech: ["LLMs", "Multi-Agent Systems", "A2A Protocol", "MCP", "Jekyll", "Python", "Automation", "AI Agents"],
      icon: <FileText className="w-6 h-6" />,
      githubLink: "https://github.com/RAAHUL-tech/Fact_Checking_News_Aggregator",
      featured: true
    },    
    {
      title: "Neural Style Transfer with Transformers",
      category: "Deep Learning & Computer Vision",
      description: "Implemented Neural Style Transfer using transformers with pyramidal positional encoding, improving image transformation quality by 20% over traditional CNN-based methods while reducing training time by 15%. Researched and proposed pyramidal positional encoding for better spatial understanding, and integrated reinforcement learning to enhance image generation quality by 10% per iteration, reducing error rates over 50 training cycles. The system leverages PyTorch, OpenCV, and Torchvision for model development and image processing.",
      tech: ["Python", "PyTorch", "OpenCV", "Torchvision", "Transformers", "Reinforcement Learning", "Computer Vision", "Neural Style Transfer"],
      icon: <Image className="w-6 h-6" />,
      githubLink: "https://github.com/RAAHUL-tech/Neural-Style-Transfer",
      featured: false
    },
    {
      title: "DATON (Detection And Tracking Of Vehicle Number Plates)",
      category: "Computer Vision & Vehicle Tracking",
      description: "Developed a real-time vehicle detection and tracking system for campus security using YOLOv8 for object detection, WPOD-net for precise number plate localization, and EasyOCR for text recognition. The system improved vehicle detection accuracy by 30% and reduced number plate identification time by 40%, enabling automated tracking of over 500 vehicles daily and enhancing overall campus security.",
      tech: ["YOLOv8", "WPOD-net", "EasyOCR", "Python", "OpenCV", "Real-time Tracking", "Computer Vision"],
      icon: <Monitor className="w-6 h-6" />,
      githubLink: "https://github.com/RAAHUL-tech/DATON",
      featured: false
    },
    {
      title: "Face Emotion Recognition",
      category: "Deep Learning & Computer Vision",
      description: "Developed a Face Emotion Recognition system to classify human emotions from images into seven categories: Angry, Disgust, Fear, Happy, Sad, Surprise, and Neutral. Researched and compared the performance of multiple deep learning frameworks including PyTorch, TensorFlow, and MXNet, implementing preprocessing, augmentation, and CNN-based architectures to achieve accurate emotion detection across diverse facial inputs.",
      tech: ["PyTorch", "TensorFlow", "MXNet", "CNNs", "Computer Vision", "Deep Learning", "Python"],
      icon: <Smile className="w-6 h-6" />,
      githubLink: "https://github.com/RAAHUL-tech/Face-Emotion-Recognition",
      featured: false
    }    
  ];

  const blogs: Blog[] = [
    {
      title: "Post-Training Quantization vs Quantization-Aware Training: A Hands-On Comparison with a Small LLaMA Model",
      excerpt: "Explored the performance trade-offs between Post-Training Quantization (PTQ) and Quantization-Aware Training (QAT) using a TinyLLaMA model (~50M parameters) on the TinyStories dataset, comparing accuracy, throughput, and model size for practical deployment insights.",
      date: "2025-08-24",
      readTime: "13 min read",
      tags: ["Deep Learning", "Model Compression", "Quantization", "LLaMA", "PyTorch"]
    }, 
    {
      title: "Building an Autonomous Fact-Checking News Aggregator with AI Agents, A2A & MCP",
      excerpt: "Exploring the design and implementation of an AI-powered news aggregator that autonomously fact-checks articles using multi-agent collaboration (A2A & MCP) for accurate and reliable information dissemination.",
      date: "2025-07-21",
      readTime: "8 min read",
      tags: ["AI Agents", "Fact-Checking", "News Aggregator", "Multi-Agent Systems", "A2A", "MCP"]
    },
    {
      title: "Machine Learning System Design I: Developing a Real-Time Credit Card Fraud Detection Pipeline",
      excerpt: "An in-depth guide on building a real-time credit card fraud detection system using AWS infrastructure and MLOps frameworks, covering model deployment, serverless architecture, and automated monitoring for production-ready pipelines.",
      date: "2025-06-28",
      readTime: "15 min read",
      tags: ["MLOps", "AWS", "Machine Learning", "Fraud Detection", "Real-Time Analytics"]
    },
    {
      title: "Smart by Design: Demystifying the Architecture of AI Agents - Blog-4",
      excerpt: "Explores next-generation AI agent architectures, including Belief-Desire-Intention (BDI) models, learning-based adaptable systems, and Multi-Agent Systems (MAS) for distributed coordination, enabling human-like reasoning and scalable collaboration.",
      date: "2025-06-19",
      readTime: "7 min read",
      tags: ["AI Agents", "BDI", "Multi-Agent Systems", "Learning-Based AI", "Intelligent Systems"]
    },
    {
      title: "Smart by Design: Demystifying the Architecture of AI Agents - Blog-3",
      excerpt: "An in-depth exploration of AI agent architectures, covering reactive, deliberative, and hybrid styles. Learn how these frameworks process perception, decision-making, and actions, with real-world examples and comparisons for designing intelligent agents.",
      date: "2025-06-10",
      readTime: "7 min read",
      tags: ["AI Agents", "Architecture", "Intelligent Systems", "Reactive", "Deliberative", "Hybrid"]
    },
    {
      title: "Smart by Design: Demystifying the Architecture of AI Agents - Blog-2",
      excerpt: "A deep dive into the five basic kinds of AI agents, exploring their intelligence, flexibility, and decision-making power. From reflex agents to self-improving learning agents, understand how each type behaves, where they excel, and how to choose the right one to make a system truly smart.",
      date: "2025-06-04",
      readTime: "7 min read",
      tags: ["AI Agents", "Artificial Intelligence", "Machine Learning", "Intelligent Systems"]
    },
    {
      title: "Smart by Design: Demystifying the Architecture of AI Agents - Blog 1",
      excerpt: "Covers the core definitions and components of AI agents and provides a high-level overview of five key agent types, from simple reflex agents to learning agents.",
      date: "2025-05-30",
      readTime: "7 min read",
      tags: ["AI Agents", "Artificial Intelligence", "Machine Learning", "Autonomous Systems"]
    }    
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'blogs', 'contact'];
      sections.forEach((section: string) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };


  if (isLoading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-3">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-vh-100 ${actualTheme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      {/* Animated Background */}
      <div 
        className="fixed-top w-100 h-100 opacity-30"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent)`,
          pointerEvents: 'none',
          zIndex: -1
        }}
      />

      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg fixed-top ${actualTheme === 'light' ? 'navbar-light' : 'navbar-dark'} shadow-lg`} style={{ backdropFilter: 'blur(10px)', backgroundColor: actualTheme === 'light' ? 'rgba(248, 249, 250, 0.95)' : 'rgba(33, 37, 41, 0.95)' }}>
        <div className="container-fluid px-3">
          <a className="navbar-brand fw-bold" href="#home" onClick={() => scrollToSection('home')} style={{ fontSize: '1.5rem' }}>
            <span className="gradient-text">Raahul Krishna</span>
          </a>
          
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            style={{ color: actualTheme === 'light' ? '#000' : '#fff' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Blogs', 'Contact'].map((item: string) => (
                <li className="nav-item" key={item}>
                  <button
                    className={`nav-link btn btn-link border-0 ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    style={{ 
                      color: actualTheme === 'light' ? '#000' : '#fff',
                      textDecoration: 'none'
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li className="nav-item ms-2">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden">
        <div className="hero-background"></div>
        <div className="container text-center position-relative">
          <div className="mb-5 position-relative">
            <div className="avatar-container mx-auto">
              <div className="avatar-circle">
                <div className="avatar-inner">
                  <img 
                    src="/Raahul_img.jpeg" 
                    alt="Raahul Krishna" 
                    className="avatar-image"
                  /> 
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="display-1 fw-bold mb-4 gradient-text animate-fade-in-up">
            Raahul Krishna Durairaju
          </h1>
          
          <div className="d-flex align-items-center justify-content-center gap-3 mb-4 flex-wrap">
            <Rocket size={24} className="text-primary animate-bounce" />
            <span className="fs-4 fw-medium">AI/ML Engineer | MLOps & Real-Time AI Systems</span>
            <Zap size={24} className="text-warning animate-pulse" />
          </div>
          
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '800px' }}>
          Master's student in Computer Science at Cal State Fullerton, building scalable AI systems that deliver measurable impact. Specialized in MLOps, Computer Vision, real-time AI pipelines, and cloud-based deployment with Python, PyTorch, TensorFlow, and AWS.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            <a
              href="https://drive.google.com/file/d/1eZ2rAVqBIQ-LDEqhWimBN2Lw22ZoRLAj/view?usp=sharing" target="_blank"
              className="btn btn-primary btn-lg px-4 py-3 rounded-pill d-flex align-items-center gap-2 shadow-lg hover-lift"
            >
              <Download size={20} />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill hover-lift"
            >
              Get In Touch
            </button>
          </div>

          <div className="scroll-indicator animate-bounce">
            <ChevronUp
              size={32} 
              className="text-muted cursor-pointer" 
              onClick={() => scrollToSection('about')} 
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="display-2 text-center mb-5 gradient-text">
            About Me
          </h2>
          
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="pe-lg-4">
              <p className="lead mb-4">
                I'm a Master's student in Computer Science at Cal State Fullerton and hold two AWS certifications: Cloud Practitioner and AI Practitioner. I specialize in building scalable AI solutions with interests in computer vision, MLOps, real-time AI systems, and cloud-based machine learning applications.
              </p>

              <p className="lead mb-4">
                My work includes high-impact projects such as DevOps Orchestra, which automates 95% of software delivery workflows using AI agents and Kafka; BibliophileAI, an intelligent microservices-based book recommendation platform; and a real-time fraud detection pipeline on AWS Lambda achieving sub-3-second latency with 99.2% precision. During my internship at VSquare MediTech, I improved diagnostic accuracy by 15% using computer vision models and achieved 92% accuracy in emotion recognition for healthcare applications, gaining hands-on experience deploying AI solutions in real-world settings.
              </p>

                <div className="row g-3">
                  <div className="col-6">
                    <div className="card text-center hover-lift">
                      <div className="card-body">
                        <div className="display-6 text-primary mb-2 d-flex align-items-center justify-content-center gap-2">
                          <Target size={32} />
                          10+
                        </div>
                        <div className="text-muted">Projects</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card text-center hover-lift">
                      <div className="card-body">
                        <div className="display-6 text-warning mb-2 d-flex align-items-center justify-content-center gap-2">
                          <Award size={32} />
                          3.95
                        </div>
                        <div className="text-muted">GPA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-12">
                  <div className="card hover-lift">
                    <div className="card-body">
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <GraduationCap size={24} className="text-primary" />
                        <h3 className="h5 mb-0 text-primary">Education</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 rounded hover-lift">
                          <div className="fw-semibold">Master of Science in Computer Science</div>
                          <div className="text-muted">California State University Fullerton</div>
                          <div className="small text-muted">August 2024 - May 2026</div>
                        </div>
                        <div className="p-3 rounded hover-lift">
                          <div className="fw-semibold">Bachelor of Technology (Honours) in Computer Science & Engineering</div>
                          <div className="text-muted">Puducherry Technological University</div>
                          <div className="small text-muted">July 2020 - May 2024</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card hover-lift">
                    <div className="card-body">
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <Award size={24} className="text-warning" />
                        <h3 className="h5 mb-0 text-warning">Certifications</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="d-flex align-items-center gap-3 p-2 rounded hover-lift">
                          <Award size={20} className="text-warning flex-shrink-0" />
                          <span>AWS Certified AI Practitioner (Aug 2025)</span>
                        </div>
                        <div className="d-flex align-items-center gap-3 p-2 rounded hover-lift">
                          <Award size={20} className="text-warning flex-shrink-0" />
                          <span>AWS Certified Cloud Practitioner (Jul 2025)</span>
                        </div>
                        <div className="d-flex align-items-center gap-3 p-2 rounded hover-lift">
                          <Award size={20} className="text-warning flex-shrink-0" />
                          <span>Machine Learning Specialization - Stanford (June 2023)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <h2 className="display-2 text-center mb-5 gradient-text">
            Experience
          </h2>

          <div className="row g-4">
            {experiences.map((exp: Experience, index: number) => (
              <div key={index} className="col-12">
                <div className="card hover-lift">
                  <div className="card-body">
                    <div className="row align-items-start mb-4">
                      <div className="col-auto">
                        <div className="p-3 rounded-3 bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                          {exp.icon}
                        </div>
                      </div>
                      <div className="col">
                        <h3 className="h4 text-primary mb-2">{exp.title}</h3>
                        <div className="h5 mb-2">{exp.company}</div>
                        <div className="d-flex flex-wrap gap-3 text-muted small">
                          <div className="d-flex align-items-center gap-1">
                            <MapPin size={16} />
                            {exp.location}
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <Calendar size={16} />
                            {exp.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="d-flex flex-wrap gap-2">
                        {exp.skills.map((skill: string, idx: number) => (
                          <span
                            key={idx}
                            className="badge bg-primary bg-opacity-20 text-blue-700 px-3 py-2"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement: string, idx: number) => (
                        <div key={idx} className="d-flex align-items-start gap-3 p-3 rounded hover-lift">
                          <div className="w-2 h-2 bg-primary rounded-circle mt-2 flex-shrink-0"></div>
                          <p className="mb-0">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <h2 className="display-2 text-center mb-5 gradient-text">
            Featured Projects
          </h2>

          {/* Featured Projects */}
          <div className="mb-5">
            <h3 className="h3 text-center mb-4 text-primary d-flex align-items-center justify-content-center gap-2">
              <Star size={24} className="text-warning" />
              Featured Projects
            </h3>
            <div className="row g-4">
              {projects.filter(p => p.featured).map((project: Project, index: number) => (
                <div key={index} className="col-lg-6">
                  <div className="card hover-lift h-100">
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="p-3 bg-primary text-white rounded-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                          {project.icon}
                        </div>
                        <div className="flex-grow-1">
                          <h4 className="h5 mb-1 text-primary">{project.title}</h4>
                          <div className="small text-muted">{project.category}</div>
                        </div>
                      </div>

                      <p className="card-text mb-4 flex-grow-1">{project.description}</p>

                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech: string, idx: number) => (
                          <span
                            key={idx}
                            className="badge bg-primary bg-opacity-20 text-blue-700 px-3 py-2"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="d-flex gap-3 mt-auto">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="h3 text-center mb-4 text-secondary">Other Projects</h3>
            <div className="row g-4">
              {projects.filter(p => !p.featured).map((project: Project, index: number) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="card hover-lift h-100">
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="p-2 bg-secondary text-white rounded-3 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                          {project.icon}
                        </div>
                        <div className="flex-grow-1">
                          <h4 className="h6 mb-1 text-primary">{project.title}</h4>
                          <div className="small text-muted">{project.category}</div>
                        </div>
                      </div>

                      <p className="card-text mb-3 flex-grow-1 small">{project.description}</p>

                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {project.tech.slice(0, 4).map((tech: string, idx: number) => (
                          <span
                            key={idx}
                            className="badge bg-primary bg-opacity-20 text-blue-700 px-3 py-2"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="badge bg-muted text-muted px-2 py-1 small">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                      <div className="d-flex gap-3 mt-auto">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
                      >
                        <Github size={14} />
                        Code
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="section">
        <div className="container">
          <h2 className="display-2 text-center mb-5 gradient-text">
            Latest Blog Posts
          </h2>

          <div className="row g-4">
            {blogs.map((blog: Blog, index: number) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card hover-lift h-100">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex align-items-center gap-2 text-muted small mb-3">
                      <Calendar size={16} />
                      {new Date(blog.date).toLocaleDateString()}
                      <span>•</span>
                      <Clock size={16} />
                      {blog.readTime}
                    </div>

                    <h3 className="h5 mb-3 text-primary line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="card-text mb-4 flex-grow-1">
                      {blog.excerpt.length > 100 
                        ? `${blog.excerpt.substring(0, 100)}... ` 
                        : blog.excerpt
                      }
                      {blog.excerpt.length > 100 && (
                        <span className="text-blue-500 cursor-pointer">read more</span>
                      )}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag: string, idx: number) => (
                        <span
                          key={idx}
                          className="badge bg-primary bg-opacity-20 text-blue-700 px-3 py-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center gap-3 small text-muted">
                      </div>
                    </div>
                    <div className="d-flex gap-3 mt-auto">
                    <a
                      href="https://medium.com/@rahulkrish28"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2 mt-auto"
                    >
                      Read More <ArrowRight size={14} />
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <a
              href="https://medium.com/@rahulkrish28"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg d-flex align-items-center gap-2 mx-auto"
            >
              View All Articles <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <h2 className="display-2 text-center mb-5 gradient-text">
            Let's Connect
          </h2>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <p className="lead">
                  I'm always excited to discuss new opportunities, innovative projects, or just have a conversation about the latest in AI and technology.
                </p>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <div className="card hover-lift text-center h-100">
                    <div className="card-body">
                      <div className="w-16 h-16 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center">
                        <Mail size={24} className="text-white" />
                      </div>
                      <h3 className="h5 mb-2 text-primary">Email</h3>
                      <a 
                        href="mailto:rahulkrish28@gmail.com" 
                        className="text-primary text-decoration-none"
                      >
                        rahulkrish28@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card hover-lift text-center h-100">
                    <div className="card-body">
                      <div className="w-16 h-16 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center">
                        <Phone size={24} className="text-white" />
                      </div>
                      <h3 className="h5 mb-2 text-primary">Phone</h3>
                      <a 
                        href="tel:+16576318971" 
                        className="text-primary text-decoration-none"
                      >
                        +1 (657) 631-8971
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card hover-lift text-center h-100">
                    <div className="card-body">
                      <div className="w-16 h-16 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center">
                        <MapPin size={24} className="text-white" />
                      </div>
                      <h3 className="h5 mb-2 text-primary">Location</h3>
                      <p className="text-muted mb-0">Fullerton, California</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center gap-4">
                <a
                  href="https://www.linkedin.com/in/raahulkrishna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary rounded-circle p-3 hover-lift"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/RAAHUL-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary rounded-circle p-3 hover-lift"
                  title="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://medium.com/@rahulkrish28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success rounded-circle p-3 hover-lift"
                  title="Medium Blog"
                >
                  <FileText size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 border-top">
        <div className="container text-center">
          <p className="text-muted mb-3">
            © 2025 Raahul Krishna Durairaju. Built with React, TypeScript & lots of ☕
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection('home')}
        className="btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-4 p-3 shadow-lg hover-lift"
        style={{ zIndex: 1000 }}
        title="Scroll to top"
      >
        <ChevronUp size={20} className="rotate-180" />
      </button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
};

export default App;
