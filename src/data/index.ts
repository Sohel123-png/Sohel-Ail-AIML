import { 
  Code2, 
  Database, 
  BrainCircuit, 
  Network, 
  TerminalSquare, 
  LayoutTemplate,
  LineChart,
  Bot
} from 'lucide-react';

export const personalInfo = {
  name: 'Sohel Ali',
  title: 'AI/ML ENGINEER - DATA SCIENCE - GENAI',
  subtitle: 'Data Science - Generative AI - Intelligent Systems',
  headline: 'Building intelligent systems from data to deployment.',
  about: `I like working across the full lifecycle of intelligent products - understanding the problem, exploring data, building models, exposing them through APIs and turning experiments into usable applications.

My work spans classical Data Science and Machine Learning, Deep Learning, NLP, Computer Vision and modern Generative AI. On the engineering side I work with Flask, Django and FastAPI, SQL databases, Git/GitHub and Docker.

The portfolio below combines predictive analytics, risk/fraud modeling, customer intelligence, SQL analytics, recommendation work and agentic AI research systems.`,
  quote: "Understand the problem. Build the system. Make the result usable.",
  email: 'sasilsaiyad@gmail.com',
  github: 'https://github.com/Sohel123-png',
  linkedin: 'https://www.linkedin.com/in/sohel-ali-6435253a8',
  resume: 'https://docs.google.com/document/d/1316InVEKpKYW6KCaYB7LeBwD6N3SeRV_/edit?usp=sharing&ouid=110163847811964226752&rtpof=true&sd=true'
};

export const skills = [
  {
    category: 'Programming',
    icon: Code2,
    items: ['Python', 'SQL', 'JavaScript']
  },
  {
    category: 'Data Science',
    icon: LineChart,
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'EDA', 'Statistics']
  },
  {
    category: 'Machine Learning',
    icon: BrainCircuit,
    items: ['Supervised Learning', 'Unsupervised Learning', 'Regression', 'Classification', 'Clustering', 'Feature Engineering', 'Model Evaluation', 'Hyperparameter Tuning']
  },
  {
    category: 'Deep Learning',
    icon: Network,
    items: ['Deep Learning', 'Neural Networks', 'CNN', 'RNN / LSTM', 'NLP', 'Computer Vision', 'Transformers']
  },
  {
    category: 'Generative AI',
    icon: Bot,
    items: ['Generative AI', 'LLMs', 'Prompt Engineering', 'Embeddings', 'RAG', 'Vector Databases', 'AI Agents', 'Multi-Agent Systems', 'Tool Calling']
  },
  {
    category: 'Backend & App',
    icon: LayoutTemplate,
    items: ['Flask', 'FastAPI', 'Django', 'REST APIs', 'HTML', 'CSS', 'JavaScript', 'Streamlit']
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'SQLite', 'MongoDB']
  },
  {
    category: 'Tools & Engineering',
    icon: TerminalSquare,
    items: ['Git', 'GitHub', 'Docker', 'Jupyter', 'VS Code']
  }
];

