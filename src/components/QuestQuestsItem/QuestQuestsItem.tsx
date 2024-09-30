//@ts-nocheck

import { useDispatch } from 'react-redux';
import { getChatMember } from '../../api/telegram';
import './QuestQuestsItem.scss'
import { incrementUserLootCountGold } from '../../redux/userLootGoldSlice/userLootGoldSlice';
import { claimUserQuestSocial } from '../../api/userQuestSocial';
import { useMutation, useQueryClient } from 'react-query';
import { useState } from 'react';
import { Oval, TailSpin } from 'react-loader-spinner';
import QuestQuestsItemCompletedIcon from './QuestQuestsItemCompletedIcon/QuestQuestsItemCompletedIcon';
import ToastSuccess from '../Toasts/ToastSuccess/ToastSuccess';

import { initUtils } from '@telegram-apps/sdk';
import { numberFormat } from '../../utils/NumberFormat';
import DataFetchLoader from '../DataFetchLoader/DataFetchLoader';
const utils = initUtils();

function QuestQuestsItem({ id, completedProps, title, link, amount, pathImage, logo }) {

    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(completedProps)

    const dispatch = useDispatch()

    const queryClient = useQueryClient();
    const claimUserQuestSocialMutation = useMutation((id: number) => claimUserQuestSocial(id), {
        onSuccess: () => {
            queryClient.invalidateQueries(['userQuestSocial']).then(() => {
                dispatch(incrementUserLootCountGold(amount))
                setLoading(false)
                setCompleted(true)
                ToastSuccess("Награда успешно получена!")
            })
        }
    })

    const linkQuestsItem = async () => {
        if (completed)
            return
        if (loading)
            return

        setLoading(true)

        if (link.includes("https://t.me")) {
            const chatMember = await getChatMember()
            console.log(chatMember.data.left);
            if (chatMember.data.left) {
                utils.openTelegramLink(link)
                return
            }
        } else {
            utils.openLink(link, { tryBrowser: true });
        }

        claimUserQuestSocialMutation.mutate(id)

        // setTimeout(() => {

        //     dispatch(incrementUserLootCountGold(amount))

        //     setLoading(false)
        //     setCompleted(true)

        //     ToastSuccess("Награда успешно получена!")

        //     setTimeout(() => {
        //         claimUserQuestSocialMutation.mutate(id)
        //     }, 1500)

        // }, 2000)
    }

    return (
        <div onClick={linkQuestsItem} className={`quest-quests-item ${(completed && !loading) ? 'quest-quests-item-completed' : ''} w-100 d-flex align-items-center justify-content-between`}>
            <div className='quest-quests-item-logo-container position-relative'>
                <svg className='position-absolute top-50 start-50 translate-middle' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 43C33.598 43 43 33.598 43 22C43 10.402 33.598 1 22 1C10.402 1 1 10.402 1 22C1 33.598 10.402 43 22 43Z" stroke="#B28E4C" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M37.5912 21.9999C37.5912 25.3263 36.5499 28.4094 34.7739 30.941V35.0655H30.5101C28.0632 36.6634 25.1403 37.5909 21.9997 37.5909C18.8591 37.5909 15.9362 36.6634 13.4893 35.0655H8.83691V30.36C7.29921 27.944 6.4082 25.0765 6.4082 21.9999C6.4082 18.9234 7.29921 16.0559 8.83691 13.6399V9.12845H13.1985C15.703 7.41221 18.7336 6.40845 21.9997 6.40845C25.2658 6.40845 28.2964 7.41166 30.8009 9.12845H34.7739V13.0589C36.5499 15.5905 37.5912 18.6736 37.5912 21.9999Z" stroke="#B28E4C" strokeMiterlimit="10" />
                </svg>
                <img className='position-absolute top-50 start-50 translate-middle' width={30} height={30} src={`/img/quest/logo/${logo}.png`} />
            </div>
            <div className='quest-quests-item-container w-100'>
                <div className='quest-quests-item-title w-100 text-break'>
                    {title}
                </div>
                <div className='quest-quests-item-amount d-flex align-items-center'>
                    <img src={`/img/loot/${pathImage}-icon.png`} width={16.36} height={20} />
                    <div style={{ marginLeft: '4px' }}>{numberFormat(amount)}</div>
                </div>
            </div>

            <div className='quest-quests-item-button d-flex justify-content-end'>

                {(!completed && loading === false) &&
                    <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L12.1387 12.2011L1 23.4022" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                }

                {(completed && loading === false) &&
                    <QuestQuestsItemCompletedIcon completedProps={completedProps} />
                }

                {(!completed && loading) &&
                    <Oval
                        visible={true}
                        height={25}
                        width={25}
                        color={"#B28E4C"}
                        secondaryColor={"#B28E4C"}
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                }
            </div>

        </div>
    )
}

export default QuestQuestsItem