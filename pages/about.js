/* 
JavaScript
Write a next.js page component for an About Page.\n1. Import React library and useState/useEffect hooks.\n2. Import Link component from next/link\n3. Create a functional component that includes a useEffect hook.\n4. The useEffect hook should check for successful page load. Update state variable on success.\n5. The about page content should be wrapped in a main tag. Actual content should include div/p tags as well.\n6. Include a link to the home page within the page content.
*/
###

import React, { useEffect, useState } from "react";
import Link from "next/link";

function About() {
  const [pageLoaded, setPageLoaded] = useState(true);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <div>
      <main>
        <div>
          <p>
            About Page!!
            <Link href="/">
              <a>Back to Home</a>
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;