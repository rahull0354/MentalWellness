import { useState, useMemo } from 'react'

function CalendarSection({ entries, moodHistory }) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState(null)

  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const days = []

    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }

    return days
  }

  const getDayData = (date) => {
    if (!date) return null

    // Compare local dates by formatting both to local date strings
    const dateStr = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })

    const entry = entries.find(e => {
      const entryDate = new Date(e.date)
      return entryDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }) === dateStr
    })

    const mood = moodHistory.find(m => {
      const moodDate = new Date(m.date)
      return moodDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }) === dateStr
    })

    return { entry, mood }
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleDayClick = (date) => {
    if (!date) return
    setSelectedDay(date)
  }

  const getMoodEmoji = (moodId) => {
    const moodEmojis = {
      happy: '😊', calm: '😌', neutral: '😐', sad: '😢',
      stressed: '😰', anxious: '😟', excited: '🤩', grateful: '🙏'
    }
    return moodEmojis[moodId] || ''
  }

  const daysArray = getDaysInMonth(currentDate)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const selectedDayData = selectedDay ? getDayData(selectedDay) : null

  return (
    <div className="space-y-4">
      {/* Calendar Card */}
      <div className="bg-white dark:bg-violet-950/80 backdrop-blur-sm rounded-xl shadow-sm p-4 hover:shadow-md transition-all duration-300 border border-violet-200 dark:border-purple-500/50">
        <div className="flex justify-between items-center mb-3">
          <button
            onClick={handlePrevMonth}
            className="w-8 h-8 bg-violet-100 dark:bg-purple-900/40 hover:bg-violet-500 hover:text-white dark:hover:bg-violet-600 rounded-lg transition-colors duration-300 text-base border border-violet-200 dark:border-purple-500/50"
          >
            ‹
          </button>
          <span className="text-base font-semibold text-gray-700 dark:text-white">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <button
            onClick={handleNextMonth}
            className="w-8 h-8 bg-violet-100 dark:bg-purple-900/40 hover:bg-violet-500 hover:text-white dark:hover:bg-violet-600 rounded-lg transition-colors duration-300 text-base border border-violet-200 dark:border-purple-500/50"
          >
            ›
          </button>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-1">
          {days.map((day) => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 dark:text-purple-200 py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2.5">
          {daysArray.map((date, index) => {
            const dayData = getDayData(date)
            const isToday = date && date.getTime() === today.getTime()

            return (
              <button
                key={index}
                onClick={() => handleDayClick(date)}
                disabled={!date}
                className={`h-22 p-2 rounded-lg transition-all duration-300 flex flex-col items-center justify-center relative gap-1 ${
                  !date
                    ? 'pointer-events-none'
                    : isToday
                    ? 'border-2 border-fuchsia-400 bg-fuchsia-100 dark:bg-fuchsia-900/70 shadow-sm'
                    : 'bg-purple-100 dark:bg-purple-900/40 hover:bg-violet-100 dark:hover:bg-purple-900/60 hover:scale-105 border border-purple-200 dark:border-purple-500/50'
                }`}
              >
                {date ? (
                  <>
                    <span className="text-xs text-gray-700 dark:text-white">{date.getDate()}</span>
                    {dayData?.mood && (
                      <span className="text-base">{getMoodEmoji(dayData.mood.mood)}</span>
                    )}
                    {dayData?.entry && (
                      <div className="absolute bottom-1.5 w-1.5 h-1.5 bg-fuchsia-500 rounded-full"></div>
                    )}
                  </>
                ) : null}
              </button>
            )
          })}
        </div>
      </div>

      {/* Selected Day Details */}
      {selectedDayData && (
        <div className="bg-white dark:bg-violet-950/80 backdrop-blur-sm rounded-xl shadow-sm p-4 hover:shadow-md transition-all duration-300 border border-violet-200 dark:border-purple-500/50">
          <h2 className="text-base font-semibold text-gray-700 dark:text-white mb-3">
            {selectedDay.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </h2>

          {selectedDayData.mood && (
            <div className="mb-3">
              <p className="text-gray-600 dark:text-purple-200 mb-1 text-sm">Mood:</p>
              <span className="text-2xl">{getMoodEmoji(selectedDayData.mood.mood)}</span>
            </div>
          )}

          {selectedDayData.entry ? (
            <div>
              <p className="text-gray-600 dark:text-purple-200 mb-1 text-sm">Journal Entry:</p>
              <p className="text-gray-700 dark:text-purple-100 whitespace-pre-wrap bg-violet-100 dark:bg-purple-900/40 p-3 rounded-lg border border-violet-200 dark:border-purple-500/50 text-sm">
                {selectedDayData.entry.text}
              </p>
            </div>
          ) : (
            <p className="text-gray-400 dark:text-purple-300 italic text-sm">No journal entry for this day.</p>
          )}

          <button
            onClick={() => setSelectedDay(null)}
            className="mt-3 text-fuchsia-600 hover:text-fuchsia-700 dark:text-fuchsia-400 dark:hover:text-fuchsia-300 font-medium transition-colors duration-300 text-sm"
          >
            Close
          </button>
        </div>
      )}
    </div>
  )
}

export default CalendarSection
