import Script from 'next/script'

export default function Home() {
  return (
    <main className="">
      <h1>Is it a palindrome?</h1>
      <p>Check to see if your text is a palindrome. A palindrome is a word or phrase that can be read the same way forwards and backwards, ignoring punctuation, case, and spacing.</p>

      <form>
        <input id="text-input" type="text" />
        <button id="check-btn" type="button">Check</button>
      </form>
      <div id="result"></div>
      <Script src='./script.js'/>
    </main>
  );
}
