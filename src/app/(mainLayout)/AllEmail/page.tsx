"use client";
import React, { useState, useEffect } from 'react';
import moment from 'moment';  // Import moment.js

// Define the structure of the email data
interface EmailData {
  index: number;
  email: string;
  registeredAt: string; // Or Date, depending on the actual data format
}

const Page = () => {
  const [emails, setEmails] = useState<EmailData[]>([]);

  useEffect(() => {
    // Fetching data from the provided URL
    fetch('https://maniknew5000.sobhoy.com/emails')
      .then(response => response.json())
      .then((data) => {
        setEmails(data.emails); // Assuming the response has 'emails' key
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty array means this runs once when the component is mounted

  return (
    <div className="md:container mx-auto py-8 px-4">
      <div className="overflow-x-auto">
        <table className="md:min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Index</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Creation Date</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Creation Time</th> {/* New column for formatted date */}
            </tr>
          </thead>
          <tbody>
            {emails.map((emailData, index) => (
              <tr key={emailData.index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{emailData.email}</td>
                <td className="py-3 px-4 text-sm text-gray-700">  {moment(emailData.registeredAt).format('MMMM Do YYYY,')}</td> {/* Showing raw date */}
                <td className="py-3 px-4 text-sm text-gray-700">
                  {moment(emailData.registeredAt).format(' h:mm:ss a')} {/* Using moment.js to format date */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
