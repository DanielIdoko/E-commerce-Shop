import { create } from "zustand";

const useSearchStore = create((set) => ({
    recentSearches: JSON.parse(localStorage.getItem("recentSearches")) || [],
    isLoading: false,
    addSearch: (term) => set((state) => {
        set({isLoading: true})
        if (!term.trim()) return state;

        let updated = [term, ...state.recentSearches];
        updated = [...new Set(updated)].slice(0, 5);

        localStorage.setItem("recentSearches", JSON.stringify(updated));
        set({isLoading: false})
        return { recentSearches: updated }
    })
}))

export default useSearchStore;
