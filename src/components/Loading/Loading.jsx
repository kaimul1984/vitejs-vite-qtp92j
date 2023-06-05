import React from 'react';
import './loading.scss';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import loading from '../../assets/loading.png';

export default function Loading() {
  return (
    <div className="loading">
     <div className="spiner">
     <img src={loading} alt="" />
     </div>
    </div>
  );
}
