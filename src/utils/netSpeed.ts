export const netSpeedShow = (BitNumber: number) => {
  if (BitNumber > 1024) {
      return (BitNumber / 1024).toFixed(2) + "KB/s";
  }
  return BitNumber + "B/s"
}
