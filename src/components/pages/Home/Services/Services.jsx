import React from "react";
import serviceDoc from "../../../../assets/service-doctor.png";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import cavtityImg from "../../../../assets/teeth.png";
import oralSurgery from "../../../../assets/surgery.avif";
import cosmeticImg from "../../../../assets/cosmetic.avif";
import "./Services.css";
const Services = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10  py-20 px-4">
        <div className="md:w-2/3">
          <img src={serviceDoc} className="h-[1000px]" alt="" />
        </div>
        <div className="md:w-5/6 md:mx-0 mx-5 mt-5">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
              Our Services
            </h2>
            <p className="w-full md:w-2/3 mb-6 md:text-xl text-justify md:text-left">
              At Doctor House, we offer a wide range of healthcare services
              designed to cater to your every need. From primary care and
              preventative medicine to specialized treatments and diagnostics,
              our expert team is committed to providing personalized and
              compassionate care.
            </p>
          </div>
          <div className="w-full">
            <Tabs>
              <TabList className=" text-lg ">
                <Tab>Cavity Protection</Tab>

                <Tab>Oral Surgery</Tab>
                <Tab>Cosmetic Dentisty</Tab>
              </TabList>

              <TabPanel>
                <div className="mt-5 md:w-[900px] md:mx-0 mx-5">
                  <div className="w-full">
                    <img className="h-96" src={cavtityImg} alt="" />
                  </div>
                  <div className="w-full text-wrap">
                    <h4 className="text-2xl mt-4 md:text-3xl font-bold mb-4 text-center md:text-left">
                      Dental Hygiene
                    </h4>
                    <p className=" w-[300px] md:w-2/3 mb-6 md:text-xl text-justify md:text-left">
                      Dental hygiene refers to the practice of maintaining clean
                      teeth and gums to prevent oral health problems such as
                      cavities, gum disease, and bad breath. It encompasses a
                      range of daily habits and practices aimed at keeping the
                      mouth clean and healthy.
                    </p>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <div className="flex justify-center md:justify-start">
                      <button
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
                      >
                        More details
                      </button>
                    </div>

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <ol className="list-decimal space-y-5 p-8">
                          <li>
                            <span className="text-xl font-semibold">
                              Fluoride
                            </span>
                            : Fluoride is a mineral that helps strengthen tooth
                            enamel and makes it more resistant to acid attacks
                            from bacteria. It can be found in fluoridated water,
                            toothpaste, mouthwash, and professional fluoride
                            treatments provided by dentists.
                          </li>
                          <li>
                            <span className="text-xl font-semibold">
                              Dietary Considerations
                            </span>
                            : Limiting sugary and acidic foods and beverages can
                            help reduce the risk of cavities. Bacteria in the
                            mouth feed on sugars and produce acids that can
                            weaken tooth enamel. Additionally, frequent snacking
                            can prolong acid attacks on teeth, increasing the
                            likelihood of cavities
                          </li>
                          <li>
                            <span className="text-xl font-semibold">
                              Regular Dental Check-ups
                            </span>
                            : Routine dental visits allow dentists to detect
                            early signs of tooth decay and provide preventive
                            treatments such as dental cleanings, fluoride
                            treatments, and dental sealants to protect teeth
                            from cavities.
                          </li>
                          <li>
                            <span className="text-xl font-semibold">
                              Dental Sealants
                            </span>
                            : Dental sealants are thin protective coatings
                            applied to the chewing surfaces of molars and
                            premolars to seal off deep grooves and pits where
                            bacteria can accumulate and cause cavities.
                          </li>
                        </ol>
                      </div>
                    </dialog>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mt-5 md:w-[900px] md:mx-0 mx-5">
                  <div className="w-full">
                    <img className="rounded-xl h-96" src={oralSurgery} alt="" />
                  </div>
                  <div className="w-full text-wrap">
                    <h4 className="text-2xl mt-4 md:text-3xl font-bold mb-4 text-center md:text-left">
                      Tooth Extractions
                    </h4>
                    <p className=" w-[300px] md:w-2/3 mb-6 md:text-xl text-justify md:text-left">
                      One of the most common oral surgical procedures is tooth
                      extraction. This may involve removing teeth that are
                      decayed, damaged, impacted (unable to erupt properly), or
                      causing crowding issues. Wisdom tooth extraction, in
                      particular, is a common procedure performed by oral
                      surgeons.
                    </p>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <div className="flex justify-center md:justify-start">
                      <button
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
                      >
                        More details
                      </button>
                    </div>

                    <dialog id="my_modal_3" className="modal ">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <ol className="list-decimal space-y-5 p-8">
                          <li className="">
                            <span className="text-xl font-semibold">
                              Orthognathic Surgery
                            </span>
                            : Also known as corrective jaw surgery, orthognathic
                            surgery is performed to correct facial and jaw
                            abnormalities, such as misaligned jaws or bite
                            issues (malocclusion), which can affect chewing,
                            speaking, and overall facial appearance.
                          </li>
                          <li>
                            <span className="text-xl font-semibold">
                              Bone Grafting
                            </span>
                            : Oral surgeons may perform bone grafting procedures
                            to augment or regenerate bone in the jaw, often
                            necessary to provide adequate support for dental
                            implants or to repair bone loss due to periodontal
                            disease. covering imperfections like chips, stains,
                            or gaps.
                          </li>
                          <li>
                            <span className="text-xl font-semibold">
                              Treatment of Oral Pathologies
                            </span>
                            : Oral surgeons diagnose and treat various oral and
                            maxillofacial pathologies, including cysts, tumors,
                            and infections. Surgical intervention may be
                            required to remove diseased tissue and restore oral
                            health.
                          </li>
                          <li>
                            <span className="text-xl font-semibold">
                              Reconstructive Surgery
                            </span>
                            : Following trauma, injury, or surgical removal of
                            tumors, oral surgeons may perform reconstructive
                            procedures to restore function and aesthetics to the
                            oral and facial structures
                          </li>
                        </ol>
                      </div>
                    </dialog>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mt-5 md:w-[900px] md:mx-0 mx-5">
                  <div className="w-full">
                    <img className="rounded-xl h-96" src={cosmeticImg} alt="" />
                  </div>
                  <div className="w-full text-wrap">
                    <h4 className="text-2xl mt-4 md:text-3xl font-bold mb-4 text-center md:text-left">
                      Dental Implants
                    </h4>
                    <p className=" w-[300px] md:w-2/3 mb-6 md:text-xl text-justify md:text-left">
                      Dental implants are artificial tooth roots that are
                      surgically placed into the jawbone to support replacement
                      teeth, such as crowns, bridges, or dentures. They provide
                      a permanent solution for missing teeth and can enhance the
                      appearance and function of the smile.
                    </p>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <div className="flex justify-center md:justify-start">
                      <button
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
                      >
                        More details
                      </button>
                    </div>

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <ol className="list-decimal space-y-5 p-8">
                          <li>
                            <span className="text-xl font-semibold">
                              Teeth Whitening
                            </span>
                            : This is one of the most common cosmetic dental
                            procedures, aiming to lighten the teeth and remove
                            stains and discoloration.
                          </li>
                          <li>
                            <span className="text-xl font-semibold">
                              Dental Veneers
                            </span>
                            : Veneers are thin shells, usually made of porcelain
                            or composite resin, that are bonded to the front
                            surfaces of teeth to improve their appearance by
                            covering imperfections like chips, stains, or gaps.
                          </li>
                          <li>
                            <span className="text-xl font-semibold">
                              Composite Bonding
                            </span>
                            : This procedure involves applying a tooth-colored
                            composite resin to repair chipped, cracked, or
                            discolored teeth, as well as to fill in gaps between
                            teeth.
                          </li>
                          <li>
                            <span className="text-xl font-semibold">
                              Invisalign
                            </span>
                            : Invisalign is a type of clear aligner system that
                            helps to straighten teeth discreetly without the
                            need for traditional metal braces, making it a
                            popular choice for adults seeking orthodontic
                            treatment.
                          </li>
                        </ol>
                      </div>
                    </dialog>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
