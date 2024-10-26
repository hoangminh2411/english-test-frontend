'use client';
import React, { useState, useCallback } from 'react';

import AudioRecorder from '@components/common/AudioRecord';
import Chip from '@components/common/Chip';
import RawHTML from '@components/common/RawHtml';
import { useExamProvider } from '@components/providers/ExamProvider';
import { IQuestion } from 'types/exam';

export const ExamSpeaking = () => {
  const { data } = useExamProvider();
  const allSpeakingParts = data?.questions?.filter((val) => val.type === 'SPEAKING' && !val.parentId) || [];
  const [activePart, setActivePart] = useState<number>(allSpeakingParts?.[0]?.id ?? '');

  return (
    <div className="flex flex-col gap-4">
      {/* Phần điều hướng các Part */}
      <div className="flex flex-row gap-2 p-4">
        {allSpeakingParts.map((part, index) => {
          const isActive = activePart == part?.id;
          return (
            <Chip
              color={isActive ? 'blue' : 'gray'}
              size="md"
              onClick={() => setActivePart(part.id)}
              active={isActive}
              label={`Part ${index + 1}`}
              key={part.id}
            />
          );
        })}
      </div>

      {/* Nội dung từng Part */}
      {allSpeakingParts.map((part) => part.id === activePart && <SpeakingPart data={part} key={part.id} />)}
    </div>
  );
};

type SpeakingPartProps = {
  data: IQuestion;
};

const SpeakingPart = ({ data }: SpeakingPartProps) => {
  const { answerStore, onDispatchAction } = useExamProvider();

  const addAudioElement = useCallback(
    (blob: Blob) => {
      const url = URL.createObjectURL(blob);
      onDispatchAction({
        type: 'SELECT_ANSWER',
        payload: {
          questionId: data.id,
          answer: url
        }
      });
    },
    [data?.id, onDispatchAction]
  );

  const audio = answerStore[data.id];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 pt-0">
      {/* Nội dung câu hỏi */}
      <div className="p-4 bg-neutral-50 overflow-y-auto max-h-[calc(100vh-350px)] border border-gray-200 rounded-md">
        <RawHTML>{data.content}</RawHTML>
      </div>

      {/* Phần ghi âm */}
      <div className="flex flex-col justify-center items-center gap-4 h-full overflow-y-auto max-h-[calc(100vh-350px)] border border-gray-200 rounded-md p-4 bg-blue-50/30">
        {audio ? (
          <audio className="w-full" controls>
            <source src={audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-center mb-4 text-lg font-bold text-blue-600">Click to Record</div>
            <AudioRecorder
              onRecordingComplete={addAudioElement}
              audioTrackConstraints={{
                noiseSuppression: true,
                echoCancellation: true
              }}
              downloadOnSavePress={false}
              downloadFileExtension="webm"
            />
            <span className="text-gray-500 mt-2 text-sm">Press the microphone icon to start recording</span>
          </div>
        )}
      </div>
    </div>
  );
};
