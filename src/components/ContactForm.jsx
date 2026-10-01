// import "../styles/contact-styles.css";
// import Swal from "sweetalert2";
// import { useRef } from "react";

// const ContactForm = () => {
//   const formRef = useRef();

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "84dc2e34-114b-49c1-b735-596b573108cf");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     }).then((res) => res.json());

//     if (res.success) {
//       Swal.fire({ title: "Nice!", text: "dope!", icon: "success" });
//       formRef.current.reset();
//     }
//   };

//   return (
//     <section className="contact-form">
//       <form ref={formRef} onSubmit={onSubmit}>
//         <h2> contact form </h2>
//         <div className="input-box">
//           <label>Fulle Name</label>
//           <input
//             type="text"
//             className="field"
//             placeholder="enter your name"
//             name="name"
//             required
//           />
//         </div>
//         <div className="input-box">
//           <label>Email addy</label>
//           <input
//             type="email"
//             className="field"
//             placeholder="enter your email"
//             name="email"
//             required
//           />
//         </div>
//         <div className="input-box">
//           <label>you message</label>
//           <textarea
//             name="message"
//             id=""
//             className="field"
//             placeholder="Enter your message"
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Send message </button>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;
