import { useState } from 'react';

import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

import '../styles/Home.css';

export default function Home() {
  const [light, setLight] = useState('');

  return (
    <main>
      <Editor {...{ light, setLight }} />
      <Preview />
    </main>
  );
}
