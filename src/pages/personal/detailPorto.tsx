import { useParams } from "react-router-dom";
import Nav from "./navbar";
const portfolioData = [
  {
    id: "react-native",
    title: "XYZ Retail E-Commerce Platform",
    stack: ["React", "Node.js", "MongoDB", "AWS"],
    situation:
      "XYZ Retail, an established retail company, sought to expand into e-commerce to reach a wider audience and streamline its sales processes. They needed a scalable, user-friendly platform supporting desktop and mobile users with product browsing, reviews, secure checkout, and real-time inventory updates.",
    task: "I was responsible for building the front-end and back-end components, ensuring seamless integration with inventory and payment systems. The goal was to create an efficient, high-performing application with a smooth user experience.",
    action:
      "Using React for the front-end, I designed a responsive UI focused on engagement and easy navigation. On the back end, I developed RESTful APIs using Node.js and MongoDB. I integrated AWS for performance optimization and implemented a CI/CD pipeline for faster deployment. I collaborated closely with designers and QA to ensure usability and accessibility standards.",
    result:
      "The project was completed on time and increased online sales by 35% within three months. Users praised the speed and usability, and the client reduced manual inventory tasks significantly.",
  },
];
function DetailPorto() {
  const { id } = useParams();
  const project = portfolioData.find((item) => item.id === id);

  if (!project) {
    return <div className="p-10 text-center">Project not found</div>;
  }

  return (
    <div>
      <Nav />
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1 text-sm bg-muted rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Situation</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.situation}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Task</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.task}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Action</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.action}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Result</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailPorto;
