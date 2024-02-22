import { SearchContext } from "@/providers/context-provider/SearchProvider";
import { useContext } from "react";

export const useSearch = () => {
    const context = useContext(SearchContext);
  
    if (!context) {
      throw new Error('error');
    }
  
    return context;
  };
  