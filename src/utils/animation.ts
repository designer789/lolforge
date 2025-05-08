/**
 * Helper function to dynamically import Lottie animation data
 * @param name - The name of the animation file without extension
 * @returns A Promise that resolves to the animation data
 */
export async function loadLottieAnimation(name: string): Promise<object> {
  try {
    // Dynamic import of the JSON file
    const animationData = await import(`@/../../public/animations/${name}.json`);
    return animationData.default || animationData;
  } catch (error) {
    console.error(`Failed to load animation: ${name}`, error);
    return {};
  }
} 