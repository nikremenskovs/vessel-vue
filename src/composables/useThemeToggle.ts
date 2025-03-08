export const useThemeToggle = () => {
  const isDark = ref(localStorage.getItem('darkMode') === 'true')

  if (isDark.value) {
    document.documentElement.classList.add('my-app-dark')
  }

  const toggleDarkMode = () => {
    isDark.value = !isDark.value

    if (isDark.value) {
      document.documentElement.classList.add('my-app-dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('my-app-dark')
      localStorage.setItem('darkMode', 'false')
    }
  }

  const themeIcon = computed(() => (isDark.value ? 'fa-solid fa-moon' : 'fa-solid fa-sun'))

  const themeTooltip = computed(() => `Switch to ${isDark.value ? 'light' : 'dark'} mode`)

  return {
    toggleDarkMode,
    themeIcon,
    themeTooltip
  }
}
