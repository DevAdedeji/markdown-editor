import { useDark, useToggle } from '@vueuse/core'

export const useTheme = () => {
    const isDarkTheme = useDark()
    const toggleThemeMode = useToggle(isDarkTheme)
    return { isDarkTheme, toggleThemeMode }
}