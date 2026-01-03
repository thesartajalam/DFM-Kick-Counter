export const formatTime = (seconds) => {
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return `${mm}:${ss}`;
};

export const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = date.toLocaleDateString("en-IN", {
    weekday: "long",
  });

  const datePart = date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return `${day} • ${datePart}`;
};
