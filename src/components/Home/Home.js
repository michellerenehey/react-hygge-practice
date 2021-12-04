import { useState } from 'react';

import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import PlaySound from '../PlaySound/PlaySound';
import background from '../../background.jpg';

import '../styles/Home.css';

export default function Home() {
  const [light, setLight] = useState('');
  const [activity, setActivity] = useState('');

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <p>Winter is a time of hygge. How will you stay cozy this season?</p>
      <Editor {...{ light, setLight, activity, setActivity }} />
      {light && <Preview {...{ light, activity }} />}
      <PlaySound />
    </main>
  );
}
