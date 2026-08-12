import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer'; 
import eunice_img from '../assets/eunice_sitting.jpg';
import { useEffect } from 'react';
import roi_du_pain_video from "../assets/roi_du_pain.mp4";
// import Ellumigen_feature_1 from '../assets/Ellumigen feature 1.mp4';
// import Ellumigen_feature_2 from '../assets/Ellumigen feature 2.mp4';
// import Ellumigen_feature_3 from '../assets/Ellumigen feature 3.mp4';
// import Ellumigen_feature_4 from '../assets/Ellumigen feature 4.mp4';

export const Ellumigen = () => {
    const Goals = [
        {   title: 'Overcoming the "Blank Canvas" Problem', 
            problem: 
            [
                'Users often don\'t know where to start or what the AI can reliably do when presented with a standard, empty chat box.',
                'Evidence: Research found that researchers respond better when "pinged" or guided rather than left to structure an inquiry themselves.'
            ],
            solution: 
            [
                'What was built: An interface that provides early guidance and affordances.',
                'Key Design Decisions: Implemented "starter templates" or suggested queries based on the specific disease state or uploaded dataset.'
            ],
            impact: 
            [
                'Reduced "Time to First Action" by providing clear signals of what is possible.',
                'Increased User Confidence in non-technical researchers who may feel intimidated by empty command-line styles.'
            ],
            key: 1
        }
    ];

    return (
        <div className="bg-background">
            <Navbar className="relative"/>
            <div id="Ellumigen" className="relative overflow-hidden w-full h-[95dvh]">
                <video
                    className="absolute inset-0 w-full h-full object-cover opacity-100"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={roi_du_pain_video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="flex w-full relative">

            
                {/* Sidebar */}
                <aside className="w-1/3 bg-white-100 text-left text-[1.2 rem] px-8 py-12 sticky top-10 self-start h-screen">
                    <h2 className="text-black text-[2rem] flex-1"> Rapid Agentic AI Prototyping <br/> Ellumigen Explorer </h2>
                    <p>Designing Next-Generation Conversational AI Interfaces for Scientific Data Analysis.</p>
                    <p>Built with Figma, Lovable, Typescript.</p>
                    <p>Can be viewed on <a href="https://github.com" className="text-primary underline hover:text-primary/80">Github</a>.</p>
                    <div className="text-black absolute bottom-20 list-none">
                        <li><a href="#challenge">challenge</a></li>
                        <li><a href="#solution">solution</a></li>
                        <li><a href="#process">process</a></li>
                        <li><a href="#reflection">reflection</a></li>
                        <li><a href="#Ellumigen">back to top</a></li>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="w-2/3 bg-white-100 text-left text-[1.2 rem] px-8 py-12">
                    <div className="flex flex-row justify-items-start gap-[12%]">
                        <div>
                            <p>ROLES</p>
                            <p>UX Engineer</p>
                        </div>
                        <div>
                            <p>TIMELINE</p>
                            <p>Spring 2026</p>
                            <p>10 weeks</p>
                        </div>
                        <div>
                            <p>TECH STACK</p>
                            <p>Figma</p>
                            <p>Lovable</p>
                            <p>Typescript</p>
                        </div>
                        <div>
                            <p>TEAM</p>
                            <p>2 Product Designers</p>
                            <p>1 Product Lead</p>
                            <p>1 Business Analyst</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div id="project-summary" className="text-black text-1xl">
                            <h3 className="text-black text-2xl">Project Summary</h3>
                            <ul className="list-none ml-6">
                                <li>
                                    <strong>
                                        What is the product?
                                    </strong> <br></br>
                                    Ellumigen is an end-to-end AI-powered translational-multiomics platform that transforms raw 
                                    sequencing and curated study data into actionable insights through natural language chat and a rich bioinformatics 
                                    interface.
                                </li>
                                <li>
                                    <strong>
                                        What problem does the product solve?
                                    </strong><br></br>
                                    The platform addresses the "blank canvas" problem of standard AI chat interfaces, which lack the 
                                    structure needed for complex biological data analysis, long-running queries, and scientific reproducibility.
                                </li>
                                <li>
                                    <strong>
                                        Who are the users?
                                    </strong><br></br>
                                    Primary users are computational biologists and data-driven bioresearchers, ranging from Principal 
                                    Investigators (PIs) to undergraduate research assistants.
                                </li>
                                <li>
                                    <strong>
                                       Why was this project important?
                                    </strong><br></br>
                                    Existing tools like Jupyter Notebooks suffer from rigid linearity issues, while standard LLMs often 
                                    lack the "internal criticism" or quality control (QC) metrics required for trustworthy, reproducible scientific research.
                                </li>

                            </ul>
                        </div>
                        <div id="challenge" className="text-black text-1xl">
                            <h3 className="text-black text-2xl">Challenge</h3>
                            <h3 className="text-black text-2xl">Roi du Pain needed a cost-effective full-stack platform to support online ordering, baking coordination, and delivery logistics for a new express bakery venture.</h3>
                            <p>Alex and Mark Heimann, the founders of Roi du Pain, envisioned an online express bakery that ships fresh-baked goods within a day. However, they needed a robust, end-to-end e-commerce system to manage customer accounts, daily baking and shipping workflows, and administrative oversight—without the overhead of expensive software development. They required a platform that would not only allow customers to browse and purchase products online but also streamline backend operations such as baking preparation, order packing, and delivery scheduling. The complexity of user roles (customers, bakers, shippers, and managers), combined with inventory handling, price tracking, and secure authentication, posed a considerable challenge for a first build.</p>
                        </div>

                        <div id="solution" className="text-black text-1xl">
                            <h3 className="text-black text-2xl">Solution</h3>
                            <h3 className="text-black text-2xl">A Rails-based web application with role-based functionality, streamlined order and shipping workflows, and a responsive customer experience.</h3>
                            <p>We developed a full-stack web application using Ruby on Rails 7.0.4 and Ruby 3.1.4 to support a scalable and role-driven bakery ordering system. The application enables customers to register, manage accounts and addresses, place orders, and view order histories. For the operational staff, it provides automatically generated daily baking and shipping lists, while managers are equipped with a dashboard to monitor and manage all facets of the business. The system also supports role-based authentication and authorization, encoded payment records, and flexible pricing models with historical tracking. Key user-facing views were designed using MaterializeCSS to ensure clarity, accessibility, and responsiveness.</p>
                        </div>

                        <div>
                            <h3 className="text-black text-2xl">Features</h3>
                            <div>

                            </div>
                            <ol class="list-decimal ml-6 mt-2">
                                {Goals.map(step => (
                                    <li key={step.key} className="mb-4">
                                        <h4 className="text-black">{step.title}</h4><br></br>
                                        <p className="text-black">{step.problem}</p><br></br>
                                        <p className="text-black">{step.solution}</p><br></br>
                                        <p className="text-black">{step.impact}</p><br></br>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div id="reflection" className="text-black text-1xl">
                            <h3 className="text-black text-2xl">Reflection</h3>
                            <p>
                                <strong>
                                    What Worked
                                </strong>
                                <br></br>
                                The team's highly collaborative environment and well-defined roles played to individual strengths. 
                                Using clear communication and frequent updates helped maintain a high quality of work.
                            </p>
                            <p>
                                <strong>
                                    Challenges
                                </strong>
                                <br></br>
                                Scheduling was difficult due to varying commitments, and initial meetings lacked structure when trying to 
                                define the project scope.
                            </p>
                            <p>
                                <strong>
                                    Tradeoffs
                                </strong>
                                <br></br>
                                The team balanced the need for non-linear, advanced tools with the simplicity requested by non-technical users, 
                                ultimately deciding to support different "modes" for technical vs. non-technical profiles.
                            </p>
                            <p>
                                <strong>
                                    Future Improvements
                                </strong>
                                <br></br>
                                Implement a more systematic documentation process for when research directions are abandoned, and explore 
                                "internal metrics" that can automatically flag low-quality data.
                            </p>
                            <p>
                                <strong>
                                    Key Takeaways
                                </strong>
                                <br></br>
                                <ul className="list-disc ml-6">
                                    <li>
                                        AI is a "cognitive accelerator," not a replacement for human verification in science.
                                    </li>
                                    <li>
                                        Trust is fragile in scientific AI; interfaces must prioritize transparency and interrogation of the AI's reasoning.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>

                </div>
                
            </div>
            <Footer/>
        </div>
    );
}