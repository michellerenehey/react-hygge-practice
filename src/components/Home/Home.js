import { useState } from 'react';

import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import PlaySound from '../PlaySound/PlaySound';

import '../styles/Home.css';

export default function Home() {
  const [light, setLight] = useState('');
  const [activity, setActivity] = useState('');

  return (
    <main>
      <Editor {...{ light, setLight, activity, setActivity }} />
      <Preview {...{ light, setActivity }} />
      <PlaySound />
    </main>
  );
}
