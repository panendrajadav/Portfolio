export async function getChatResponse(message: string): Promise<string> {
  const msg = message.toLowerCase();
  
  // Time-based greeting
  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    if (hour < 21) return "Good evening";
    return "Good night";
  };
  
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
    return `${getTimeGreeting()}! I'm Panendra's assistant. Ask me anything about his skills, projects, or experience.`;
  }
  
  if (msg.includes('phani') || msg.includes('jadav')) {
    return "Yes, Phani and Jadav are Panendra's nicknames! I'm his personal assistant. What would you like to know about Panendra's work, projects, or experience?";
  }
  
  if (msg.includes('testlabs') || msg.includes('test labs')) {
    return "TestLabs-AI is Panendra's automated ML evaluation system with 5 intelligent agents: Ingest Agent, Diagnosis Agent, ML-Improvement Agent, Evaluation Agent, and Planner Agent. It analyzes ML experiments, detects anomalies, compares baselines, and recommends fixes. Built with Python, FastAPI, Gemini API, NumPy, Pandas, SQLite.";
  }
  
  if (msg.includes('cleardeal')) {
    return "ClearDeal is Panendra's decentralized freelance marketplace on Arbitrum blockchain. It features smart contract escrow, transparent payments without 20% fees like Upwork, and decentralized reputation system. Clients post jobs, freelancers apply, and payments are automatically released. Built with Smart Contracts, Arbitrum, WalletConnect, React.";
  }
  
  if (msg.includes('tranxact')) {
    return "Tranxact is Panendra's blockchain + AI donation platform featuring transparent charity system, AI analytics for donation tracking, blockchain-based escrow, and full frontend with wallet integrations. Built with React, Tailwind, Algorand, Pera Wallet, Azure, AI Models.";
  }
  
  if (msg.includes('ecocyclehub') || msg.includes('eco cycle')) {
    return "EcoCycleHub is Panendra's IoT bicycle management system built during his HCLTech internship. It's a smart cycle inventory system for campuses with Issue→Unlock→Track→Return flow, IoT solenoid lock control, admin panel, Protection Score System, and QR booking. Built with Android (Java), Firebase, REST APIs, IoT locks.";
  }
  
  if (msg.includes('optima') || msg.includes('dual')) {
    return "Optima AI is Panendra's dual-model intelligent chat system where two LLMs generate answers in parallel, a judge LLM selects the best response, and user-defined goal-lock ensures no deviation. Built with Python, Multi-LLM, Async Processing.";
  }
  
  if (msg.includes('voxfusion') || msg.includes('voice')) {
    return "VoxFusion is Panendra's Python voice assistant that reached Unisys Hackathon Pre-Finals. It handles voice commands, opens apps, searches, controls system volume, captures screenshots, has conversational AI (Ollama Gemma), GIF animation, and reminders. Built with Python, SpeechRecognition, pyttsx3, pyautogui.";
  }
  
  if (msg.includes('ai tutor') || msg.includes('tutor')) {
    return "AI Tutor Agent is Panendra's specialized system that strictly solves physics & chemistry questions only with no deviation or cross-domain answers. Built with Python, NLP, AI Agents.";
  }
  
  if (msg.includes('project')) {
    return "Panendra has built 7 major projects: TestLabs-AI (ML evaluation system), ClearDeal (decentralized freelance marketplace), Tranxact (AI+Blockchain donation platform), EcoCycleHub (IoT cycle management), Optima AI (dual-LLM chat system), VoxFusion (voice assistant), and AI Tutor Agent (physics/chemistry solver). Which one interests you?";
  }
  
  if (msg.includes('skill') || msg.includes('technology')) {
    return "Panendra's skills include: Programming (Python, Java, JavaScript, TypeScript, C, C++), AI/ML (AI Agents, Multi-LLM Pipelines, NLP, TensorFlow, Scikit-learn), Cloud (Azure, GCP, Docker), Blockchain (Algorand, Smart Contracts), Frontend (React, Tailwind), Backend (REST APIs, FastAPI, Node.js), Databases (SQL, MySQL, Oracle, Firebase, Cosmos DB, SQLite), and Tools (Git, Linux, BlackArch, pen-testing utilities).";
  }
  
  if (msg.includes('kpvdr') || msg.includes('botsapi')) {
    return "At KPVDR BOTSAPI (Aug 2024 – Jan 2025), Panendra worked as a Software Engineer (Python) building automation & pen-testing workflow tools on BlackArch Linux. He reduced security scanning time by 50% and improved internal automation efficiency.";
  }
  
  if (msg.includes('hcltech') || msg.includes('hcl')) {
    return "At HCLTech (Jan 2024 – Apr 2024), Panendra was a Software Intern who developed EcoCycleHub IoT Android application, designed APIs, improved sync latency, and integrated solenoid-lock IoT mechanism for secure cycle issuance.";
  }
  
  if (msg.includes('iit') || msg.includes('kanpur')) {
    return "At IIT Kanpur (Dec 2023 – Jan 2024), Panendra was an AI/ML Intern who built ML pipelines for large-scale datasets, improved preprocessing for better model accuracy, and automated dataset workflows.";
  }
  
  if (msg.includes('experience') || msg.includes('work')) {
    return "Panendra has worked as: Software Engineer (Python) at KPVDR BOTSAPI (automation tools, BlackArch Linux), Software Intern at HCLTech (EcoCycleHub IoT app), and AI/ML Intern at IIT Kanpur (ML pipelines). He's received $6000 Microsoft FounderHub funding!";
  }
  
  if (msg.includes('education') || msg.includes('study')) {
    return "Panendra is pursuing B.Tech in Artificial Intelligence with 8.6 CGPA and completed Diploma in Computer Science with 9.0 CGPA. He's also earned certifications from Google (Cloud), Cognizant (Data Analytics), and Cisco (IT Essentials, Blockchain).";
  }
  
  if (msg.includes('microsoft') || msg.includes('funding')) {
    return "Panendra received $6000 funding from Microsoft FounderHub for his AI innovations. He also reached Pre-Finals in Unisys Hackathon with VoxFusion and earned multiple certifications from Google, Cognizant, and Cisco.";
  }
  
  if (msg.includes('contact') || msg.includes('email')) {
    return "You can reach Panendra at panendrajadav@gmail.com or connect with him on LinkedIn and GitHub. He's always open to discussing new opportunities and collaborations!";
  }
  
  if (msg.includes('achievement') || msg.includes('award')) {
    return "Panendra's achievements: $6000 Microsoft FounderHub funding, Unisys Hackathon Pre-Finalist (VoxFusion), and certifications in Cloud (Google), Data Analytics (Cognizant), Blockchain Basics, and IT Essentials (Cisco).";
  }
  
  if (msg.includes('who is') || msg.includes('about') || msg.includes('tell me')) {
    return "Panendra Rao J is an AI & Full-Stack Developer skilled in building automation tools, IoT apps, AI agents, blockchain platforms, ML workflows, and intelligent chat systems. He has experience across Python, Java, React, cloud (Azure/GCP), and databases. B.Tech AI student (8.6 CGPA) funded by Microsoft FounderHub with real industry experience at KPVDR BOTSAPI, HCLTech, and IIT Kanpur.";
  }
  
  return "I'm here to help you learn about Panendra's portfolio! You can ask me about his projects (TestLabs-AI, ClearDeal, Tranxact, EcoCycleHub, Optima AI, VoxFusion, AI Tutor), skills, experience, education, or achievements. What would you like to know?";
}