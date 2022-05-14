import { useState, React } from 'react';

function App() {
  const [language, setLanguage] = useState("en")
  const [translations, setTranslations] = useState({
    title: {
      en: "Translatable Article",
      ar: "مقال قابل للترجمة"
    },
    choose: {
      en: "Choose a language",
      ar: "اختر لغة"
    },
    firstParagraph: {
      en: "Hello there, My name is Ahmed Saber, I'm an egyptian web developer who was born in 2001.",
      ar: "اهلا بك , اسمى احمد صابر , انا مطور مواقع مصري ولدت فى عام 2001."
    },
    secondParagraph: {
      en: "I enjoy creating cool websites with JavaScript.",
      ar: "انا استمتع بانشاء مواقع رائعة باستخدام جافاسكريبت."
    },
    readMore: {
      en: "Read More",
      ar: "اقرا المزيد"
    }
  })

  function toEnglish(){
    setLanguage("en")
    document.body.style.direction = "ltr"
  }

  function toArabic(){
    setLanguage("ar")
    document.body.style.direction = "rtl"
  }

  return (
    <main>
      <section>
        <h1>{translations.title[language]}</h1>
        <p>{translations.choose[language]}</p>
        <div>
          <button onClick={toEnglish}>English</button>
          <button onClick={toArabic}>
            العربية
          </button>
        </div>
        <span></span>
        <article>
          <p>{translations.firstParagraph[language]}</p>
          <p>{translations.secondParagraph[language]}</p>
          <a href="#">{translations.readMore[language]}</a>
        </article>
      </section>
    </main>
  )
}

export default App;
