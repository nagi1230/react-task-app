/**
 * Every string in this file is copy extracted verbatim from the Figma file
 * "Digital Agency Company Website UI Design Template in Dark Theme" (node 3-53).
 * Keeping it separate from markup keeps the section components readable.
 */

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'works', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
  { id: 'careers', label: 'Careers' },
];

export const FOOTER_LINKS = [...NAV_LINKS, { id: 'contact', label: 'Contact' }];

export const CONTACT_DETAILS = {
  email: 'hello@squareup.com',
  phone: '+91 91813 23 2309',
  location: 'Somewhere in the World',
  copyright: '© 2023 SquareUp. All rights reserved.',
};

/* ---------------------------------------------------------------- Home */

export const HERO = {
  heading: ['A Digital Product Studio', 'that will Work'],
  forLabel: 'For',
  audiences: ['Startups', 'Enterprise leaders', 'Media & Publishers', 'Social Good'],
  primaryCta: 'Contact Us',
  secondaryCta: 'Our Works',
};

export const TRUST_STRIP = {
  badge: 'Trusted By 250+ Companies',
  // The Figma cards hold vector logos; these are the wordmark stand-ins.
  logos: ['Chic Boutique', 'HungryBites', 'EventMasters', 'ProTech', 'Dream Homes', 'FitLife'],
};

export const SERVICES_INTRO = {
  heading: 'Our Services',
  body: 'Transform your brand with our innovative digital solutions that captivate and engage your audience.',
};

export const SERVICE_CARDS = [
  {
    title: 'Design',
    body: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
  },
  {
    title: 'Engineering',
    body: 'Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.',
  },
  {
    title: 'Project Management',
    body: 'Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.',
  },
];

export const WHY_CHOOSE = {
  heading: 'Why Choose SquareUp?',
  body: 'Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.',
  cards: [
    {
      title: 'Expertise',
      body: 'Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.',
    },
    {
      title: 'Client-Centric Approach',
      body: 'We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.',
    },
    {
      title: 'Results-Driven Solutions',
      body: 'Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.',
    },
    {
      title: 'Collaborative Partnership',
      body: 'We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.',
    },
  ],
};

export const TESTIMONIALS = {
  heading: 'What our Clients say About us',
  body: "At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us",
  cta: 'Open Website',
  items: [
    {
      quote: 'SquareUp has been Instrumental in Transforming our Online Presence.',
      body: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
      name: 'John Smith',
      role: 'CEO of Chic Boutique',
    },
    {
      quote: 'Working with SquareUp was a breeze.',
      body: 'They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.',
      name: 'Sarah Johnson',
      role: 'Founder of HungryBites.',
    },
    {
      quote: 'SquareUp developed a comprehensive booking and reservation system for our event management company',
      body: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
      name: 'Mark Thompson',
      role: 'CEO of EventMasters',
    },
    {
      quote: 'ProTech Solutions turned to SquareUp to automate our workflow',
      body: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
      name: 'Laura Adams',
      role: 'COO of ProTech Solutions.',
    },
    {
      quote: 'SquareUp designed and developed a captivating web portal for showcasing our real estate listings.',
      body: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
      name: 'Michael Anderson',
      role: 'Founder of Dream Homes Realty.',
    },
    {
      quote: 'FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.',
      body: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
      name: 'Emily Turner',
      role: 'CEO of FitLife Tracker',
    },
  ],
};

export const FAQ = {
  heading: 'Frequently Asked Questions',
  body: 'Still you have any questions? Contact our Team via hello@squareup.com',
  items: [
    {
      q: 'What services does SquareUp provide?',
      a: 'SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
    },
    {
      q: 'How can SquareUp help my business?',
      a: 'We partner with you end to end — from discovery and strategy through design, engineering and launch — to build digital products that move your business metrics, not just your brand.',
    },
    {
      q: 'What industries does SquareUp work with?',
      a: 'We have shipped products across fashion retail, food delivery, events, logistics, real estate, health and fitness, education and enterprise SaaS.',
    },
    {
      q: 'How long does it take to complete a project with SquareUp?',
      a: 'Timelines depend on scope. A focused website typically runs 4–8 weeks, while a full product build usually spans 3–6 months. We agree milestones with you during Planning and Strategy.',
    },
    {
      q: 'Do you offer ongoing support and maintenance after the project is completed?',
      a: 'Yes. We offer support packages covering bug fixes, feature enhancements, security updates and technical support after launch.',
    },
    {
      q: 'Can you work with existing design or development frameworks?',
      a: 'Absolutely. We regularly extend existing design systems and codebases, and we can modernise or migrate legacy systems where it helps.',
    },
    {
      q: 'How involved will I be in the project development process?',
      a: 'As involved as you want to be. We run regular demos, share progress updates each sprint, and keep communication open throughout.',
    },
    {
      q: 'Can you help with website or app maintenance and updates?',
      a: 'Yes — ongoing maintenance, performance monitoring and iterative improvements are part of our post-launch support.',
    },
  ],
};

