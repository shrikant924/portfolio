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
        {/* Project 1 */}
        <div className="bg-slate-800/60 hover:bg-slate-800 transition border border-slate-700 rounded-xl p-5 sm:p-6">
          <h3 className="font-semibold text-lg sm:text-xl text-white">
            Telecom Service Management Platform (Mein Magenta App)
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Developed an enterprise-level telecom service management platform
            enabling users to manage mobile plans, monitor usage patterns, view
            account details, and initiate self-service activities via an
            interactive web interface. Architected RESTful APIs with Spring
            Boot, integrated frontend state management components with backend
            structures, optimized intensive database queries, and participated
            in active Agile sprint deliverables.
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-slate-800/60 hover:bg-slate-800 transition border border-slate-700 rounded-xl p-5 sm:p-6">
          <h3 className="font-semibold text-lg sm:text-xl text-white">
            Tata Play Binge
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            OTT streaming platform delivering entertainment content through a
            unified ecosystem.
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-slate-800/60 hover:bg-slate-800 transition border border-slate-700 rounded-xl p-5 sm:p-6">
          <h3 className="font-semibold text-lg sm:text-xl text-white">
            Diabetes Management System (Carelink Minimed)
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Engineered critical medical application features facilitating
            continuous insulin tracking, blood glucose monitoring, automated
            alerts, and seamless device-data integration. Designed comprehensive
            Spring Boot REST APIs, implemented precise healthcare business
            compliance workflows, integrated CGM/BGM streams, refined UI/UX
            layouts, and provided extensive production troubleshooting.
          </p>
        </div>

        {/* Project 4 */}
        <div className="bg-slate-800/60 hover:bg-slate-800 transition border border-slate-700 rounded-xl p-5 sm:p-6">
          <h3 className="font-semibold text-lg sm:text-xl text-white">
            E-Commerce Microservices Platform
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Built a highly scalable, multi-module e-commerce ecosystem
            leveraging microservices. Orchestrated distinct microservices for
            Product, Cart, Order management, and User Authentication.
            Established automated service discovery using Netflix Eureka,
            configured Spring Cloud API Gateway for intelligent request routing,
            incorporated Apache Kafka for asynchronous decoupling, integrated
            Redis for caching layers, and containerized images using Docker.
            Secured via JWT authorization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
