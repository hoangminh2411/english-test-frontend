'use client';
interface VolumeAnalyzerProps {
  volume: number;
}

const VolumeAnalyzer: React.FC<VolumeAnalyzerProps> = ({ volume }) => {
  return (
    <div className="mt-4 flex justify-center">
      <div className="w-full h-6 bg-gray-300 rounded-full overflow-hidden">
        <div className="h-full bg-blue-600" style={{ width: `${volume * 100}%` }}></div>
      </div>
    </div>
  );
};

export default VolumeAnalyzer;
