export const formatTime = (minutes: any) => {
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = "00";
    return `${paddedMinutes}:${paddedSeconds}`;
};
