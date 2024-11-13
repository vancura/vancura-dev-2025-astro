/** Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked. */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: number | null = null;

    return (...args: Parameters<T>) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = window.setTimeout(() => {
            func(...args);
            timeout = null;
        }, wait);
    };
}
