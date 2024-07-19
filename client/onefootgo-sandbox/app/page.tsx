'use client'

import React, { useEffect, useState } from 'react';
import Testing from '@/components/Testing';
import FormUpload from '@/components/FormUpload';

export default function Home() {
  return (
    <div>
      <Testing />
      <br />
      <FormUpload />
    </div>
  );
}
