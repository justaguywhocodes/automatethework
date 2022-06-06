
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
