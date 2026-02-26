
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaEnvelope, FaUser, FaRegPaperPlane, FaCommentDots } from 'react-icons/fa';

// const AdminContactComponent = () => {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/allcontacts');
//         setContacts(response.data);
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//       }
//     };

//     fetchContacts();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex h-[120px] border-t border-b mb-6">
//         <h2 className="text-3xl font-poppins font-bold text-gray-800 mt-[60px]">
//           User Support
//         </h2>
//       </div>
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {contacts.length === 0 ? (
//           <div className="col-span-full text-center text-gray-500 font-poppins">
//             No contact details available.
//           </div>
//         ) : (
//           contacts.map((contact) => (
//             <div key={contact.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 <FaUser className="inline mr-2 text-red-600" /> {contact.cename}
//               </h3>
//               <p className="text-gray-600 mb-2">
//                 <FaEnvelope className="inline mr-2 text-red-600" /> {contact.cemail}
//               </p>
//               <p className="text-gray-600 mb-2">
//                 <FaRegPaperPlane className="inline mr-2 text-red-600" /> {contact.csubject}
//               </p>
//               <p className="text-gray-600">
//                 <FaCommentDots className="inline mr-2 text-red-600" /> {contact.cmsg}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminContactComponent;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaUser, FaRegPaperPlane, FaCommentDots } from 'react-icons/fa';

const AdminContactComponent = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allcontacts');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const handleEmailClick = (email, subject, message) => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    // Create an invisible anchor element and simulate a click
    const anchor = document.createElement('a');
    anchor.href = mailtoLink;
    anchor.click();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex h-[120px] border-t border-b mb-6">
        <h2 className="text-3xl font-poppins font-bold text-gray-800 mt-[60px]">
          User Support
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contacts.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 font-poppins">
            No contact details available.
          </div>
        ) : (
          contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
              onClick={() => handleEmailClick(contact.cemail, contact.csubject, contact.cmsg)}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                <FaUser className="inline mr-2 text-red-600" /> {contact.cename}
              </h3>
              <p className="text-gray-600 mb-2">
                <FaEnvelope className="inline mr-2 text-red-600" /> {contact.cemail}
              </p>
              <p className="text-gray-600 mb-2">
                <FaRegPaperPlane className="inline mr-2 text-red-600" /> {contact.csubject}
              </p>
              <p className="text-gray-600">
                <FaCommentDots className="inline mr-2 text-red-600" /> {contact.cmsg}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminContactComponent;
