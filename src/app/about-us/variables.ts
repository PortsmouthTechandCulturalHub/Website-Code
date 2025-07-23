export const hero: HeroTypes = {
  image: {
    width: 2048,
    height: 1536,
    src: "/images/about/about-us-hero.jpg",
    alt: "about us",
  },
  title: "About us",
  desc: "PORTSMOUTH TECH & CULTURAL HUB: Cultivating Digital Talent Since 2024",
};

export type AboutTypes = {
  content: {
    title: string;
    content: string;
  };
  qlt: {
    id: string | number;
    icon: Image;
    title: string;
    list: string[];
  }[];
};

export const about: AboutTypes = {
  content: {
    title: "About us",
    content:
      "Portsmouth Tech and Cultural Hub was established following the first edition of Portsmouth tech and cultural summit in September 2024. This event and hub was originally operating under the umbrella of  Pavolera technolgy limited. The decision to create an independent hub was driven by a commitment to better serve the diverse communities in Portsmouth, the Solent and South Coast region, the United Kingdom, and beyond. This hub is dedicated to cultivating tech talent through comprehensive training, mentorship, workshops, conferences, and research, ultimately developing and enhancing the nation's digital skill set.",
  },
  qlt: [
    {
      id: 0,
      icon: {
        width: 59,
        height: 72,
        src: "/icons/vision.svg",
        alt: "vision",
      },
      title: "Vision",
      list: [
        "To unite and empower young people from diverse cultures through the acquisition of digital skills and access to mentorship within the digital and creative technology sectors in Portsmouth, the Solent and south coast areas, the United Kingdom, and globally.",
        "To drive community and digital innovation by continuously supporting skill acquisition and development in digital and creative technologies in Portsmouth, the Solent and south coast areas, the United Kingdom, and worldwide",
        "To foster a culture of collaboration and empowerment by providing digital inclusion opportunities for those who are digitally excluded.",
        "To build and increase tech tourism in Portsmouth, United Kingdom and spotlight the city as the powerhouse of tech innovation in the world.",
      ],
    },
    {
      id: 1,
      icon: {
        width: 59,
        height: 72,
        src: "/icons/value.svg",
        alt: "values",
      },
      title: "Values",
      list: [
        "Patiently nurturing and pushing each other to be the best version of ourselves through mentoring and development of digital skills.",
        "Teaching and encouraging each other through every process of the way; it doesn’t matter your level of education, we are here to challenge, help and uplift each other into the next stage of our careers",
        "Always trying new ideas and innovation, we may fail but we will rise again and conquer our fears and be the best version of ourselves until we meet and exceed our goals.",
        "Cultivating the can-do spirit!!, tech can be sometimes boring and scary; we know right!!  but don’t worry at Portsmouth tech and cultural hub, it will be all vibe and fun all through the learning process.",
        "Honesty, respect and values are our watchward, this helps us to grow and build lifelong skills beyond the field of technology",
      ],
    },
    // {
    //   id: 2,
    //   icon: {
    //     width: 71,
    //     height: 72,
    //     src: "/icons/history.svg",
    //     alt: "History",
    //   },
    //   title: "History",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    // },
  ],
};

export type Teams = {
  id: string | number;
  image?: Image;
  name: string;
  pos: string;
  bio?: string; // New field
}[];


