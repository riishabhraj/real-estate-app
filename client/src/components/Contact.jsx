import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  console.log(listing)

  return (
    <main>
        {landlord && (
            <div className="flex flex-col gap-2">
            <p>
              Contact <span className="font-semibold">{landlord.username}</span>{' '} 
              for{" "}
              <span className="font-semibold">{listing.name.toLowerCase()}</span>
            </p>
            <textarea
              name="message"
              id="message"
              rows="2"
              value={message}
              onChange={onChange}
              placeholder="Enter your message here..."
              className="w-full border p-3 rounded-lg"
            ></textarea>
    
            <Link 
                to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
              className="bg-gray-700 p-3 rounded-lg text-white text-center uppercase hover:opacity-95"
            >
              send message
            </Link>
          </div>
        )}
    </main>
  );
};

export default Contact;
