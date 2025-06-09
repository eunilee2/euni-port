import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer'; 
import eunice_img from '../assets/eunice_sitting.jpg';
import { useEffect } from 'react';
import roi_du_pain_video from "../assets/roi_du_pain.mp4";

export const RDP = () => {
    const developmentProcess = [
        {   title: "Model Construction", 
            description: "We began by modeling core entities such as Customer, Order, Item, and Employee, along with their relationships and scopes. Unit tests were written for all model logic using RSpec and SimpleCov to ensure 100% test coverage.", 
            key: 1
        },
        {
            title: "Business Logic Implementation", 
            description: "Business rules such as order standardization (initially limited to a fixed $24.95 package) and geographic shipping restrictions (PA and WV only) were integrated early for controlled testing. Later phases introduced dynamic order customization and price history tracking.", 
            key: 2
        },
        {   title: "Service Layer & Authorization", 
            description: "A baking list service aggregated item quantities across orders to streamline production, while a shipping cost service calculated fees based on weight thresholds. We used CanCanCan to implement role-based access control through a custom Ability model.", 
            key: 3
        },
        {   title: "Controller and View Development", 
            description: "Using test files as documentation, we built API and standard controllers to return JSON responses or render HTML views. Cucumber tests verified customer-facing workflows like cart interactions, order placement, and login flows. We incorporated a reusable cart helper module to handle session persistence and order calculations.", 
            key: 4
        },
        {   title: "Design & Frontend", 
            description: "Views were crafted to reflect good design principles, balancing usability and aesthetic clarity. We used partials for modularity and MaterializeCSS for layout consistency.", 
            key: 5
        }
    ];

    return (
        <div className="bg-background">
            <Navbar className="relative"/>
            <div id="RDP" className="relative overflow-hidden w-full h-[95dvh]">
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
                    <h2 className="text-black text-[2rem] flex-1">Full Stack Application <br/> Roi du Pain</h2>
                    <p>A comprehensive bakery web app with registration and login, item showcase, order checkout with payment. </p>
                    <p>Built with Ruby on Rails framework, embedded ruby in HTML5 for the UI.</p>
                    <div className="text-black absolute bottom-20 list-none">
                        <li><a href="#challenge">challenge</a></li>
                        <li><a href="#solution">solution</a></li>
                        <li><a href="#process">process</a></li>
                        <li><a href="#reflection">reflection</a></li>
                        <li><a href="#RDP">back to top</a></li>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="w-2/3 bg-white-100 text-left text-[1.2 rem] px-8 py-12">
                    <div className="flex flex-row justify-items-start gap-[12%]">
                        <div>
                            <p>ROLES</p>
                            <p>Software Engineer</p>
                            <p>QA Tester</p>
                        </div>
                        <div>
                            <p>TIMELINE</p>
                            <p>Spring 2025</p>
                            <p>10 weeks</p>
                        </div>
                        <div>
                            <p>SKILLS</p>
                            <p>React</p>
                            <p>Javascript</p>
                            <p>Servicenow API</p>
                        </div>
                        <div>
                            <p>TOOLS</p>
                            <p></p>
                            <p>Cucumber gem</p>
                            <p>SimpleCov gem</p>
                            <p>Cancan gem</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
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

                        <div id="process" className="text-black text-1xl">
                            <h3 className="text-black text-2xl">Process</h3>
                            <h3 className="text-black text-2xl">I followed a test-driven, multi-phase approach to build and integrate models, services, controllers, and views into a cohesive and maintainable Rails application.</h3>
                            <p>The development process followed a phased, test-driven approach:</p>
                            <ol class="list-decimal ml-6 mt-2">
                                {developmentProcess.map(step => (
                                    <li key={step.key} className="mb-4">
                                        <h4 className="text-black">{step.title}</h4>
                                        <p className="text-black">{step.description}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div id="reflection" className="text-black text-1xl">
                            <h3 className="text-black text-2xl">Reflection</h3>
                            <h3 className="text-black text-2xl">The project reinforced the value of test-driven development and modular design in building complex applications.</h3>
                            <p>Through this project, I learned the importance of a structured, test-driven approach to software development. By writing tests first, we ensured that each component was robust and met business requirements before moving on to the next phase. The modular design allowed us to isolate functionality, making it easier to maintain and extend the application over time. Additionally, integrating user feedback early in the process helped us refine the user experience and ensure that the final product met both customer and operational needs.</p> 

                        </div>
                    </div>

                </div>
                
            </div>
            <Footer/>
        </div>
    );
}