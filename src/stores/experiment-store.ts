import { atom } from 'nanostores';

// Define a type for our experiment instance
interface ExperimentInstance {
    id: string; // Add an ID to track which instance is running
    start: () => void;
    stop: () => void;
}

// Store for tracking the current experiment
export const currentExperimentStore = atom<ExperimentInstance | null>(null);

// Subscribe to store changes for debugging
currentExperimentStore.subscribe((value) => {
    console.log('Experiment store updated:', value?.id || 'null');
});
