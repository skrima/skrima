import React from 'react'
import '../styles/Main.css'
import SvgFullColored from '../../../assets/logo/FullColored'
import SectionBlock from '../components/SectionBlock'
import { about } from '../data/company-data'

function Main() {
  return (
    <main className="company-main">
        <div className="company-main__left">
            <div className="company-main__left__logo__container">
                <SvgFullColored className="company-main__left__logo" />
            </div>
            <h2 className="company-main__left__slogan">Sustainable Knowledge for Rapid Innovations and Modern Applications</h2>
        </div>
        <div className="company-main__right">
            <div className="company__section-block__container">
                {
                    about.map((item, index) => {
                        return <SectionBlock key={index} title={item.title} content={item.content} />
                    }) 
                }
            </div>
        </div>
    </main>
  )
}

export default Main