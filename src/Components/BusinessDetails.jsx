import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import templateMap from '../Templates/templateMap';

function BusinessDetails() {
  const { slug } = useParams();
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const response = await fetch(`https://admin.bizzata.in/api/business/slug/${slug}`);
        const data = await response.json();
        setBusiness(data);
      } catch (error) {
        console.error('Error fetching business data:', error);
        // Handle errors (e.g., display error message)
      }
    };

    fetchBusinessData();
  }, [slug]);

  if (!business) {
    return <div>Loading...</div>;
  }

   const template_id = `template${business.template_id}`;
   console.log(template_id); 
    const TemplateComponent = templateMap[template_id];
  return (
    <div>
      <div>
            {TemplateComponent ? (
                <TemplateComponent business={business} />
            ) : (
                <div>Template not found</div>
            )}
        </div>
    </div>
    
  );
  
}

export default BusinessDetails;
