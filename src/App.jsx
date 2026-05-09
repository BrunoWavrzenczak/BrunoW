import React, { useState, useEffect } from 'react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import {
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
  Bot,
  BrainCircuit,
  MessageSquare,
  BarChart2
} from 'lucide-react';

import logoRbras from './assets/eventos/rbras25/logo_rbras25.png';
import paisagemRbras from './assets/eventos/rbras25/paisagem.jpeg';
import posterRbras from './assets/eventos/rbras25/poster_rbras25.jpeg';
import rbras1 from './assets/eventos/rbras25/rbras1.jpeg';
import rbras2 from './assets/eventos/rbras25/rbras2.jpeg';

import logoSinape from './assets/eventos/sinape24/logo_sinape24.png';
import posterSinape from './assets/eventos/sinape24/poster_sinape24.jpeg';
import sinape1 from './assets/eventos/sinape24/sinape2024_1.jpeg';
import sinape2 from './assets/eventos/sinape24/sinape2024_2.jpeg';

import logoRenault from './assets/eventos/transformationday25/logo_transformationday25.png';
import renault1 from './assets/eventos/transformationday25/transformationday25_1.jpg';
import renault2 from './assets/eventos/transformationday25/transformationday_2.jpeg';
import renault3 from './assets/eventos/transformationday25/transformationday_3.jpeg';
import renault4 from './assets/eventos/transformationday25/transformationday_4.jpeg';
import renault5 from './assets/eventos/transformationday25/transformationday_5.jpeg';
import renault6 from './assets/eventos/transformationday25/transformationday_6.jpeg';
import renault7 from './assets/eventos/transformationday25/transformationday_7.jpeg';
import renault8 from './assets/eventos/transformationday25/transformationday_8.jpeg';

import euPic from './assets/eu.jpeg';

