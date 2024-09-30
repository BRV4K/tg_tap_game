//@ts-nocheck
import './RefferalRewardContainer.scss'

import { useQuery } from 'react-query'
import { getRefferalReward } from '../../api/refferalReward'
import RefferalRewardItem from '../RefferalRewardItem/RefferalRewardItem'
import CopyRefferalLink from '../CopyRefferalLink/CopyRefferalLink'
import SendRefferalLink from '../SendRefferalLink/SendRefferalLink'
import DataFetchLoader from '../DataFetchLoader/DataFetchLoader'
import DataFetchError from '../DataFetchError/DataFetchError'

function RefferalRewardContainer() {
    const { data, isLoading, isError, isSuccess } = useQuery(
        ['refferalsRewards'],
        () => getRefferalReward(),
        {
            keepPreviousData: true,
        }
    )

    return (
        <div className='refferal-reward-container w-100 h-100 overflow-auto position-relative'>
            {isSuccess && data.status == 200 &&
                <>
                    {data.refferalRewards.map((refferalsReward, index) => {
                        return (
                            <RefferalRewardItem 
                                key={refferalsReward.count} 
                                count={refferalsReward.count} 
                                pathImage={refferalsReward.reward.pathImage} 
                                type={refferalsReward.reward.type}
                                amount={refferalsReward.amount}
                                status={refferalsReward.status}
                                name={refferalsReward.reward.name}
                                receivedProps={refferalsReward.received}
                            />
                        )
                    })
                    }
                </>
            }
            {isLoading &&
                <DataFetchLoader width={80} height={80} color={"#B28E4C"}/>
            }

            {isError &&
                <DataFetchError text={"Ой! Что-то пошло не так..."}/>    
            }

        </div>
    )
}

export default RefferalRewardContainer