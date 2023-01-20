"use client";

import { useState, useEffect } from "react";

export default function Articles() {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [
    <div key={1} className="h-screen text-darker">
      page1
    </div>,
    <div key={2} className="h-screen text-darker">
      page1
    </div>,
    <div key={3} className="h-screen text-darker">
      page1
    </div>,
  ];

  useEffect(() => {
    const handleWheel = (e: any) => {
      e.preventDefault();
      if (e.deltaY < 0 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      } else if (e.deltaY > 0 && currentPage < pages.length) {
        setCurrentPage(currentPage + 1);
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentPage]);

  console.log(pages.length);
  return (
    <div className="App">
      {pages.map((page, index) => {
        if (index + 1 === currentPage) {
          return <div key={index}>{page}</div>;
        }
        return null;
      })}
    </div>
  );
}
