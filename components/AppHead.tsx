import Head from "next/head"

interface Props {
  title: string;
}

const AppHead: React.FC<Props> = ({title}) => {

  return(
    <Head>
            <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Try next.js" />
      <meta name="keywords" content="next.js, next, typescript, try, try next, try next.js" />
      <meta charSet="utf-8" />
    </Head>
  )
}

export default AppHead;