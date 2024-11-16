import AttemptList from './client/AttemptList';
import { Exam } from './client/Exam';

export const HomeComponent = () => {
  return (
    <div className="py-14 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Exam />
      <AttemptList/>
    </div>
  );
};
