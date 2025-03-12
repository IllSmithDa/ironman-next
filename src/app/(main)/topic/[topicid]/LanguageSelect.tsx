import { ActiveConceptItem, ActiveLanguages } from '../../../types';
import Loader from '@/app/components/Loader/Loader';

export default function LanguageSelect({
  languages,
  updateLanguages
}:{
  languages ?: ActiveConceptItem[],
  updateLanguages: (language: string, newChecked: boolean) => void
}) {

  const handleLanguage = (language: string, newChecked: boolean) => {
    
    // updating local storage languages
    const activeLanguages: ActiveLanguages = JSON.parse(localStorage.getItem('iron_code_languages') as string);
    activeLanguages[language] = newChecked;
    localStorage.setItem('iron_code_languages', JSON.stringify(activeLanguages));
    updateLanguages(language, newChecked);
  } 

  const renderData = languages?.map((data) => (
    <li key={data.language}
      className={`
        flex gap-2
      `}
    >
      <input
        id={`selection-${data.language}`}
        type='checkbox' checked={data.checked}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleLanguage(data.language, !data.checked)
          }
        }}
        onChange={() => {
          handleLanguage(data.language, !data.checked)
        }}
        className={`
          text-[1rem]
          md:text-[1.5rem] cursor-pointer
        `}
      />
      <button
        className={`
          text-[1rem] hover:underline
          md:text-[1.5rem] cursor-pointer
        `}
        onClick={() => {
          handleLanguage(data.language, !data.checked)
        }}
        tabIndex={-1}
        >
          {data.language}
        </button>
    </li>
  ))
  
  return (
    <section
      className='py-[2rem]'
    >
      <h4>Select Languages</h4>
        {languages?.length ? 
        <ul
          className={`
            grid gap-[1rem] grid-cols-2 bg-[#EAEAEA] p-6 fadeInLeft
            lg:grid-cols-4 lg:w-[600px]
            sm:grid-cols-3
            dark:bg-[#272727]
          `}
        >
          {renderData}
        </ul>: <Loader />
        }
    </section>
  )
}
