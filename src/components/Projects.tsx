import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { ExternalLink, Github, Folder, MoreVertical, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/* ===================== DATA ===================== */

const projects = [
  {
    title: "Remote-Sensing Image Captioning with VLMs",
    description:
      "Fine-tuned the Qwen2.5-VL-3B vision-language model with LoRA (11.3M trainable parameters, 0.3% of the model) to caption 20,264 satellite and aerial images from VRSBench, using 12.7 GB per GPU instead of the 60 GB needed for full fine-tuning. Ran 6 controlled ablations on adapter placement, resolution, learning-rate schedule and gradient accumulation. Scaled training to 2 GPUs with PyTorch DDP and FP16 mixed precision for near-linear 2x throughput (full dataset in 136 minutes). Improved BLEU-4 by 14% and BERT-BLEU-4 from 0.669 to 0.686 on 1,000 held-out images, confirmed with paired bootstrap 95% confidence intervals; MBR decoding beat greedy and beam search.",
    tech: [
      "PyTorch",
      "Hugging Face",
      "Qwen2.5-VL",
      "LoRA",
      "DDP",
      "FP16"
    ],
    featured: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Rishu22889/TASK-01-IMAGE-CAPTIONING",
        icon: Github,
      },
    ],
  },
  {
    title: "Text-Driven Object Removal & Replacement on CPU",
    description:
      "CPU-only image-editing pipeline that removes or replaces objects from a plain-English instruction, chaining LLM parsing (Qwen2.5-0.5B, 4-bit), detection (YOLOv8n-seg, YOLO-World), segmentation (MobileSAM), inpainting (MI-GAN) and generation (Stable Diffusion 1.5). Object removal runs in 1.8 seconds with 33.5 MB of weights after benchmarking classical, GAN and diffusion inpainting. Object replacement is 5x faster (449 s to 88 s) with LCM-LoRA and TAESD. A YOLO-World fallback raised grounding accuracy from 3/10 to 8/10, and a deterministic alias layer raised object-class accuracy from 19/26 to 26/26. Packaged as a CLI and Python API with pytest tests.",
    tech: [
      "PyTorch",
      "YOLOv8",
      "MobileSAM",
      "Stable Diffusion",
      "ONNX Runtime",
      "OpenCV"
    ],
    featured: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Rishu22889/TASK-02-OBJECT-EDITING",
        icon: Github,
      },
    ],
  },
  {
    title: "Receipt Reader & Expense Auto-Approval",
    description:
      "Reads expense-claim receipt photos with a combined PaddleOCR-VL + Tesseract reader, then auditable rules decide approve or review with reason codes; the model never approves money on its own. Found 25 past claims (₹14,283) that policy says should have been stopped, and duplicate-bill matching on vendor + bill number found 28 re-claimed bills where image hashing found 4. Detects pen-altered totals from the bill's own arithmetic and treats prompt-injection stamps as data. On a chronological holdout: amount 95%, bill number 95%, vendor 98%, with uncertain fields left blank and sent to a person. Cut VLM inference from ~180 s to ~3 s per receipt by fixing a disabled KV cache. FastAPI service with 120 automated tests.",
    tech: [
      "Python",
      "PaddleOCR-VL",
      "Tesseract",
      "FastAPI",
      "pytest"
    ],
    featured: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Rishu22889/receipts-reader",
        icon: Github,
      },
    ],
  },
  {
    title: "Warranty-Fraud Review Queue",
    description:
      "Ranks warranty claims for a 40-a-month investigation desk, with a human in the loop and no automatic rejection. Validated walk-forward with a 30-day label lag: caught 37 of 59 known frauds with 40 reviews a month in historical replay. Linked a jump in small-claim fraud (0.54% to 3.23%) to an auto-approval policy change, and recommended 36 ranked + 4 random reviews so the desk also finds patterns the model misses. Optimised for precision@40 and rupee impact rather than accuracy, since a model that flags nothing scores 98.7%. Served through FastAPI.",
    tech: [
      "Python",
      "scikit-learn",
      "Pandas",
      "FastAPI"
    ],
    featured: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Rishu22889/Kestrel-Home-Model",
        icon: Github,
      },
    ],
  },
  {
    title: "Amazon Product Price Prediction",
    image: "/projects/amazon.png",
    description:
      "End-to-end multimodal machine learning system that predicts Amazon product prices using textual, categorical, and image features from 75,000+ products. Built with Python and PyTorch, leveraging TF-IDF, EfficientNet image embeddings, and gradient boosting models with a weighted ensemble for accurate price estimation through an interactive web application.",
    tech: [
      "Python",
      "PyTorch",
      "LightGBM",
      "CatBoost",
      "TF-IDF",
      "OpenCV"
    ],
    featured: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Rishu22889/amazon_ml_challenge_25",
        icon: Github,
      },
      {
        label: "Live Demo",
        url: "https://amazon-ml-challenge-25.vercel.app",
        icon: ExternalLink,
      },
      {
        label: "Backend",
        url: "https://amazon-price-predictor-api-309171150964.asia-south1.run.app",
        icon: ExternalLink,
      }
    ],
  },
  {
    title: "Grid07 – Enterprise Knowledge Graph Agent",
    image: "/projects/grid07.png",
    description:
      "Enterprise search and AI agent platform that retrieves, analyzes, and answers questions over structured knowledge graphs and enterprise documents. Built using Python, FastAPI, and Neo4j with hybrid semantic search, intelligent retrieval, and an interactive web interface for efficient knowledge discovery.",
    tech: [
      "Python",
      "FastAPI",
      "Knowledge Graph",
      "LLM",
      "RAG",
      "Docker"
    ],
    featured: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Rishu22889/grid07_ai",
        icon: Github,
      },
      {
        label: "Web Link",
        url: "https://grid07ai.vercel.app",
        icon: ExternalLink,
      },
    ],
  },
  {
    title: "MRI Brain Tumor Detection System",
    image: "/projects/brain_tumor.png",
    description:
      "Deep learning-based MRI brain tumor classification system using ResNet-18 (transfer learning) built with PyTorch. Classifies 4 classes — Glioma, Meningioma, Pituitary Tumor, and No Tumor — and provides confidence percentage for predictions. Deployed as an interactive Streamlit web application.",
    tech: ["Python", "PyTorch", "CNN", "ResNet-18", "Streamlit"],
    featured: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Rishu22889/brain_tumor_classifier/",
        icon: Github,
      },
      {
        label: "Web Link",
        url: "https://brain-tumor-classifier-736634190695.asia-south1.run.app",
        icon: ExternalLink,
      },
    ],
  },
  {
    title: "MoSPI Scraper + LLaMA-Powered RAG Chatbot",
    image: "/projects/mospi_rag.png",
    description:
      "Built an end-to-end data pipeline and RAG-based chatbot system for MoSPI publications. Implemented an incremental web scraper with SHA-256 fingerprinting to avoid duplicate ingestion, followed by ETL processing of HTML and PDFs using BeautifulSoup and pdfplumber. Developed a LLaMA 3-powered chatbot with FAISS vector search and FastAPI backend, containerized with Docker for scalable deployment.",
    tech: [
      "Python",
      "FastAPI",
      "LLaMA 3",
      "FAISS",
      "RAG",
      "BeautifulSoup",
      "pdfplumber",
      "SQLite",
      "Docker",
    ],
    featured: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Rishu22889/mospi",
        icon: Github,
      },
    ],
  },
  {
    title: "AI Driver Monitoring System",
    image: "/projects/driver_monitoring.png",
    description:
      "Real-time AI-powered driver monitoring system that analyzes fatigue, distraction, and emotion using computer vision. Built with OpenCV and CNN models in PyTorch, integrated with FastAPI backend and Streamlit dashboard. Calculates dynamic risk levels using mathematical scoring logic and visualizes real-time analytics with PostgreSQL-backed data updates and live charts.",
    tech: [
      "Python",
      "OpenCV",
      "PyTorch",
      "CNN",
      "FastAPI",
      "Streamlit",
      "MobileNetV2"
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Rishu22889/driver_monitoring_system/",
        icon: Github,
      },
    ],
  },
  {
    title: "AgentHire",
    image: "/projects/agenthire.png",
    description:
      "AI-powered job application automation platform that analyzes job descriptions, matches resumes, and assists in applying to relevant roles.",
    tech: ["Python", "FastAPI", "AI APIs", "React"],
    featured: true,
    links: [
      {
        label: "Web App",
        url: "https://agenthire-ten.vercel.app",
        icon: ExternalLink,
      },
      {
        label: "Backend API",
        url: "https://agent-hire-backend.onrender.com",
        icon: ExternalLink,
      },
      {
        label: "Backend Code",
        url: "https://github.com/Rishu22889/agenthire-backend",
        icon: Github,
      },
      {
        label: "Sandbox",
        url: "https://agent-hire-sandbox.onrender.com",
        icon: ExternalLink,
      },
    ],
  },
  {
    title: "Placement Prediction System",
    description:
      "End-to-end machine learning web application that predicts student placement outcomes using a Random Forest model based on academic and skill-related features.",
    tech: ["Python", "Scikit-learn", "Random Forest", "Flask"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Rishu22889/ML/tree/main/Projects/Student_Placement",
        icon: Github,
      },
      {
        label: "Live Demo",
        url: "https://ml-dfgy.onrender.com/",
        icon: ExternalLink,
      },
    ],
  },
  {
    title: "Email Spam Classifier",
    description:
      "Machine learning-based spam detection system using TF-IDF feature extraction and probabilistic models.",
    tech: ["Python", "NLP", "Scikit-learn", "TF-IDF"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Rishu22889/email_spam_classifier",
        icon: Github,
      },
      {
        label: "Live Demo",
        url: "https://email-spam-classifier-7pct.onrender.com",
        icon: ExternalLink,
      },
    ],
  },
  {
    title: "ML Models From Scratch",
    description:
      "Implemented core machine learning algorithms from scratch using NumPy to deeply understand mathematical foundations.",
    tech: ["Python", "NumPy", "Linear Regression", "Decision Trees"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Rishu22889/ML/tree/main/ML_from_Scratch",
        icon: Github,
      },
    ],
  },
  {
    title: "Anomaly Detection System",
    description:
      "Unsupervised learning project to detect anomalies in structured datasets using statistical methods.",
    tech: ["Python", "Unsupervised ML", "NumPy"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Rishu22889/ML/tree/main/ML_from_Scratch/AnomalyDetection",
        icon: Github,
      },
    ],
  },
  {
    title: "Codeforces Problem Finder",
    description:
      "Web utility that helps competitive programmers discover Codeforces problems based on rating and tags.",
    tech: ["JavaScript", "APIs", "Web Scraping"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Rishu22889/codeforces-problem-finder",
        icon: Github,
      },
    ],
  },
];

