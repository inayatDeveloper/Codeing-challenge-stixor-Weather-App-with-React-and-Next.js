'use client'
import styles from './page.module.css'
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import SearchComp from "./components/search";
import Forecast from './components/forecast';

export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <SearchComp />
        <Forecast />
      </main>
    </Provider>
  )
}
