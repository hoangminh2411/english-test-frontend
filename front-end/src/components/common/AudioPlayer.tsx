'use client';
import { useEffect, useState } from "react";

interface AudioPlayerProps {
  audioChunks: Blob[];
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioChunks }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    if (audioChunks.length > 0) {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);
    }
  }, [audioChunks]);

  const saveRecording = () => {
    if (!audioUrl) return;
    const a = document.createElement("a");
    a.href = audioUrl;
    a.download = "recording.wav";
    a.click();
  };

  return (
    <div className="mt-6 text-center">
      {audioUrl && (
        <>
          <audio controls src={audioUrl}></audio>
          <button
            onClick={saveRecording}
            className="mt-4 bg-green-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-green-600 focus:outline-none"
          >
            Download Recording
          </button>
        </>
      )}
    </div>
  );
};

export default AudioPlayer;
