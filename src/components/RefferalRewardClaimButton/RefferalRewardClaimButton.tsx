//@ts-nocheck
import "./RefferalRewardClaimButton.scss"

import { useMutation, useQueryClient } from 'react-query';
import { toastSuccess } from '../../utils/toast/toast';
import { claimRefferalReward } from '../../api/refferalReward';
import { useDispatch } from "react-redux";
import { incrementUserLootCountGold } from "../../redux/userLootGoldSlice/userLootGoldSlice";
import { incrementUserLootCountCrystal, incrementUserLootCrystal } from "../../redux/userLootCrystalSlice/userLootCrystalSlice";

function RefferalRewardClaimButton(props) {

    const dispatch = useDispatch()

    const item = props.refferalsReward.refferalsReward;

    const queryClient = useQueryClient();
    const claimRefferalRewardMutation = useMutation((count: number) => claimRefferalReward(count), {
        onSuccess: () => queryClient.invalidateQueries(['refferalsRewards'])
    })

    const refferalRewardClaim = () => {

        if ($('#claimBtn' + item.count).hasClass('refferal-reward-claim-btn-validate'))
            return

        if (item.status == "RECEIVED")
            return

        $('#claimBtn' + item.count).addClass("refferal-reward-claim-btn-onclic", 250);
        setTimeout(function () {
            $('#claimBtn' + item.count).removeClass("refferal-reward-claim-btn-onclic")
            $('#claimBtn' + item.count).addClass("refferal-reward-claim-btn-validate")
            toastSuccess(
                "Successfully!",
                {
                    position: "top-center",
                }
            )
            claimRefferalRewardMutation.mutate(item.count)

            if (item.reward.type === "LOOT") {
                if (item.reward.name === "Gold") {
                    dispatch(incrementUserLootCountGold(item.amount))    
                }
                if (item.reward.name === "Crystal") {
                    dispatch(incrementUserLootCountCrystal(item.amount))    
                }
            }
        }, 2250)
    }
    return (
        <div>
            {(item.status == "COMPLETED" || item.status == "RECEIVED") &&
                <button id={'claimBtn' + item.count} className={`refferal-reward-claim-btn${item.status == "RECEIVED" ? " refferal-reward-claim-btn-validate" : ""}`} onClick={(e) => refferalRewardClaim(item.count)}></button>
            }
            {item.status == "NOT_COMPLETED" &&
                <div className='refferal-reward-count'>{item.countRef}/{item.count}</div>
            }
        </div>
    )
}

export default RefferalRewardClaimButton