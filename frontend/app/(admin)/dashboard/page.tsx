"use client";
import React, { useState, ChangeEvent, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";

const Page: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [filePath, setFilePath] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles(filesArray);
    }
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select at least one file");
      return;
    }

    setUploading(true);

    try {
      const payload: any = {
        input: inputRef.current?.value,
      };
      const formData = new FormData();

      selectedFiles.forEach((file, index) => {
        formData.append(`file`, file);
      });

      formData.append("payload", JSON.stringify(payload));

      const response = await axios.post<{ filePath: string }>(
        "http://localhost:8000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFilePath(response.data.filePath);
    } catch (error: any) {
      console.error("Error uploading files:", error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <input type="text" placeholder="Car Name" ref={inputRef} />
      <input type="file" onChange={handleFileChange} name="file" multiple />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      <img
        src="https://car-marketplace.s3.ap-south-1.amazonaws.com/1704821168749.png"
        alt="helani"
      />
      {filePath && (
        <div>
          <p>Files uploaded successfully!</p>
          <p>File Path: {filePath}</p>
        </div>
      )}
    </div>
  );
};

export default Page;
