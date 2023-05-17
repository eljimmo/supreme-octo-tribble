// import React, { useState } from "react";
// import Modal from "simple-react-modal";
// import Video from "../video/video.component";
// import epdisplate from "../../assets/epdisplate.png";
// import eplinkedin from "../../assets/eplinkedin.png";
// import epsoylent from "../../assets/epsoylent.png";
// import epwalmart from "../../assets/epwalmart.png";

// const Emails = () => {
//   const [modal1, setModal1] = useState(false);
//   const [modal2, setModal2] = useState(false);
//   const [modal3, setModal3] = useState(false);
//   const [modal4, setModal4] = useState(false);

//   return (
//     <>
//       <div className="gridlayout1">
//         <div>
//           <img src={eplinkedin} alt="Preview of HTML email from LinkedIn." />
//         </div>
//         <div>
//           <h3>Lead Nurturing Email</h3>
//           <p>
//             LinkedIn's email explains the benefits of upgrading, shows how it
//             can help users achieve their goals, and includes a free month of
//             premium.
//           </p>
//           <b>What problem it solves</b>
//           <p>
//             I rebuilt this example as it helps guides the customer through a
//             sales funnel. In doing so, I learned more about
//           </p>
//           <b>Features</b>
//           <p>Pixel Perfext</p>
//           <br />
//           <div className="gridlayout2">
//             <button onClick={() => setModal1(!modal1)}>&lt; Video /&gt;</button>
//             <a
//               href="https://github.com/MaverickCER/VSPortfolio"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               &lt; Code /&gt;
//             </a>
//           </div>
//           <Modal
//             className="projectModal"
//             containerClassName="projectModel__inner"
//             closeOnOuterClick={true}
//             show={modal1}
//             onClose={() => setModal1(!modal1)}
//           >
//             <div>
//               <button onClick={() => setModal1(!modal1)} className="closeModal">
//                 X
//               </button>
//               <Video source="https://www.youtube.com/embed/l34z2rXUW94" />
//             </div>
//           </Modal>
//         </div>
//       </div>
//       <div className="gridlayout3">
//         <div>
//           <h3>Promotional Email</h3>
//           <p>
//             Displate's email provides a coupon code and encourages the customer
//             to purchase their next Displate as soon as possible.
//           </p>
//           <b>What problem it solves</b>
//           <p>
//             This email would be the second step in the chain and is sent to
//             pre-existing customers. In rebuilding this email I got learn more
//             about active timer emails.
//           </p>
//           <b>Features</b>
//           <p>Active Timer</p>
//           <br />
//           <div className="gridlayout2">
//             <button onClick={() => setModal2(!modal2)}>&lt; Video /&gt;</button>
//             <a
//               href="https://github.com/MaverickCER/CalloutsEvolved"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               &lt; Code /&gt;
//             </a>
//           </div>
//           <Modal
//             className="projectModal"
//             containerClassName="projectModel__inner"
//             closeOnOuterClick={true}
//             show={modal2}
//             onClose={() => setModal2(!modal2)}
//           >
//             <div>
//               <button onClick={() => setModal2(!modal2)} className="closeModal">
//                 X
//               </button>
//               <Video source="https://www.youtube.com/embed/l34z2rXUW94" />
//             </div>
//           </Modal>
//         </div>
//         <div>
//           <img src={epdisplate} alt="Preview of HTML email from Displate." />
//         </div>
//       </div>
//       <div className="gridlayout1">
//         <div>
//           <img src={epwalmart} alt="Preview of HTML email from Walmart." />
//         </div>
//         <div>
//           <h3>Survey Email</h3>
//           <p>
//             Walmart's email encourages pre-existing customers to provide
//             valuable feedback about their experience while offering a cash
//             incentive.
//           </p>
//           <b>What problem it solves</b>
//           <p>
//             This was my favorite rebuild. I was able to remove the hero image
//             and rebuild it in CSS.
//           </p>
//           <b>Features</b>
//           <p>Responsive</p>
//           <br />
//           <div className="gridlayout2">
//             <button onClick={() => setModal3(!modal3)}>&lt; Video /&gt;</button>
//             <a
//               href="https://github.com/MaverickCER/LangSynth"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               &lt; Code /&gt;
//             </a>
//           </div>
//           <Modal
//             className="projectModal"
//             containerClassName="projectModel__inner"
//             closeOnOuterClick={true}
//             show={modal3}
//             onClose={() => setModal3(!modal3)}
//           >
//             <div>
//               <button onClick={() => setModal3(!modal3)} className="closeModal">
//                 X
//               </button>
//               <Video source="https://www.youtube.com/embed/l34z2rXUW94" />
//             </div>
//           </Modal>
//         </div>
//       </div>
//       <div className="gridlayout3">
//         <div>
//           <h3>Newsletter Email</h3>
//           <p>
//             Soylent's email announces a new product with an attention grabbing
//             image.
//           </p>
//           <b>Lookatthepuppy...</b>
//           <p>
//             *Clears Throat*, so if I could make an alteration, I'd change the
//             background of the call to action button to yellow and the text color
//             to black to match the top of the soylent bottle.
//           </p>
//           <b>Features</b>
//           <p>Responsive</p>
//           <br />
//           <div className="gridlayout2">
//             <button onClick={() => setModal4(!modal4)}>&lt; Video /&gt;</button>
//             <a
//               href="https://github.com/MaverickCER/CalloutsEvolved"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               &lt; Code /&gt;
//             </a>
//           </div>
//           <Modal
//             className="projectModal"
//             containerClassName="projectModel__inner"
//             closeOnOuterClick={true}
//             show={modal4}
//             onClose={() => setModal4(!modal4)}
//           >
//             <div>
//               <button onClick={() => setModal4(!modal4)} className="closeModal">
//                 X
//               </button>
//               <Video source="https://www.youtube.com/embed/l34z2rXUW94" />
//             </div>
//           </Modal>
//         </div>
//         <div>
//           <img src={epsoylent} alt="Preview of HTML email from Soylent." />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Emails;
