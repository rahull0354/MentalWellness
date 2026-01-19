# Mental Wellness Journal

A beautiful and intuitive personal journaling application designed to help users track their mood, write daily reflections, and gain insights into their emotional well-being over time.

## Features

### 📔 Journal Section
- **Daily Journal Entries**: Write and save personal reflections with a rich text editor
- **Mood Tracking**: Tag each journal entry with your current mood from 8 different options (Happy, Calm, Neutral, Sad, Stressed, Anxious, Excited, Grateful)
- **Categorization Tags**: Add descriptive tags to entries (Grateful, Stressful, Productive, Reflective, Peaceful, Challenging)
- **Entry Management**: View and delete past journal entries
- **Recent Entries Display**: Scroll through your journaling history

### 😊 Mood Tracking
- **Quick Check-in**: One-click mood logging with emoji-based interface
- **Weekly Mood Overview**: Visual calendar showing your mood for the past 7 days
- **Mood History**: Automatic tracking of all mood check-ins

### 📅 Calendar View
- **Interactive Calendar**: Navigate through months to view your journaling activity
- **Mood Indicators**: See mood emojis on days when you logged how you felt
- **Entry Indicators**: Visual dots marking days with journal entries
- **Day Details**: Click any day to view the mood and journal entry for that date
- **Today Highlight**: Current day is highlighted with a special border

### 📊 Trends & Analytics
- **30-Day Mood Trends**: Line chart visualization of your mood patterns over the last month
- **Mood Distribution**: Doughnut chart showing the breakdown of your most common moods
- **Personalized Insights**: Automated insights based on your data including:
  - Weekly mood average analysis
  - Most common mood identification
  - Journaling activity statistics
- **Interactive Charts**: Hover over data points for detailed information

### ✨ Daily Inspiration
- **Quote of the Day**: Inspirational quotes fetched from the DummyJSON Quotes API
- **Fallback Collection**: Local collection of motivational quotes when API is unavailable
- **Refresh Button**: Get a new quote anytime for instant inspiration

### 🌙 Dark Mode
- **Theme Toggle**: Switch between light and dark modes
- **Persistent Preference**: Your theme choice is saved and restored on return visits
- **Smooth Transitions**: Animated theme switching for a pleasant user experience

## Tech Stack

### Frontend Framework
- **React 19.2.0** - UI library for building the application interface
- **Vite 7.2.4** - Build tool and development server with Hot Module Replacement (HMR)

### Styling
- **Tailwind CSS 4.1.18** - Utility-first CSS framework for styling
- **PostCSS 8.5.6** - CSS transformation tool with nesting support
- **PostCSS Nesting 13.0.2** - CSS nesting capabilities for modern styling
- **Autoprefixer 10.4.23** - Automatic vendor prefixing for cross-browser compatibility

### Data Visualization
- **Chart.js 4.5.1** - Charting library for creating interactive graphs
- **React ChartJS 2 5.3.1** - React wrapper for Chart.js integration

### Code Quality
- **ESLint 9.39.1** - Code linting and formatting
- **React Hooks ESLint Plugin 7.0.1** - React Hooks specific linting rules
- **React Refresh ESLint Plugin 0.4.24** - Fast Refresh linting support

### Development Tools
- **@vitejs/plugin-react 5.1.1** - React plugin for Vite
- **Type Definitions** - TypeScript type definitions for React and React DOM

### Data Persistence
- **LocalStorage API** - Client-side storage for journal entries, mood history, and theme preferences

### External APIs
- **DummyJSON Quotes API** - Source for inspirational quotes

## Installation

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Steps

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   git clone https://github.com/rahull0354/MentalWellness.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Usage

### Creating Journal Entries
1. Navigate to the **Journal** tab
2. Select your current mood by clicking on one of the emoji options
3. Add relevant tags by clicking the tag buttons
4. Write your thoughts in the text area
5. Click **Save Entry** to store your journal entry

### Tracking Your Mood
1. Go to the **Mood** tab
2. Click on any mood emoji to log how you're feeling
3. View your weekly mood history in the calendar below

### Viewing Calendar History
1. Click on the **Calendar** tab
2. Use the arrow buttons to navigate between months
3. Click on any day to see its mood and journal entry details

### Analyzing Trends
1. Visit the **Trends** tab
2. View your 30-day mood patterns in the line chart
3. Check the mood distribution to see your emotional balance
4. Read personalized insights based on your data

### Getting Inspired
1. Look at the **Quote Card** in the sidebar
2. Click **🔄 New Quote** to get a fresh inspirational quote

### Switching Themes
1. Click the sun/moon icon in the header to toggle between light and dark modes

## Project Structure

```
Week2-3/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Application header with dark mode toggle
│   │   ├── Navigation.jsx       # Tab navigation for different sections
│   │   ├── JournalSection.jsx   # Journal entry creation and display
│   │   ├── MoodSection.jsx      # Quick mood check-in and weekly overview
│   │   ├── CalendarSection.jsx  # Interactive calendar view
│   │   ├── TrendsSection.jsx    # Charts and analytics
│   │   └── QuoteCard.jsx        # Inspirational quotes widget
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Component-specific styles
│   ├── index.css                # Global styles and Tailwind imports
│   └── main.jsx                 # Application entry point
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Data Persistence

All data is stored locally in your browser using LocalStorage:
- **Journal Entries**: All saved journal entries with timestamps
- **Mood History**: Complete record of mood check-ins
- **Theme Preference**: Light/dark mode selection

> **Note**: Data is stored per browser. Clearing your browser data will remove all stored entries.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

To preview the production build locally:

```bash
npm run preview
```

## Browser Compatibility

This application works on all modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- LocalStorage API
- CSS Custom Properties (for theming)

## Future Enhancements

Potential features for future versions:
- Export journal entries as PDF or text file
- Cloud sync across devices
- Search and filter functionality for entries
- Custom mood and tag options
- Reminders for daily journaling
- Multi-language support
- Data backup and restore functionality

## License

This project is part of a training exercise and is for educational purposes.

## Acknowledgments

- Inspirational quotes provided by [DummyJSON](https://dummyjson.com/quotes)
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Charts powered by [Chart.js](https://www.chartjs.org/)
