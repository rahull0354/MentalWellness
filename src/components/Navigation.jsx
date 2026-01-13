const tabs = [
  { id: 'journal', label: '📝 Journal' },
  { id: 'mood', label: '😊 Mood Tracker' },
  { id: 'calendar', label: '📅 Calendar' },
  { id: 'trends', label: '📈 Trends' },
]

function Navigation({ activeTab, onTabChange }) {
  return (
    <nav className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-sm p-2 flex gap-2 flex-wrap border border-sage-100 dark:border-sage-800/50">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 min-w-[100px] px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
            activeTab === tab.id
              ? 'bg-gradient-to-r from-sage-400 to-sage-500 dark:from-sage-600 dark:to-lavender-600 text-white shadow-sm'
              : 'text-gray-500 dark:text-gray-300 hover:bg-sage-50 dark:hover:bg-sage-900/30'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}

export default Navigation
