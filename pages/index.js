import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [tweetId, setTweetId] = useState('');
  const [sid, setSid] = useState('');
  const [question, setQuestion] = useState('');
  const [choices1, setChoices1] = useState('');
  const [choices2, setChoices2] = useState('');
  const [choices3, setChoices3] = useState('');
  const [choices4, setChoices4] = useState('');
  const [answer, setAnswer] = useState(1);

  useEffect(() => {
    const sid = tweetId.split('/')[5];
    setSid(sid);
    const src = `https://platform.twitter.com/embed/Tweet.html?id=${sid}`;
    if (document.querySelector("#twitter-widget-0")) {
      document.querySelector("#twitter-widget-0").src = src;
    }
  }, [tweetId]);

  return (
    <div className="container">
      <Head>
        <title>tweet2test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Head>

      <main>
        <h1 className="title">
          問題作成
        </h1>
        ツイートURL: 
        <input value={tweetId} onChange={(e) => {
          setTweetId(e.target.value);
        }} type="text" />
        <blockquote className="twitter-tweet">
          <a id="emb" href="https://twitter.com/yoidea/status/1509714864737988619" />
        </blockquote>
        <nav class="panel">
          <p class="panel-heading">
            <strong>問題文: </strong>
            <input value={question} onChange={(e) => {
              setQuestion(e.target.value);
            }} type="text" />
          </p>
          <div class="panel-block">
            <strong>(ア)&nbsp;&nbsp;</strong>
            <input value={choices1} onChange={(e) => {
              setChoices1(e.target.value);
            }} type="text" />
            <div class="control has-text-right">
              <label class="radio">
                <input value="1" onChange={() => {
                  setAnswer(1);
                }} type="radio" name="answer" />
                正解
              </label>
            </div>
          </div>
          <div class="panel-block">
            <strong>(イ)&nbsp;&nbsp;</strong>
            <input value={choices2} onChange={(e) => {
              setChoices2(e.target.value);
            }} type="text" />
            <div class="control has-text-right">
              <label class="radio">
                <input value="2" onChange={() => {
                  setAnswer(2);
                }} type="radio" name="answer" />
                正解
              </label>
            </div>
          </div>
          <div class="panel-block">
            <strong>(ウ)&nbsp;&nbsp;</strong>
            <input value={choices3} onChange={(e) => {
              setChoices3(e.target.value);
            }} type="text" />
            <div class="control has-text-right">
              <label class="radio">
                <input value="3" onChange={() => {
                  setAnswer(3);
                }} type="radio" name="answer" />
                正解
              </label>
            </div>
          </div>
          <div class="panel-block">
            <strong>(エ)&nbsp;&nbsp;</strong>
            <input value={choices4} onChange={(e) => {
              setChoices4(e.target.value);
            }} type="text" />
            <div class="control has-text-right">
              <label class="radio">
                <input value="4" onChange={() => {
                  setAnswer(4);
                }} type="radio" name="answer" />
                正解
              </label>
            </div>
          </div>
        </nav>
        <div className="has-text-centered">
          <Link href={`/${sid}?q=${question}&c1=${choices1}&c2=${choices2}&c3=${choices3}&c4=${choices4}&a=${answer}`}>
            <a className="button is-success">
              完成
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