export const projects = [
  {
    id: 1,
    title: 'Customer Intelligence ML Platform',
    category: 'ai',
    number: '01',
    description: 'End-to-end Django platform combining data ingestion, feature engineering, ML prediction, customer analytics and MLOps monitoring.',
    tags: ['Python', 'ML', 'Customer Analytics'],
    stack: 'Python · Django · Django REST Framework · scikit-learn · pandas · Celery · Redis · Chart.js',
    github: 'https://github.com/Sohel123-png/customer-intelligence-ml-platform',
    live: 'https://customer-intelligence-tr7l.onrender.com/',
    problem: 'Turn raw product and customer data into usable predictions and analytics while keeping the deployed ML workflow observable.',
    approach: 'Ingest external data, separate raw and cleaned layers, create historical snapshots and features, train models, store predictions, evaluate them later, monitor errors and detect drift.',
    details: 'The documented system includes ETL-style ingestion, temporal validation, model persistence, prediction monitoring, drift checks, customer churn and segmentation analytics, CSV exports and a Django dashboard. The repository also documents deployment on Render and a health endpoint.',
    visualizationType: 'network' // For custom visual components
  },
  {
    id: 2,
    title: 'Multi-Agent Research System',
    category: 'ai',
    number: '02',
    description: 'Agentic research assistant with a four-stage pipeline that searches, reads, writes and critiques research output.',
    tags: ['Agents', 'Multi-Agent', 'Research'],
    stack: 'Python · FastAPI · Mistral AI · Tavily Search API · BeautifulSoup · HTML5 · CSS3 · Vanilla JavaScript · EventSource',
    github: 'https://github.com/Sohel123-png/Multi-agent-research-system',
    live: 'https://multi-agent-research-system-1-zbio.onrender.com/',
    problem: 'Build a research workflow that can coordinate multiple AI stages instead of relying on a single generation step.',
    approach: 'The documented pipeline runs Search → Read → Write → Critique and streams progress to the custom frontend using Server-Sent Events.',
    details: 'The repository documents a FastAPI backend, custom frontend, SSE-based progress streaming, URL scraping, error events with partial-result recovery and a single-server deployment model.',
    visualizationType: 'nodes'
  },
  {
    id: 3,
    title: 'SQL E-Commerce Analytics',
    category: 'data',
    number: '03',
    description: 'Advanced SQL analytics project using PostgreSQL for business-oriented e-commerce analysis.',
    tags: ['SQL', 'PostgreSQL', 'CTEs'],
    stack: 'PostgreSQL · SQL · CTE · Window Functions · Analytics',
    github: 'https://github.com/Sohel123-png/sql-ecommerce-analytics-project',
    live: '',
    problem: 'Extract business-oriented insights from e-commerce data with advanced SQL analysis.',
    approach: 'Use PostgreSQL and SQL techniques including CTEs and window functions for analytical queries.',
    details: 'Implementation details are intentionally limited to the documented SQL/PostgreSQL scope.',
    visualizationType: 'database'
  },
  {
    id: 4,
    title: 'Loan Default Prediction',
    category: 'ml',
    number: '04',
    description: 'Predictive modeling project focused on loan-default risk.',
    tags: ['Classification', 'Risk', 'ML'],
    stack: 'Python · Classification · Risk Analytics · Machine Learning',
    github: 'https://github.com/Sohel123-png/Loan_Default-Prediction',
    live: '',
    problem: 'Predict loan-default risk from structured data.',
    approach: 'Build a classification-oriented machine-learning workflow for risk prediction.',
    details: 'Repository source should be used for the exact preprocessing, models, and evaluation implementation.',
    visualizationType: 'dashboard'
  },
  {
    id: 5,
    title: 'Mansik Santulan Score',
    category: 'ml',
    number: '05',
    description: 'Notebook-based data science project exploring predictive scoring.',
    tags: ['Jupyter', 'Prediction'],
    stack: 'Jupyter Notebook · Data Science · Prediction',
    github: 'https://github.com/Sohel123-png/Mansik-Santulan-Score',
    live: '',
    problem: 'Explore a predictive scoring workflow through data-science analysis.',
    approach: 'Use a notebook-based data-science workflow to explore prediction and scoring.',
    details: 'Exact modeling steps and metrics are not asserted here beyond the documented notebook-based scope.',
    visualizationType: 'analytics'
  },
  {
    id: 6,
    title: 'Cell Analyzer',
    category: 'ai',
    number: '06',
    description: 'Python project in the cell-analysis domain.',
    tags: ['Python', 'Analysis'],
    stack: 'Python · Cell Analysis',
    github: 'https://github.com/Sohel123-png/cell_analyzer',
    live: '',
    problem: 'Analyze cell-related data in an applied Python analysis project.',
    approach: 'Use Python for cell-analysis work, with the repository serving as the implementation source.',
    details: 'Exact algorithms and implementation details should be taken from the repository; none are invented here.',
    visualizationType: 'nodes'
  },
  {
    id: 7,
    title: 'Credit Card Fraud Detection',
    category: 'ml',
    number: '07',
    description: 'Machine learning project focused on identifying fraudulent transactions.',
    tags: ['Classification', 'Fraud'],
    stack: 'Machine Learning · Classification · Fraud Detection',
    github: 'https://github.com/Sohel123-png/Credit-Card-Fraud-Detection',
    live: '',
    problem: 'Identify potentially fraudulent credit-card transactions.',
    approach: 'Apply machine-learning classification concepts to fraud detection.',
    details: 'Exact preprocessing, models, and evaluation details should be taken from the repository source.',
    visualizationType: 'network'
  },
  {
    id: 8,
    title: 'Wholesale Customer Classifier',
    category: 'ml',
    number: '08',
    description: 'Notebook-based customer classification project.',
    tags: ['Classification', 'Customer'],
    stack: 'Jupyter · Classification · Customer Analytics',
    github: 'https://github.com/Sohel123-png/wholesale-customer-classifier',
    live: '',
    problem: 'Classify wholesale customers using a notebook-based ML workflow.',
    approach: 'Use notebook-based customer analytics and classification.',
    details: 'Exact features, models, and metrics are not asserted here beyond the documented classification scope.',
    visualizationType: 'analytics'
  },
  {
    id: 9,
    title: 'Used Bike Price Predictor',
    category: 'ml',
    number: '09',
    description: 'Regression project for predicting used-bike prices from structured features.',
    tags: ['Regression', 'Feature Engineering'],
    stack: 'Python · Regression · Feature Engineering',
    github: 'https://github.com/Sohel123-png/used-bike-price-predictor',
    live: '',
    problem: 'Predict used-bike prices from structured features.',
    approach: 'Apply regression and feature-engineering concepts to price prediction.',
    details: 'Exact feature set, model choice, and evaluation details should be taken from the repository source.',
    visualizationType: 'dashboard'
  },
  {
    id: 10,
    title: 'Titanic Survival Prediction',
    category: 'ml',
    number: '10',
    description: 'Classic binary-classification project covering data preparation, feature engineering, model comparison and a Streamlit interface.',
    tags: ['Scikit-learn', 'Classification', 'Streamlit'],
    stack: 'Python · Pandas · Scikit-learn · Matplotlib · Seaborn · Streamlit',
    github: 'https://github.com/Sohel123-png/Titanic-Survival-Prediction',
    live: '',
    problem: 'Predict whether a Titanic passenger survived from structured passenger attributes such as class, sex, age and fare.',
    approach: 'The repository documents data cleaning, categorical encoding, feature engineering, an 80/20 train-test split, comparison of multiple classifiers and a Streamlit prediction interface.',
    details: 'The README documents handling missing values, FamilySize and IsAlone features, model comparison and evaluation with accuracy, confusion matrix, precision, recall, F1 and ROC-AUC.',
    visualizationType: 'analytics'
  },
  {
    id: 11,
    title: 'News App',
    category: 'backend',
    number: '11',
    description: 'Python Flask web application using a news API, demonstrating backend and web integration.',
    tags: ['Flask', 'API', 'HTML/CSS'],
    stack: 'Python · Flask · HTML · CSS · API',
    github: 'https://github.com/Sohel123-png/news-app',
    live: '',
    problem: 'Deliver a Python Flask web application around a news API.',
    approach: 'Use Flask with HTML/CSS and API integration to build the web application.',
    details: 'The portfolio documents Flask, HTML/CSS, and API integration; the repository is the source for exact implementation details.',
    visualizationType: 'database'
  },
  {
    id: 12,
    title: 'Movie Recommendation System',
    category: 'ai',
    number: '12',
    description: 'Recommendation-system work using deep learning and collaborative-filtering concepts.',
    tags: ['Recommendation', 'Deep Learning'],
    stack: 'Deep Learning · Recommendation · Collaborative Filtering',
    github: 'https://github.com/Sohel123-png', // Original had this
    live: '',
    problem: 'Explore movie recommendation using recommendation and collaborative-filtering concepts.',
    approach: 'Use deep-learning/recommendation concepts to build a movie recommendation workflow.',
    details: 'Exact model architecture and data pipeline should be taken from the repository source; no unsupported metrics are claimed.',
    visualizationType: 'network'
  }
];

