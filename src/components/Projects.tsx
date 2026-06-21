import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Telecom Service Management Platform (Mein Magenta App)",
    description:
      "Developed an enterprise-level telecom service management platform enabling users to manage mobile plans, monitor usage patterns, view account details, and initiate self-service activities via an interactive web interface. Architected RESTful APIs with Spring Boot, integrated frontend state management components with backend structures, optimized intensive database queries, and participated in active Agile sprint deliverables.",
  },
  {
    title: "Diabetes Management System (Carelink Minimed)",
    description:
      "Engineered critical medical application features facilitating continuous insulin tracking, blood glucose monitoring, automated alerts, and seamless device-data integration. Designed comprehensive Spring Boot REST APIs, implemented healthcare compliance workflows, integrated CGM/BGM streams, refined UI/UX layouts, and provided production troubleshooting.",
  },
  {
    title: "E-Commerce Microservices Platform",
    description:
      "Built a scalable microservices-based e-commerce ecosystem with Product, Cart, Order, and Authentication services. Integrated Eureka Service Discovery, Spring Cloud Gateway, Kafka, Redis, Docker, and JWT security.",
  },

  {
    title: "Product Search Engine",
    description:
      "Engineered an ultra-fast full-text search and indexing platform. Custom-designed optimized Elasticsearch indexes,dynamic text-analyzers, and analytical mappings. Developed fast query execution paths using Spring Data Elasticsearch,built a dynamic ReactJS filtering UI, and containerized the complete operational stack.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
