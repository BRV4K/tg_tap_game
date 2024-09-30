//@ts-nocheck

import "./Heroes.scss"

import HeroContainer from "../../components/HeroContainer/HeroContainer";
import HeroHeader from "../../components/HeroHeader/HeroHeader";

function Heroes() {
    return (
        <main className='w-100 d-flex flex-column align-items-center main-background main-container'>
            <section className='w-100 h-100 heroes-container d-flex flex-column justify-content-between'>

                <HeroHeader/>
                <HeroContainer />

            </section>
        </main>
    )
}

export default Heroes