export const education = [
  {
    id: 1,
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    institution: 'Sagar Institute of Research and Technology (SIRT), Bhopal',
    period: '2022 — 2026',
    type: 'UNDERGRADUATE DEGREE',
    focus: 'AI/ML · Data Science · Engineering'
  },
  {
    id: 2,
    title: 'Professional Certification in Data Science',
    institution: 'Raj Institute of Coding & Robotics (RICR), Bhopal',
    period: '2026',
    type: 'PROFESSIONAL TRAINING',
    focus: 'Data Science · ML · Applied Analytics'
  },
  {
    id: 3,
    title: 'Data Science & Advanced Visualization',
    institution: 'SAGE Summer School, SAGE University',
    period: 'Jun — Jul 2025',
    type: 'SPECIALIZED PROGRAM',
    focus: 'EDA · Visualization · Data Storytelling'
  }
];

export const certifications = [
  {
    id: 1,
    title: 'Professional Certification in Data Science',
    institution: 'Raj Institute of Coding & Robotics (RICR), Bhopal',
    year: '2026',
    type: 'PROFESSIONAL CERTIFICATION',
    mark: 'DS'
  },
  {
    id: 2,
    title: 'Data Science & Advanced Visualization',
    institution: 'SAGE Summer School, SAGE University',
    year: 'Jun — Jul 2025',
    type: 'SPECIALIZED TRAINING',
    mark: 'DV'
  }
];

export const approach = [
  {
    step: '01',
    title: 'Understand',
    desc: 'Turn a real requirement into a measurable data, ML or software problem.'
  },
  {
    step: '02',
    title: 'Explore',
    desc: 'Query, clean, visualize and understand data before choosing an approach.'
  },
  {
    step: '03',
    title: 'Build',
    desc: 'Compare appropriate models, AI workflows and engineering patterns.'
  },
  {
    step: '04',
    title: 'Engineer',
    desc: 'Wrap useful models and AI workflows into maintainable APIs and applications.'
  },
  {
    step: '05',
    title: 'Deploy & Improve',
    desc: 'Use Git, Docker and deployment practices to move toward usable systems.'
  }
];

export const stats = [
  { value: '16+', label: 'GitHub repositories' },
  { value: '12', label: 'Featured projects' },
  { value: '6', label: 'Skill pillars' }
];