import logoFifa from './assets/projetos/fifa21/logo.png';
import fifa1 from './assets/projetos/fifa21/fifa21_1.png';
import fifa2 from './assets/projetos/fifa21/fifa21_2.png';
import fifa3 from './assets/projetos/fifa21/fifa21_3.png';
import posterIslp from './assets/projetos/poster_competition/poster.png';
import dslImage from './assets/projetos/datascilabs/datascilabs.png';
import aulaR from './assets/projetos/aula_de_R/aula_R.png';
import ensinoMedio1 from './assets/projetos/aula_ensino_medio/ensino_medio_1.jpeg';
import ensinoMedio2 from './assets/projetos/aula_ensino_medio/ensino_medio_2.jpeg';
const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState('en');
  const [isDark, setIsDark] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  // Bloquear scroll do body quando o modal ou imagem estiver aberto
  useEffect(() => {
    if (selectedItem || expandedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedItem, expandedImage]);

  // Dicionário de Traduções
  const t = {
    pt: {
      nav: { about: 'Sobre', academic: 'Acadêmico', experience: 'Experiência', projects: 'Projetos', gallery: 'Eventos' },
      common: { present: 'Presente', close: 'Fechar', details: 'Detalhes do Projeto', eventDetails: 'Sobre o Evento', seeMore: 'Clique para ver mais' },
      hero: { title: 'Oi, eu sou', focus: 'Além disso, utilizo a', focusHighlight: 'Inteligência Artificial', focusEnd: 'para construir automações e otimizar processos reais.', status: 'Disponível para Colaborações', cv: 'Currículo .PDF', portfolio: 'Ver Experiência' },
      sections: { academic: 'Formação Acadêmica', academicRoles: 'Pesquisa & Extensão', publications: 'Publicações e Artigos', market: 'Experiência no Mercado', lab: 'Projetos & Laboratório', networking: 'Eventos & Networking', tech: 'Arsenal Técnico', beyond: 'Além do Código' },
      profile: {
        role: "Pesquisador & Especialista em IA",
        bio: "Trabalho com Aprendizado de Máquina explorando e extraindo valor de dados não estruturados, com forte atuação nos setores de saúde e agricultura.",
      },
      footer: { question: 'Vamos criar algo', highlight: 'interessante juntos?', sub: 'Seja para falar sobre um projeto de dados, tirar uma dúvida sobre automação ou só para praticar russo.', location: 'Feito em Curitiba para o Mundo' },
      academicData: {
        msc: "Mestrado em Ciência da Computação",
        bsc: "Graduação em Estatística e Ciência de Dados",
        mscDesc: "Pesquisando Inteligência Computacional, com foco principal em LLMs e Processamento de Linguagem Natural.",
        bscDesc: "Estudos focados em métodos quantitativos, inferência estatística e modelagem computacional. Forte ênfase em análise exploratória, probabilidade e aprendizado de máquina aplicado."
      },
      hobbies: { langTitle: 'Idiomas', portuguese: 'Português (Nativo)', english: 'Inglês (Avançado)', russian: 'Russo (Intermediário)', hobbyTitle: 'Hobbies', hobbyList: 'Jogos e Astrofísica', quote: '"Em busca pelo verdadeiro valor do parâmetro."' }
    },
    en: {
      nav: { about: 'About', academic: 'Academic', experience: 'Experience', projects: 'Projects', gallery: 'Events' },
      common: { present: 'Present', close: 'Close', details: 'Project Details', eventDetails: 'About the Event', seeMore: 'Click to see more' },
      hero: { title: "Hi, I'm", focus: 'Additionally, I use', focusHighlight: 'Artificial Intelligence', focusEnd: 'to build automations and optimize real-world processes.', status: 'Available for Collaborations', cv: 'Resume .PDF', portfolio: 'View Experience' },
      sections: { academic: 'Academic Background', academicRoles: 'Research & Extension', publications: 'Publications & Articles', market: 'Professional Experience', lab: 'Projects & Lab', networking: 'Events & Networking', tech: 'Technical Stack', beyond: 'Beyond Code' },
      profile: {
        role: "Researcher & AI Specialist",
        bio: "I work with Machine Learning exploring and extracting value from unstructured data, with a strong presence in the healthcare and agriculture sectors.",
      },
      footer: { question: "Let's create something", highlight: 'interesting together?', sub: 'Whether you need help with a data project, have questions about automation, or just want to practice Russian.', location: 'Made in Curitiba for the World' },
      academicData: {
        msc: "MSc in Computer Science",
        bsc: "BSc in Statistics and Data Science",
        mscDesc: "Researching Computational Intelligence, with a strong focus on LLMs and Natural Language Processing.",
        bscDesc: "Studied quantitative methods, statistical inference, and computational modeling. Heavy emphasis on exploratory data analysis, probability, and applied machine learning."
      },
      hobbies: { langTitle: 'Languages', portuguese: 'Portuguese (Native)', english: 'English (Advanced)', russian: 'Russian (Intermediate)', hobbyTitle: 'Hobbies', hobbyList: 'Gaming and Astrophysics', quote: '"In search of the true parameter value."' }
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
    avatarUrl: euPic,
    cvUrl: lang === 'pt' ? "./Bruno_Wavrzenczak_cv_pt.pdf" : "./Bruno_Wavrzenczak_cv_en.pdf"
  };

  const academic = {
    education: [
      {
        title: t[lang].academicData.msc,
        institution: "Universidade Federal do Paraná (UFPR)",
        period: `2026 - ${t[lang].common.present}`,
        description: t[lang].academicData.mscDesc,
        tags: ["LLM", "Python", "Research", "PyTorch"]
      },
      {
        title: t[lang].academicData.bsc,
        institution: 'Universidade Federal do Paraná (UFPR)',
        period: '2022 - 2025',
        description: t[lang].academicData.bscDesc,
        tags: ["Statistics", "R", "Data Analysis", "Probability", "Machine Learning"]
      }
    ],
    publications: [],
    roles: [
      {
        role: lang === 'pt' ? "Pesquisador" : "Researcher",
        company: "Universidade de São Paulo (USP)",
        period: `2024 - ${t[lang].common.present}`,
        description: lang === 'pt' ? "Pesquisando abordagens multimodais com dados não estruturados. Extraio e processo features diretamente de vídeos (áudio, imagem e texto)." : "Researching multimodal approaches to unstructured data. I extract and process features directly from video, audio, and text.",
        achievements: lang === 'pt' ? [
          "Geração de embeddings multimodais utilizando LLMs.",
          "Treinamento e ajuste fino de modelos de aprendizado de máquina.",
          "Construção de modelos preditivos para classificar pacientes em alto risco clínico de esquizofrenia (ARMS)."
        ] : [
          "Generating multimodal embeddings using LLMs.",
          "Training and fine-tuning machine learning models.",
          "Building predictive models to classify patients at clinical high risk for schizophrenia (ARMS)."
        ]
      },
      {
        role: lang === 'pt' ? "Bolsista" : "Scholar",
        company: "Programa de Educação Tutorial (PET Estatística - UFPR)",
        period: "2022 - 2025",
        description: lang === 'pt' ? "Desenvolvimento de projetos de pesquisa, ensino e extensão na área de estatística e ciência de dados." : "Development of research, teaching, and outreach projects in statistics and data science.",
        achievements: lang === 'pt' ? [
          "Organização de minicursos e eventos acadêmicos.",
          "Ministração de aulas de reforço das disciplinas curriculares para auxiliar no desempenho acadêmico de outros alunos."
        ] : [
          "Organizing mini-courses and academic events.",
          "Teaching reinforcement classes for core subjects to support the academic performance of other students."
        ]
      }
    ]
  };

  const experience = [
    {
      role: lang === 'pt' ? "Cientista de Dados" : "Data Scientist",
      company: "Iotag",
      period: `2026 - ${t[lang].common.present}`,
      description: lang === 'pt' ? "Trabalhando no pipeline de processamento de dados IoT para extrair informações reais de máquinas agrícolas." : "Working on the IoT data pipeline to extract actionable insights from agricultural machinery.",
      achievements: lang === 'pt' ? [
        "Processamento e decodificação de dados via protocolos veiculares (CAN, ISOBUS, J1939).",
        "Testes e validação de máquinas agrícolas de precisão.",
        "Criação de dashboards e ferramentas para acompanhamento de métricas estratégicas pelos clientes."
      ] : [
        "Decoding and processing telemetry data via vehicle protocols (CAN, ISOBUS, J1939).",
        "Testing and validating precision agriculture equipment.",
        "Building dashboards and visual tools so end-users can easily track strategic metrics."
      ]
    }
  ];

  const projects = [
    {
      id: 'p_ensino_medio',
      title: lang === 'pt' ? "Aula de Estatística - Ensino Médio" : "Statistics Class - High School",
      type: "Extensão / Ensino",
      tech: ["Estatística", "t-SNE", "Machine Learning"],
      desc: lang === 'pt' ? "Aula de introdução à estatística e sistemas de recomendação para alunos do ensino médio." : "Taught an introductory class on statistics and recommendation systems for high schoolers.",
      details: lang === 'pt' ? "Projeto de extensão com foco em despertar o interesse de jovens pela Ciência de Dados." : "An outreach initiative to spark high schoolers' interest in Data Science.",
      longDesc: lang === 'pt'
        ? "Neste projeto de extensão, tive a grande oportunidade de ministrar uma aula especial voltada para alunos do ensino médio. O objetivo foi apresentar a Estatística de forma aplicada, prática e atrativa, despertando o interesse dos jovens pela Ciência de Dados. Durante a apresentação, expliquei como funcionam os algoritmos de recomendação no nosso dia a dia, utilizando o método t-SNE (t-Distributed Stochastic Neighbor Embedding) para ilustrar a redução de dimensionalidade em um conjunto de dados de filmes. Foi uma experiência muito gratificante conseguir traduzir conceitos matemáticos complexos de forma visual e acessível para esse público."
        : "During this outreach project, I taught a special class to high school students to show them how Statistics applies to the real world. To spark their interest in Data Science, I explained how everyday recommendation algorithms work. I used the t-SNE dimensionality reduction method on a movie dataset to visually translate complex math into something accessible and fun for them.",
      images: [ensinoMedio1, ensinoMedio2]
    },
    {
      id: 'p_dsl',
      title: "DataSciLabs",
      type: "Extensão / Web Development",
      tech: ["Hugo", "Web Development", "Extension Project"],
      desc: lang === 'pt' ? "Criação do site oficial do DataSciLabs, um projeto da UFPR voltado para alfabetização estatística." : "Built the official website for DataSciLabs, a UFPR outreach project focused on statistical literacy.",
      details: lang === 'pt' ? "Projeto de extensão focado em promover Estatística e Ciência de Dados." : "University outreach project promoting Statistics and Data Science.",
      longDesc: lang === 'pt'
        ? "O DataSciLabs é um programa de extensão em Ciência de Dados do Departamento de Estatística da UFPR, criado com o objetivo de promover a Estatística e a Ciência de Dados na sociedade, contribuindo para a alfabetização estatística. Durante minha participação, minha equipe e eu ficamos responsáveis por criar e desenvolver o site oficial do projeto. O portal funciona como um hub central de informações, reunindo artigos no blog, divulgação de cursos, e os contatos da equipe."
        : "DataSciLabs is an outreach program run by the UFPR Statistics Department to promote statistical literacy. My team and I built the project's official website from scratch. It now serves as the main information hub, hosting blog articles, course announcements, and team info.",
      link: "http://leg.ufpr.br/~ara/dsl/",
      linkText: lang === 'pt' ? "Visitar Site" : "Visit Website",
      images: [dslImage]
    },
    {
      id: 'p_dsl_aula',
      title: lang === 'pt' ? "Minicurso de R (DataSciLabs)" : "R Mini-course (DataSciLabs)",
      type: "Extensão / Ensino",
      tech: ["R", "Data Analysis", "Teaching"],
      desc: lang === 'pt' ? "Aula introdutória sobre a linguagem R ministrada para o público externo na UFPR." : "Taught an introductory R programming class to the public at UFPR.",
      details: lang === 'pt' ? "Iniciativa de alfabetização estatística através do DataSciLabs." : "Part of the DataSciLabs statistical literacy initiative.",
      longDesc: lang === 'pt'
        ? "Como parte das atividades do projeto de extensão DataSciLabs, atuei como instrutor ministrando uma aula prática de introdução à linguagem R. O diferencial desta iniciativa foi o seu foco em democratizar a análise de dados: o curso foi totalmente aberto ao público externo, alcançando pessoas de fora da universidade e de outros cursos além da Estatística. A experiência foi incrível para praticar a didática e contribuir com a alfabetização estatística da comunidade."
        : "As part of DataSciLabs, I taught a hands-on introductory R programming class. What made this special was our focus on democratizing data analysis—the course was entirely open to the public, bringing in people from outside the university and from non-tech backgrounds. It was a great way to practice teaching while giving back to the community.",
      images: [aulaR]
    },
    {
      id: 'p_islp',
      title: "ISLP Poster Competition",
      type: "Data Science / Competition",
      tech: ["R", "Estatística Descritiva", "Data Visualization"],
      desc: lang === 'pt' ? "Análise do perfil dos turistas da Linha Turismo de Curitiba." : "Analysis of the tourist profile of the Curitiba Tourist Bus line.",
      details: lang === 'pt' ? "Concurso bienal promovido pelo International Statistical Literacy Project." : "Biennial contest promoted by the International Statistical Literacy Project.",
      longDesc: lang === 'pt'
        ? "Participação na ISLP Poster Competition 2024-2025, um concurso global promovido a cada dois anos pelo International Statistical Literacy Project. Neste projeto, construímos um poster científico com o objetivo de analisar o perfil dos usuários da famosa Linha Turismo (ônibus de turismo) de Curitiba. Exploramos dados demográficos e preferências para gerar insights estatísticos sobre o comportamento dos turistas na cidade."
        : "Participation in the ISLP Poster Competition 2024-2025, a global contest promoted every two years by the International Statistical Literacy Project. In this project, we built a scientific poster aiming to analyze the profile of users of the famous Curitiba Tourist Bus line. We explored demographic data and preferences to generate statistical insights about tourist behavior in the city.",
      images: [posterIslp]
    },
    {
      id: 'p0',
      title: "Dashboard FIFA 2021",
      type: "Data Science / R Shiny",
      tech: ["R", "Shiny", "Data Visualization"],
      desc: lang === 'pt' ? "Meu primeiro dashboard em Shiny utilizando dados de jogadores do FIFA 2021." : "My first Shiny dashboard using FIFA 2021 player data.",
      details: lang === 'pt' ? "Projeto desenvolvido durante uma disciplina acadêmica focada em R Shiny." : "Project developed during an academic course focused on R Shiny.",
      longDesc: lang === 'pt'
        ? "Este foi um dos meus primeiros projetos utilizando o framework Shiny no R. A proposta da disciplina era criar um dashboard do zero, e cada aluno podia escolher sua própria base de dados – eu optei por utilizar dados de jogadores do FIFA 2021. O objetivo foi construir um dashboard interativo capaz de analisar e visualizar os atributos dos atletas, permitindo explorar os perfis, comparar habilidades e gerar insights visuais."
        : "This was one of my first projects using the Shiny framework in R. The course assignment was to build a dashboard from scratch, and each student could choose their own dataset—I chose to use FIFA 2021 player data. The goal was to build an interactive dashboard capable of analyzing and visualizing athlete attributes, allowing users to explore profiles, compare skills, and generate visual insights.",
      link: "https://wavrzenczak.shinyapps.io/Jogadores_FiFA_21/",
      linkText: lang === 'pt' ? "Ver Dashboard" : "View Dashboard",
      github: "https://github.com/BrunoWavrzenczak/Dashboard_FIFA-2021",
      images: [logoFifa, fifa1, fifa2, fifa3]
    }
  ];

  const events = [
    {
      id: 'e5',
      title: "3º Renault Transformation Day",
      date: lang === 'pt' ? "24 de outubro de 2025" : "October 24, 2025",
      category: lang === 'pt' ? "Hackathon / Case" : "Hackathon / Case Study",
      desc: lang === 'pt' ? "1º lugar no case de Compras e 3º lugar geral. Modelo de detecção de litígios e imersão na fábrica da Renault." : "1st place in the Purchasing case and 3rd place overall. Litigation detection model and immersion in the Renault factory.",
      longDesc: lang === 'pt'
        ? "Participação incrível no 3º Renault Transformation Day, na fábrica de São José dos Pinhais. Competindo com várias universidades, nossa equipe da UFPR conquistou o 1º lugar no case de Compras com um modelo para detectar e interpretar litígios, e também levamos o 3º lugar geral de melhor ideia! Tivemos um tour exclusivo pela linha de produção, conhecemos o novo carro 'Boreal' uma semana antes do lançamento e, para fechar com chave de ouro, ainda ganhei uma dinâmica adivinhando a soma dos números de uma bexiga usando pura estatística!"
        : "Incredible participation at the 3rd Renault Transformation Day at the São José dos Pinhais factory. Competing against several universities, our UFPR team won 1st place in the Purchasing case with a model to detect and interpret litigations, and we also took 3rd place overall for the best idea! We had an exclusive tour of the production line, saw the new 'Boreal' car a week before its launch, and to top it off, I won a guessing game for the sum of numbers inside a balloon using pure statistics!",
      link: "https://imprensa.renault.com.br/release/item/renault-do-brasil-promove--edicao-do-transformation-day",
      linkText: lang === 'pt' ? "Release de Imprensa" : "Press Release",
      images: [logoRenault, renault1, renault2, renault3, renault4, renault5, renault6, renault7, renault8]
    },
    {
      id: 'e3',
      title: "69ª RBras e 21º SEAGRO",
      date: lang === 'pt' ? "4 a 8 de agosto de 2025" : "August 4-8, 2025",
      category: lang === 'pt' ? "Conferência" : "Conference",
      desc: lang === 'pt' ? "Apresentação de poster no evento RBras/SEAGRO com muito engajamento." : "Poster presentation at the RBras/SEAGRO event with high engagement.",
      longDesc: lang === 'pt'
        ? "Foi incrível participar da 69ª Reunião Anual da RBras e do 21º SEAGRO, em Vitória - ES! A cidade é belíssima e rendeu ótimas fotos. Tive a oportunidade de apresentar um poster sobre o meu trabalho, o que atraiu muito interesse do público e gerou discussões riquíssimas. Além disso, muitos colegas da faculdade também puderam ir, tornando a experiência ainda mais marcante."
        : "Attending the 69th RBras Annual Meeting and 21st SEAGRO in Vitória, Espírito Santo, was an amazing experience! The city is beautiful and perfect for photography. I had the chance to present a poster on my work, which drew significant attention and sparked highly productive discussions. Additionally, sharing this trip with many of my university peers made it even more memorable.",
      link: "https://69rbras21seagro.com.br/",
      linkText: lang === 'pt' ? "Site do Evento" : "Event Website",
      images: [logoRbras, posterRbras, rbras1, rbras2, paisagemRbras]
    },
    {
      id: 'e4',
      title: "25º SINAPE",
      date: lang === 'pt' ? "4 a 9 de agosto de 2024" : "August 4-9, 2024",
      category: lang === 'pt' ? "Conferência" : "Conference",
      desc: lang === 'pt' ? "Minha primeira grande viagem acadêmica e apresentação de poster no Simpósio Nacional de Probabilidade e Estatística." : "My first major academic trip and poster presentation at the National Symposium on Probability and Statistics.",
      longDesc: lang === 'pt'
        ? "Participar do 25º SINAPE em Fortaleza, Ceará, foi um marco na minha trajetória! Foi a minha primeira viagem para um evento de grande porte e também a minha primeira experiência apresentando um poster para um público tão grande e qualificado. O evento ocorreu no Oásis Atlântico Imperial, e a troca de conhecimentos e o networking foram sensacionais."
        : "Attending the 25th SINAPE in Fortaleza, Ceará, was a milestone in my journey! It was my first trip to a major event and my first experience presenting a poster to such a large and qualified audience. The event took place at the Oásis Atlântico Imperial, and the knowledge exchange and networking were phenomenal.",
      link: "https://www.even3.com.br/sinape2024-420824/",
      linkText: lang === 'pt' ? "Site do Evento" : "Event Website",
      images: [logoSinape, posterSinape, sinape1, sinape2]
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

            {academic.roles && academic.roles.length > 0 && (
              <section>
                <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                  <Briefcase className="text-blue-600" /> {t[lang].sections.academicRoles}
                </h2>
                <div className="space-y-8">
                  {academic.roles.map((role, idx) => (
                    <div key={idx} className={`p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                        <div>
                          <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{role.role}</h3>
                          <p className="text-blue-500 font-bold text-lg">{role.company}</p>
                        </div>
                        <span className="text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full mt-2 md:mt-0">{role.period}</span>
                      </div>
                      <p className={`mb-6 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{role.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {role.achievements.map((achievement, i) => (
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
            )}

            <section>
              <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                <FileText className="text-blue-600" /> {t[lang].sections.publications}
              </h2>
              <div className="space-y-4">
                {academic.publications.length > 0 ? (
                  academic.publications.map((pub, idx) => (
                    <div key={idx} className={`group p-6 border rounded-2xl transition-all ${isDark ? 'bg-slate-800 border-slate-700 hover:border-blue-500' : 'bg-white border-slate-200 hover:border-blue-400'}`}>
                      <h3 className={`font-bold text-lg group-hover:text-blue-500 transition-colors ${isDark ? 'text-white' : ''}`}>{pub.title}</h3>
                      <p className="text-slate-500 text-sm mt-1">{pub.journal} • {pub.year}</p>
                      <p className={`mt-3 text-sm italic ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{pub.abstract}</p>
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-widest">
                        {lang === 'pt' ? 'Ler Documento' : 'Read Paper'} <ExternalLink size={14} />
                      </a>
                    </div>
                  ))
                ) : (
                  <div className={`p-8 border rounded-2xl text-center border-dashed ${isDark ? 'border-slate-700 bg-slate-800/50' : 'border-slate-300 bg-slate-50'}`}>
                    <p className={`italic ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {lang === 'pt' 
                        ? 'Ainda convergindo... Novidades em breve!' 
                        : 'Still converging... Updates coming soon!'}
                    </p>
                  </div>
                )}
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
                      <span className="text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full mt-2 md:mt-0">{exp.period}</span>
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
                <h1 className={`text-6xl font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{t[lang].hero.title} {profile.name}.</h1>
                <p className={`text-xl leading-relaxed max-w-2xl mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {profile.bio} {t[lang].hero.focus} <span className="text-blue-500 font-bold underline decoration-blue-500/30">{t[lang].hero.focusHighlight}</span> {t[lang].hero.focusEnd}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button onClick={() => setActiveTab('experience')} className="px-8 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all">{t[lang].hero.portfolio}</button>
                  <a
                    href={profile.cvUrl}
                    download={lang === 'pt' ? "Curriculo_Bruno_Wavrzenczak.pdf" : "Resume_Bruno_Wavrzenczak.pdf"}
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
                    { name: 'R', icon: <BarChart2 size={24} className="text-blue-500" /> },
                    { name: 'Docker', icon: <Box size={24} className="text-blue-500" /> },
                    { name: 'SQL', icon: <Database size={24} className="text-blue-500" /> },
                    { name: 'PyTorch', icon: <Zap size={24} className="text-blue-500" /> },
                    { name: 'Agentic AI', icon: <BrainCircuit size={24} className="text-blue-500" /> },
                    { name: 'LLM', icon: <MessageSquare size={24} className="text-blue-500" /> },
                    { name: 'NLP', icon: <Bot size={24} className="text-blue-500" /> },
                    { name: 'n8n', icon: <Workflow size={24} className="text-blue-500" /> }
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
                    <p className="font-bold text-lg">{t[lang].hobbies.portuguese}</p>
                    <p className="font-bold text-lg">{t[lang].hobbies.english}</p>
                    <p className="font-bold text-lg">{t[lang].hobbies.russian}</p>
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
                  <div key={i} className={`aspect-video rounded-2xl overflow-hidden flex items-center justify-center border cursor-pointer hover:opacity-90 transition-opacity ${isDark ? 'bg-slate-800 border-slate-700 text-slate-600' : 'bg-slate-50 border-slate-100 text-slate-300'}`} onClick={() => setExpandedImage(img)}>
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

                  {(selectedItem.data.link || selectedItem.data.github) && (
                    <div>
                      <h4 className={`text-xs font-black uppercase tracking-widest mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Links</h4>
                      <div className="flex flex-col gap-3">
                        {selectedItem.data.github && (
                          <a href={selectedItem.data.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 font-bold hover:underline">
                            <Github size={16} /> {lang === 'pt' ? 'Repositório GitHub' : 'GitHub Repository'}
                          </a>
                        )}
                        {selectedItem.data.link && (
                          <a href={selectedItem.data.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 font-bold hover:underline">
                            <ExternalLink size={16} /> {selectedItem.data.linkText || (lang === 'pt' ? 'Acessar Link' : 'Access Link')}
                          </a>
                        )}
                      </div>
                    </div>
                  )}
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

      {/* Expanded Image Viewer */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setExpandedImage(null)}
        >
          <button
            onClick={() => setExpandedImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full z-10 bg-slate-800/50 text-white hover:bg-slate-700 transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={expandedImage}
            alt="Expanded view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default App;