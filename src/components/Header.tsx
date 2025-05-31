import { useTheme } from '../hooks/useTheme';

function Header() {
  const { theme, nextTheme, prevTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4">
      <button onClick={prevTheme}>⬅️</button>
      <h1 className="text-xl font-bold capitalize">{theme.name}</h1>
      <button onClick={nextTheme}>➡️</button>
    </header>
  )
}

export default Header