import React, { useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const delta = 5; // Number of page numbers to show on each side of the current page
    const pages: (number | string)[] = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage - delta > 2) {
      pages.unshift("...");
    }
    if (currentPage + delta < totalPages - 1) {
      pages.push("...");
    }

    pages.unshift(1);
    pages.push(totalPages);

    return pages;
  };

  const handlePageChange = (page: number | string) => {
    if (page === "...") return; // Ignore ellipsis clicks
    onPageChange(page as number);
  };

  return (
    <div className="flex flex-row bg-white border-collapse">
      <button
        className="border border-blue-500 p-1"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(page)}
          className={`border border-blue-500 p-1 ${
            currentPage === page ? "bg-blue-500 text-white" : ""
          }`}
        >
          {page}
        </button>
      ))}
      <button
        className="border border-blue-500 p-1"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
