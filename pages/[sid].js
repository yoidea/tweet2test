import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Home() {
  const router = useRouter();
  const sid = router.query.sid;
  const question = router.query.q;
  const choices1 = router.query.c1;
  const choices2 = router.query.c2;
  const choices3 = router.query.c3;
  const choices4 = router.query.c4;
  const answer = router.query.a;

  const [displayResult, setDisplayResult] = useState(false);
  const [result, setResult] = useState('○');

  const showResult = () => {
    setDisplayResult(true);
    setTimeout(() => {
      setDisplayResult(false);
    }, 2000);
  }

  const select = (e, n) => {
    if (n === Number(answer)) {
      showResult();
      setResult('○');
      e.target.style.background = "#80cbc4"
    } else {
      showResult();
      setResult('✗');
      e.target.style.background = "#f48fb1"
    }
  }

  return (
    <div className="container">
      <Head>
        <title>tweet2test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Head>

      <main>
        <h1 className="title">
          問題
        </h1>
        <p className="is-size-5">
          次の文章を読んで、後の問に答えよ。
        </p>
        <blockquote className="twitter-tweet">
          <a href={`https://twitter.com/yoidea/status/${sid}`} />
        </blockquote>
        <nav className="panel">
          {displayResult && (
            <p
              className="has-text-danger"
              style={{ fontSize: '10rem', position: 'fixed', marginLeft: '50%'}}
            >
              {result}
            </p>
          )}
          <p className="panel-heading">
            <strong>問:&nbsp;</strong>{question}
          </p>
          <a className="panel-block" onClick={(e) => {
            select(e, 1);
          }}>
            <strong>(ア)&nbsp;&nbsp;</strong>{choices1}
          </a>
          <a className="panel-block" onClick={(e) => {
            select(e, 2); 
          }}>
            <strong>(イ)&nbsp;&nbsp;</strong>{choices2}
          </a>
          <a className="panel-block" onClick={(e) => {
            select(e, 3);
          }}>
            <strong>(ウ)&nbsp;&nbsp;</strong>{choices3}
          </a>
          <a className="panel-block" onClick={(e) => {
            select(e, 4);
          }}>
            <strong>(エ)&nbsp;&nbsp;</strong>{choices4}
          </a>
        </nav>
        <div class="tabs is-toggle is-toggle-rounded is-centered">
          <ul>
            <li>
              <a href={`https://twitter.com/intent/tweet?text=${process.browser && encodeURIComponent(location.href)}`}>
                ツイートで共有
              </a>
            </li>
            <li>
              <Link href="/">
                <a>
                  新しい問題を作る
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
