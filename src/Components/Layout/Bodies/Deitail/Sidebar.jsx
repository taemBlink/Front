import React, { useEffect, useState } from "react";
import axios from "axios";

function Sidebar({ postId }) {
  const [relatedJobPostings, setRelatedJobPostings] = useState([]);
  const [companyJobPostings, setCompanyJobPostings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedJobPostings = async () => {
      try {
        const response = await axios.get(
          `http://example.com/api/posts/${postId}/related-job-postings`
        ); // Replace with the appropriate API endpoint to fetch related job postings
        setRelatedJobPostings(response.data);
      } catch (error) {
        console.error("Error fetching related job postings:", error);
      }
    };

    const fetchCompanyJobPostings = async () => {
      try {
        const response = await axios.get(
          `http://example.com/api/posts/${postId}/company-job-postings`
        ); // Replace with the appropriate API endpoint to fetch company job postings
        setCompanyJobPostings(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching company job postings:", error);
        setIsLoading(false);
      }
    };

    fetchRelatedJobPostings();
    fetchCompanyJobPostings();
  }, [postId]);

  return (
    <div className="sidebar">
      <div className="related-job-postings">
        <h3>Related Job Postings</h3>
        {isLoading ? (
          <p>Loading related job postings...</p>
        ) : relatedJobPostings.length > 0 ? (
          <ul>
            {relatedJobPostings.map((jobPosting) => (
              <li key={jobPosting.id}>{jobPosting.title}</li>
            ))}
          </ul>
        ) : (
          <p>No related job postings found.</p>
        )}
      </div>
      <div className="company-job-postings">
        <h3>Company Job Postings</h3>
        {isLoading ? (
          <p>Loading company job postings...</p>
        ) : companyJobPostings.length > 0 ? (
          <ul>
            {companyJobPostings.map((jobPosting) => (
              <li key={jobPosting.id}>{jobPosting.title}</li>
            ))}
          </ul>
        ) : (
          <p>No company job postings found.</p>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
