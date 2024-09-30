//@ts-nocheck

import { useQuery } from 'react-query'
import { getUserQuestSocial } from '../../api/userQuestSocial'
import QuestQuestsItem from '../QuestQuestsItem/QuestQuestsItem'
import './QuestQuests.scss'
import { useState } from 'react'
import DataFetchLoader from '../DataFetchLoader/DataFetchLoader'
import DataFetchError from '../DataFetchError/DataFetchError'

function QuestQuests() {

    const [userQuestSocial, setUserQuestSocial] = useState([])

    const { data, isLoading, isError, isSuccess } = useQuery(
        ['userQuestSocial'],
        () => getUserQuestSocial(),
        {
            keepPreviousData: true,
            onSuccess: (data) => {
                setUserQuestSocial(data.questSocial)
            }
        }
    )

    if (isSuccess) {

    }

    return (
        //animate__animated animate__bounceInUp animate__faster
        <div className='quests-container overflow-auto w-100'>

            {isSuccess &&
                <>
                    {userQuestSocial.map((questSocialEl, index) => {
                        return (
                            <QuestQuestsItem
                                key={questSocialEl.id}
                                id={questSocialEl.id}
                                title={questSocialEl.title}
                                link={questSocialEl.link}
                                amount={questSocialEl.amount}
                                pathImage={questSocialEl.pathImage}
                                completedProps={questSocialEl.completed}
                                logo={questSocialEl.logo}
                            />
                        )
                    })
                    }
                </>
            }

            {isLoading &&
                <DataFetchLoader width={80} height={80} color={"#B28E4C"} />
            }

            {isError &&
                <DataFetchError text={"Ой! Что-то пошло не так..."} />
            }

        </div>
    )
}

export default QuestQuests