export const CONTACT_INTRO = {
  heading: 'Thank you for your Interest in SquareUp.',
  body: 'We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.',
  cta: 'Start Project',
};

export const FORM = {
  fullName: 'Full Name',
  email: 'Email',
  placeholder: 'Type here',
  reasonHeading: 'Why are you contacting us?',
  reasons: ['Web Design', 'Collaboration', 'Mobile App Design', 'Others'],
  budgetHeading: 'Your Budget',
  budgetHint: 'Slide to indicate your budget range',
  budgetMin: 1000,
  budgetMax: 5000,
  message: 'Your Message',
  submit: 'Submit',
};

/* ------------------------------------------------------------ Services */

export const SERVICES_PAGE = {
  heading: 'Our Services',
  body: 'Transform your brand with our innovative digital solutions that captivate and engage your audience.',
  groups: [
    {
      title: 'Design',
      body: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
      listLabel: 'Our design services include:',
      columns: [
        {
          title: 'User Experience (UX) Design',
          items: [
            'User Research and Persona Development',
            'Information Architecture and Wireframing',
            'Interactive Prototyping and User Testing',
            'UI Design and Visual Branding',
          ],
        },
        {
          title: 'User Interface (UI) Design',
          items: [
            'Intuitive and Visually Appealing Interface Design',
            'Custom Iconography and Illustration',
            'Typography and Color Palette Selection',
            'Responsive Design for Various Devices',
          ],
        },
        {
          title: 'Branding and Identity',
          items: [
            'Logo Design and Visual Identity Development',
            'Brand Strategy and Positioning',
            'Brand Guidelines and Style Guides',
            'Marketing Collateral Design (Brochures, Business Cards, etc.)',
          ],
        },
      ],
    },
    {
      title: 'Engineering',
      body: 'Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.',
      listLabel: 'Our engineering services include:',
      columns: [
        {
          title: 'Web Development',
          items: [
            'Front-End Development (HTML, CSS, JavaScript)',
            'Back-End Development (PHP, Python, Ruby)',
            'Content Management System (CMS) Development (WordPress, Drupal)',
            'E-Commerce Platform Development (Magento, Shopify)',
          ],
        },
        {
          title: 'Mobile App Development',
          items: [
            'Native iOS and Android Development',
            'Cross-Platform Development',
            'App Store Deployment and Optimisation',
            'Push Notifications and Offline Support',
          ],
        },
        {
          title: 'Custom Software Development',
          items: [
            'Enterprise Software Development',
            'Custom Web Application Development',
            'Integration with Third-Party APIs and Systems',
            'Legacy System Modernization and Migration',
          ],
        },
      ],
    },
    {
      title: 'Project Management',
      body: 'Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.',
      listLabel: 'Our project management services include:',
      columns: [
        {
          title: 'Project Planning and Scoping',
          items: [
            'Requirements Gathering and Analysis',
            'Project Roadmap and Timeline Development',
            'Resource Allocation and Task Assignment',
            'Risk Assessment and Mitigation Strategies',
          ],
        },
        {
          title: 'Agile Development',
          items: [
            'Iterative Development and Sprints',
            'Scrum or Kanban Methodology Implementation',
            'Regular Progress Updates and Demos',
            'Continuous Improvement and Feedback Incorporation',
          ],
        },
        {
          title: 'Quality Assurance and Testing',
          items: [
            'Test Planning and Execution',
            'Functional and Usability Testing',
            'Performance and Security Testing',
            'Bug Tracking and Issue Resolution',
          ],
        },
      ],
    },
  ],
};

export const SERVICES_CTA = {
  heading: 'Let us Bring your Ideas to Life in the Digital World.',
  body: 'No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.',
  cta: 'Start Project',
};

/* --------------------------------------------------------------- Works */

export const WORKS_PAGE = {
  heading: 'Our Works',
  body: 'Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.',
  introTitle: 'At SquareUp',
  introBody: 'We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.',
  listLabel: 'Here are ten examples of our notable works:',
  items: [
    {
      title: 'E-Commerce Platform for Fashion Hub',
      client: 'Chic Boutique',
      url: 'htttps:/www.chicboutique.com',
      body: 'We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.',
    },
    {
      title: 'Mobile App for Food Delivery Service',
      client: 'HungryBites',
      url: 'htttps:/www.hungrybites.com',
      body: 'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.',
    },
    {
      title: 'Booking and Reservation System for Event Management',
      client: 'EventMasters',
      url: 'htttps:/www.eventmasters.com',
      body: 'EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.',
    },
    {
      title: 'Custom Software for Workflow Automation',
      client: 'ProTech Solutions',
      url: 'htttps:/www.protechsolutions.com',
      body: 'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.',
    },
    {
      title: 'Web Portal for Real Estate Listings',
      client: 'Dream Homes Realty',
      url: 'htttps:/www.dreamhomesrealty.com',
      body: 'Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.',
    },
    {
      title: 'Mobile App for Fitness Tracking',
      client: 'FitLife Tracker',
      url: 'htttps:/www.fitlifetracker.com',
      body: 'FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.',
    },
    {
      title: 'Custom Software for Supply Chain Management',
      client: 'Global Logistics Solutions',
      url: 'htttps:/www.globallogisticssolutions.com',
      body: 'Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.',
    },
    {
      title: 'Educational Platform for Online Learning',
      client: 'EduConnect',
      url: 'htttps:/www.educonnect.com',
      body: 'EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.',
    },
    {
      title: 'Mobile App for Travel Planning',
      client: 'WanderWise',
      url: 'htttps:/www.wanderwise.com',
      body: 'WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.',
    },
    {
      title: 'Web Application for Customer Relationship Management',
      client: 'ConnectCRM',
      url: 'htttps:/www.connectcrm.com',
      body: 'ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.',
    },
  ],
};

