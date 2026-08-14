import { useRef, useState } from 'react';

import './index.css';

export function Sound() {
  const entries = [
    {
      url: 'https://luigipublic.s3.us-east-2.amazonaws.com/beggars.mp3',
      title: 'beggars',
    },
    {
      url: 'https://luigipublic.s3.us-east-2.amazonaws.com/gotthis.mp3',
      title: 'got this faah',
    },
    {
      url: 'https://luigipublic.s3.us-east-2.amazonaws.com/faaa2.mp3',
      title: 'Faa 2',
    },
    {
        url: 'https://luigipublic.s3.us-east-2.amazonaws.com/spongebob-fail.mp3',
        title: 'spongebob fail'
    },
    {
        url: 'https://luigipublic.s3.us-east-2.amazonaws.com/dog-cooked.mp3',
        title: 'dog cooked'
    },
    {
        title: 'ngl cooked',
        url: 'https://luigipublic.s3.us-east-2.amazonaws.com/im-getting-cooked.mp3'
    },
    {
        title: 'god damn',
        url: 'https://luigipublic.s3.us-east-2.amazonaws.com/boom-god-damn.mp3'
    },
    {
        title: 'wait wait',
        url: 'https://luigipublic.s3.us-east-2.amazonaws.com/no-no-wait-wait.mp3'
    },
    {
      title: 'knife in the dark',
      url: 'https://luigipublic.s3.us-east-2.amazonaws.com/knife.mp3'
    },
    {
      title: 'avengers',
      url: 'https://luigipublic.s3.us-east-2.amazonaws.com/avengers.mp3'
    }
  ];

  const audioRef = useRef<HTMLAudioElement>(null);
  const [activeUrl, setActiveUrl] = useState<string | null>(null);

  const playSound = (url: string) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.src = url;
    audio.currentTime = 0;
    setActiveUrl(url);

    void audio.play().catch(() => {
      setActiveUrl(null);
    });
  };

  return (
    <main className="sound-page">
      <h1>Sounds</h1>

      <div className="sound-grid">
        {entries.map((entry) => (
          <button
            className="sound-button"
            data-active={activeUrl === entry.url}
            key={entry.url}
            onClick={() => playSound(entry.url)}
            type="button"
          >
            <span className="play-icon" aria-hidden="true">▶</span>
            <span>{entry.title}</span>
          </button>
        ))}
      </div>

      <audio
        ref={audioRef}
        onEnded={() => setActiveUrl(null)}
        onPause={() => setActiveUrl(null)}
      />
    </main>
  );
}
