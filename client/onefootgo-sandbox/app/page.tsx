'use client'

import React, { useEffect, useState } from 'react';
import Testing from '@/components/Testing';
import FormUpload from '@/components/FormUpload';

export default function Home() {
  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
    </div>
  );
}
/*
export default function Home() {
  return (
    <div>
      <Testing />
      <br />
      <FormUpload />
    </div>
  );
}*/
