'use client'

import React, { useEffect, useState } from 'react';
import Testing from '@/components/Testing';
import FormUpload from '@/components/FormUpload';

export default function Home() {
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://localhost:8080/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log(data);
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
