import Head from "next/head";
import styles from './layout.module.css'
import cn from 'classnames'

export default function Layout({ children, type = "black" }) {
  return (
    <>
      <Head>
        <title>Mayu Satori</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <main
        className={cn({
          [styles.themeBlack]: type === 'black',
          [styles.themeWhite]: type === 'white'
        })}
      >{children}</main>
    </>
  )
}