/* ------------------------------------------------------------- Process */

export const PROCESS_PAGE = {
  heading: 'Process of Starting the Project',
  body: 'At SquareUp, we value transparency, collaboration, and delivering exceptional results.',
  introTitle: 'At SquareUp',
  introBody: 'We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.',
  listLabel: "Here's an overview of our typical process:",
  steps: [
    {
      title: 'Discovery',
      body: 'We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.',
    },
    {
      title: 'Planning and Strategy',
      body: 'Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.',
    },
    {
      title: 'Design',
      body: 'Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.',
    },
    {
      title: 'Development',
      body: 'Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.',
    },
    {
      title: 'Testing and Quality Assurance',
      body: 'We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.',
    },
    {
      title: 'Deployment and Launch',
      body: 'When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.',
    },
    {
      title: 'Post-Launch Support',
      body: "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.",
    },
    {
      title: 'Continuous Improvement',
      body: 'We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.',
    },
  ],
};

/* --------------------------------------------------------------- About */

export const ABOUT_PAGE = {
  heading: 'About Us',
  body: 'Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.',
  introTitle: 'About SquareUp',
  introBody: 'SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.',
  storyTitle: 'Our Story',
  story: [
    {
      title: 'Design',
      body: "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
    },
    {
      title: 'Engineering',
      body: 'Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.',
    },
    {
      title: 'Project Management',
      body: "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.",
    },
    {
      title: 'Collaboration',
      body: 'At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.',
    },
    {
      title: 'Client-Centric Approach',
      body: "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
    },
    {
      title: 'Driving Success',
      body: "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
    },
  ],
};

export const BRAND_CTA = {
  heading: 'Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....',
  body: 'Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.',
  welcome: 'Welcome to SquareUp',
  tagline: 'Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.',
  cta: 'Start Project',
};

/* ------------------------------------------------------------- Careers */

export const CAREERS_PAGE = {
  heading: 'Join Our Team at SquareUp',
  body: 'Unlock your potential and join our team of innovators and problem solvers.',
  introTitle: 'Welcome to SquareUp, where talent meets opportunity!',
  introBody: "At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us.",
  whyLabel: 'Why Work at SquareUp?',
  perks: [
    {
      title: 'Innovative and Impactful Projects',
      body: "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
    },
    {
      title: 'Supportive Environment',
      body: "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
    },
    {
      title: 'Continuous Learning and Growth',
      body: "We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies.",
    },
    {
      title: 'Challenging and Rewarding Work',
      body: "Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life.",
    },
  ],
  openingsTitle: 'Current Openings',
  openingsBody: "We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions.",
  applyCta: 'Apply Now',
  groups: [
    {
      title: 'Design Job Openings',
      roles: [
        {
          title: 'UI Designer',
          body: 'Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.',
        },
        {
          title: 'UX Designer',
          body: 'Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.',
        },
        {
          title: 'Design Head',
          body: 'Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.',
        },
      ],
    },
    {
      title: 'Development Job Openings',
      roles: [
        {
          title: 'Front - End Developer',
          body: 'Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences.',
        },
        {
          title: 'Back - End  Developer',
          body: 'Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface.',
        },
        {
          title: 'Full Stack Developer',
          body: 'Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions.',
        },
      ],
    },
    {
      title: 'Management Job Openings',
      roles: [
        {
          title: 'BA Manager',
          body: 'Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts.',
        },
        {
          title: 'Project Manager',
          body: 'Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success.',
        },
        {
          title: 'HR Manager',
          body: 'Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture.',
        },
      ],
    },
    {
      title: 'QA Job Openings',
      roles: [
        {
          title: 'QA Tester',
          body: 'Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience.',
        },
        {
          title: 'SQL Tester',
          body: 'Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data.',
        },
        {
          title: 'Manual Tester',
          body: 'Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance.',
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------- Contact */

export const CONTACT_PAGE = {
  heading: 'Contact Us',
  body: 'Get in touch with us today and let us help you with any questions or inquiries you may have.',
  locationCta: 'Get Location',
  operatingLabel: 'Operating Days',
  operatingValue: 'Monday to Friday',
  stayConnected: 'Stay Connected',
};