/* ===================== THREE DOT MENU ===================== */

const ProjectMenu = ({ links, onClick }: { links: any[]; onClick?: (e: React.MouseEvent) => void }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
          onClick?.(e);
        }}
        className="p-2 rounded-full hover:bg-primary/10 transition"
        aria-label="Project links"
      >
        <MoreVertical size={18} />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-lg border bg-background shadow-lg z-50"
          onMouseLeave={() => setOpen(false)}
        >
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-primary/10 transition"
              >
                <Icon size={14} />
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

/* ===================== PROJECT MODAL ===================== */

const ProjectModal = ({ project, open, onClose }: { project: any; open: boolean; onClose: () => void }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display gradient-text">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          {project.image && (
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="font-semibold text-lg mb-2">About This Project</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Project Links</h3>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link: any) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors"
                  >
                    <Icon size={16} />
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

/* ===================== MAIN COMPONENT ===================== */

export const Projects = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subheading mx-auto">
              A selection of projects that showcase my skills and passion
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                onClick={() => handleProjectClick(project)}
                className={`project-card group overflow-hidden transition-all duration-500 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center bg-primary/10">
                      <Folder size={40} className="text-primary/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ProjectMenu links={project.links} onClick={(e) => e.stopPropagation()} />
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="font-display font-semibold text-xl text-center mb-8">
            Other Noteworthy Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                onClick={() => handleProjectClick(project)}
                className={`skill-card group transition-all duration-500 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${450 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={32} />
                  <ProjectMenu links={project.links} onClick={(e) => e.stopPropagation()} />
                </div>

                <h4 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          open={modalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};