export const teams: Teams = [
  {
    id: 0,
    name: "Anuoluwapo Gabriel",
    pos: "CEO & Founder",
    bio: "Anuoluwapo Gabriel is an innovative lateral thinker who enjoys new challenges and possibilities. This has birthed new ideas such as Pavolera and Portsmouth tech and cultural hub. \n\n Anu is experienced in the area of product management and development, project management, data analysis, and building AI powered product. He has worked in the fintech industry and other start-up spaces in Nigeria before moving to England where he studied and was awarded Msc. in International business with data analytics advanced practice at Ulster University (Birmingham campus). He is currently based in the city of Portsmouth making impact in the community by driving tech initiatives through Portsmouth Tech and Cultural Hub while developing digital solutions at Pavolera. \n\nBeyond professional pursuits, Anu indulge in walking, reading, and staying updated on the latest technology trends.",
    image: {
      src: "/images/team/anu.jpg",
      width: 500,
      height: 500,
      alt: "Anuoluwapo Gabriel",
    },
  },
  {
    id: 1,
    name: "Olufemi Olaiya",
    pos: "Director",
    bio: "A client focused and self-directed BIM Lead / Architectural Design Manager with over 18 years of private and public sector experience in BIM coordination and planning, designing layouts and schematics, digital transformation, facilities management, and managing project teams across the construction industry.\n\n Directed BIM implementation strategies on major construction projects for Portsmouth City Council, and continue to be an industry pioneer for Data driven design, Revit /BIM workflows. Proven track record of meeting deliverables in-line with operational targets and budget, while working confidently with senior management, stakeholders and key team members to push timely solutions to multifaceted plans. \n\nCommitted to utilise business practices that will improve productivity while minimising risks. Seeking to maximise the benefits of BIM in architecture and the construction industry through continued learning, networking and skill acquisition in the UK and globally.",
     image: {
      src: "/images/team/Olaiya.jpg",
      width: 500,
      height: 500,
      alt: "Anuoluwapo Gabriel",
    },
  },
  {
    id: 2,
    name: "Gabriel .I. Anyim",
    pos: "Director",
    bio: "Gabriel I Anyim: is a seasoned communication systems design authority with extensive experience in the research, development, and deployment of satellite and microwave communication systems. His expertise spans product development, requirements capture, and end-to-end systems engineering including integration, verification, validation, and testing of secure voice, data, and video communication services. \n\n He brings a strong research background in electronics, communications, and signal processing, gained through both academic and industrial roles. Proficient in tools such as MATLAB, Simulink, Herald Radio Network Planning, and OPNET, He also contribute to engineering design for technical bids, pre-sales, and project proposals. With a solid foundation in project management methodologies like PRINCE2 and tools like MS Project, He complements his technical skills with experience in teaching, training delivery, and technical presentations",
     image: {
      src: "/images/team/Gabriel.jpg",
      width: 500,
      height: 500,
      alt: "Gabriel .I. Anyim",
    },
  },
  {
    id: 3,
    name: "Godwin Nse Ebong",
    pos: "Learning and Development",
    bio: "Godwin Ebong is a  Tech leader and Head of Learning and Development at the Portsmouth Tech and Cultural Hub. Renowned for his contributions to digital innovation and inclusivity, he empowers individuals and organizations through advanced tech education. \n\n A recipient of the UK Global Talent  and a Black Forbes Member, Godwin is celebrated for his impact in the global tech community. \n\nHe holds a master’s degree with honours in Data Science from the University of Salford and has contributed research in AI, ML, and their legal implications as a peer reviewer. He is a Professional Member of BCS, a founding member of the University of Salford’s BCS Student Chapter, a member of ISACA, and an Executive Member of Africa’s Young Entrepreneurs. \n\nWith expertise in Data Science, Data Engineering, DevOps, and DevSecOps, Godwin designs secure, scalable infrastructures for UK enterprises. A dedicated mentor, he has supported thousands worldwide into tech careers, championing accessibility, diversity, and education. Godwin continues to shape the future of tech as a thought leader committed to innovation, equity, and human-centered progress."
    ,image: {
      src: "/images/team/godwim.jpg",
      width: 500,
      height: 500,
      alt: "Godwin Nse Ebong",
    },
  },
  {
    id: 4,
    name: "Ridwan Olajide",
    pos: "Social Media",
    bio: "Ridwan Olajide: Ridwan is a dynamic Product Manager specialising in building scalable SaaS solutions, optimizing approval workflows, and driving product growth through agile methodologies. With a proven track record of developing high-impact digital products, he combines technical expertise with strategic vision to transform industries.    As the Product Lead at Runnix Africa, he spearheads a logistics technology and errand platform that simplifies daily life for individuals and businesses across the continent.  \n\n Ridwan actively fosters tech innovation through hackathons and summits designed to empower the next generation of disruptors.   His multidisciplinary background across product development, project management, and media enables him to craft solutions that balance technical feasibility, business objectives, and user needs.   Ridwan thrives at the intersection of technology and strategy, delivering products that solve real-world problems while creating sustainable growth.",
      image: {
      src: "/images/team/Ridwan.png",
      width: 500,
      height: 500,
      alt: "Ridwan Olajide",
    },
  },
  {
    id: 5,
    name: "Ndine E",
    pos: "Compliance",
    bio: "Ndine E: is a highly skilled and adaptable professional with extensive training and over eight years of experience in project and program management, stakeholder engagement, and risk management within complex international and multi-sector environments. She have the ability to coordinate and communicate the technical delivery of complex projects, work with diverse teams, maintain third-party relationships, and monitor performance to ensure sustainable outcomes and value for money. Her multidisciplinary background has equipped her with strong adaptability skills and the capacity to excel in fast-paced environments that demand analytical problem-solving and strategic prioritization.",
    image: {
      src: "/images/team/Nadine.jpg",
      width: 500,
      height: 500,
      alt: "Ndine E",
    },
  },
];

