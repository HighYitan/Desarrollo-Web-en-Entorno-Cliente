import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/App.css'
import { DataContextProvider } from './context/DataContext';
import { ThemeContextProvider } from './context/ThemeContext';
import { TokenContextProvider } from './context/TokenContext';
import { LanguageContextProvider } from './context/LanguageContext';
import {FilterContextProvider} from './context/FilterContext';
import Content from './components/Content';

export default function App() {
  return (
    <Router>
      <DataContextProvider>
        <TokenContextProvider>
          <LanguageContextProvider>
            <ThemeContextProvider>
              <FilterContextProvider>
                <Content />
              </FilterContextProvider>
            </ThemeContextProvider>
          </LanguageContextProvider>
        </TokenContextProvider>
      </DataContextProvider>
    </Router>
  )
}