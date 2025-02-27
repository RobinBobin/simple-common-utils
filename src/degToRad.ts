export const degToRad = (degrees: number): number => {
  const magic = 180

  return (degrees * Math.PI) / magic
}
