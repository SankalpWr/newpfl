import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ProjectSec from "./ProjectSec.js";
import Contact from "./Contact.js";
import AboutSec from "./AboutSec.js";
import SkillsSec from "./SkillsSec.js";


const navigation = [
  { name: "About", to: "AboutSec" },
  { name: "Skills", to: "SkillsSec" },
  { name: "Projects", to: "ProjectSec" },
  { name: "Contact", to: "Contact" },
];

export default function Example() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("AboutSec"); 
  const handleNavigationClick = (section) => {
    setCurrentSection(section);
    setMobileMenuOpen(false); // Close the mobile menu
  };
  return (
    <div className="bg-gradient-to-r from-purple-400 from-10% via-slate-100 via-30% to-fuchsia-100 to-90% ...">
      <header className="absolute inset-x-0 top-0 z-50">
   
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div
                    onClick={() => handleNavigationClick(item.href)}
                      
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Connect with me on Linkedin.{" "}
              <a href="https://www.linkedin.com/in/sankalp-wahane-512932212/" target="_blank" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                here <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hi , I am Sankalp Wahane a Software Developer
            </h1>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://drive.google.com/file/d/1X1e1TB3iEJWGGdkukTM_rGZOXsu-TAGz/view?usp=sharing" target="blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Resume
              </a>
              <a
                href="tel:6261159037"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <AboutSec id="aboutSec" />
<SkillsSec id="skillsSec" />
<ProjectSec id="projectSec" />
<Contact id="contact" />
        
      </div>
    </div>
    
  );
}
