import React from 'react'
import { BsFillGearFill, BsFillTagFill, BsPersonCircle, BsFillCalendarWeekFill, BsSpeedometer } from 'react-icons/bs';
import './Dash.css'
function Side() {
  return (
    <aside className='border' id="sidebar">
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <div>Board</div>
        </div>
        <span className='icon close_icon'>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsSpeedometer className='icon'/>Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsFillTagFill className='icon'/>Tansactions
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsFillCalendarWeekFill className='icon'/>Schedules
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsPersonCircle className='icon'/>Users
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsFillGearFill className='icon'/>Settings
          </a>
        </li>
        <li className='sidebar-list-item-small'>
          <a href=''>
            <div>Help</div>
          </a>
        </li>
        <li className='sidebar-list-item-small1'>
          <a href=''>
            <div>Contact us</div>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Side;