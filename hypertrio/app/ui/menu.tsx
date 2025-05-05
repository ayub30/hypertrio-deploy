'use client';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/navigation';

type WorkoutMenuProps = {
  workouts?: Record<string, string[]>;
  workoutIds?: Record<string, string>; // Map workout names to their IDs
  exercises?: string[];
  mode: 'workouts' | 'exercises';
  onDeleteWorkout?: (workoutId: string, workoutName: string) => void;
  onDeleteExercise?: (workoutName: string, exercise: string) => void;
};

export default function WorkoutMenu({ workouts = {}, workoutIds = {}, exercises = [], mode, onDeleteWorkout, onDeleteExercise }: WorkoutMenuProps) {
  const router = useRouter();
  const items = mode === 'workouts' ? Object.keys(workouts) : exercises;

  const handleItemClick = (item: string) => {
    if (mode === 'workouts') {
      router.push(`workouts/${encodeURIComponent(item)}`);
    }
  };
  
  const handleDeleteWorkout = (e: React.MouseEvent, workoutName: string) => {
    e.stopPropagation();
    if (onDeleteWorkout && workoutIds[workoutName]) {
      onDeleteWorkout(workoutIds[workoutName], workoutName);
    }
  };
  
  const handleDeleteExercise = (e: React.MouseEvent, workoutName: string, exercise: string) => {
    e.stopPropagation();
    if (onDeleteExercise) {
      onDeleteExercise(workoutName, exercise);
    }
  };

  return (
    <div className="mt-10 w-full max-h-[400px] overflow-y-scroll rounded-box">
      <ul className="flex flex-col menu bg-base-200 w-11/12 rounded-box p-4 space-y-2 max-h-[500px] overflow-y-scroll">
        {items.map((item: string, index: number) => (
          <li key={item} 
              id={`${mode}-item-${item.toLowerCase().replace(/\s+/g, '-')}`}
              data-testid={`${mode}-item-${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => handleItemClick(item)}
              className={`${mode === 'workouts' ? 'cursor-pointer w-full' : 'w-full'} `}
          >
            <a className="flex justify-between items-center py-4 text-lg hover:bg-primary hover:text-primary-content">
              <span>{item}</span>
              <div className="flex items-center gap-2">
                {mode === 'workouts' ? (
                  <>
                    <button 
                      id={`delete-workout-${item.toLowerCase().replace(/\s+/g, '-')}`}
                      data-testid={`delete-workout-${item.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={(e) => handleDeleteWorkout(e, item)}
                      className="btn btn-sm btn-circle btn-error"
                      title="Delete workout"
                    >
                      <DeleteIcon fontSize="small" />
                    </button>
                    <ArrowForwardIcon />
                  </>
                ) : (
                  <button 
                    onClick={(e) => handleDeleteExercise(e, '', item)}
                    className="btn btn-sm btn-circle btn-error"
                    title="Remove exercise"
                  >
                    <DeleteIcon fontSize="small" />
                  </button>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WorkoutList({workouts}: {workouts: Record<string, string[]>}){
  return(
    <div className="w-5/6 m-5 h-80 bg-base-200 rounded-box overflow-scroll">
      {Object.keys(workouts).map((workout) => (
        <div key={workout} className="flex flex-row justify-center items-center hover:bg-primary group rounded-xl ease-in-out duration-200 m-2">
          <span className="text-base-content text-lg m-1 p-6 group-hover:text-base-100 pointer-events-none select-none flex-grow">
            {workout}
          </span>
        </div>
      ))}
    </div>
  )
}