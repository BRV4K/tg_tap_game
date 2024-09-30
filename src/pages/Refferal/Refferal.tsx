//@ts-nocheck

import './Refferal.scss'

import DataLoaderComponent from '../../components/DataFetchLoader';
import RefferalLinkContainer from '../../components/RefferalLinkContainer/RefferalLinkContainer';
import RefferalRewardContainer from '../../components/RefferalRewardContainer/RefferalRewardContainer';
import RefferalRewardUser from '../../components/RefferalRewardUser/RefferalRewardUser';
import RefferalRewardPremiumUser from '../../components/RefferalRewardPremiumUser/RefferalRewardPremiumUser';
import RefferalInfo from '../../components/RefferalInfo/RefferalInfo';
import RefferalRewardButtonContainer from '../../components/RefferalRewardButtonContainer/RefferalRewardButtonContainer';
import RefferalFriendsContainer from '../../components/RefferalFriendsContainer/RefferalFriendsContainer';

function Refferal() {

  //animate__animated animate__slideInDown
  return (
    <main className='w-100 d-flex flex-column align-items-center main-background main-container overflow-auto'>
      <div className='w-100 d-flex' style={{marginTop: '15px'}}>
        <RefferalRewardUser />
        <RefferalRewardPremiumUser />
      </div>
      <RefferalInfo/>
      <RefferalRewardContainer/>
      <RefferalRewardButtonContainer/>
      <RefferalFriendsContainer/>
    </main>
  )
}

export default Refferal