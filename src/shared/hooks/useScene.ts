import { useContext } from "react";
import { SceneContext } from "shared/context/SceneContext";

export const useScene = () => {
  const context = useContext(SceneContext);
  if (!context) {
    throw new Error('useScene must be used within a SceneProvider');
  }
  return context;
};