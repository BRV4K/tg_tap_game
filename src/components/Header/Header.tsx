//@ts-nocheck

import { numberFormat } from "../../utils/NumberFormat"
import "./Header.scss"
import HeaderItem from "./HeaderItem/HeaderItem"

import { useSelector } from 'react-redux'

function Header() {

  const countUserLootGold = useSelector((state) => state.userLootGold.count)
  const countUserLootCrystal = useSelector((state) => state.userLootCrystal.count)

  return (
    <div className='header-container w-100 position-fixed fixed-top d-flex justify-content-between'>
      <HeaderItem count={numberFormat(countUserLootCrystal)} imagePath={'img/loot/header/crystal-icon.png'} disable={false} iconWidth={15} iconHeight={23}/>
      <HeaderItem count={0} imagePath={'img/loot/header/soul-icon.png'} disable={true} iconWidth={32} iconHeight={23}/>
      <HeaderItem count={0} imagePath={'img/loot/header/stone-icon.png'} disable={true} iconWidth={20} iconHeight={23}/>
      <HeaderItem count={numberFormat(countUserLootGold)} imagePath={'img/loot/gold-icon.png'} disable={false} iconWidth={20} iconHeight={23}/>
    </div>
  )
}

export default Header