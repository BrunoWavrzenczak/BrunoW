import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  BookOpen,
  Briefcase,
  Image as ImageIcon,
  User,
  ExternalLink,
  ChevronRight,
  Download,
  Award,
  Database,
  Terminal,
  FileText,
  Globe,
  MapPin,
  Cpu,
  Sun,
  Moon,
  Languages,
  X,
  Maximize2,
  Code2,
  Layers,
  Box,
  Workflow,
  Zap,
  Bot
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState('pt');
  const [isDark, setIsDark] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  // Bloquear scroll do body quando o modal estiver aberto
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedItem]);

  // Dicionário de Traduções
  const t = {
    pt: {
      nav: { about: 'Sobre', academic: 'Acadêmico', experience: 'Experiência', projects: 'Projetos', gallery: 'Eventos' },
      common: { present: 'Presente', close: 'Fechar', details: 'Detalhes do Projeto', eventDetails: 'Sobre o Evento', seeMore: 'Clique para ver mais' },
      hero: { title: 'Oi, eu sou', focus: 'Atualmente focado em como', focusHighlight: 'modelos de linguagem', focusEnd: 'podem otimizar fluxos de trabalho humanos.', status: 'Disponível para Colaborações', cv: 'Currículo .PDF', portfolio: 'Ver Experiência' },
      sections: { academic: 'Formação Acadêmica', publications: 'Publicações e Artigos', market: 'Experiência no Mercado', lab: 'Projetos & Laboratório', networking: 'Eventos & Networking', tech: 'Arsenal Técnico', beyond: 'Além do Código' },
      profile: {
        role: "Pesquisador & Cientista de Dados",
        bio: "Mestrando em Ciência da Computação na UFPR. Especialista em automação e apaixonado por decifrar padrões em dados e idiomas.",
      },
      footer: { question: 'Vamos criar algo', highlight: 'interessante juntos?', sub: 'Seja para um projeto de dados, uma dúvida sobre automação ou apenas para praticar russo.', location: 'Feito em Curitiba para o Mundo' },
      academicData: {
        msc: "Mestrado em Ciência da Computação",
        bsc: "Graduação em Estatística e Ciência de Dados",
        mscDesc: "Linha de pesquisa: Inteligência Computacional. Foco em LLMs e processamento de linguagem natural.",
        bscDesc: "Formação focada em métodos quantitativos, inferência estatística e modelagem computacional. Ênfase em análise exploratória de dados, probabilidade e algoritmos de aprendizado de máquina aplicados."
      },
      hobbies: { langTitle: 'Idiomas', russian: 'Russo (Intermediário)', english: 'Inglês (Avançado)', hobbyTitle: 'Hobbies', hobbyList: 'Jogos e Astrofísica', quote: '"Em busca constante pela próxima peça do quebra-cabeça."' }
    },
    en: {
      nav: { about: 'About', academic: 'Academic', experience: 'Experience', projects: 'Projects', gallery: 'Events' },
      common: { present: 'Present', close: 'Close', details: 'Project Details', eventDetails: 'About the Event', seeMore: 'Click to see more' },
      hero: { title: "Hi, I'm", focus: 'Currently focused on how', focusHighlight: 'language models', focusEnd: 'can optimize human workflows.', status: 'Available for Collaborations', cv: 'Resume .PDF', portfolio: 'View Experience' },
      sections: { academic: 'Academic Background', publications: 'Publications & Articles', market: 'Professional Experience', lab: 'Projects & Lab', networking: 'Events & Networking', tech: 'Technical Stack', beyond: 'Beyond Code' },
      profile: {
        role: "Researcher & Data Scientist",
        bio: "MSc student in Computer Science at UFPR. Automation specialist passionate about deciphering patterns in data and languages.",
      },
      footer: { question: "Let's create something", highlight: 'interesting together?', sub: 'Whether for a data project, an automation doubt, or just to practice Russian.', location: 'Made in Curitiba for the World' },
      academicData: {
        msc: "MSc in Computer Science",
        bsc: "BSc in Statistics and Data Science",
        mscDesc: "Research line: Computational Intelligence. Focus on LLMs and natural language processing.",
        bscDesc: "Education focused on quantitative methods, statistical inference, and computational modeling. Emphasis on exploratory data analysis, probability, and applied machine learning algorithms."
      },
      hobbies: { langTitle: 'Languages', russian: 'Russian (Intermediate)', english: 'English (Advanced)', hobbyTitle: 'Hobbies', hobbyList: 'Gaming and Astrophysics', quote: '"Constant search for the next piece of the puzzle."' }
    }
  };

  const profile = {
    name: "Bruno Wavrzenczak",
    role: t[lang].profile.role,
    bio: t[lang].profile.bio,
    location: "Curitiba, PR",
    email: "brunowavrzenczak@gmail.com",
    github: "https://github.com/BrunoWavrzenczak",
    linkedin: "https://www.linkedin.com/in/bruno-wavrzenczak/",
    // Caminhos relativos para os arquivos no GitHub
    avatarUrl: "./assets/perfil.jpg",
    cvUrl: "./assets/curriculo.pdf"
  };

  const academic = {
    education: [
      {
        title: t[lang].academicData.msc,
        institution: "Universidade Federal do Paraná (UFPR)",
        period: `2026 - ${t[lang].common.present}`,
        description: t[lang].academicData.mscDesc,
        tags: ["LLM", "Python", "Research"]
      },
      {
        title: t[lang].academicData.bsc,
        institution: 'Universidade Federal do Paraná (UFPR)',
        period: '2022 - 2025',
        description: t[lang].academicData.bscDesc,
        tags: ["Statistics", "R", "Data Analysis", "Probability", "Machine Learning"]
      }
    ],
    publications: [
      {
        title: lang === 'pt' ? "Análise de Sentimentos em Contextos Multilíngues" : "Sentiment Analysis in Multilingual Contexts",
        journal: "Congresso Brasileiro de Informática",
        year: "2023",
        link: "#",
        abstract: lang === 'pt' ? "Um estudo sobre como modelos pré-treinados se comportam em línguas de baixa disponibilidade de dados." : "A study on how pre-trained models behave in low-resource languages."
      }
    ]
  };

  const experience = [
    {
      role: lang === 'pt' ? "Cientista de Dados" : "Data Scientist",
      company: "Iotag",
      period: `2026 - ${t[lang].common.present}`,
      description: lang === 'pt' ? "Desenvolvimento de modelos preditivos e automação de pipelines de dados em larga escala." : "Development of predictive models and large-scale data pipeline automation.",
      achievements: lang === 'pt' ? [
        "Otimização de processos internos com scripts Python.",
        "Implementação de dashboards para visualização de métricas em tempo real.",
        "Mentoria técnica para estagiários da equipe."
      ] : [
        "Internal process optimization with Python scripts.",
        "Implementation of real-time dashboards for metrics visualization.",
        "Technical mentorship for team interns."
      ]
    },
    {
      role: lang === 'pt' ? "Pesquisador" : "Researcher",
      company: "Universidade de São Paulo (USP)",
      period: `2024 - ${t[lang].common.present}`,
      description: lang === 'pt' ? "Foco em extração, limpeza (ETL) e análise estatística para tomada de decisão." : "Focus on extraction, cleaning (ETL), and statistical analysis for decision making.",
      achievements: lang === 'pt' ? [
        "Automação de relatórios mensais economizando 15h/mês de trabalho manual.",
        "Integração de APIs diversas para consolidação de dados de marketing."
      ] : [
        "Monthly report automation saving 15h/month of manual work.",
        "Integration of various APIs for marketing data consolidation."
      ]
    }
  ];

  const projects = [
    {
      id: 'p1',
      title: "Self-Hosted Automation Lab",
      type: lang === 'pt' ? "Infraestrutura & Automação" : "Infrastructure & Automation",
      tech: ["Docker", "n8n", "Prometheus"],
      desc: lang === 'pt' ? "Implementação de um servidor doméstico para automação de coleta de dados acadêmicos e monitoramento de ativos financeiros." : "Implementation of a home server for academic data collection automation and financial asset monitoring.",
      details: lang === 'pt' ? "Utilizei Docker para isolamento e n8n para a orquestração de fluxos complexos sem código." : "Used Docker for isolation and n8n for no-code complex workflow orchestration.",
      longDesc: lang === 'pt'
        ? "Este projeto consistiu na criação de uma infraestrutura robusta e escalável utilizando containers Docker para hospedar serviços críticos de automação. O foco principal foi a utilização do n8n para orquestrar fluxos de coleta de dados de APIs financeiras e portais acadêmicos, armazenando tudo em um banco de dados local para análise posterior. Implementei também o Prometheus e Grafana para monitorar a saúde dos containers e a latência das automações."
        : "This project involved creating a robust and scalable infrastructure using Docker containers to host critical automation services. The main focus was using n8n to orchestrate data collection workflows from financial APIs and academic portals, storing everything in a local database for later analysis. I also implemented Prometheus and Grafana to monitor container health and automation latency.",
      images: ["./assets/projetos/automacao1.jpg"]
    },
    {
      id: 'p2',
      title: lang === 'pt' ? "Exploração de Dados Genealógicos" : "Genealogical Data Exploration",
      type: "Data Science / Hobby",
      tech: ["Python", "Pandas", "NetworkX"],
      desc: lang === 'pt' ? "Análise de grafos aplicada a registros históricos de família para encontrar padrões migratórios." : "Graph analysis applied to historical family records to find migration patterns.",
      details: lang === 'pt' ? "Um projeto que une ciência de dados com minha paixão por história e genealogia." : "A project joining data science with my passion for history and genealogy.",
      longDesc: lang === 'pt'
        ? "Utilizando técnicas de teoria dos grafos e análise de redes, processei registros paroquiais e censos históricos para mapear a árvore genealógica e as rotas de migração da minha família. O uso da biblioteca NetworkX permitiu identificar 'comunidades' e hubs geográficos onde a família se estabeleceu por gerações. O projeto incluiu a limpeza de dados não estruturados e a normalização de sobrenomes com variações fonéticas em russo e polonês."
        : "Using graph theory and network analysis techniques, I processed parish records and historical censuses to map my family tree and migration routes. The NetworkX library allowed me to identify 'communities' and geographic hubs where the family settled for generations. The project included cleaning unstructured data and normalizing surnames with phonetic variations in Russian and Polish.",
      images: ["./assets/projetos/genealogia1.jpg"]
    }
  ];

  const events = [
    {
      id: 'e1',
      title: "ERAD-PR 2023",
      date: lang === 'pt' ? "Maio 2023" : "May 2023",
      category: lang === 'pt' ? "Conferência" : "Conference",
      desc: lang === 'pt' ? "Participação na Escola Regional de Alto Desempenho. Foco em computação paralela e distribuída." : "Participation in the Regional High Performance School. Focus on parallel and distributed computing.",
      longDesc: lang === 'pt'
        ? "Durante a ERAD-PR, participei de minicursos intensivos sobre GPU Computing (CUDA) e MPI para processamento distribuído. Foi uma experiência fundamental para entender como otimizar modelos de Inteligência Computacional que demandam alto poder de processamento, além de permitir o networking com pesquisadores de diversas universidades do Paraná."
        : "During ERAD-PR, I participated in intensive mini-courses on GPU Computing (CUDA) and MPI for distributed processing. It was a fundamental experience for understanding how to optimize Computational Intelligence models that require high processing power, in addition to networking with researchers from various universities in Paraná.",
      images: ["./assets/eventos/erad1.jpg", "./assets/eventos/erad2.jpg"]
    },
    {
      id: 'e2',
      title: "Workshop de Python na UFPR",
      date: lang === 'pt' ? "Set 2023" : "Sep 2023",
      category: lang === 'pt' ? "Ensino" : "Teaching",
      desc: lang === 'pt' ? "Ministrei um minicurso de 4 horas sobre automação de tarefas repetitivas para alunos de graduação." : "Taught a 4-hour mini-course on repetitive task automation for undergraduate students.",
      longDesc: lang === 'pt'
        ? "Neste workshop, apresentei para alunos de graduação as bibliotecas Selenium, BeautifulSoup e PyAutoGUI. O objetivo foi demonstrar como automatizar tarefas burocráticas do dia a dia acadêmico, como preenchimento de formulários e coleta de editais, incentivando o uso da programação para ganho de produtividade."
        : "In this workshop, I introduced undergraduate students to the Selenium, BeautifulSoup, and PyAutoGUI libraries. The goal was to demonstrate how to automate bureaucratic daily academic tasks, such as filling out forms and collecting notices, encouraging the use of programming for productivity gains.",
      images: ["./assets/eventos/workshop1.jpg"]
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'academic':
        return (
          <div className="space-y-12 animate-in fade-in duration-500">
            <section>
              <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                <BookOpen className="text-blue-600" /> {t[lang].sections.academic}
              </h2>
              <div className="grid gap-6">
                {academic.education.map((edu, idx) => (
                  <div key={idx} className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'} p-6 rounded-2xl border`}>
                    <div className="flex justify-between items-start">
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : ''}`}>{edu.title}</h3>
                      <span className="text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">{edu.period}</span>
                    </div>
                    <p className="text-blue-500 font-medium">{edu.institution}</p>
                    <p className={`mt-3 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{edu.description}</p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {edu.tags.map(tag => (
                        <span key={tag} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${isDark ? 'bg-slate-700 border-slate-600 text-slate-400' : 'bg-white border-slate-200 text-slate-500'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                <FileText className="text-blue-600" /> {t[lang].sections.publications}
              </h2>
              <div className="space-y-4">
                {academic.publications.map((pub, idx) => (
                  <div key={idx} className={`group p-6 border rounded-2xl transition-all ${isDark ? 'bg-slate-800 border-slate-700 hover:border-blue-500' : 'bg-white border-slate-200 hover:border-blue-400'}`}>
                    <h3 className={`font-bold text-lg group-hover:text-blue-500 transition-colors ${isDark ? 'text-white' : ''}`}>{pub.title}</h3>
                    <p className="text-slate-500 text-sm mt-1">{pub.journal} • {pub.year}</p>
                    <p className={`mt-3 text-sm italic ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{pub.abstract}</p>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-widest">
                      {lang === 'pt' ? 'Ler Documento' : 'Read Paper'} <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-12 animate-in fade-in duration-500">
            <section>
              <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                <Briefcase className="text-blue-600" /> {t[lang].sections.market}
              </h2>
              <div className="space-y-8">
                {experience.map((exp, idx) => (
                  <div key={idx} className={`p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                      <div>
                        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h3>
                        <p className="text-blue-500 font-bold text-lg">{exp.company}</p>
                      </div>
                      <span className="text-sm font-black text-slate-400 uppercase tracking-widest mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    <p className={`mb-6 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{exp.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className={`flex items-start gap-3 p-4 rounded-xl ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                          <ChevronRight size={18} className="text-blue-500 shrink-0 mt-1" />
                          <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
              <Terminal className="text-blue-600" /> {t[lang].sections.lab}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedItem({ type: 'project', data: proj })}
                  className={`flex flex-col rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border cursor-pointer group active:scale-[0.98] ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}
                >
                  <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-black text-blue-500 uppercase tracking-tighter">{proj.type}</span>
                      <Maximize2 size={14} className="text-slate-500 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : ''}`}>{proj.title}</h3>
                    <p className={`mb-6 line-clamp-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{proj.desc}</p>
                    <div className={`p-4 rounded-xl mb-6 text-sm italic ${isDark ? 'bg-slate-700 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>
                      "{proj.details}"
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {proj.tech.map(t => (
                        <span key={t} className={`px-3 py-1 rounded-lg text-xs font-bold ${isDark ? 'bg-slate-700 text-slate-400' : 'bg-slate-100 text-slate-600'}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
              <ImageIcon className="text-blue-600" /> {t[lang].sections.networking}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  onClick={() => setSelectedItem({ type: 'event', data: event })}
                  className={`rounded-2xl overflow-hidden group border cursor-pointer active:scale-[0.98] transition-all shadow-sm hover:shadow-md ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}
                >
                  <div className={`aspect-video flex items-center justify-center transition-colors relative overflow-hidden ${isDark ? 'bg-slate-700 text-slate-500 group-hover:bg-slate-600' : 'bg-slate-200 text-slate-400 group-hover:bg-blue-50'}`}>
                    {event.images && event.images[0] ? (
                      <img src={event.images[0]} alt={event.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                    ) : (
                      <ImageIcon size={32} />
                    )}
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-blue-500 font-bold text-xs uppercase tracking-widest">{t[lang].common.seeMore}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase text-blue-500 tracking-widest">{event.category}</span>
                    <h3 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : ''}`}>{event.title}</h3>
                    <p className="text-slate-500 text-xs mb-4">{event.date}</p>
                    <p className={`text-sm leading-relaxed line-clamp-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-16 animate-in fade-in duration-500">
            {/* Header / Intro */}
            <section className="flex flex-col md:flex-row items-center gap-12 py-10">
              <div className="relative">
                <div className="w-56 h-56 rounded-[3rem] bg-blue-600 rotate-3 absolute inset-0 -z-10 opacity-20"></div>
                <div className={`w-56 h-56 rounded-[3rem] border-2 flex items-center justify-center text-blue-600 shadow-2xl transition-colors overflow-hidden ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
                  {/* Tenta carregar imagem, se falhar mostra ícone */}
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{ display: 'none' }}><User size={100} /></div>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>{t[lang].hero.status}</span>
                </div>
                <h1 className={`text-6xl font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{t[lang].hero.title} {profile.name.split(' ')[0]}.</h1>
                <p className={`text-xl leading-relaxed max-w-2xl mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {profile.bio} {t[lang].hero.focus} <span className="text-blue-500 font-bold underline decoration-blue-500/30">{t[lang].hero.focusHighlight}</span> {t[lang].hero.focusEnd}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button onClick={() => setActiveTab('experience')} className="px-8 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all">{t[lang].hero.portfolio}</button>
                  <a
                    href={profile.cvUrl}
                    download="Curriculo_Bruno_Wavrzenczak.pdf"
                    className={`px-8 py-4 border-2 rounded-2xl font-bold transition-all flex items-center gap-2 ${isDark ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-white border-slate-100 text-slate-900 hover:bg-slate-50'}`}
                  >
                    <Download size={18} /> {t[lang].hero.cv}
                  </a>
                </div>
              </div>
            </section>

            {/* Tech Stack & Interesses */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`md:col-span-2 p-10 rounded-[2.5rem] ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-50'}`}>
                <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-white' : ''}`}>
                  <Cpu size={24} className="text-blue-500" /> {t[lang].sections.tech}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {[
                    { name: 'Python', icon: <Code2 size={24} className="text-blue-500" /> },
                    { name: 'Docker', icon: <Box size={24} className="text-blue-500" /> },
                    { name: 'n8n', icon: <Workflow size={24} className="text-blue-500" /> },
                    { name: 'SQL', icon: <Database size={24} className="text-blue-500" /> },
                    { name: 'PyTorch', icon: <Zap size={24} className="text-blue-500" /> },
                    { name: 'NLP', icon: <Bot size={24} className="text-blue-500" /> }
                  ].map(skill => (
                    <div key={skill.name} className={`flex items-center gap-3 p-4 rounded-2xl shadow-sm border transition-colors ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-slate-100 text-slate-700'}`}>
                      <span>{skill.icon}</span>
                      <span className="font-bold">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-600 p-10 rounded-[2.5rem] text-white">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Globe size={24} /> {t[lang].sections.beyond}
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-blue-200 text-xs font-black uppercase tracking-widest mb-1">{t[lang].hobbies.langTitle}</p>
                    <p className="font-bold text-lg">{t[lang].hobbies.russian}</p>
                    <p className="font-bold text-lg">{t[lang].hobbies.english}</p>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-black uppercase tracking-widest mb-1">{t[lang].hobbies.hobbyTitle}</p>
                    <p className="font-bold text-lg">{t[lang].hobbies.hobbyList}</p>
                  </div>
                  <div className="pt-4 border-t border-blue-500/50">
                    <p className="text-sm italic opacity-80">{t[lang].hobbies.quote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-blue-100 transition-colors duration-300 ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      <nav className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b transition-colors duration-300 ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-50'}`}>
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black">B</div>
            <span className={`font-black text-xl tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>BRUNO.</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-widest">
            {['home', 'academic', 'experience', 'projects', 'gallery'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`hover:text-blue-500 transition-colors ${activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : isDark ? 'text-slate-400' : 'text-slate-400'}`}
              >
                {t[lang].nav[tab === 'home' ? 'about' : tab]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100'}`}
            >
              <Languages size={16} className="text-blue-500" />
              <span className="uppercase">{lang}</span>
            </button>

            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-3 rounded-xl transition-all border ${isDark ? 'bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700' : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className={`w-[1px] h-6 mx-2 ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}></div>

            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-xl transition-all ${isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'}`}><Github size={20} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-xl transition-all ${isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'}`}><Linkedin size={20} /></a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 pt-40 pb-32">
        {renderContent()}
      </main>

      {/* Modal Reutilizável */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in zoom-in duration-300"
          onKeyDown={(e) => e.key === 'Escape' && setSelectedItem(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setSelectedItem(null)}></div>

          {/* Modal Content */}
          <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl border transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
            <button
              onClick={() => setSelectedItem(null)}
              className={`absolute top-6 right-6 p-2 rounded-full z-10 transition-colors ${isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-500 hover:text-slate-900'}`}
            >
              <X size={24} />
            </button>

            <div className="p-8 sm:p-12">
              <div className="mb-8">
                <span className="text-xs font-black text-blue-500 uppercase tracking-widest">{selectedItem.data.category || selectedItem.data.type}</span>
                <h2 className={`text-3xl sm:text-4xl font-black mt-2 mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedItem.data.title}</h2>
                <div className="flex items-center gap-4 text-sm font-bold text-slate-500">
                  {selectedItem.data.date && <span className="flex items-center gap-1"><MapPin size={14} /> {selectedItem.data.date}</span>}
                  {selectedItem.type === 'project' && <span className="flex items-center gap-1 underline decoration-blue-500/30 tracking-wider">#{selectedItem.data.tech[0]}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {(selectedItem.data.images || []).map((img, i) => (
                  <div key={i} className={`aspect-video rounded-2xl overflow-hidden flex items-center justify-center border ${isDark ? 'bg-slate-800 border-slate-700 text-slate-600' : 'bg-slate-50 border-slate-100 text-slate-300'}`}>
                    <img src={img} alt={`${selectedItem.data.title} view ${i}`} className="w-full h-full object-cover" onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="flex flex-col items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg></div>';
                    }} />
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                  <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {selectedItem.type === 'project' ? t[lang].common.details : t[lang].common.eventDetails}
                  </h4>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {selectedItem.data.longDesc}
                  </p>
                </div>

                <div className="space-y-8">
                  {selectedItem.type === 'project' && (
                    <div>
                      <h4 className={`text-xs font-black uppercase tracking-widest mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.data.tech.map(t => (
                          <span key={t} className={`px-3 py-1 rounded-lg text-xs font-bold ${isDark ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-50 text-slate-600 border border-slate-100'}`}>{t}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className={`text-xs font-black uppercase tracking-widest mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Links</h4>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 font-bold hover:underline">
                      <ExternalLink size={16} /> GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className={`py-20 rounded-t-[4rem] transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-900 text-white'}`}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <div>
              <h2 className="text-4xl font-black mb-6">{t[lang].footer.question}<br /><span className="text-blue-400">{t[lang].footer.highlight}</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed">{t[lang].footer.sub}</p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer" className={`group flex items-center justify-between p-6 rounded-3xl transition-all ${isDark ? 'bg-slate-900 hover:bg-blue-600' : 'bg-slate-800 hover:bg-blue-600'}`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-700 rounded-xl text-white group-hover:bg-blue-500 transition-all"><Mail size={24} /></div>
                  <span className="font-bold text-xl">{profile.email}</span>
                </div>
                <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <p>© 2026 • {t[lang].footer.location}</p>
            <div className="flex gap-8">
              <span className="flex items-center gap-2"><MapPin size={14} /> UFPR </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;